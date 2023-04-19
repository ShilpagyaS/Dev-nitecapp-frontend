
import axiosInstance from "@/components/Auth/axios";
import { successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guests: [],
    guestDetails: {}
};

export const guestSlice = createSlice({
    name: "guests",
    initialState,
    reducers: {
        getGuests: (state, action) => {
            state.guests = action.payload
        },
        getGuestDetail: (state, action) => {
            state.guestDetails = action.payload
        },

        emptyAllGuests: (state) => {
            state.guests = []
            state.guestDetails = {}
        }
    },
});


export const getGuests = (productType, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/guest/get_all_guest_based_on_hotel`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                guestSlice.actions.getGuests(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
}
export const getGuestDetail = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/guest/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                guestSlice.actions.getGuestDetail(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
}
export const putGuestDetail = (data, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/guest/update`,
            method: "PUT",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getGuestDetail(id));
            successtoast({ message: 'Updated Successfully' })
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const createGuest = (data) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/guest/create_and_update_guest`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            successtoast({ message: 'Created Successfully' })
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const createGuestupdateList = (data) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/guest/create_and_update_guest`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getGuests())
            console.log("response in product,js 47", res);
            successtoast({ message: 'Created Successfully' })
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}

export const emptyAllGuests = () => {
    return async (dispatch, getState) => {

        dispatch(
            guestSlice.actions.emptyAllGuests()
        );

    };
}
export default guestSlice.reducer;
