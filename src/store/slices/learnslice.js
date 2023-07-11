import axiosInstance, { axiosDebounceInstance } from "@/components/Auth/axios";
import { errortoast, successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    course: [],
    liberarycourse: [],
    quizes: [],
    quizesQuestion: [],
    courseDetail: {},
    chapters: [],
    modules: [],
    flashcard: [],
    studyAll: [],
    flashcardDetail: {},
    learnScreenCourses: [],
    learnScreenFlashcards: [],
    learnScreenQuizes: [],
    scorecard: null,
};

export const learnSlice = createSlice({
    name: "learn",
    initialState,
    reducers: {
        getCourses: (state, action) => {
            state.course = action.payload.data
        },
        getLiberaryCourses: (state, action) => {
            state.liberarycourse = action.payload.data
        },
        getQuizes: (state, action) => {
            state.quizes = action.payload.data
        },
        getAllQuizes: (state, action) => {
            state.learnScreenQuizes = action.payload.data
        },
        getAllLiberaryCourses: (state, action) => {
            state.learnScreenCourses = action.payload.data
        },
        getAllFlashcards: (state, action) => {
            state.learnScreenFlashcards = action.payload.data
        },
        getQuizesQuestions: (state, action) => {
            state.quizesQuestion = action.payload.data
        },
        getFlashCard: (state, action) => {
            state.flashcard = action.payload.data
        },
        getStudyAll: (state, action) => {
            state.studyAll = action.payload.data
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
        getFlashcardDetails: (state, action) => {
            state.flashcardDetail = action.payload
        },
        setscorecard: (state, action) => {
            state.scorecard = action.payload
        },
        emptyAlling: (state) => {
            state.course = []
            state.quizes = []
            state.quizesQuestion = []
            state.courseDetail = {}
            state.chapters = []
            state.modules = []
            state.flashcard = []
            state.studyAll = []
            state.flashcardDetail = {}
            state.learnScreenCourses = []
            state.learnScreenFlashcards = []
            state.learnScreenQuizes = []
        },
        emptyscoreCard: (state) => {
            state.scorecard = null
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
            dispatch(
                learnSlice.actions.getAllLiberaryCourses({
                    data: res?.data?.data,
                })
            );
            dispatch(
                learnSlice.actions.getLiberaryCourses({
                    data: res?.data?.data,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getAllQuizesCourses = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/quiz/get_all_quiz`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                learnSlice.actions.getQuizes({
                    data: res?.data?.data,
                })
            );
            dispatch(
                learnSlice.actions.getAllQuizes({
                    data: res?.data?.data,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getAllQuizesCoursesByCategory = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/quiz/get_all_quiz_category/get_quiz_category_list_with_quiz_list`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                learnSlice.actions.getQuizes({
                    data: res?.data?.data,
                })
            );
            dispatch(
                learnSlice.actions.getAllQuizes({
                    data: res?.data?.data,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getQuizQuiestions = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/quiz_question/get_all_quiz_question_by_quiz_id/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                learnSlice.actions.getQuizesQuestions({
                    data: res?.data?.data,
                })
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getCourseDropdown = () => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/course/get-all-course`,
            method: "GET",
        }).then((res) => {
            console.log("response in category,js 47", res);
            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i.course_id,
                    name: i.name,
                    image: i.image
                }
            })
            return finaldata
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getCommonDropdown = (type, specname, courseid) => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/flashcard_subcategory/dropdown_list_by_type/${type}/${specname}/${courseid}`,
            method: "GET",
        }).then((res) => {
            console.log("response in category,js 47", res);
            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i.course_id || i.category_id,
                    label: i.name || i.drink_category_name,
                    image: i.image
                }
            })
            return finaldata
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getQuizCategoryDropDown = () => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/quiz/get_all_quiz_category`,
            method: "GET",
        }).then((res) => {
            console.log("response in category,js 47", res);
            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i,
                    label: i,
                }
            })
            return finaldata
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const putShowFlashcards = (data, id) => {
    return async (dispatch, getState) => {
        const state = getState();
        return axiosInstance({
            url: `/api/flashcard/show_flashcard/change_status`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getFlashCardsBySubcategoryId(id))
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getSpecsDropdown = () => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/specs/get-all-specs`,
            method: "GET",
        }).then((res) => {
            console.log("response in category,js 47", res);
            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i.id,
                    name: i.name,
                    image: i.image
                }
            })
            return finaldata
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
export const getFlashcardDetail = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getFlashcardDetails(
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
            url: `/api/course-module/${id}`,
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
export const getFlashCards = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard/get_all_flashcard`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getAllFlashcards(
                    res?.data
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getAllFlashCardCategorys = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard_category/get_all_flashcard_category`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getAllFlashcards(
                    res?.data
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getFlashCardsBySubcategoryId = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard/list_by_subcategory_id/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getFlashCard(
                    res?.data
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getFlashCardsByType = (type) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard/list_by_type/${type}`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getFlashCard(
                    res?.data
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getAllFlashCardsByCategoryId = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard/list_by_category_id/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response->", res.data.data, res);
            dispatch(
                learnSlice.actions.getStudyAll(
                    res?.data
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getFlashcardCoursesPage = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard_category/category_list/by_login_user_hotel_id`,
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
export const getFlashcardSubcategories = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/flashcard_subcategory/subcategory_list_by_category_id/${id}`,
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
export const CreateFlashcardcategory = (data) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/flashcard_category/add_new_flashcard_category`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getFlashcardCoursesPage())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const CreateCourseContent = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course_content/add_new_course_content`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const CraeteQuizScore = (data, id) => {
    return async (dispatch) => {

        return await axiosDebounceInstance({
            url: `/api/quiz_score/add_new_quiz_score`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getScoreCard(id))
            return res
        }).catch((err) => {
            console.log(err)
            errortoast({ message: err })
            return { error: true, message: err }
        });
    };
};
export const getScoreCard = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        await axiosInstance({
            url: `/api/quiz_score/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in product,js 47", res);
            dispatch(
                learnSlice.actions.setscorecard(
                    res?.data?.data,
                )
            );
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const CreateFlashcardSubcategory = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/flashcard_subcategory/add_new_flashcard_subcategory`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getFlashcardSubcategories(id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const Createflashcard = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/flashcard/add_new_flashcard`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getFlashCardsBySubcategoryId(id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putFlashcard = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/flashcard/${id}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getFlashcardDetail(id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putContentdetails = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course_content/update`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putFlashcardsubcategory = (data, id, categoryid) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `api/flashcard_subcategory/${id}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getFlashcardSubcategories(categoryid))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putFlashcardCategory = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `api/flashcard_category/${id}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getFlashcardCoursesPage())
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const getChaptersdropdown = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/course/${id}`,
            method: "GET",
        }).then((res) => {
            console.log("response in category,js 47", res);
            const finaldata = res?.data?.data?.chapters?.map((i) => {
                return {
                    value: i.courseChapter_id,
                    label: i.name,
                    image: i.image
                }
            })
            return finaldata
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const getspecscategorydropdown = (type) => {
    return async (dispatch, getState) => {
        const state = getState();
        return await axiosInstance({
            url: `/api/drink_category/get_all_categories_for_hotel/${type}`,
            method: "GET",
        }).then((res) => {
            console.log("response in category,js 47", res);
            const finaldata = res?.data?.data?.map((i) => {
                return {
                    value: i.category_id,
                    label: i.drink_category_name,
                    image: i.image
                }
            })
            return finaldata
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
export const putCourse = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course/${id}`,
            method: "PUT",
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
export const putCourseUpdateCourseDetail = (data, id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course/${id}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(id))

            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const createChapter = (data, course_id) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course-chapter/add-new-courseChapter`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(course_id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putChapter = (data, Chapterid, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course-chapter/${Chapterid}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putModule = (data, moduleId, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course-module/${moduleId}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putModulePageContent = (data, modulePageId, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course-module-page/${modulePageId}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putModuleVideo = (data, modulePageId, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course_module_videos/update_course_module_videos/${modulePageId}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const createModule = (data, course_id) => {
    return async (dispatch) => {
        return await axiosInstance({
            url: `/api/course-module/add-new-courseModule`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(course_id))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const createModulePage = (data, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course-module-page/add-new-course-module-page`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const createModuleVideo = (data, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course_module_videos/add_new_course_module_videos`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const createModuleQuestions = (data, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/module_question/add_new_module_question`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putModuleQuestion = (data, moduleid, courseId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/module_question/${moduleid}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getCoursesDetail(courseId))
            return res
        }).catch((err) => {
            console.log(err)
            return { error: true, message: err }
        });
    };
};
export const putModulePage = (data, modulepageid, moduleid) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course-module-page/${modulepageid}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getModuleDetail(moduleid))
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
export const deleteFlashcard = (productId, subcategoryId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/flashcard/${productId}`,
            method: "DELETE"
        }).then((res) => {
            // toastify
            dispatch(getFlashCardsBySubcategoryId(subcategoryId))
            successtoast({ message: `Deleted Successfully` })
            return res
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const deleteCourse = (productId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/course/${productId}`,
            method: "DELETE"
        }).then((res) => {
            // toastify
            dispatch(getCourses())
            successtoast({ message: `Deleted Successfully` })
            return res
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const deleteFlashcardcategory = (productId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/flashcard_category/${productId}`,
            method: "DELETE"
        }).then((res) => {
            // toastify
            dispatch(getFlashcardCoursesPage())
            successtoast({ message: `Deleted Successfully` })
            return res
        }).catch((err) => {
            console.log(err)
        });
    };
};
export const deleteFlashcardSubcategory = (productId, catId) => {
    return async (dispatch) => {

        return await axiosInstance({
            url: `/api/flashcard_subcategory/${productId}`,
            method: "DELETE"
        }).then((res) => {
            // toastify
            dispatch(getFlashcardSubcategories(catId))
            successtoast({ message: `Deleted Successfully` })
            return res
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
export const emptyScore = () => {

    return async (dispatch, getState) => {
        dispatch(
            learnSlice.actions.emptyscoreCard()
        );
    };
};

export default learnSlice.reducer;
