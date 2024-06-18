import {create} from 'zustand'
import { Question } from '../types'
import { persist, devtools } from 'zustand/middleware';

interface State {
    questions: Question[];
    currentQuestion: number;
    fetchQuestion: (limit: number) => Promise<void>;
    selectAnswer: (questionId: number, answerIndex: number) => void;
    goNextQuestion: () => void;
    goPreviousQuestion: () => void;
    reset: () => void;
}

export const useQuestionStore = create<State>()(devtools(persist((set, get) => ({
    questions: [],
    currentQuestion: 0,

    fetchQuestion: async (limit: number) => {

        const res = await fetch('http://localhost:3000/data.json')
        const json = await res.json()

        const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

        set({questions}, false, 'FETCH_QUESTION')
    },

    selectAnswer: (questionId: number, answerIndex: number) => {
        const {questions} = get()
        // Usar structuredClone para clonar el objeto
        const newQuestions = structuredClone(questions)
        // Encontramos el índice de la pregunta
        const questionIndex = newQuestions.findIndex(q => q.id === questionId)
        // Obtenemos la información de la pregunta
        const questionInfo = newQuestions[questionIndex]
        // Verificamos si la respuesta elegida por el usuario es correcta
        const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
        // Cambiamos la información en la copia de la pregunta
        newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex
        }
        // Actualizamos el estado
        set({ questions: newQuestions }, false, 'SELECT_ANSWER')
    },

    goNextQuestion: () => {
        const {currentQuestion, questions} = get()
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            set({currentQuestion: nextQuestion}, false, 'NEXT_QUESTION')
        }
    },

    goPreviousQuestion: () => {
        const {currentQuestion} = get()
        const previousQuestion = currentQuestion - 1

        if (previousQuestion >= 0) {
            set({currentQuestion: previousQuestion}, false, 'PREVIOUS_QUESTION')
        }
        
    },

    reset: () => {
        set({questions: [], currentQuestion: 0}, false, 'RESET')
    }
}), {name: 'questions'})))