import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredients: [],
    ingredientDetails: {}
};

export const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        getIngredients: (state, action) => {
            state.ingredients = action.payload.data
        },
        getIngredientDetails: (state, action) => {
            state.ingredientDetails = action.payload
        },
        emptyAlling: (state) => {
            state.ingredients = []
            state.ingredientDetails = {}
        }
    },
});



export const getIngredientsList = (productType) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/master_ingredients/get_all_master_ingredients`,
            // url: `/api/${productType}_ingredient_type/get_all_${productType}_ingredient_type`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                ingredientsSlice.actions.getIngredients({
                    data: res?.data?.data,
                    type: productType,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getIngredientsListBytype = (productType) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/master_ingredients/get_all_master_ingredients_by_type/${productType}`,
            // url: `/api/${productType}_ingredient_type/get_all_${productType}_ingredient_type`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                ingredientsSlice.actions.getIngredients({
                    data: res?.data?.data,
                    type: productType,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};


export const getIngredientsDetails = (productType, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/${productType}_ingredient_type/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                ingredientsSlice.actions.getIngredientDetails(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getMasterIngredientsDetails = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/master_ingredients/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                ingredientsSlice.actions.getIngredientDetails(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const putIngredientById = (productId, data) => {
    return async (dispatch, getState) => {
        const state = getState();
        return axiosInstance({
            url: `/api/master_ingredients/${productId}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getMasterIngredientsDetails(productId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const getAllIngredientCategoryForSelect = () => {
    return async (dispatch, getState) => {
        const state = getState();


        return await axiosInstance({
            url: `/api/cocktail_ingredient_type/get_all_cocktail_ingredient_type`,
            method: "GET",
        }).then((res) => {

            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i.ingredient_type_id,
                    label: i.ingredient_type_name
                }
            })
            return finaldata
        }).catch((err) => {
            console.log(err)
        });

    };
};
export const createMasterIngredient = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/master_ingredients/add_new_master_ingredients`,
            method: "POST",
            data
        }).then((res) => {
            // dispatch(getCategoryListByType(productType))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const emptyIngredientsList = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            ingredientsSlice.actions.emptyAlling()
        );
    };
};

export default ingredientsSlice.reducer;
