import React, { useState, useEffect} from 'react'
import '../numbergame/numbergame.scss'


let correctArr = '123456789101112131415.';
const NumberGame = () => {
  let randomArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, '.'];
  const random = (list) => {
    return [...list].sort(()=> Math.random() > 0.5 ? 1 : -1).slice(0,16) 
  }
  const [numberList, setNumberList] = useState(random(randomArr));
  const [seletedIndex, setSelectedIndex] = useState(null);
  const [count, setCount] = useState(0);
  const [isGame, setIsGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    if(numberList.join("") === correctArr){
      setCount(count + 1);
      setIsGame(false)
      setGameOver(true);
      setNumberList(random(randomArr));
    }
  }, [numberList]);
  
  
  const handleClick = (item) => {
    if (item === '.' && seletedIndex) {
      let tempArr = [...numberList];
      let indexArr = tempArr.indexOf(seletedIndex)
      let indexChanger = tempArr.indexOf('.')
      let temp = tempArr[indexArr];
      tempArr[indexArr] = tempArr[indexChanger];
      tempArr[indexChanger] = temp
      setNumberList(tempArr);
      setSelectedIndex(null);
      } else {
        setSelectedIndex(item);
      }
      
      
    }
    const playAgain = () =>{
      setIsGame(true);
      setGameOver(false);
      
    }
    
    return (
      <div className='container-one'>
      {isGame ? (<div className='Box'>
        {numberList.map((item) => {
          return (<button className={`btn ${seletedIndex === item && seletedIndex !== '' ? 'active' : '.'}`} onClick={() => handleClick(item)} key={item}>{item}</button>)
        })}
      </div>):(<div className='Win'>
        <button className='play_again' onClick={playAgain}>Start</button>
      </div>)}
      {gameOver ? (<><h1>Congratulations!! you have Won the Game</h1>
        <p>Your Socre: {count}</p></>) : ("")}

    </div>
  )
}

export default NumberGame