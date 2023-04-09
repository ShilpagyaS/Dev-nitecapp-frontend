import axiosInstance from "@/components/Auth/axios";
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
            url: `/api/${productType}/get_all_data/drink_brand`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                brandSlice.actions.getBrands({
                    data: res?.data?.data,
                    type: productType,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getBrandsListNew = (productType) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/drink_brand/get_all_brands_for_hotel/${productType}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                brandSlice.actions.getBrands({
                    data: res?.data?.data,
                    type: productType,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const createBrandAndUpdatingList = (productType, data) => {
    return async (dispatch) => {
  
      return await axiosInstance({
        url: `/api/drink_brand_hotel/add_brand_to_hotel`,
        method: "POST",
        data
      }).then((res) => {
        dispatch(getBrandsListNew(productType))
        return res
      }).catch((err) => {
        console.log(err)
        return { error: true, message: err }
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


export const getBrandsByCategory = (productType, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/${productType}/get_brand_by_category_id/${id}`,
            method: "GET",
        }).then((res) => {
            dispatch(
                brandSlice.actions.getBrands({
                    data: res?.data?.data,
                    type: productType,
                })
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
