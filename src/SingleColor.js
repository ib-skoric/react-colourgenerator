import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColour }) => {

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(','); // this will return 255,255,255 for example
  const hexValue = `#${hexColour}`;

  const copyColour = () => {
      navigator.clipboard.writeText(hexValue);
  }

  useEffect(() => {
      const timeout = setTimeout(() => {
        setAlert(false);
      }, 3000)

      return () => clearTimeout(timeout);
  }, [alert])

  return(
     <article className={`color ${index > 10  && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})` }}
     onClick={() => {
       setAlert(true);
       copyColour();
     }}>
       <p className='percent-value'>{weight} %</p>
       <p className='color-value'>{hexValue}</p>
       {alert && <p className='alert'>Copied to clipboard</p>}
     </article>
     )
}

export default SingleColor
