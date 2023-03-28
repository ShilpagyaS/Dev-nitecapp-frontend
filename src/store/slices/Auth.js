import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  role: null,
  tempUserEmail: null,
  firstTimeLogin: false,
  isOnbording: false
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      localStorage.setItem("nightcpp-token", action.payload?.token);
      state.user = action.payload?.data;
      state.accessToken = action.payload?.token;
      state.firstTimeLogin = action.payload?.data?.first_time_login;
    },
    updateTempUser: (state, action) => {
      state.tempUserEmail = action.payload;
    },

    reloadUpdateUser: (state, action) => {
      const token = localStorage.getItem("nightcpp-token");
      state.user = action.payload;
      state.accessToken = token;
      state.firstTimeLogin = action.payload?.first_time_login;
    },

    logoutUser: (state, action) => {
      localStorage.removeItem("nightcpp-token");
      state.user = initialState.user;
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
    }).catch((error) => {
      return { error: true, message: error?.response?.data?.message }

    });
  };
};

export const logout = (data) => {
  return async (dispatch) => {
    dispatch(authSlice.actions.logoutUser());
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

export const setUserRelogin = () => {
  return async (dispatch) => {
    await axiosInstance({
      url: "/api/user-auth/verify-token",
      method: "GET",
    })
      .then((res) => {
        if (res?.data?.resCode === 200) {
          dispatch(authSlice.actions.reloadUpdateUser(res.data.user));
        }
      })
      .catch((err) => {
        localStorage.removeItem("nightcpp-token");
      });
  };
};

export const changePassword = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: "/api/user-auth/change-password",
      method: "POST",
      data,
    }).catch((err) => {
      console.log(err);
    });
  };
};

export const updateUser = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: "/api/user-auth/update-user",
      method: "PUT",
      data,
    }).then(async (res) => {
      if (res.status == 200)
        await dispatch(setUserRelogin())
    })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getConcept = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: "/api/concept/get-all-concept",
      method: "GET",
    })
      .then((res) => {
        if (res.data.resCode === 200) {
          const concept = res.data.data.map((i) => {
            return { label: i.name, value: i.id };
          });
          return concept;
        }
        return [];
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default authSlice.reducer;
