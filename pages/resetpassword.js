import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PasswordReset = () => {
  return (
    <>
      <div className="modal-overlay">
        <div
          className="modal-content bg-white rounded-lg"
          style={{ height: "75%" }}
        >
          {/* <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button> */}

          <div className="pd-sm bg-white rounded-lg pt-10">
            <h4 className="modal-header text-black text-center mb-5">
              Reset password
            </h4>
            <form className="register">
              <div className="mb-4">
                <label for="email" className="mb-3">
                  New password
                </label>
                <input type="text" placeholder="Email" className="w-full" />
              </div>
              <div className="mb-4">
                <label for="email" className="mb-3">
                  Confirm password
                </label>
                <input type="text" placeholder="Email" className="w-full" />
              </div>

              <Link className="btn-custom" href="/" type="submit">
                Send
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
