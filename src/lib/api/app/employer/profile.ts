import mime from 'mime';
import { api } from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { CompanyUpadateInfoProps } from '@/types/company';

export async function putEmployerProfile(req: CompanyUpadateInfoProps) {
  const formData = new FormData();

  Object.keys(req).map((key) => {
    if (key === 'businessRegistrationPhoto') {
      const uri = req[key];
      if (uri) {
        formData.append(key, {
          uri,
          name: uri.split('/').pop(),
          type: mime.getType(uri),
        } as unknown as Blob);
      }
    } else {
      formData.append(key, req[key]);
    }
  });

  const response = await api.put<ApiResponse<any>>('/v1/app/employer/profile', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });

  return response.data;
}

export async function changeCompanyAvatar(image: string) {
  const formData = new FormData();

  formData.append('companyAvatar', {
    uri: image,
    name: image.split('/').pop(),
    type: mime.getType(image),
  } as unknown as Blob);

  const response = await api.put<ApiResponse<any>>('/v1/app/employer/avatar', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });

  return response.data;
}
// "companyId": "string",
// "companyName": "string",
// "companyDescription": "string",
// "companyAvatar": "string",
// "industry": "string",
// "companySize": "string",
// "location": "string"
interface APIEmployerProfile {
  companyName: string;
  companyDescription: string;
  location: string;
  industry: string;
  companySize: string;
  companyAvatar: string;
}

export async function getEmployerProfileById(id: string) {
  const response = await api.get<ApiResponse<APIEmployerProfile>>(`v1/app/employer/profile/${id}`);
  return response.data;
}
