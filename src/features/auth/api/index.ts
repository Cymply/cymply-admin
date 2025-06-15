import { api } from '@/shared/api';
import {User} from "@/entities/user/model/user-dummy-data";

export const authApi = {
  login: (provider: any) =>
    api.get<any>(`/oauth2/authorization/${provider}`),
  
  refresh: () =>
    api.post<any>('/auth/refresh'),
  
  logout: () =>
    api.post('/auth/logout'),
  
  getMe: () =>
    api.get<User>('/auth/me'),
};