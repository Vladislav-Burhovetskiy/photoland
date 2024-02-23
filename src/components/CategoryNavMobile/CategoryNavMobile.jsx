import CategoryNav from "../CategoryNav/CategoryNav";
import { FiX } from "react-icons/fi";

export default function CategoryNavMobile({ openMenu }) {
  return (
    <div>
      <FiX onClick={openMenu}/>
      <CategoryNav />
    </div>
  );
}
