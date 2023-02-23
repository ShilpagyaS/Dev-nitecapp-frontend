import axiosInstance from "@/api/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  role: null,
  tempUserEmail: null,
  firstTimeLogin: false,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state) => {
      state.user = 1;
    },
    logout: (state) => {
      state.value -= 1;
    },
    updateUser: (state, action) => {
      localStorage.setItem("nightcpp-token", action.payload?.token);
      state.user = action.payload?.data;
      state.accessToken = action.payload?.token;
      state.firstTimeLogin = action.payload?.data?.first_time_login;
    },
    updateTempUser: (state, action) => {
      state.tempUserEmail = action.payload;
    },
  },
});

export const login = (data) => {
  return async (dispatch) => {
    dispatch(authSlice.actions.updateTempUser(data.email));
    return axiosInstance({
      url: "/api/user-auth/login",
      method: "POST",
      data,
    });
  };
};

export const verifyOTP = (code) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: "/api/user-auth/verify-otp",
      method: "POST",
      data: {
        otp: code,
        email: state.auth?.tempUserEmail,
      },
    });
  };
};

export const setLoggedInUser = (data) => {
  return (dispatch) => {
    dispatch(authSlice.actions.updateUser(data));
  };
};

export const changePassword = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: "/api/user-auth/change-password",
      method: "POST",
      data,
    });
  };
};
export default authSlice.reducer;
