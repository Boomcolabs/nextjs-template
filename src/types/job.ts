export type Job = {
  id: string;
  companyName: string;
  companyAvatar: string;
  jobLocation: string;
  jobTitle: string;
  skillsRequired: string[];
  workArrangement: string;
  employmentType: string;
  careerLevel: string;
  isExpired: boolean;
  createdDate: string;
};

export type JobInfoProps = {
  isActive: boolean;
} & Job;

export type JobDetail = {
  /*
     "id": "string",
    "jobTitle": "string",
    "jobLocation": "string",
    "jobDesc": "string",
    "responsibility": "string",
    "requirements": "string",
    "benefits": "string",
    "employmentType": "string",
    "experience": "string",
    "careerLevel": "string",
    "skillsRequired": [
      "string"
    ],
    "workArrangement": "string",
    "noOfHire": 0,
    "salary": "string",
    "industry": "string",
    "expiredDate": "2024-11-14T06:18:30.311Z",
    "createdDate": "2024-11-14T06:18:30.311Z",
    "updatedDate": "2024-11-14T06:18:30.311Z",
    "isDeleted": true,
    "isActive": true,
    "createdId": "string",
    "companyName": "string",
    "companyAvatar": "string",
    "isExpired": "string"
  */
  jobDesc: string;
  responsibility: string;
  requirements: string;
  benefits: string;
  experience: string;
  noOfHire: number;
  salary: string;
  industry: string;
  expiredDate: string;
  updatedDate: string;
  isDeleted: boolean;
  isActive: boolean;
  isApplied: boolean;
  createdId: string;
  companyId: string;
} & Job;
