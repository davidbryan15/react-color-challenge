import { useState, useEffect } from "react"
import "./App.scss"
import { getColors } from "./util/mockAPI"
import { Button } from "./components/button"

function App() {

  const [totalBtnClicks, setTotalBtnClicks] = useState<number>(0)
  const [colors, setcolors] = useState<string[]>([])

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
    <>
      <div className="container">
        <h1>Color Challenge</h1>
        <p>Total button Clicks: {totalBtnClicks}</p>
        <div className="innerContainer">
          {colors.length > 0 && colors.map(color => (
            <Button color={color} addClick={() => setTotalBtnClicks(prevState => prevState + 1)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
