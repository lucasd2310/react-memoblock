import { useEffect, useState } from 'react'
import { Board } from './components/Board/Board'
const emojiList = [...'💀👻🧛🌮🎱🍬🍕🦖']

function App() {
  const [shuffledCards, setShuffledCards] = useState([])
  const [animation, setAnimation] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    const suffledEmojiList = shuffleArray([...emojiList, ...emojiList])
    setShuffledCards(
      suffledEmojiList.map((emoji, index) => ({
        index,
        emoji,
        flipped: false,
      }))
    )
  }, [])

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    console.log(a)
    return a
  }

  const handlerCardClick = (card) => {
    const cardFlipped = { ...card, flipped: true }
    let shuffledCardsCopy = [...shuffledCards]
    shuffledCardsCopy.splice(card.index, 1, cardFlipped)

    setShuffledCards(shuffledCardsCopy)

    if (selectedCard === null) {
      setSelectedCard(card)
    } else if (selectedCard.emoji === card.emoji) {
      setSelectedCard(null)
    } else {
      setAnimation(true)
      setTimeout(() => {
        shuffledCardsCopy.splice(card.index, 1, card)
        shuffledCardsCopy.splice(selectedCard.index, 1, selectedCard)
        setShuffledCards(shuffledCardsCopy)
        setSelectedCard(null)
        setAnimation(false)
      }, 1000)
    }
  }
// pendiente title
  return (
    <div>

      <Board
      cards={shuffledCards}
      handlerClick={handlerCardClick}
      animation={animation}
    />
    </div>
  )
}

export default App
