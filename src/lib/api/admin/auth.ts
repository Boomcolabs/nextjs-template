import { api } from '..';
import { ApiResponse } from '@/types/api';

export interface IAPILoginAdmin {
  username: string;
  password: string;
}

export interface IAPIRegisterAdmin {
  token: string;
  authenticated: boolean;
  role: string;
}

const loginAdmin = async ({ username, password }: IAPILoginAdmin) => {
  const response = await api.post<ApiResponse<IAPIRegisterAdmin>>('/auth/token', {
    username,
    password,
  });
  return response.data;
};

export { loginAdmin };
