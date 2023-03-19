import axiosInstance from "@/api/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredients: [],
};

export const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        getIngredients: (state, action) => {
            state.ingredients = action.payload.data
        },
        emptyAlling: (state) => {
            state.ingredients = []
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
                    data: res?.data?.data?.rows,
                    type: productType,
                })
            );
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
