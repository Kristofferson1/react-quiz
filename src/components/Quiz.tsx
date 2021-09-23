import { useState } from "react";
import Question from "./Question";

const Quiz = () => {
  const questions = [
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "Gumbo is a stew that originated in Louisiana.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "French is an official language in Canada.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "Bulls are attracted to the color red.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ];

  return <Question question={questions[1].question} />;
};
export default Quiz;
