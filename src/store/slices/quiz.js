import axiosInstance from "@/components/Auth/axios";
import { successtoast } from "@/components/tostify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allquiz: [],
    quiz: [],
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setAllQuizes: (state, action) => {

            state.allquiz = action.payload
        },
        setQuizDetails: (state, action) => {
            state.quiz = action.payload
        },
        addNewQuestion: (state, action) => {
            state.quiz = [...state.quiz, action.payload]
        },

        emptyAllQuiz: (state) => {
            state.allquiz = []
            state.quiz = []
        }
    },
});



export const addnewQuiz = (data) => {
    return async (dispatch) => {
        return axiosInstance({
            url: `api/quiz/add_new_quiz`,
            method: "POST",
            data
        }).then((res) => {
            dispatch(getallquizByCat())
            successtoast({ message: "Added Successfully" })
        })

    }


}

export const updateQuizById = (id, data) => {

    return async (dispatch) => {
        return axiosInstance({
            url: `api/quiz/${id}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getallquizByCat())
            successtoast({ message: "Updated Successfully" })
        })

    }
}

export const deleteQuizById = (id) => {

    return async (dispatch) => {
        return axiosInstance({
            url: `api/quiz/${id}`,
            method: "DELETE",
        }).then((res) => {
            dispatch(getallquiz())
            successtoast({ message: "deleted succesfully" })
        })

    }
}


export const getallquiz = () => {
    return async (dispatch) => {
        return axiosInstance({
            url: `/api/quiz/get_all_quiz`,
            method: "GET",
        }).then((res) => {
            const { data } = res
            dispatch(quizSlice.actions.setAllQuizes(data.data))
        })

    }
}
export const getallquizByCat = () => {
    return async (dispatch) => {
        return axiosInstance({
            url: `/api/quiz/get_all_quiz_category/get_quiz_category_list_with_quiz_list`,
            method: "GET",
        }).then((res) => {
            const { data } = res
            dispatch(quizSlice.actions.setAllQuizes(data.data))
        })

    }
}

export const getQuizById = (id) => {
    return async (dispatch) => {
        return axiosInstance({
            url: `/api/quiz_question/get_all_quiz_question_by_quiz_id/${id}`,
            method: "GET",
        }).then((res) => {
            const { data } = res

            dispatch(quizSlice.actions.setQuizDetails(data.data))
        })

    }
}


export const addQuestion = (data) => {
    return async (dispatch) => {
        return axiosInstance({
            url: `/api/quiz_question/add_new_quiz_question`,
            method: "POST",
            data
        }).then((res) => {

            const { data } = res
            successtoast({ message: "Question Added Succesfully" })
            dispatch(quizSlice.actions.addNewQuestion(data.data))
        })

    }
}


export const deleteQuizQuestionById = (id, quiz_id) => {

    return async (dispatch) => {
        return axiosInstance({
            url: `api/quiz_question/${id}`,
            method: "DELETE",
        }).then((res) => {
            dispatch(getQuizById(quiz_id))
            successtoast({ message: "deleted succesfully" })
        })

    }
}

export const updateQuizQuestionById = (id, quiz_id, data) => {

    return async (dispatch) => {
        return axiosInstance({
            url: `api/quiz_question/${id}`,
            method: "PUT",
            data
        }).then((res) => {
            dispatch(getQuizById(quiz_id))
            successtoast({ message: "Updated Successfully" })
        })

    }
}

export const emptyAllQuizList = () => {

    return async (dispatch) => {
        dispatch(
            quizSlice.actions.emptyAllQuiz()
        );
    };
};



export default quizSlice.reducer;
