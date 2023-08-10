import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ForgotPasswordMail = ({ onValueForgotClose }) => {
  const value = false;
  const closeModal = () => {
    onValueForgotClose(value);
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="relative contain-modal-content rounded-lg">
          <div
            className="modal-content bg-white rounded-lg"
            style={{ height: "75%" }}
          >
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button>

            <div className="pd-sm bg-white rounded-lg pt-10">
              <h4 className="modal-header text-black text-center mb-5">
                Forgotten your password?
              </h4>
              <p>
                We have sent you an email with a link to your reset password. If
                it does not arrive in your inbox, please check your spam folder
              </p>

              <button className="btn-custom" type="submit">
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordMail;
