import { useEffect, useState } from 'react'
import { Board } from './components/Board/Board'
const emojiList = [...'💀👻🧛🌮🎱🍬🍕🦖']

function App() {
  const [shuffledCards, setShuffledCards] = useState([])

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
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    console.log(a)
    return a
  }

  return <Board cards={shuffledCards}/>
}

export default App
