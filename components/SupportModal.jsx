import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SupportModal = ({ onValueSupportChange }) => {
  const closeModal = () => {
    const value = false;
    onValueSupportChange(value);
  };

  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay">
        <div className="relative contain-modal-content rounded-lg">
          <div className="modal-content bg-white p-4 rounded-lg text-center">
            <h1 className="modal-header">Visitor settings</h1>
            <p className="text-gray-700 mb-16">
              You have questions or need help? Contact us at any time at
              <Link href="/" className=" underline pl-1">
                hello@luckycrush.live
              </Link>
            </p>
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
