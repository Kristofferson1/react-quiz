import { useState } from "react";
import Question from "./Question";
import Submit from "./Submit";
import styled from "styled-components";

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

const Header = styled.h1`
  color: #fff;
  justify-content: center;
  text-align: center;
`;


const Quiz = (items: any) => {
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
    <Container>
    <Header>The Quiz</Header>
     { questions.map((item:any) => <Question question={item.question} id={item.id} />) 
     }
     {/* {console.log("Inside Quiz: ", questions)} */}
    <Submit />
    </Container>
  );
};

export default Quiz;
