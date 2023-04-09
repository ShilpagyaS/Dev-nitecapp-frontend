import axiosInstance, { axiosDebounceInstance } from "@/components/Auth/axios";
import { successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productDetails: {},
  categoryList: [],
  productsByCategory: [],
  searchoptions: []
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
    searchdata: (state, action) => {
      state.searchoptions = action.payload
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
      url: `/api/${productType}/get_all_${productType}_category_by_type`,
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
      // url: `/api/${productType}/get_all_${productType}_category_by_type`,
      url: `/api/drink_category/get_all_categories_for_hotel/${productType}`,
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
      return res
    }).catch((err) => {
      console.log(err)
      return { error: true, message: err }
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
export const putProductByIdThenUpdateListShowProduct = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: `/api/show_product/common_api_for_all_product`,
      method: "PUT",
      data
    }).then((res) => {
      // dispatch(productSlice.actions.getProductInfo(res?.data?.data));
      dispatch(getProduct(data.type))
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const putProductByIdShowProduct = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: `/api/show_product/common_api_for_all_product`,
      method: "PUT",
      data
    }).then((res) => {
      // dispatch(productSlice.actions.getProductInfo(res?.data?.data));
      // dispatch(getProduct(data.type))
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const putProductByIdThenUpdateListShowProductForCategory = (data, productId) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: `/api/show_Produt/comman_api_for_all_product`,
      method: "PUT",
      data
    }).then((res) => {
      // dispatch(productSlice.actions.getProductInfo(res?.data?.data));
      dispatch(getProductByCategoryId(data.type, productId))
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
      console.log(err)
      return { error: true, message: err }
    });
  };
};
export const createProductAndUpdatingList = (productType, data) => {
  return async (dispatch) => {

    return await axiosInstance({
      url: `/api/${productType}/new_create_${productType}`,
      method: "POST",
      data
    }).then((res) => {
      dispatch(getProduct(productType))
      return res
    }).catch((err) => {
      console.log(err)
      return { error: true, message: err }
    });
  };
};
export const createProductAndUpdatingListNew = (productType, data) => {
  return async (dispatch) => {

    return await axiosInstance({

      url: `/api/${productType}/add_new_${productType}_to_hotel`,
      method: "POST",
      data
    }).then((res) => {
      dispatch(getProduct(productType))
      return res
    }).catch((err) => {
      console.log(err)
      return { error: true, message: err }
    });
  };
};
export const createCategoryAndUpdatingList = (productType, data) => {
  return async (dispatch) => {

    return await axiosInstance({
      url: `/api/drink_category_hotel/add_category_to_hotel`,
      method: "POST",
      data
    }).then((res) => {
      dispatch(getCategoryListByType(productType))
      return res
    }).catch((err) => {
      console.log(err)
      return { error: true, message: err }
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
export const putCategory = (productType, productId, data) => {
  return async (dispatch, getState) => {
    const state = getState();
    return axiosInstance({
      url: `/api/drink_category/${productId}`,
      method: "PUT",
      data
    }).then((res) => {
      // dispatch(productSlice.actions.getProductInfo(res?.data?.data));
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
      successtoast({ message: `Deleted Successfully` })
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
    })
  };
};

export const emptyProductList = (productType) => {

  return async (dispatch, getState) => {
    dispatch(
      productSlice.actions.emptyAll()
    );
  };
};

export const getIngredientSearch = (query) => {
  return async (dispatch, getState) => {
    const state = getState();

    if (query.label !== "" && query.value === "") {
      return await axiosDebounceInstance({
        url: `/api/ingredient/search/${query.label}`,
        method: "GET",
      }).then((res) => {

        const finaldata = res?.data?.data?.map((i) => {
          return {
            value: i.master_ingredient_id,
            label: i.master_ingredient_name
          }
        })

        dispatch(productSlice.actions.searchdata(finaldata))
        return finaldata
      }).catch((err) => {
        console.log(err)
      });
    }
    else
      dispatch(productSlice.actions.searchdata([]))

  };
};
export const getProductSearch = (query, productType) => {
  return async (dispatch, getState) => {
    const state = getState();

    if (query.label !== "" && query.value === "") {
      return await axiosDebounceInstance({
        url: `/api/${productType}/search/${query.label}`,
        method: "GET",
      }).then((res) => {

        const finaldata = res?.data?.data?.map((i) => {
          return {
            value: i[`${productType}_id`],
            label: i[`${productType}_name`],
            image: i.image,
            body: i
          }
        })

        dispatch(productSlice.actions.searchdata(finaldata))
        return finaldata
      }).catch((err) => {
        console.log(err)
      });
    }
    else
      dispatch(productSlice.actions.searchdata([]))

  };
};
export const getCategorySearch = (query, productType) => {
  return async (dispatch, getState) => {
    const state = getState();

    if (query.label !== "" && query.value === "") {
      return await axiosDebounceInstance({
        url: `/api/drink_category/search/${productType}/${query.label}`,
        method: "GET",
      }).then((res) => {

        const finaldata = res?.data?.data?.map((i) => {
          return {
            value: i.drink_category_id,
            label: i.drink_category_name,
            image: i.image,
            body: i
          }
        })

        dispatch(productSlice.actions.searchdata(finaldata))
        return finaldata
      }).catch((err) => {
        console.log(err)
      });
    }
    else
      dispatch(productSlice.actions.searchdata([]))

  };
};
export const getProductSearchByCategory = (query, productType, productId) => {
  return async (dispatch, getState) => {
    const state = getState();

    if (query.label !== "" && query.value === "") {
      return await axiosDebounceInstance({
        url: `/api/${productType}/search/${productId}/${query.label}`,
        method: "GET",
      }).then((res) => {

        const finaldata = res?.data?.data?.map((i) => {
          return {
            value: i[`${productType}_id`],
            label: i[`${productType}_name`],
            image: i.image,
            body: i
          }
        })

        dispatch(productSlice.actions.searchdata(finaldata))
        return finaldata
      }).catch((err) => {
        console.log(err)
      });
    }
    else
      dispatch(productSlice.actions.searchdata([]))

  };
};
export const getBrandSearch = (query) => {
  return async (dispatch, getState) => {
    const state = getState();

    if (query.label !== "" && query.value === "") {
      return await axiosDebounceInstance({
        url: `/api/drink_brand/search/${query.label}`,
        method: "GET",
      }).then((res) => {

        const finaldata = res?.data?.data?.map((i) => {
          return {
            value: i.drink_brand_id,
            label: i.drink_brand_name,
            image: i.image,
            body: i
          }
        })

        dispatch(productSlice.actions.searchdata(finaldata))
        return finaldata
      }).catch((err) => {
        console.log(err)
      });
    }
    else
      dispatch(productSlice.actions.searchdata([]))

  };
};
export const getBrandSearchByType = (query, productType) => {
  return async (dispatch, getState) => {
    const state = getState();

    if (query.label !== "" && query.value === "") {
      return await axiosDebounceInstance({
        url: `/api/drink_brand/search/${productType}/${query.label}`,
        method: "GET",
      }).then((res) => {

        const finaldata = res?.data?.data?.map((i) => {
          return {
            value: i.drink_brand_id,
            label: i.drink_brand_name,
            image: i.image,
            body: i
          }
        })

        dispatch(productSlice.actions.searchdata(finaldata))
        return finaldata
      }).catch((err) => {
        console.log(err)
      });
    }
    else
      dispatch(productSlice.actions.searchdata([]))

  };
};
export const getUnitOFMeasure = () => {
  return async (dispatch, getState) => {
    const state = getState();


    return await axiosInstance({
      url: `/api/measure/get_all_measure`,
      method: "GET",
    }).then((res) => {

      const finaldata = res?.data?.data?.map((i) => {
        return {
          value: i.measure_id,
          label: i.measure_name
        }
      })
      return finaldata
    }).catch((err) => {
      console.log(err)
    });

  };
};
export const getAllDrinkBrands = () => {
  return async (dispatch, getState) => {
    const state = getState();


    return await axiosInstance({
      url: `api/drink_brand/get_all_drink_brand`,
      method: "GET",
    }).then((res) => {

      const finaldata = res?.data?.data?.map((i) => {
        return {
          value: i.drink_brand_id,
          label: i.drink_brand_name
        }
      })
      return finaldata
    }).catch((err) => {
      console.log(err)
    });

  };
};
export default productSlice.reducer;
