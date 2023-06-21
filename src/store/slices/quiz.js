import axiosInstance from "@/components/Auth/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allquiz: [{ name: "test1", image: null }],
    quiz: {}
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
        emptyAllQuiz: (state) => {
            state.allquiz = []
            state.quiz = {}
        }
    },
});



export const addnewQuiz = (newQuiz) => {
    return async (dispatch, getState) => {
        const state = getState()
        const oldquizes = state.quiz.allquiz
        dispatch(quizSlice.actions.setAllQuizes([...oldquizes, newQuiz]))
    }
}


export const emptyAllQuizList = (productType) => {

    return async (dispatch, getState) => {
        dispatch(
            quizSlice.actions.emptyAllQuiz()
        );
    };
};

export default quizSlice.reducer;
