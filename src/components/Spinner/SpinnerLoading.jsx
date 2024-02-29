import ClipLoader from "react-spinners/ClipLoader";
import "./SpinnerLoading.scss"

export default function SpinnerLoading() {
  return (
    <div className="spinner-loading">
      <ClipLoader
        color="#8d9184"
        loading
        size={70}
        speedMultiplier={0.7}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
