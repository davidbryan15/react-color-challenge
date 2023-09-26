import React from 'react'
import "./button.scss"

export const Button: React.FC<{ color: string, addClick: () => void }> = ({ color, addClick }) => {
  return (
    <div
      className="btn"
      style={{ background: `${color}` }}
      onClick={() => {
        addClick();
        alert(`My color is ${color}`)
      }}>
      Click me to see my color's name.</div>
  )
}

