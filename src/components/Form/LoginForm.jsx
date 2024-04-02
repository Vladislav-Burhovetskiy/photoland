import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { useLoginContext } from "../../hooks/useLoginContext";
import { HiOutlineUserCircle } from "react-icons/hi2";
import "./LoginForm.scss";

export default function LoginForm() {
  const navigate = useNavigate();
  const { handleLogin } = useLoginContext();

  const handleSubmit = (username) => {
    navigate(-1);
    handleLogin(username);
  };

  return (
    <div className="login">
      <div className="login-avatar">
        <HiOutlineUserCircle className="login-avatar" />
      </div>
      <p className="login-text">Enter your Username</p>
      <Form
        onSubmit={handleSubmit}
        type="text"
        placeholder="Your Username..."
        buttonContent="Login"
        maxValue="16"
      />
    </div>
  );
}
