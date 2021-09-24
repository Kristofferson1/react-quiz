import { AnyAction } from "redux";

export const initialState: any = {
  questions: [
    {
      key: 0,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "Video streaming website YouTube was purchased in it&#039;s entirety by Facebook for US$1.65 billion in stock.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      key: 1,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "It is automatically considered entrapment in the United States if the police sell you illegal substances without revealing themselves.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      key: 2,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "Nutella is produced by the German company Ferrero.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      key: 3,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "&quot;Ananas&quot; is mostly used as the word for Pineapple in other languages.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      key: 4,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "The color orange is named after the fruit.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      key: 5,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "You can legally drink alcohol while driving in Mississippi.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      key: 6,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "On average, at least 1 person is killed by a drunk driver in the United States every hour.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      key: 7,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "In 2010, Twitter and the United States Library of Congress partnered together to archive every tweet by American citizens.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      key: 8,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "When you cry in space, your tears stick to your face.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      key: 9,
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "Vietnam&#039;s national flag is a red star in front of a yellow background.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ],
  points: 0,
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "loadQuestions":
      console.log("Inside reducer - loadQuestions");
      return state;
    case "showQuestions":
      console.log("Inside reducer - showQuestions");
      return state;
    case "fillQuestions":
      console.log("Inside reducer - fillQuestions");
      return state.questions;
    default:
      return state;
  }
};

export default reducer;
