import { Outlet } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import useToggle from "../hooks/useToggle";
import { useLoginContext } from "../hooks/useLoginContext";

export default function AuthRequired() {
  const { user } = useLoginContext();
  const [modalIsOpen, toggleModal] = useToggle(true);

  if (!user) {
    return (
      <>
        {modalIsOpen && (
          <Modal
            title="Login first!"
            text="Please login first to get discount"
            toggleModal={toggleModal}
            authLink={"/photoland/login"}
          />
        )}
      </>
    );
  }

  return <Outlet />;
}
