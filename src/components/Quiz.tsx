import { useState } from "react";
import Question from "./Question";
import Submit from "./Submit";

const Quiz = () => {
  const questions = [
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
  ];

  return (
    <>
     { questions.map((item) => <Question question={item.question} id={item.id} />) 
     }
    <Submit />
    </>
  );
};

export default Quiz;
