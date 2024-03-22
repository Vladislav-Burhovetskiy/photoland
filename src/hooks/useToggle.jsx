import { useState, useCallback } from "react";

export default function useToggle() {
  const [on, setOn] = useState(false);

  const toggle = useCallback(() => {
    setOn((prevOn) => !prevOn);
  }, []);

  return [on, toggle];
}
