import Card from './Card'
import '../styles/CardManager.css'
import React, { useEffect, useState } from 'react';
function CardManager(props) {

  const [cards, setCards] = useState(props.cards)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const shuffleCards = () => {
    let orderedCards = [];
    let usedNums = [cards.length];
    let currentNum = cards.length;
    while (orderedCards.length < cards.length) {
      while (usedNums.includes(currentNum)) {
        currentNum = Math.floor(Math.random() * cards.length);
      }
      usedNums.push(currentNum);
      orderedCards.push(cards[currentNum])
    }
    setCards(orderedCards)
  }

  useEffect(() => {
    shuffleCards()
    // eslint-disable-next-line
  }, [score])

  const activateCard = (e, card) => {
    if (!card.clickedOn) {
      card.clickedOn = true
      setScore(score + 1)
    }
    else {
      if (score > highScore)
        setHighScore(score)
      setScore(0)
      cards.forEach(card => card.clickedOn = false)
      shuffleCards()
    }
  }


  let returnJsx = <div className="CardManager">
      <div className='banner'>
        <div className='scoreDisplay'>Score: {score} <br></br>Highscore: {highScore}</div>
        </div>
      {cards.map(card =>
        <div className="CardFrame" onClick={event => activateCard(event, card)} key={card.key}><Card image={card.png}></Card></div>)}
    </div>;

  return returnJsx;
}

export default CardManager;
