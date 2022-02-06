import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColour }) => {

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(','); // this will return 255,255,255 for example


  return(
     <article className={`color`} style={{backgroundColor: `rgb(${bcg})` }}>
       <p className='percent-value'>{weight} %</p>
       <p className='color-value'>#{hexColour}</p>
     </article>
     )
}

export default SingleColor
