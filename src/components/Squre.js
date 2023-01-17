import React from 'react'
import "../App.css"

function Squre({val, chooseSqure}) {
  return (
    <div className='square' onClick={chooseSqure}>
        {val}
    </div>
  )
}

export default Squre