import React from "react";
import styled from "styled-components";

export const Rules = () => {
  return (
    <RuleContainer>
      <h2>How To Play Dice Game</h2>
      <div className="text">
        <p>1.Select Any Number</p>
        <p>2.Click On Dice</p>
        <p>
          3.After click on dice if selected number is equal todice number you will
          get same point as dice {""}
        </p>
        <p>4.If you guess wrong two pint will be get deducted</p>
      </div>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 20px;
  }
  .text {
    margin-top: 24px;
  }
`;
