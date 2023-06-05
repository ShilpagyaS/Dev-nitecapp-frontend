import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    course: [],
    courseDetail: {},
    chapters: [],
    modules: [],
};

export const learnSlice = createSlice({
    name: "learn",
    initialState,
    reducers: {
        getCourses: (state, action) => {
            state.course = action.payload.data
        },
        getChapters: (state, action) => {
            state.chapters = action.payload.data
        },
        getModules: (state, action) => {
            state.modules = action.payload.data
        },
        getCoursesDetails: (state, action) => {
            state.courseDetail = action.payload
        },
        emptyAlling: (state) => {
            state.course = []
            state.courseDetail = {}
        }
    },
});



export const getCourses = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/course/get-all-course`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                learnSlice.actions.getCourses({
                    data: res?.data?.data,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getCoursesDetail = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/course/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getCoursesDetails(
                    res?.data?.data,
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getModuleDetail = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/course/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getCoursesDetails(
                    res?.data?.data,
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getChapters = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/course/get-all-course`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                learnSlice.actions.getChapters({
                    data: res?.data?.data,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const createCourse = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course/add-new-course`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getCourses())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const getIngredientsListBytype = (productType) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/master_ingredients/get_all_master_ingredients_by_type/${productType}`,
            // url: `/api/${productType}_ingredient_type/get_all_${productType}_ingredient_type`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                ingredientsSlice.actions.getIngredients({
                    data: res?.data?.data,
                    type: productType,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};


export const getIngredientsDetails = (productType, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/${productType}_ingredient_type/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                ingredientsSlice.actions.getIngredientDetails(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getMasterIngredientsDetails = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        axiosInstance({
            url: `/api/master_ingredients/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                ingredientsSlice.actions.getIngredientDetails(res.data?.data)
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const putIngredientById = (productId, data) => {
    return async (dispatch, getState) => {
        const state = getState();
        return axiosInstance({
            url: `/api/master_ingredients/${productId}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getMasterIngredientsDetails(productId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const getAllIngredientCategoryForSelect = () => {
    return async (dispatch, getState) => {
        const state = getState();


        return await axiosInstance({
            url: `/api/cocktail_ingredient_type/get_all_cocktail_ingredient_type`,
            method: "GET",
        }).then((res) => {

            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i.ingredient_type_id,
                    label: i.ingredient_type_name
                }
            })
            return finaldata
        }).catch((err) => {
            console.log(err)
        });

    };
};
export const emptycourses = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            learnSlice.actions.emptyAlling()
        );
    };
};

export default learnSlice.reducer;
