export type CompanyInfoProps = {
    companyName: string;
    companyDescription: string;
    location: string;
    industry: string;
    companyWebsite: string;
    companySize: string;
    businessRegistrationNumber: string;
    email: string;
    businessRegistrationPhoto: string;
    phoneNumber: string;
};

export type CompanyUpadateInfoProps = {
    companyName?: string;
    companyDescription?: string;
    location?: string;
    industry?: string;
    companyWebsite?: string;
    companySize?: string;
    businessRegistrationNumber?: string;
    email?: string;
    businessRegistrationPhoto?: string;
    phoneNumber?: string;
    [key: string]: any;
};