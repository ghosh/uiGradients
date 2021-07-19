import { useState, useEffect } from "react"

/**
 * Handles keyboard events
 * @param targetKey Key code for key
 * @example const aPress = useKeyPress("KeyA");
 */
function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false)

  useEffect(() => {
    const downHandler = (e: KeyboardEvent): void => {
      if (e.code === targetKey) {
        setKeyPressed(true)
      }
    }

    const upHandler = (e: KeyboardEvent): void => {
      if (e.code === targetKey) {
        setKeyPressed(false)
      }
    }

    document.addEventListener("keydown", downHandler)
    document.addEventListener("keyup", upHandler)
    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener("keydown", downHandler)
      document.removeEventListener("keyup", upHandler)
    }
  }, [targetKey])

  return keyPressed
}

export default useKeyPress
