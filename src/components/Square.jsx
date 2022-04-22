import React from 'react'
const Square = ({value,onClick,isWinningSquare}) => {
  console.log("squre rerander!");
  return (
    <button 
     type="button" 
     className='square' 
     onClick={onClick}
     style={{fontWeight: isWinningSquare? 'bold':'normal'}}
     >{value}</button>
  )
}

export default Square;