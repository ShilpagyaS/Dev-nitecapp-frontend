import axiosInstance from "@/api/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productDetails: {},
};

export const spiritSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getProductList: (state, action) => {
      state.productList = action.payload.data;
    },
    getProductInfo: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const setLoggedInUser = (data) => {
  return (dispatch) => {
    dispatch(authSlice.actions.updateUser(data));
  };
};

export const getProductById = (productType, productId) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: `/api/${productType}/${productId}`,
      method: "GET",
    }).then((res) => {
      dispatch(spiritSlice.actions.getProductInfo(res?.data?.data));
    });
  };
};

export const getProduct = (productType) => {
  return async (dispatch, getState) => {
    const state = getState();
    await axiosInstance({
      url: `/api/${productType}/get_all_${productType}`,
      method: "GET",
    }).then((res) => {
      console.log("response in product,js 47", res);
      dispatch(
        spiritSlice.actions.getProductList({
          data: res?.data?.data,
          type: productType,
        })
      );
    });
  };
};

export const emptyProductList = (productType) => {
  return async (dispatch, getState) => {
    dispatch(
      spiritSlice.actions.getProductList({
        data: [],
        type: productType,
      })
    );
  };
};

export default spiritSlice.reducer;
