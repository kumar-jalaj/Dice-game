import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const[score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const Rolldice = (RollDice, currentDice) => {
    if(!selectedNumber){ 
      setError("You Have Not Selected Any Number*");
      return;
    }
    setError("");
    const randomNumber = generateRandomnumber(1,7);

    setCurrentDice((prev) => randomNumber);

    

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

const resetScore = () => {
  setScore(0);
}

  return (
    <MainContainer>
          <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector 
          error={error}
          setError = {setError}
          selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
          </div>
          <RollDice 
            currentDice={currentDice}
          Rolldice={Rolldice }/>
          <div className="btn">
            <OutlineButton
            onClick={resetScore}
            >Reset</OutlineButton> 
            <Button 
            onClick={
              () =>{
                setShowRules(!showRules)
              }
            }
            >Show Rule</Button>
          </div>

          {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.main`
background-color: #98EDF4;
min-height: 100vh;
padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btn{
    gap: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;