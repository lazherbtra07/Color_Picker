/* eslint-disable no-unused-vars */

import React, {useState} from "react"


function ColorPihker() {

  const [color, setcolor] = useState("#FFFFFF")

  function handelColorChange(event) {
    setcolor(event.target.value)
  }

  return(
    <>
      <div className="color-pikher-container" >
        <h1>color Pikher</h1>
        <div className="color-display" style={{background: color}}>
          <p>selected Color: {color} </p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handelColorChange}/>
      </div>
    </>
  )
}

export default ColorPihker