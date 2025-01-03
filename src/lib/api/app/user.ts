import { api } from '..';
import { ApiNotificationListPageResponse, ApiResponse } from '@/types/api';
import { EmployeeProfile, EmployerProfile } from '@/types/profile';

export type UserRole = 'EMPLOYEE' | 'EMPLOYER';

interface ApiUpdateUserRoleResponse {}
const updateUserRole = async (role: UserRole) => {
  const response = await api.put<ApiResponse<ApiUpdateUserRoleResponse>>(
    '/v1/app/user/role',
    {},
    {
      params: {
        role,
      },
    }
  );
  return response.data;
};

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
  isNoti: boolean;
}

interface ApiPasswordResponse {
  result: boolean;
  message: string;
}

interface ApiCreatePassword {
  password: string;
}

interface ApiUpdatePassword {
  currentPassword: string;
  newPassword: string;
}

const getUserProfile = async () => {
  const response = await api.get<ApiResponse<ApiUserProfileResponse>>('/v1/app/user/profile');
  return response.data;
};

const getEmployerProfile = async () => {
  const response = await api.get<ApiResponse<ApiUserProfileResponse>>('/v1/app/employer/profile');
  return response.data;
};

const updateUserNotiSetting = async (isNoti: boolean) => {
  const response = await api.put<ApiResponse<any>>(`/v1/app/user/noti-setting?isNoti=${isNoti}`);
  return response.data;
};

const updateUserShareContactSetting = async (isNoti: boolean) => {
  const response = await api.put<ApiResponse<any>>(
    `/v1/app/user/agree-share-info-setting?isAgree=${isNoti}`
  );
  return response.data;
};

const getUserNotifySetting = async () => {
  const response = await api.get<ApiResponse<boolean>>('/v1/app/user/noti-setting');
  return response.data;
};

interface ApiUserSettingResponse {
  notify: boolean;
  agreeShareInfo: boolean;
}
const getUserSettings = async () => {
  const response = await api.get<ApiResponse<ApiUserSettingResponse>>('/v1/app/user/user-setting');
  return response.data;
};

const getUserHasPassword = async () => {
  const response = await api.get<ApiResponse<ApiPasswordResponse>>('/v1/app/user/has-password');
  return response.data;
};

const createPassword = async ({ password }: ApiCreatePassword) => {
  const response = await api.post<ApiResponse<ApiCreatePassword>>('/v1/app/user/create-password', {
    password,
  });
  return response.data;
};

const changePassword = async ({ currentPassword, newPassword }: ApiUpdatePassword) => {
  const response = await api.post<ApiResponse<ApiUpdatePassword>>('/v1/app/user/change-password', {
    currentPassword,
    newPassword,
  });
  return response.data;
};

interface ApiEmployerAboutInfoResponse {
  companyId: string;
  companyName: string;
  companyDescription: string;
  companyAvatar: string;
  industry: string;
  companySize: string;
  location: string;
}

const getEmployerAboutInfo = async (id: string) => {
  const response = await api.get<ApiResponse<ApiEmployerAboutInfoResponse>>(
    `/v1/app/employer/profile/${id}`
  );

  return response.data;
};

interface APIEmailVerificationProps {
  email: string;
  existsEmail: boolean;
  existsPassword: boolean;
  accountType: string;
}

const getEmailInfo = async (email: string) => {
  const response = await api.get<ApiResponse<APIEmailVerificationProps>>('/v1/app/user/email', {
    params: {
      email,
    },
  });
  if (response.data.result.existsEmail) {
    throw new Error('Email already exists');
  }
  return response.data;
};

const verifyEmailCode = async (email: string, code: string) => {
  const response = await api.post<ApiResponse<{}>>('/v1/app/user/email', {
    email,
    code,
  });
  return response.data;
};

interface ApiNotificationListRequest {
  boardType?: string;
  page: number;
}

const getNotificationList = async (req: ApiNotificationListRequest) => {
  const response = await api.get<ApiResponse<ApiNotificationListPageResponse>>(
    '/v1/app/notification',
    {
      params: req,
    }
  );
  return response.data;
};

export {
  updateUserRole,
  getUserProfile,
  getEmployerProfile,
  getEmployerAboutInfo,
  getUserNotifySetting,
  updateUserNotiSetting,
  updateUserShareContactSetting,
  getUserHasPassword,
  createPassword,
  changePassword,
  getEmailInfo,
  verifyEmailCode,
  getUserSettings,
  getNotificationList,
};
