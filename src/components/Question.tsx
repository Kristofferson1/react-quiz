import React, { useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
`;

const Question = ({ question, id }: any) => {
  const [checked, setChecked] = useState("");

  return (
    <Item className="question">
      <p>{question}</p>
      <div className="answers">
        {" "}
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="True"
                checked={checked === "True"}
                onClick={() => {
                  setChecked("True");
                }}
              />
              True
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="False"
                checked={checked === "False"}
                onClick={() => setChecked("False")}
              />
              False
            </label>
          </div>
        </form>
      </div>
    </Item>
  );
};

export default Question;
