import axiosInstance from "@/components/Auth/axios";
import { errortoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setloader: (state, action) => {
      state.loader = action.payload
    },
  },
});


export const setloader = (state) => {
  return async (dispatch, getState) => {
    dispatch(uiSlice.actions.setloader(state))
  };
};

export const uploadimage = (file) => {
  return async (dispatch, getState) => {
    const state = getState();

    const formdata = new FormData()
    formdata.append('image', file)
    return await axiosInstance({
      url: `/api/file/single_file_upload`,
      method: "POST",
      data: formdata
    }).then((res) => {
      return res?.data?.data
    }).catch((err) => {
      errortoast({ message: err })
      return { error: true, message: err.message }
    });

  };
}



export default uiSlice.reducer;
