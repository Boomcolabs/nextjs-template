import mime from 'mime';
import { api } from '@/lib/api';
import { UserRole } from '@/lib/api/app/user';
import { ApiResponse } from '@/types/api';
import { Job } from '@/types/job';
import {
  EmployeeEducation,
  EmployeeExperience,
  EmployeeProfile,
  EmployerProfile,
} from '@/types/profile';

export interface ApiEmployeeProfileResponse {
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
  totalAppliedJobs: number;
  phoneNumber: string;
  totalSavedJobs: number;
}

export async function getEmployeeProfile() {
  const response = await api.get<ApiResponse<ApiEmployeeProfileResponse>>(
    '/v1/app/employee/profile'
  );
  return response.data;
}
export interface APIEmployeeProfileByIdResponse {
  uid: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  gender: string;
  nationality: string;
  professionalProfile: string;
  profileSummary: string;
  yoe: string;
  visaStatus: string;
  languages: string[];
  jobTypes: string[];
  careerLevel: string;
  industries: string[];
  portfolioUrl: string;
  address: string;
  avatarUrl: string;
  experiences: EmployeeExperience[];
  educations: EmployeeEducation[];
  skills: string[];
  yob: number;
}

export async function getEmployeeProfileById(id: string) {
  const response = await api.get<ApiResponse<APIEmployeeProfileByIdResponse>>(
    `/v1/app/employee/profile/${id}`
  );
  return response.data;
}

export async function getAppliedJobs() {
  const response = await api.get<ApiResponse<any>>('/v1/app/job/applied');
  return response.data;
}

export async function getSavedJobs() {
  const response = await api.get<ApiResponse<Job[]>>('/v1/app/job/saved/list');
  return response.data;
}

export async function putEmployeeExperience(req: any) {
  const formData = new FormData();
  if (req?.length === 0) {
    formData.append('deleteExperiences', 'true');
  }

  if (req?.length > 0) {
    req.forEach((experience: any, index: any) => {
      if (experience.id) {
        formData.append(`experiences[${index}].id`, experience.id);
      }

      formData.append(`experiences[${index}].position`, experience.position);
      formData.append(`experiences[${index}].companyName`, experience.companyName);
      formData.append(`experiences[${index}].companyAddress`, experience.companyAddress);
      formData.append(`experiences[${index}].startDate`, experience.startDate);
      formData.append(`experiences[${index}].endDate`, experience.endDate);
      formData.append(`experiences[${index}].stillWorking`, experience.stillWorking);
    });
  }

  const response = await api.put<ApiResponse<any>>('/v1/app/employee/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

export async function putEmployeeEducation(req: any) {
  const formData = new FormData();
  if (req?.length === 0) {
    formData.append('deleteEducations', 'true');
  }

  if (req?.length > 0) {
    req.forEach((education: any, index: any) => {
      if (education.id) {
        formData.append(`educations[${index}].id`, education.id);
      }
      formData.append(`educations[${index}].university`, education.university);
      formData.append(`educations[${index}].degree`, education.degree);
      formData.append(`educations[${index}].fieldOfStudy`, education.fieldOfStudy);
      formData.append(`educations[${index}].startDate`, education.startDate);
      formData.append(`educations[${index}].endDate`, education.endDate);
    });
  }

  const response = await api.put<ApiResponse<any>>('/v1/app/employee/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

export async function putEmployeeSkill(req: any) {
  const formData = new FormData();
  formData.append(`skills`, req);
  const response = await api.put<ApiResponse<any>>('/v1/app/employee/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

export async function putEmployeeLanguage(req: any) {
  const formData = new FormData();
  formData.append(`languages`, req);
  const response = await api.put<ApiResponse<any>>('/v1/app/employee/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

export async function putEmployeeResume(req: any) {
  const formData = new FormData();
  formData.append(`cvFiles`, req);
  const response = await api.put<ApiResponse<any>>('/v1/app/employee/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

export async function deleteEmployeeCV(resumeId: string) {
  const response = await api.delete<ApiResponse<any>>(
    `/v1/app/employee/profile/resume?resumeId=${resumeId}`
  );
  return response.data;
}

export async function updateEmployeeProfile(req: any) {
  const formData = new FormData();
  // for each key in req, append to formData
  Object.keys(req).forEach((key) => {
    if (key === 'cvFiles') {
      // cvfiles is an array of files
      req[key].forEach((file: any, index: any) => {
        formData.append(`cvFiles[${index}]`, file);
      });
      return;
    }
    formData.append(key, req[key]);
  });
  console.log('formData', formData);
  const response = await api.put<ApiResponse<any>>('/v1/app/employee/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

export async function changeEmployeeAvatar(image: string) {
  const formData = new FormData();

  formData.append('avatarFile', {
    uri: image,
    name: image.split('/').pop(),
    type: mime.getType(image),
  } as unknown as Blob);

  const response = await api.put<ApiResponse<any>>('/v1/app/employee/profile', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });

  return response.data;
}
