// lib/auth.ts
import { apiClient } from './apiClient';
import { TokenManager } from './tokenManager';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: {
    id: string;
    email: string;
    name: string;
    profileImage?: string;
  };
}

export class AuthService {
  
  // 백엔드 로그인 처리 (카카오 콜백 후)
  static async login(code: string): Promise<LoginResponse> {
    try {
      const response = await apiClient.post('/oauth2/authorization/kakao', {
        code: code
      });
      
      const loginData: LoginResponse = response.data;
      
      // 토큰 저장
      TokenManager.setTokens(
        loginData.accessToken,
        loginData.refreshToken,
        loginData.expiresIn
      );
      
      return loginData;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
  
  // 로그아웃
  static async logout(): Promise<void> {
    try {
      await apiClient.post('/api/auth/logout');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      TokenManager.clearTokens();
    }
  }
  
  // 사용자 정보 조회
  static async getUserInfo() {
    try {
      const response = await apiClient.get('/api/user/me');
      return response.data;
    } catch (error) {
      console.error('Failed to get user info:', error);
      throw error;
    }
  }
}