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
  const questions: any = items;

  return (
    <Container>
      <Header>The Quiz</Header>
      {questions.items.map((item: any) => (
        <Question question={item.question} key={item.key} />
      ))}
      <Submit />
    </Container>
  );
};

export default Quiz;
