import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productDetails: {},
  categoryList: [],
  productsByCategory: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList: (state, action) => {
      state.productList = action.payload.data;
    },
    getProductInfo: (state, action) => {
      state.productDetails = action.payload;
    },
    getCategoryList: (state, action) => {
      state.categoryList = action.payload.data;
    },
    getProductCategoryList: (state, action) => {
      state.productsByCategory = action.payload.data;
    },
    emptyAll: (state) => {
      state.productList = [],
        state.productDetails = {},
        state.categoryList = [],
        state.productsByCategory = []

    }
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
      dispatch(productSlice.actions.getProductInfo(res?.data?.data));
    }).catch((err) => {
      console.log(err)
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
        productSlice.actions.getProductList({
          data: res?.data?.data,
          type: productType,
        })
      );
    }).catch((err) => {
      console.log(err)
    });
  };
};


export const getCategoryList = (productType) => {
  return async (dispatch, getState) => {
    const state = getState();
    await axiosInstance({
      url: `/api/get_all_${productType}_category`,
      method: "GET",
    }).then((res) => {
      console.log("response in category,js 47", res);
      dispatch(
        productSlice.actions.getCategoryList({
          data: res?.data?.data,
          type: productType,
        })
      );
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const getCategoryListByType = (productType) => {
  return async (dispatch, getState) => {
    const state = getState();
    await axiosInstance({
      url: `/api/get_all_${productType}_category_by_type`,
      method: "GET",
    }).then((res) => {
      console.log("response in category,js 47", res);
      dispatch(
        productSlice.actions.getCategoryList({
          data: res?.data?.data,
          type: productType,
        })
      );
    }).catch((err) => {
      console.log(err)
    });
  };
};

export const getProductByCategoryId = (productType, id) => {
  return async (dispatch, getState) => {
    const state = getState();
    await axiosInstance({
      url: `/api/${productType}/get_${productType}_by_category_id/${id}`,
      method: "GET",
    }).then((res) => {
      console.log("response in product,js 47", res);

      dispatch(
        productSlice.actions.getProductCategoryList({
          data: res?.data?.data,
          type: productType,
        })
      );

    }).catch((err) => {
      console.log(err)
    });
  };
};
export const putProductById = (productType, productId, data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: `/api/${productType}/${productId}`,
      method: "PUT",
      data
    }).then((res) => {
      // dispatch(productSlice.actions.getProductInfo(res?.data?.data));
      dispatch(getProductById(productType, productId))
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const putProductByIdThenUpdateList = (productType, productId, data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: `/api/${productType}/${productId}`,
      method: "PUT",
      data
    }).then((res) => {
      // dispatch(productSlice.actions.getProductInfo(res?.data?.data));
      dispatch(getProduct(productType))
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const createProduct = (productType, data) => {
  return async (dispatch) => {

    return await axiosInstance({
      url: `/api/${productType}/new_create_${productType}`,
      method: "POST",
      data
    }).then((res) => {
      // toastify
      return res
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const createCategory = (productType, data) => {
  return async (dispatch) => {

    return await axiosInstance({
      url: `/api/drink_category/add_new_drink_category`,
      method: "POST",
      data
    }).then((res) => {
      dispatch(getCategoryListByType(productType))
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const deleteProductById = (productType, productId) => {
  return async (dispatch) => {

    return await axiosInstance({
      url: `/api/${productType}/${productId}`,
      method: "DELETE"
    }).then((res) => {
      // toastify
      dispatch(getProduct(productType))
      return res
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const deleteProductbyIdWithCategory = (productType, productId, categoryId) => {
  return async (dispatch) => {

    return await axiosInstance({
      url: `/api/${productType}/${productId}`,
      method: "DELETE"
    }).then((res) => {
      // toastify
      dispatch(getProductByCategoryId(productType, categoryId))
      return res
    }).catch((err) => {
      console.log(err)
    });
  };
};

export const emptyProductList = (productType) => {

  return async (dispatch, getState) => {
    dispatch(
      productSlice.actions.emptyAll()
    );
  };
};


export default productSlice.reducer;
