import React from 'react'
import styles from "./button.module.css"

export const Button: React.FC<{ color: string, addClick: () => void }> = ({ color, addClick }) => {
  return (
    <div
      className={`${styles.btn}`}
      style={{ background: `${color}` }}
      onClick={() => {
        addClick;
        alert(`My color is ${color}`)
      }}>
      Click me to see my color's name.</div>
  )
}
