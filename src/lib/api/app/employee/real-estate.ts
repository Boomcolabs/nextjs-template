import mime from 'mime';
import { api } from '@/lib/api';
import {
  ApiCommentListPageResponse,
  ApiRealEstatePostListPageResponse,
  ApiResponse,
  RealEstatePostDetail,
} from '@/types/api';

interface GetRealEstateListParams {
  category?: string;
  page?: number;
  size?: number;
  sort?: string[];
  keyword?: string;
}

export async function getRealEstatePosts(req?: GetRealEstateListParams) {
  const response = await api.get<ApiResponse<ApiRealEstatePostListPageResponse>>(
    '/v1/app/real-estate/post/list',
    {
      params: req,
    }
  );

  return response.data;
}

export async function getRealEstatePostDetail(postId: string) {
  const response = await api.get<ApiResponse<RealEstatePostDetail>>(
    `/v1/app/real-estate/post/${postId}`
  );

  return response.data;
}

export async function getOriginRealEstatePostDetail(postId: string) {
  const response = await api.get<ApiResponse<RealEstatePostDetail>>(
    `/v1/app/real-estate/post/${postId}`,
    {
      params: {
        lan: 'origin',
      },
    }
  );

  return response.data;
}

interface CreatePostParams {
  title: string;
  category: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  [key: string]: any;
}

export async function createPostRealEstate(req: CreatePostParams) {
  const formData = new FormData();

  Object.keys(req).forEach((item, index) => {
    if (item === 'images' && req.images?.length > 0) {
      req.images.map((image, index) => {
        formData.append(`images[${index}]`, {
          uri: image,
          name: image.split('/').pop(),
          type: mime.getType(image),
        } as unknown as Blob);
      });
    } else {
      formData.append(item, req[item]);
    }
  });

  const response = await api.post<ApiResponse<any>>('/v1/app/real-estate/post', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });

  return response.data;
}

interface UpdatePostParams {
  id: string;
  title?: string;
  category?: string;
  description?: string;
  price?: number;
  location?: string;
  [key: string]: any;
}

export async function updatePostRealEstate(req: UpdatePostParams) {
  const formData = new FormData();

  Object.keys(req).forEach((item, index) => {
    if (req[item]) {
      formData.append(item, req[item]);
    }
  });

  const response = await api.put<ApiResponse<any>>('/v1/app/real-estate/post', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });

  return response.data;
}

export async function deletePostRealEstate(postId: string) {
  const response = await api.delete<ApiResponse<any>>('/v1/app/real-estate/post', {
    params: { postId },
  });

  return response.data;
}

interface CommentListParams {
  postId: string;
  page?: number;
  size?: number;
  sort?: string[];
}

export async function getCommentListRealEstate(req: CommentListParams) {
  const response = await api.get<ApiResponse<ApiCommentListPageResponse>>(
    '/v1/app/real-estate/post/comment/list',
    {
      params: req,
    }
  );

  return response.data;
}

interface AddCommentParams {
  postId: string;
  content: string;
}

export async function addCommentPostRealEstate(req: AddCommentParams) {
  const response = await api.post<ApiResponse<any>>('/v1/app/real-estate/post/comment', req);
  return response.data;
}

interface UpdateCommentParams {
  id: string;
  content: string;
}

export async function updateCommentPostRealEstate(req: UpdateCommentParams) {
  const response = await api.put<ApiResponse<any>>('/v1/app/real-estate/post/comment', req);
  return response.data;
}

export async function deleteCommentRealEstate(commentId: string) {
  const response = await api.delete<ApiResponse<any>>('/v1/app/real-estate/post/comment', {
    params: { commentId },
  });

  return response.data;
}
