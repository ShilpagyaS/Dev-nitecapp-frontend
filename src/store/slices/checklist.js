
import axiosInstance, { axiosDebounceInstance } from "@/components/Auth/axios";
import { successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checklist: [],
    tasks: [],
    userRoleId: ''

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
        setRole: (state, action) => {
            state.userRoleId = action.payload
        },

        emptyAllChecklist: (state) => {
            state.checklist = []
            state.tasks = []

        },
        emptyUserRole: (state) => {
            state.userRoleId = ''

        }
    },
});



export const setUserRolid = (id) => {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            checklistSlice.actions.setRole(id)
        );

    };
}
export const getChecklists = () => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/checklist/get_checklist_based_on_login_user`,
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
export const getTasksBasedonIds = (id, date = '2023-09-01') => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/checklist/get_detail_by_category_id/${id}/${date}`,
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
export const getTasksBasedonIdsWithoutLoading = (id, date = '2023-09-01') => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosDebounceInstance({
            url: `/api/checklist/get_detail_by_category_id/${id}/${date}`,
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

export const MasterAPIForupdateAndDelete = (data, type, id, Text) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/checklist/checklist_master_update`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            if (type == 1) {

                dispatch(getChecklists());
            }
            if (type == 2) {

                dispatch(getTasksBasedonIds(id));
            }
            successtoast({ message: `${Text} Successfully` })
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
            url: `/api/checklist/add_new_checklist`,
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
            url: `/api/checklist/add_new_checklist_category`,
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
export const createChecklistTask = (data, type, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/checklist/add_new_task_in_checklist_category`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            successtoast({ message: 'Created Successfully' })
            if (type == 1) {

                dispatch(getChecklists());
            }
            if (type == 2) {

                dispatch(getTasksBasedonIds(id));
            }
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const createSubtask = (data, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/checklist/add_new_sub_task`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            successtoast({ message: 'Created Successfully' })
            dispatch(getTasksBasedonIds(id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const createHistory = (data, id, date = '') => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosDebounceInstance({
            url: `/api/create_history`,
            method: "POST",
            data
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getTasksBasedonIdsWithoutLoading(id, date))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
}
export const resetApi = (id, date) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosDebounceInstance({
            url: `/api/reset_checklist/${id}/${date}`,
            method: "GET"
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getTasksBasedonIdsWithoutLoading(id, date))
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
export const EmptyUserRoleID = () => {
    return async (dispatch, getState) => {

        dispatch(
            checklistSlice.actions.emptyUserRole()
        );

    };
}
export default checklistSlice.reducer;
