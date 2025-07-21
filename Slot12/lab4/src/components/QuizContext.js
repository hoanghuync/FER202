import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

const initialQuizData = [
  {
    question: 'ReactJS là gì?',
    answers: ['Thư viện JavaScript để xây dựng giao diện người dùng', 'Ngôn ngữ lập trình', 'Hệ thống quản lý cơ sở dữ liệu'],
    correctAnswer: 'Thư viện JavaScript để xây dựng giao diện người dùng'
  },
  {
    question: 'JSX là gì?',
    answers: ['Ngôn ngữ lập trình', 'Định dạng file', 'Phần mở rộng cú pháp cho JavaScript'],
    correctAnswer: 'Phần mở rộng cú pháp cho JavaScript'
  }
];

export function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  return (
    <QuizContext.Provider value={{ quizData, setQuizData, selectedAnswers, setSelectedAnswers }}>
      {children}
    </QuizContext.Provider>
  );
}