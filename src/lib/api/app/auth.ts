import { api } from '..';
import { ApiResponse } from '@/types/api';
import { EmployeeProfile, EmployerProfile } from '@/types/profile';
import { UserRole } from './user';

interface ApiLoginUserRequest {
  email: string;
  password: string;
}

interface ApiLoginUserResponse {
  token: string;
  authenticated: boolean;
  role: UserRole | null;
}

async function loginUser({ email, password }: ApiLoginUserRequest) {
  const response = await api.post<ApiResponse<ApiLoginUserResponse>>('/v1/app/auth/token', {
    email,
    password,
  });
  return response.data;
}

interface ApiRegisterUserRequest {
  email: string;
  password: string;
}

interface ApiRegisterUserResponse {
  uid: string;
  email: string;
  token: string;
  accountType: 'GOOGLE' | 'KAKAO' | 'EMAIL';
}

async function registerUser({ email, password }: ApiRegisterUserRequest) {
  const response = await api.post<ApiResponse<ApiRegisterUserResponse>>('/v1/app/user', {
    email,
    password,
  });
  return response.data;
}

interface ApiLogin3PartyRequest {
  code?: string;
  provider?: 'GOOGLE' | string;
  email?: string;
  identity?: string;
}

interface ApiLogin3PartyResponse {
  token: string;
  authenticated: boolean;
  role: UserRole | null;
}

async function login3Party({ code, provider, email, identity }: ApiLogin3PartyRequest) {
  const response = await api.post<ApiResponse<ApiLogin3PartyResponse>>(
    '/v1/app/auth/outbound/token',
    {
      code,
      provider,
      email,
      identity,
    }
  );
  return response.data;
}

interface ApiDeviceTokenRequest {
  deviceToken: string;
}

interface ApiDeviceTokenResponse {}

async function AddDeviceToken({ deviceToken }: ApiDeviceTokenRequest) {
  const response = await api.post<ApiResponse<ApiDeviceTokenResponse>>('/v1/app/user/token', {
    deviceToken,
  });
  console.log(response.data);
  return response.data;
}

async function sendCodeVerifyToPhone(phoneNumber: string) {
  const response = await api.get<ApiResponse<any>>(`/v1/app/user/phone?phone=${phoneNumber}`);
  return response.data;
}

interface ApiVerifyPhoneCodeRequest {
  phoneNumber: string;
  code: string;
}

interface ApiUserProfileResponse {
  uid: string;
  identity: string;
  accountType: string;
  email: string;
  role: UserRole;
  employeeProfile: EmployeeProfile;
  employerProfile: EmployerProfile;
  isDeleted: boolean;
  createdDate: string;
  updatedDate: string;
}

async function verifyPhoneCode(req: ApiVerifyPhoneCodeRequest) {
  const response = await api.post<ApiResponse<ApiUserProfileResponse>>('/v1/app/user/phone', req);
  return response.data;
}

export {
  loginUser,
  registerUser,
  login3Party,
  AddDeviceToken,
  sendCodeVerifyToPhone,
  verifyPhoneCode,
};
