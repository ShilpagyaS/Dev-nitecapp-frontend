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
            url: `/api/${productType}_ingredient_type/get_all_${productType}_ingredient_type`,
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


export const emptyIngredientsList = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            ingredientsSlice.actions.emptyAlling()
        );
    };
};

export default ingredientsSlice.reducer;
