
import axiosInstance from "@/components/Auth/axios";
import { successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    outlets: [],
    outletDetails: {},
    outletType: '',
    brandsImages: [],
    hotelBrandDetails: {},
};

export const outletSlice = createSlice({
    name: "outlets",
    initialState,
    reducers: {
        getOutlets: (state, action) => {
            state.outlets = action.payload
        },
        getOutletDetail: (state, action) => {
            state.outletDetails = action.payload
        },
        getOutletType: (state, action) => {
            state.outletType = action.payload
        },
        getBrandsData: (state, action) => {
            state.brandsImages = action.payload
        },
        getBrandsDetails: (state, action) => {
            state.hotelBrandDetails = action.payload
        },
        emptyAllOutlet: (state) => {
            state.outlets = []
            state.outletDetails = {}
        }
    },
});


export const getBrandsImages = () => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            // url: `/api/hotel_outlet/get-all-hotel_outlet`,
            url: `/api/brand-image/get-all-brand-image`,
            method: "GET",
        }).then((res) => {
            dispatch(
                outletSlice.actions.getBrandsData(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
}
export const getBrandsDetails = () => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            // url: `/api/hotel_outlet/get-all-hotel_outlet`,
            url: `/api/brand/login-user-brand-id`,
            method: "GET",
        }).then((res) => {
            dispatch(
                outletSlice.actions.getBrandsDetails(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
}
export const getOutlets = (productType, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            // url: `/api/hotel_outlet/get-all-hotel_outlet`,
            url: `/api/hotel_outlet/outlet_list/based_on_login_user_hotel_id`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                outletSlice.actions.getOutlets(res.data?.data)
            );
            dispatch(
                outletSlice.actions.getOutletType(res.data?.outlet_type)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
}
export const getOutletDetail = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/hotel_outlet/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                outletSlice.actions.getOutletDetail(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
}
export const putOutletDetail = (data, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/hotel_outlet/${id}`,
            method: "PUT",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getOutletDetail(id));
            successtoast({ message: 'Updated Successfully' })
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}

export const emptyAllOutlet = (productType, id) => {
    return async (dispatch, getState) => {

        dispatch(
            outletSlice.actions.emptyAllOutlet()
        );

    };
}
export default outletSlice.reducer;
