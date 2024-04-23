import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

export const usePaginationContext = () => useContext(PaginationContext);
