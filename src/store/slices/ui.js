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



export default uiSlice.reducer;
