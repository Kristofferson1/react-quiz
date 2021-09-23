import React, { Component, useState } from "react";

const Question = () => {
  const [checked, setChecked] = useState("True");

  return (
    <div className="question">
      <p>Question</p>
      <div className="answers">
        {" "}
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="True"
                checked={checked == "True"}
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
                checked={checked == "False"}
                onClick={() => setChecked("False")}
              />
              False
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;
