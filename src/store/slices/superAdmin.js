import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brandList: [],
    brandDetail: {}
};


export const superAdminSlice = createSlice({
    name: "superAdmin",
    initialState,
    reducers: {
        getBrandList: (state, action) => {

            state.brandList = action.payload;
        },

        emptyBrandList: (state) => {
            state.brandList = []

        }
    },
});

export const setLoggedInUser = (data) => {
    return (dispatch) => {
        dispatch(authSlice.actions.updateUser(data));
    };
};



export const getBrandList = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/brand/get-all-brand`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                superAdminSlice.actions.getBrandList(res?.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const craeteBrand = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/brand/add-new-brand`,
            method: "POST",
            data
        }).then((res) => {
        }).catch((err) => {
            console.log(err)
        });
    };
};


export const emptyBrandList = () => {

    return async (dispatch, getState) => {
        dispatch(
            superAdminSlice.actions.emptyBrandList()
        );
    };
};

export default superAdminSlice.reducer;
