
// Simple Promise resolve with array of colors, no need for reject as this resembles Mock API. Add setTimeout() if we want to experience a time delay between req and res
export const getColors: () => Promise<string[]> = () => {
  const colors: string[] = ["black", "red", "green", "blue", "#2288AA", "rgb(255, 20, 25)"]

  return Promise.resolve(colors)
}