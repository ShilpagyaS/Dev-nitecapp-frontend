import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    adminsList: [],
    allUsers: [],
    userDetails: {}
};
export const manageUsersSlice = createSlice({
    name: "manageUsers",
    initialState,
    reducers: {
        getUsersList: (state, action) => {
            state.userList = action.payload.data
        },
        getAdminsList: (state, action) => {
            state.adminsList = action.payload.data
        },
        getAllUserList: (state, action) => {
            state.allUsers = action.payload.data
        },
        getUserDetails: (state, action) => {
            state.userDetails = action.payload
        },
        emptyAlling: (state) => {
            state.userList = []
            state.adminsList = []
            state.userDetails = {}
        }
    },
});
export const getAllUsersandAdmins = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/user_and_admin_based_on_hotel_id`,
            // url: `/api/${productType}_ingredient_type/get_all_${productType}_ingredient_type`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            const admins = res?.data?.data.filter((user) => user.role >= 2 && user.role <= 5)
            const users = res?.data?.data.filter((user) => user.role > 5)
            console.log(admins);
            console.log(users);
            dispatch(
                manageUsersSlice.actions.getAllUserList({
                    data: res?.data?.data

                })
            );
            dispatch(
                manageUsersSlice.actions.getUsersList({
                    data: users

                })
            );
            dispatch(
                manageUsersSlice.actions.getAdminsList({
                    data: admins

                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getAllusers = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/user_and_admin_based_on_hotel_id`,
            // url: `/api/${productType}_ingredient_type/get_all_${productType}_ingredient_type`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            const admins = res?.data?.data.filter((user) => user.role >= 2 && user.role <= 5)
            const users = res?.data?.data.filter((user) => user.role > 5)
            console.log(admins);
            console.log(users);
            dispatch(
                manageUsersSlice.actions.getAllUserList({
                    data: res?.data?.data

                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const getRoles = () => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/role/getallrole`,
            method: "GET",
        }).then((res) => {
            console.log("response in category,js 47", res);
            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i.id,
                    label: i.name
                }
            })
            return finaldata
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const emptyAllUsers = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            manageUsersSlice.actions.emptyAlling()
        );
    };
};

export default manageUsersSlice.reducer;