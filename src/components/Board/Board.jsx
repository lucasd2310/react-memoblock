import { MemoBlock } from '../MemoBlock/MemoBlock'
import './Board.css'

export function Board({cards}) {
  return (
    <main className='board'>
      {cards.map((card, index) => {
        return <MemoBlock key={`${index}_${card.emoji}`} card={card}/>
      })}
    </main>
  )
}
