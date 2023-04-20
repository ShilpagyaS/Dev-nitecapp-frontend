import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";
import { getGuestDetail } from "./guests";

const initialState = {
    noteDetails: {},

};

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        getNote: (state, action) => {
            state.noteDetails = action.payload
        },

        emptyNotes: (state) => {

            state.noteDetails = {}
        }
    },
});

export const getNoteDetails = (productType, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        console.log(state?.auth?.user?.id)
        axiosInstance({
            url: `/api/getUserNote`,
            id: 'get_guest_details',
            method: "POST",
            revalidate: true,
            data: {
                type: productType,
                product_id: id,
                user_id: state?.auth?.user?.id || state?.auth?.user?.user_id

            }
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                notesSlice.actions.getNote(res?.data?.data?.[0])
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const addNoteDetails = (productType, id, note) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/createUserNote`,
            method: "POST",
            data: {
                type: productType,
                product_id: id,
                user_id: state?.auth?.user?.id,
                user_notes: note
            }
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getNoteDetails(productType, id));
        }).catch((err) => {
            console.log(err)
        });
    };
};


export const addGuestNoteDetails = (productType, id, note) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/createUserNote`,
            method: "POST",
            data: {
                type: productType,
                guest_id: id,
                user_id: state?.auth?.user?.id,
                user_notes: note
            }
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getGuestDetail(id));
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const updateNoteDetails = (productType, id, note, noteid) => {
    return async (dispatch, getState) => {
        const state = getState();

        axiosInstance({
            url: `/api/updateUserNote/${noteid}`,
            method: "PUT",

            data: {
                type: productType,
                product_id: id,
                user_id: state?.auth?.user?.id,
                user_notes: note
            }
        }).then((res) => {
            console.log("response in product,js 47", res);
            debugger
            dispatch(getNoteDetails(productType, id));
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const updateGuestNoteDetails = (productType, id, note, noteid) => {
    return async (dispatch, getState) => {
        const state = getState();

        axiosInstance({
            url: `/api/updateUserNote/${noteid}`,
            method: "PUT",
            cache: {
                update: {
                    get_guest_details: "delete"
                }
            },
            data: {
                type: productType,
                guest_id: id,
                user_id: state?.auth?.user?.id,
                user_notes: note
            }
        }).then((res) => {

            dispatch(getGuestDetail(id));
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const deleteNoteDetails = (productType, id, note, noteid) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/deleteUserNote/${noteid}`,
            method: "DELETE",
            data: {
                type: productType,
                product_id: id,
                user_id: state?.auth?.user?.id,
                user_notes: note
            }
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getNoteDetails(productType, id));
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const deleteGuestNoteDetails = (productType, id, noteid) => {
    return async (dispatch, getState) => {
        debugger
        const state = getState();
        axiosInstance({
            url: `/api/deleteUserNote/${noteid}`,
            method: "DELETE",
            data: {
                type: productType,
                guest_id: id,
                user_id: state?.auth?.user?.id,
            }
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(getGuestDetail(id));
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const emptyNotesList = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            notesSlice.actions.emptyNotes()
        );
    };
};

export default notesSlice.reducer;
