import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDataFetching } from "@/service/apiCalls/Fetcher";

const AccountDetailsModal = ({
  onValueAccDetailsChange,
  onvalueUserChange,
  onValueMailChange,
  onValuePasswordChange,
}) => {
  // const { data, error } = useDataFetching("/api/data");

  const value = false;
  const username = true;
  const mail = true;
  const password = true;

  const closeModal = () => {
    onValueAccDetailsChange(value);
  };

  const editUsername = () => {
    onvalueUserChange(username);
  };

  const editMail = () => {
    onValueMailChange(mail);
  };

  const editPassword = () => {
    onValuePasswordChange(password);
  };
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  // if (!data) {
  //   return <div>loading...</div>;
  // }
  return (
    <div className="modal-overlay">
      <div className="relative contain-modal-content rounded-lg">
        <div
          className="modal-content bg-white rounded-lg"
          style={{ height: "75%" }}
        >
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
          </button>

          <div className="pb-10 px-10 bg-white rounded-lg m-auto py-4">
            <h4 className="text-3xl text-semibold mb-2 text-black text-center">
              Account settings
            </h4>
            <p className="mb-2 text-black">
              On LuckyCrush, men are connected with random women, and women with
              random men. This member account is a male member account. Was it a
              mistake?{" "}
              <Link href="#" className="text-pink underline pr-1">
                Click here
              </Link>
              Click here to log out and reset your gender settings
            </p>
            <div className="flex gap-2 justify-center">
              <p>Username: hhabbey05</p>
              <button className="text-pink" onClick={editUsername}>
                Edit
              </button>
            </div>
            <div className="flex gap-2 justify-center">
              <p>Email: hhabbey05@gmail.com </p>
              <button className="text-pink" onClick={editMail}>
                Edit
              </button>
            </div>
            <div className="flex gap-2 justify-center">
              <p>Password</p>
              <button className="text-pink" onClick={editPassword}>
                Edit
              </button>
            </div>
            <p className="mb-2">
              Note: Your username is the only information other users can see.
              All other information is strictly confidential.
            </p>
            <button className="btn-custom">Delete my account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsModal;
