import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  questions: [
    {
      id: 1,
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['<script>', '<js>', '<javascript>', '<code>'],
      correct: '<script>',
      selected: null
    },
    {
      id: 2,
      question: 'What are variables used for in JavaScript Programs?',
      options: [
        'Storing numbers, dates, or other values',
        'Varying randomly',
        'Causing high-school algebra flashbacks',
        'None of these'
      ],
      correct: 'Storing numbers, dates, or other values',
      selected: null
    }
  ]
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const q = state.questions.find(q => q.id === questionId);
      if (q) q.selected = answer;
    },
    resetQuiz: (state) => {
      state.questions.forEach(q => (q.selected = null));
    }
  }
});

export const { selectAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
