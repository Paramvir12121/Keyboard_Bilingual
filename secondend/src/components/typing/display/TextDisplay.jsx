import React from 'react'

const TextDisplay = ({displayText,cursorIndex,isWrongKey}) => {
  return (
    <>
    {displayText.split('').map((char, index) => (
              <span 
                key={index} 
                className={`character ${index === cursorIndex ? (isWrongKey ? 'cursor wrong' : 'cursor') : ' '}`}
              >
                {char}
                {char === ' ' ? <span>&nbsp;</span> : null}
              </span>
            ))}</>
  )
}

export default TextDisplay