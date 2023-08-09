import axiosInstance from "@/components/Auth/axios";
import { errortoast, successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    adminsList: [],
    allUsers: [],
    userDetails: {},
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
            state.allUsers = []
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
export const getUserRoles = () => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/user_role/get_all_user_role`,
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
export const createUserAndUpdateList = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/user-auth/signup`,
            method: "POST",
            data
        }).then((res) => {
            // dispatch(getAllusers())
            dispatch(getAllUsersandAdmins())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const sendEmail = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/user-auth/send_mail_to_multiple_admin`,
            method: "POST",
            data
        }).then((res) => {
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const sendFeedback = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/feedback/add_new_feedback`,
            method: "POST",
            data
        }).then((res) => {
            successtoast({ message: 'Feedback Sent' })
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putUserandUpdatetheList = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/user-auth/update-user`,
            method: "PUT",
            data
        }).then((res) => {
            // dispatch(getAllusers())
            dispatch(getAllUsersandAdmins())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const deleteUser = (id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/user-auth/delete_account/${id}`,
            method: "DELETE"
        }).then((res) => {
            // toastify
            dispatch(getAllUsersandAdmins())
            successtoast({ message: 'User Deleted' })
            return res
        }).catch((err) => {
            errortoast({ message: err })
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