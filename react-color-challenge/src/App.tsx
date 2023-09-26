import { useState, useEffect, useCallback } from "react"
import "./App.scss"
import { getColors } from "./util/mockAPI"
import { MemoizedButton } from "./components/button"

function App() {

  // state for holding click count and colors arr from API
  const [totalBtnClicks, setTotalBtnClicks] = useState<number>(0)
  const [colors, setcolors] = useState<string[]>([])

  // useCallback used to send reference to the exact same function every time to button component to avoid a change in props and cause re-render
  const handleCallback = useCallback(() => setTotalBtnClicks(prevState => prevState + 1), [])

  // initial effect to grab colors from API
  useEffect(() => {
    const getColorList = async () => {
      try {
        const colors: string[] = await getColors()
        setcolors(colors)
      } catch (error) {
        alert("Someting went wrong calling Mock API...")
      }
    }
    getColorList()
  }, [])

  return (
    <div className="container">
      <h1>React Color Challenge</h1>
      <p>Total button Clicks: {totalBtnClicks}</p>
      <div className="innerContainer">
        {colors.length > 0 && colors.map((color: string, index: number) => (
          <MemoizedButton key={index++} color={color} addClick={handleCallback} />
        ))}
      </div>
    </div>
  )
}

export default App
