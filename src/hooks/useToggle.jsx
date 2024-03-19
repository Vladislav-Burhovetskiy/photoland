import {useState} from "react"

export default function useToggle() {
  const [on, setOn] = useState(false)

  function handleToggle() {
      setOn(prevOn => !prevOn)
  }

  return [on, handleToggle];
}
