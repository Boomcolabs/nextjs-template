import Axios from "axios";
import i18n from "../i18n";

// import { useNotifications } from '@/components/ui/notifications';

export const api = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Accept: "*/*",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  }
);

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("user");

  const tokenString = JSON.parse(token || "{}");
  if (token) {
    config.headers
      ? (config.headers.Authorization = `Bearer ${tokenString}`)
      : (config.headers = config.headers || {
          Authorization: `Bearer ${tokenString}`,
        });
  }
  return config;
});

export * from "./admin/auth";
// export * from './admin/employee';
// export * from './admin/employer';

// api.interceptors.request.use(async (config) => {
//   const languageCode = i18n.language;

//   if (languageCode === 'en') {
//     config.headers['lang'] = 'english';
//   }
//   if (languageCode === 'ko') {
//     config.headers['lang'] = 'korean';
//   }

//   if (languageCode === 'zh') {
//     config.headers['lang'] = 'chinese';
//   }
//   return config;
// });
