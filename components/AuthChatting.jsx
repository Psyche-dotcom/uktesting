import { useState } from "react";
import Link from "next/link";
import SignLogModal from "./ForgotPasswordModal";
import PurchaseTimeModal from "./PurchaseTimeModal";

const AuthChatting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const handleValueChange = (value) => {
    setIsOpen(false);
    // console.log(value);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className=" border-b-2 py-2 md:border-0">
      <button
        onClick={openModal}
        className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
      >
        Start chatting
      </button>
      {isOpen && <PurchaseTimeModal onValueChange={handleValueChange} />}
    </div>
  );
};

export default AuthChatting;
