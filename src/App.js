import './App.css';
import { useState , useEffect } from 'react';
import Squre from './components/Squre';
 import { Patterns } from './components/Patterns';
import { getAllByAltText } from '@testing-library/react';


function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]) ;
  const[player, setplayer] = useState("O")
  const [result, setresult] = useState({winner: "none", state:"none"})

  useEffect(() => {
    checkWin();
    checkifTie();
    
    if(player == "X")
    {
      setplayer("O")
    }
    else
    {
      setplayer("X")
    }

  },[board]);

  useEffect(() => {
    if(result.state != "none" ){
      alert(`Game Finished The game winner is ${result.winner}`);
      restartGame();
    }
    
  }, [result]);

  const chooseSqure = (square) =>{
    setBoard(board.map((val, idx) => {
      if(idx == square && val == ""){
        return player
      }
      
        return val
      
    }))
     
    
  };

  const checkWin = () =>{
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if(firstPlayer == "") return;
      let foundWinnerPatten = true
      currPattern.forEach((idx) =>{
        if(board[idx] != firstPlayer){
            foundWinnerPatten = false
        }
      })
      
      if(foundWinnerPatten){
        setresult({winner: player , state:"won"})
      }
    });
  }

  const checkifTie = () => {
    let filled = true
    board.forEach((square) => {
      if(square == ""){
        filled = false
      }
    })
    if(filled){
      setresult({winner:"NO One", state:"Tied"});
    }
  }

  const restartGame = () => {
    setBoard(["","","","","","","","",""])
    setplayer("X")
  }

  return (
    <div className="App">
      <div className="board">
        <div className='row'>
        <Squre val={board[0]} chooseSqure={() => {chooseSqure(0)}} />
        <Squre val={board[1]} chooseSqure={() => {chooseSqure(1)}} />
        <Squre val={board[2]} chooseSqure={() => {chooseSqure(2)}} />
        </div>
        <div className='row'>
        <Squre val={board[3]} chooseSqure={() => {chooseSqure(3)}} />
        <Squre val={board[4]} chooseSqure={() => {chooseSqure(4)}} />
        <Squre val={board[5]} chooseSqure={() => {chooseSqure(5)}} />
        </div>
        <div className='row'>
        <Squre val={board[6]} chooseSqure={() => {chooseSqure(6)}} />
        <Squre val={board[7]} chooseSqure={() => {chooseSqure(7)}} />
        <Squre val={board[8]} chooseSqure={() => {chooseSqure(8)}} />
        </div>
      </div>
    </div>
  );
}

export default App;
