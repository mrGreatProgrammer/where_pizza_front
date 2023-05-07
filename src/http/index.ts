import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const $hostAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

$host.interceptors.request.use((config:any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$host.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 403 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_AUTH}/refresh-token`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
            },
          }
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.jwt_token);
          localStorage.setItem("refreshToken", response.data.refresh_token);
        }
        return $host.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН\n");
        localStorage.clear();
        window.location.reload();
      }
    }
  }
);



export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, { getState, dispatch }) => {
    // const { refreshToken } = getState();
   const refreshToken = localStorage.getItem("refreshToken");
    // Отправляем запрос на обновление токена на сервер
    const response = await fetch('/refresh-token', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      // Если сервер вернул ошибку, бросаем исключение, чтобы обработать его в компонентах
      throw new Error(`Ошибка обновления токена: ${response.statusText}`);
    }
    // Извлекаем новый токен из ответа
    const { jwt_token } = await response.json();
    // Обновляем токен в состоянии приложения
    // dispatch(setAccessToken(accessToken));
    localStorage.setItem("token", jwt_token);
  }
);


export const handleAuthorizationError = async (error:any, { dispatch, getState }:any, requestId:any) => {
    if (error.response.status === 401) {
      try {
        // Обновляем токен
       const {data} = await dispatch(refreshAccessToken());
        // Повторяем оригинальный запрос, используя существующий объект запроса
        // const originalRequest = getState().api.requests[requestId];
        // const { data, error: requestError } = await dispatch(
        //   api.util.updateRequest(originalRequest, {
        //     body: originalRequest.body,
        //   })
        // );
        // if (requestError) {
        //   // Если повторный запрос тоже вернул ошибку, обработайте ее здесь
        //   throw requestError;
        // }
        // Если повторный запрос прошел успешно, вернем данные
        return data;
      } catch (refreshError) {
        // Если обновление токена завершилось неудачно, обработайте ошибку здесь
        throw refreshError;
      }
    } else {
      // Если ошибка авторизации не связана с истечением срока действия токена, просто бросаем исключение
      throw error;
    }
  };
