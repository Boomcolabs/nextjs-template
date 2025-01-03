import mime from 'mime';
import qs from 'qs';
import { api } from '@/lib/api';
import {
  ApiCommentListPageResponse,
  ApiPostListPageResponse,
  ApiResponse,
  PostDetail,
} from '@/types/api';

interface GetPostListParams {
  hashtags?: string[];
  page?: number;
  size?: number;
  sort?: string[];
}

export async function getForumPosts(req?: GetPostListParams) {
  const response = await api.get<ApiResponse<ApiPostListPageResponse>>('/v1/app/forum/post/list', {
    params: req,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'comma' });
    },
  });

  return response.data;
}

export async function getForumPostDetail(postId: string) {
  const response = await api.get<ApiResponse<PostDetail>>(`/v1/app/forum/post/${postId}`);
  return response.data;
}

export async function getOriginPostDetail(postId: string) {
  const response = await api.get<ApiResponse<PostDetail>>(`/v1/app/forum/post/${postId}`, {
    params: {
      lan: 'origin',
    },
  });

  return response.data;
}

interface CreatePostParams {
  content: string;
  hashtags: string[];
  images: string[];
}

export async function createPostForum(req: CreatePostParams) {
  const formData = new FormData();

  formData.append('content', req.content);

  if (req.hashtags?.length > 0) {
    req.hashtags.map((hashtag, index) => {
      formData.append(`hashtags[${index}]`, hashtag);
    });
  }

  if (req.images?.length > 0) {
    req.images.map((image, index) => {
      formData.append(`images[${index}]`, {
        uri: image,
        name: image.split('/').pop(),
        type: mime.getType(image),
      } as unknown as Blob);
    });
  }

  const response = await api.post<ApiResponse<any>>('/v1/app/forum/post', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });

  return response.data;
}

interface UpdatePostParams {
  content?: string;
  hashtags?: string[];
  id: string;
}

export async function updatePostForum(req: UpdatePostParams) {
  const formData = new FormData();

  formData.append('id', req.id);

  if (req.content) {
    formData.append('content', req.content);
  }

  if (req.hashtags && req.hashtags?.length > 0) {
    req.hashtags.map((hashtag, index) => {
      formData.append(`hashtags[${index}]`, hashtag);
    });
  }

  const response = await api.put<ApiResponse<any>>('/v1/app/forum/post', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });

  return response.data;
}

export async function deletePostForum(postId: string) {
  const response = await api.delete<ApiResponse<any>>('/v1/app/forum/post', {
    params: { postId },
  });

  return response.data;
}

export async function toggleLikePost(postId: string) {
  const response = await api.post<ApiResponse<any>>('/v1/app/forum/post/like', null, {
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

export async function getCommentList(req: CommentListParams) {
  const response = await api.get<ApiResponse<ApiCommentListPageResponse>>(
    '/v1/app/forum/post/comment/list',
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

export async function addCommentPost(req: AddCommentParams) {
  const response = await api.post<ApiResponse<any>>('/v1/app/forum/post/comment', req);
  return response.data;
}

interface UpdateCommentParams {
  id: string;
  content: string;
}

export async function updateCommentPost(req: UpdateCommentParams) {
  const response = await api.put<ApiResponse<any>>('/v1/app/forum/post/comment', req);
  return response.data;
}

export async function deleteComment(commentId: string) {
  const response = await api.delete<ApiResponse<any>>('/v1/app/forum/post/comment', {
    params: { commentId },
  });

  return response.data;
}
