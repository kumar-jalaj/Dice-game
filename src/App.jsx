import {useState} from "react"
import Startgame from "./components/startgame"
import GamePlay from "./components/GamePlay";

function App() {

  const [isGameStarted,setIsGameStarted]= useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return <>{isGameStarted ? <GamePlay /> : <Startgame
    toggle={toggleGamePlay}/>} </>;
}

export default App
 