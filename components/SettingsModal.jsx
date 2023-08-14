import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SettingsModal = ({ onChangeSettingModal }) => {
  const router = useRouter();

  const closeModal = () => {
    const value = false;
    onChangeSettingModal(value);
  };

  function handleHome() {
    localStorage.removeItem("gender");
    window.location.reload();
  }

  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay">
        <div className="relative contain-modal-content rounded-lg">
          <div className="modal-content  bg-white p-4  text-center ">
            <h1 className="modal-header">Visitor settings</h1>
            <p className="text-gray-700 mb-8">
              On LuckyCrush, men are connected with random women, and women with
              random men. This visitor account is a{" "}
              <span className="font-bold">male </span>
              visitor account. Was it a mistake?{" "}
              <button className="text-pink underline" onClick={handleHome}>
                Click here{" "}
              </button>
              to log out and reset your gender settings.
            </p>
            <button
              className="rounded-md bg-pink text-white font-extrabold py-4 px-10 m-auto"
              onClick={closeModal}
            >
              Close
            </button>
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
