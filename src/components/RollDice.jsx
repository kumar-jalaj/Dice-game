 import { useState } from "react";
import styled from "styled-components"

 const RollDice = () => {
  const [currentDice, setCurrentDice] = useState();
  const generateRandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const Rolldice = () => {
    const randomNumber = generateRandomnumber(1,7);

    setCurrentDice((prev) => randomNumber);
  }
  
  return (
    <DiceContainer>
    <div className="dice" onClick={() => generateRandomnumber(1,7)}>
    <img src={`/images/dice/ Dice_$.png`} />
    </div>
    <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
 
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .dice{
    cursor: pointer;
  }

  p{
  font-size: 24px;
 }
`;