import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    adminsList: [],
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
            state.adminsListList = action.payload.data
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




export default manageUsersSlice.reducer;