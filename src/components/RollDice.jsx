
import styled from "styled-components"

 const RollDice = (
  {currentDice, Rolldice}
 ) => {

  
  return (
    <DiceContainer>
    <div className="dice" onClick={() => Rolldice()}>
    <img src={`/images/dice/Dice_${currentDice}.png`} />
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