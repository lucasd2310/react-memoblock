import './MemoBlock.css'

export function MemoBlock({ card, handlerClick, animation }) {
  return (
    <div
      className='memo-block'
      onClick={() => !card.flipped && !animation && handlerClick(card)}>
      <div
        className={`memo-block-inner ${card.flipped && 'memo-block-flipped'}`}>
        <div className='memo-block-back'></div>
        <div className='memo-block-front'>{card.emoji}</div>
      </div>
    </div>
  )
}
