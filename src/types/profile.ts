import { UserRole } from '@/lib/api/app/user';

interface UserProfile {
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

interface EmployeeProfile {
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
  industry: string;
  resumes: EmployeeResume[];
  portfolioUrl: string;
  address: string;
  avatarUrl: string;
  experiences: EmployeeExperience[];
  educations: EmployeeEducation[];
  skills: string[];
}

interface EmployeeResume {
  id: string;
  name: string;
  url: string;
  createdDate: string;
}

interface EmployeeExperience {
  id?: string;
  position: string;
  companyName: string;
  companyAddress: string;
  startDate: string;
  endDate: string;
  stillWorking: boolean;
}

interface EmployeeEducation {
  id?: string;
  university: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

interface EmployerProfile {
  companyName: string;
  companyDescription: string;
  location: string;
  industry: string;
  companyWebsite: string;
  companySize: string;
  businessRegistrationNumber: string;
  businessRegistrationPhoto: string;
  email: string;
  phoneNumber: string;
  companyAvatar: string;
}

export type {
  UserProfile,
  EmployeeProfile,
  EmployeeResume,
  EmployeeExperience,
  EmployeeEducation,
  EmployerProfile,
};
