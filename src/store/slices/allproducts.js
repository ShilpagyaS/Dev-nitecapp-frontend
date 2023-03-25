import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocktailList: [],
    spiritList: [],
    wineList: [],
    beerList: [],
    low_no_abvList: []
};


export const allProductSlice = createSlice({
    name: "allProduct",
    initialState,
    reducers: {
        getAllProductList: (state, action) => {
            if (action.payload.type === 'cocktail')
                state.cocktailList = action.payload.data;
            if (action.payload.type === 'spirit')
                state.spiritList = action.payload.data;
            if (action.payload.type === 'wine')
                state.wineList = action.payload.data;
            if (action.payload.type === 'beer')
                state.beerList = action.payload.data;
            if (action.payload.type === 'low_no_abv')
                state.low_no_abvList = action.payload.data;
        },

        emptyAllProduct: (state) => {
            state.cocktailList = [],
                state.spiritList = [],
                state.wineList = [],
                state.beerList = [],
                state.low_no_abvList = []

        }
    },
});

export const setLoggedInUser = (data) => {
    return (dispatch) => {
        dispatch(authSlice.actions.updateUser(data));
    };
};



export const getAllProduct = (productType) => {
    return async (dispatch, getState) => {
        const alldata = productType.map(async (type, inx) => {
            await axiosInstance({
                url: `/api/${type}/get_all_${type}`,
                method: "GET",
            }).then((res) => {
                console.log("response in product,js 47", res);
                dispatch(allProductSlice.actions.getAllProductList({ type: productType[inx], data: res?.data?.data }))
            }).catch((err) => {
                console.log(err)
            });

        })
    };
};




export const emptyProductList = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            allProductSlice.actions.emptyAllProduct()
        );
    };
};

export default allProductSlice.reducer;
