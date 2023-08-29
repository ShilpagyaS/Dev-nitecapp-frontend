
import axiosInstance from "@/components/Auth/axios";
import { successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checklist: [],
    tasks: []

};

export const checklistSlice = createSlice({
    name: "checklist",
    initialState,
    reducers: {
        getChecklistsArray: (state, action) => {
            state.checklist = action.payload
        },
        getTasks: (state, action) => {
            state.tasks = action.payload
        },

        emptyAllChecklist: (state) => {
            state.checklist = []
            state.tasks = []
        }
    },
});


export const getChecklists = () => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/check_list/get_check_list_based_on_login_user`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                checklistSlice.actions.getChecklistsArray(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
}
export const getTasksBasedonIds = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/check_list/get_task_task_detail_by_category_id/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                checklistSlice.actions.getTasks(res.data?.data)
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
export const createChecklistGroup = (data) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/check_list/add_new_check_list`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            successtoast({ message: 'Created Successfully' })
            dispatch(getChecklists())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const createChecklistByid = (data) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/check_list/add_new_check_list_category`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            successtoast({ message: 'Created Successfully' })
            dispatch(getChecklists())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const createChecklistTask = (data) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/check_list/add_new_task_in_check_list_category`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            successtoast({ message: 'Created Successfully' })
            dispatch(getChecklists())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const emptyAllChecklist = () => {
    return async (dispatch, getState) => {

        dispatch(
            checklistSlice.actions.emptyAllChecklist()
        );

    };
}
export default checklistSlice.reducer;
