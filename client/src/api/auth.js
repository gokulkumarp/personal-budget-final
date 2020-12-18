import LocalStorageService from '../utils/localstorage';
import { post } from './restProxy';
import axios from 'axios';


export const login = (data) => {
  return post('/api/auth/login', data);
};
export const register = (data) => {
  return post('/api/auth/register', data);
};


export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (LocalStorageService.getData("token")) {
    console.log(LocalStorageService.getData("token"))
    const token = LocalStorageService.getData("token")

    return token;
  } else {
    return false;
  }
};

export const logout = (next) => {
  if (typeof window !== "undefined") {
    LocalStorageService.clearData("token");
    LocalStorageService.clearData("refresh");
    next();
    return axios
      .get(`/api/auth/logout`)
      .then((res) => {
        console.log("signout", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const authenticate_access = (data, next) => {
  LocalStorageService.setData("token", JSON.stringify(data));
  next();
};

export const getNewAccessToken = () => {
  const refresh = LocalStorageService.getData("refresh");
  return post('/api/auth/token', {
      token: refresh,
  });

};