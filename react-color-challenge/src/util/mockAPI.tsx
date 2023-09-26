
export const getColors: () => Promise<string[]> = () => {
  const colors: string[] = ["black", "red", "green", "blue", "#2288AA", "rgb(255, 20, 25)"]

  return Promise.resolve(colors)
}