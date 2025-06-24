// lib/auth.ts
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { TokenManager } from './tokenManager';

// Axios 인스턴스 생성
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080',
  timeout: 10000,
});

// 토큰 갱신 함수
const refreshToken = async (): Promise<void> => {
  const refreshToken = TokenManager.getRefreshToken();
  
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }
  
  try {
    const response = await axios.post('/api/v1/auth/token/refresh');
    
    const { accessToken, refreshToken: newRefreshToken, expiresIn } = response.data.content;
    
    TokenManager.setTokens(accessToken, newRefreshToken, expiresIn);
  } catch (error) {
    console.error('Token refresh failed:', error);
    TokenManager.clearTokens();
    throw error;
  }
};

// 요청 인터셉터
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = TokenManager.getAccessToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshToken();
        const newToken = TokenManager.getAccessToken();
        console.log("헤더에 토근", newToken)
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return apiClient.request(originalRequest);
        }
      } catch (refreshError) {
        TokenManager.clearTokens();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);
