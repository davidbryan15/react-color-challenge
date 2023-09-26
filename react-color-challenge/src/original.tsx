
// Below is a stylesheet written in Sass. Sass is compiled to CSS. If you prefer, you may convert this to CSS.
// Pretend like this stylesheet is real, and that if you give an element the class name "button", it will be given a
// 1px thick, solid border. The other classes determine the color of that border.

// Note that there are 16,777,216 possible colors, multiplied by 3 (hex, RGB, HSL), plus all named colors. You cannot
// possibly include that many classes in this stylesheet.

// .button
//     border: 1px solid
//
// .black-background
//     border-color: black
//
// .red-background
//     border-color: red
//
// .blue-background
//     border-color: blue
//
// .green-background
//     border-color: green

// BONUS: Optimize this component using `React.memo`
// const Button = () => {
//   let colorClassName

  // TODO: Support arbitrary number of colors
  // switch (props.color) {
  //     case "black":
  //         colorClassName = "black-background"
  //         break
  //     case "red":
  //         colorClassName = "red-background"
  //         break
  //     case "blue":
  //         colorClassName = "blue-background"
  //         break
  //     case "green":
  //         colorClassName = "green-background"
  //         break
  //     default:
  //         console.log("Unknown color: " + props.color)
  //         break
  // }

  // BONUS: Make this button focusable for accessibility reasons
  // return (
  //     <div className={"button " + colorClassName} onClick={props.clickCallback}>
  //         Click me to see my color's name.
  //     </div>
  // )
// }

// const Container = () => {
//   const [clickCount, setClickCount] = useState(0)
  
  // BONUS: Use `useCallback` for any callbacks to improve rendering performance.
  // Ensure that the dependency array is correct.
  // const blackClick = () => {
  //     alert("My color is black.")
  //     setClickCount(clickCount + 1)
  // }
  // const redClick = () => {
  //     alert("My color is red.")
  //     setClickCount(clickCount + 1)
  // }
  // const blueClick = () => {
  //     alert("My color is red.")
  //     setClickCount(clickCount + 1)
  // }
  // const greenClick = () => {
  //     alert("My color is green.")
  //     setClickCount(clickCount + 1)
  // }

  // TODO: Support any number of valid colors gotten from an API. We don't want to hardcode any color names.
  //  If this list contains 100 colors, 100 buttons should be rendered. If it contains 2 colors, 2 should be rendered.
  //  Uncomment this array of colors and treat it as if it came from an API. Pretend like you don't know the contents
  //  of the array.
  // const colors = ["black", "red", "green", "blue", "#2288AA", "rgb(255, 20, 25)"]

  // return (
  //     <>
  //         <Button color={"black"} clickCallback={blackClick}/>
  //         <Button color={"red"} clickCallback={redClick}/>
  //         <Button color={"blue"} clickCallback={blueClick}/>
  //         <Button color={"green"} clickCallback={greenClick}/>
  //         <span>Total number of clicks: {clickCount}</span>
  //     </>
  // )
// }
