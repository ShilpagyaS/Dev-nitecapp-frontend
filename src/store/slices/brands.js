import axiosInstance from "@/api/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brandsList: [],
    brandsDetails: {}
};

export const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        getBrands: (state, action) => {
            state.brandsList = action.payload.data
        },
        getBrandsDetails: (state, action) => {
            state.brandsDetails = action.payload
        },
        emptyAllBrands: (state) => {
            state.brandsList = []
            state.brandsDetails = {}
        }
    },
});



export const getBrandsList = (productType) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/drink_brand/get_all_drink_brand`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                brandSlice.actions.getBrands({
                    data: res?.data?.data?.rows,
                    type: productType,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};


export const getBrandsDetails = (productType, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/drink_brand/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                brandSlice.actions.getBrandsDetails(res?.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};


export const emptyBrandsList = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            brandSlice.actions.emptyAllBrands()
        );
    };
};

export default brandSlice.reducer;
