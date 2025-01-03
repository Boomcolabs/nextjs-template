import mime from 'mime';
import { api } from '@/lib/api';
import {
  ApiApplicantsListPageResponse,
  ApiJobPageResponse,
  ApiResponse,
  PageParams,
} from '@/types/api';
import { Job, JobDetail, JobInfoProps } from '@/types/job';

async function getRecommendedJob({ page = 0, size = 10 }: PageParams) {
  const response = await api.get<ApiResponse<ApiJobPageResponse>>('/v1/app/job/recommend-job', {
    params: {
      page,
      size,
    },
  });
  return response.data;
}

async function getMostRecentJob() {
  const response = await api.get<ApiResponse<ApiJobPageResponse>>('/v1/app/job/filter-job', {});
  return response.data;
}

async function getJobById(id: string) {
  const response = await api.get<ApiResponse<JobDetail>>(`/v1/app/job/${id}`, {});
  return response.data;
}

async function getJobsByCompanyId(id: string) {
  const response = await api.get<ApiResponse<JobInfoProps[]>>(`/v1/app/job/company/${id}`, {});
  return response.data;
}

type GetJobsByIndustry = {
  industry: string;
  page?: number;
  size?: number;
};

interface FilterJobParams {
  keyword?: string | null;
  workArrange?: string;
  postedDate?: string;
  jobType?: string[];
  industry?: string[];
  experienceLevel?: string[];
  fromSalary?: number;
  toSalary?: number;
  page?: number;
  size?: number;
}

async function filterJob(params: FilterJobParams = {}) {
  const response = await api.get<ApiResponse<ApiJobPageResponse>>('/v1/app/job/filter-job', {
    params: {
      keyword: params.keyword,
      workArrange: params.workArrange,
      postedDate: params.postedDate,
      jobType: params.jobType && params.jobType.join(','),
      industry: params.industry && params.industry.join(','),
      experienceLevel: params.experienceLevel && params.experienceLevel.join(','),
      fromSalary: params.fromSalary,
      toSalary: params.toSalary,
      page: params.page || 0,
      size: params.size || 10,
    },
  });
  return response.data;
}

interface ApplyForJobForm {
  resume?: any;
  jobId: string;
  resumeId?: string;
}

async function applyForJob({ jobId, resume, resumeId }: ApplyForJobForm) {
  const formData = new FormData();
  formData.append('jobId', jobId);
  if (resumeId) {
    formData.append('resumeId', resumeId);
  }
  if (resume) {
    formData.append('resume', {
      name: resume.name,
      type: mime.getType(resume.uri),
      uri: resume.uri,
    } as unknown as Blob);
  }
  const response = await api.post<ApiResponse<{}>>(`/v1/app/job/applied`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
  return response.data;
}

async function getJobsByIndustry({ industry, page = 0, size = 10 }: GetJobsByIndustry) {
  const response = await api.get<ApiResponse<ApiJobPageResponse>>(`/v1/app/job/industry`, {
    params: { industry, page, size },
  });
  return response.data;
}

async function createJob(payload: Job) {
  const response = await api.post<ApiResponse<JobDetail>>(`/v1/app/job`, payload);
  return response.data;
}

async function getApplicantsByJobId(id: string, { page = 0, size = 20 }: PageParams) {
  const response = await api.get<ApiResponse<ApiApplicantsListPageResponse>>(
    `/v1/app/job/applicant/${id}`,
    {
      params: {
        page,
        size,
      },
    }
  );
  return response.data;
}

async function getRecommendApplicantsByJobId(id: string, { page = 0, size = 20 }: PageParams) {
  const response = await api.get<ApiResponse<ApiApplicantsListPageResponse>>(
    `/v1/app/job/recommend_applicant/${id}`,
    {
      params: {
        page,
        size,
      },
    }
  );
  return response.data;
}

async function saveJob(jobId: string) {
  const response = await api.post<ApiResponse<{}>>(
    `/v1/app/job/saved`,
    {},
    {
      params: {
        jobId,
      },
    }
  );
  return response.data;
}

export {
  getRecommendedJob,
  getMostRecentJob,
  getJobById,
  getJobsByIndustry,
  getJobsByCompanyId,
  applyForJob,
  filterJob,
  createJob,
  getApplicantsByJobId,
  getRecommendApplicantsByJobId,
  saveJob,
};
