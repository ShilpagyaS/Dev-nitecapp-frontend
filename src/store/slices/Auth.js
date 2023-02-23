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
      state.user = action.payload?.data;
      state.accessToken = action.payload?.access;
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
      url: "/api/user-auth/login",
      method: "POST",
      data: {
        otp: code,
        email: state.auth?.tempUserEmail,
      },
    });
  };
};

export const setLoggedInUser = (data) => {
  dispatch(authSlice.actions.updateUser(data));
};
export default authSlice.reducer;
