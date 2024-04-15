import { useState, useCallback } from "react";

export default function useToggle(value = false) {
  const [on, setOn] = useState(value);

  const toggle = useCallback(() => {
    setOn((prevOn) => !prevOn);
  }, []);

  return [on, toggle];
}
