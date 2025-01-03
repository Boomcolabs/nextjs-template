import { Job } from "./job";
import { EmployeeProfile } from "./profile";

export interface ApiResponse<T> {
  code: number;
  message: string;
  result: T;
}

export type Sort = {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
};

export type Pageable = {
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  offset: number;
  sort: Sort[];
  unpaged: boolean;
};

export type ApiJobPageResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  pageable: Pageable;
  size: number;
  content: Job[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  last: boolean;
  empty: boolean;
};

export type ApplicantDetail = {
  id: string;
  jobId: string;
  uid: string;
  resumeId: string;
  resumeUrl: string;
  fullName: string;
  nationality: string;
  avatarUrl: string;
  createdDate: string;
};

export type ApiApplicantsListPageResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  pageable: Pageable;
  size: number;
  content: ApplicantDetail[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  last: boolean;
  empty: boolean;
};

export type PostDetail = {
  id: string;
  createdId: string;
  content: string;
  createdDate: string;
  updatedData: string;
  hashtags: string[];
  imageUrls: string[];
  location: string;
  totalLikes: number;
  totalComments: number;
  authorName: string;
  liked: boolean;
  avatarUrl: string;
};

export type ApiPostListPageResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  pageable: Pageable;
  size: number;
  content: PostDetail[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  last: boolean;
  empty: boolean;
};

export type RealEstatePostDetail = {
  id: string;
  createdId: string;
  title: string;
  category: string;
  description: string;
  price: number;
  location: string;
  imageUrls: string[];
  createdDate: string;
  updatedData: string;
  totalComments: number;
  authorName: string;
  avatarUrl: string;
};

export type ApiRealEstatePostListPageResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  pageable: Pageable;
  size: number;
  content: RealEstatePostDetail[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  last: boolean;
  empty: boolean;
};

export type CommentDetail = {
  id: string;
  postId: string;
  content: string;
  createdId: string;
  createdDate: string;
  updatedData: string;
  authorName: string;
  avatarUrl: string;
};

export type ApiCommentListPageResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  pageable: Pageable;
  size: number;
  content: CommentDetail[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  last: boolean;
  empty: boolean;
};

export type PageParams = {
  page: number;
  size: number;
};

export type NotificationDetail = {
  id: string;
  boardType: string;
  type: string;
  title: string;
  content: string;
  jobId: string | null;
  likeId: string | null;
  postId: string | null;
  commentId: string | null;
  receiverId: string | null;
  status: string | null;
  createdDate: string;
  imageUrl: string | null;
  eventUrl: string | null;
  textColor: string | null;
};

export type ApiNotificationListPageResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  pageable: Pageable;
  size: number;
  content: NotificationDetail[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  last: boolean;
  empty: boolean;
};
