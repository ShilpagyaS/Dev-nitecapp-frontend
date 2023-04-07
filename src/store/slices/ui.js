import axiosInstance from "@/components/Auth/axios";
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

export const uploadimage =(file)=>{
    return async (dispatch, getState) => {
        const state = getState();
    
    const formdata=new FormData()
    formdata.append('image',file)
        return await axiosInstance({
          url: `/api/file/single_file_upload`,
          method: "POST",
          data:formdata
        }).then((res) => {
    
         debugger
          return finaldata
        }).catch((err) => {
          console.log(err)
        });
    
      };
}



export default uiSlice.reducer;
