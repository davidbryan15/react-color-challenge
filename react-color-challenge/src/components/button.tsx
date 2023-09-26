import React, { memo } from 'react'
import "./button.scss"

export const Button: React.FC<{ color: string, addClick: () => void }> = ({ color, addClick }) => {

  //consolidated function to use between onKeyUp and onClick event to update within 1 area
  const handleDomEvent: () => void = () => {
    console.log(`${color} button has rendered`)
    addClick();
    alert(`My color is ${color}`)
  }

  return (
    <div
      //@Todo - Create a dynamic way to change font color based on background color
      className="btn"
      style={{ background: `${color}` }}
      tabIndex={0}
      onKeyUp={event => {
        if (event.key === "Enter" || event.key === " ")
          handleDomEvent()
      }}
      onClick={() => {
        handleDomEvent()
      }}>
      Click me to see my color's name.</div>
  )
}


export const MemoizedButton = memo(Button)