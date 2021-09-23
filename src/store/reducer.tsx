import { AnyAction } from "redux";

export const initialState: any = {
          questions: [
        {
            id: 5,
            category: "General Knowledge",
            type: "boolean",
            difficulty: "easy",
            question: "Gumbo is a stew that originated in Louisiana.",
            correct_answer: "True",
            incorrect_answers: ["False"],
        },
        {
            id: 1,
            category: "General Knowledge",
            type: "boolean",
            difficulty: "easy",
            question: "French is an official language in Canada.",
            correct_answer: "True",
            incorrect_answers: ["False"],
        },
        {
            id: 2,
            category: "General Knowledge",
            type: "boolean",
            difficulty: "easy",
            question: "Bulls are attracted to the color red.",
            correct_answer: "False",
            incorrect_answers: ["True"],
        },
    ],
  points: 0
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "loadQuestions":
      return {
        ...state,
        questions: [
        {
            id: 0,
            category: "General Knowledge",
            type: "boolean",
            difficulty: "easy",
            question: "Gumbo is a stew that originated in Louisiana.",
            correct_answer: "True",
            incorrect_answers: ["False"],
        },
        {
            id: 1,
            category: "General Knowledge",
            type: "boolean",
            difficulty: "easy",
            question: "French is an official language in Canada.",
            correct_answer: "True",
            incorrect_answers: ["False"],
        },
        {
            id: 2,
            category: "General Knowledge",
            type: "boolean",
            difficulty: "easy",
            question: "Bulls are attracted to the color red.",
            correct_answer: "False",
            incorrect_answers: ["True"],
        },
    ],
        points: action.points
      };
    case "showQuestions":
        console.log(state.questions);
        return state;
    case "fillQuestions":
        console.log("Inside reducer - fillQuestions");
        return state.questions;
    default:
      return state;
  }
};

export default reducer;
