import React, { useState, useEffect } from "react";
import useSWR from "swr";
import CustomDropdown from "./CustomDropdown";
import AccountDropdown from "./AccountDropdown";
import BalanceDropDown from "./BalanceDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import SettingsModal from "./SettingsModal";
import SupportModal from "./SupportModal";
import SignUpModal from "./SignUpModal";
import ClockBalanceDropDown from "./ClockModal";
import AuthChatting from "./AuthChatting";
import SelectInputForm from "./SelectInputForm";
import IframeComponent from "./IFrame";
import SignupLoginFemale from "./SignupLoginFemale";
import SignupFemale from "./SignupFemale";
import ForgotPasswordModal from "./ForgotPasswordModal";
import SignupSuccessModal from "./SignUpSuccessModal";
import AccountDetailsModal from "./AccountDetailsModal";
import UserName from "./UserName";
import EmailModal from "./EmailModal";
import SignupLogin from "./SignupLogin";

export default function HerosectionMale() {
  // const token = localStorage.getItem("token");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");

    setToken(localToken);
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSignLogModal, setShowSignLogModal] = useState(false);
  const [showFemaleLogin, setShowFemaleLogin] = useState(false);
  const [showSignupFemale, setShowSignupFemale] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSignupSuccess, setShowSignupSuccess] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [loginF, setLoginF] = useState(false);
  const [signupF, setSignupF] = useState(false);
  const [username, setUsername] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openSettings = () => {
    setShowSettings(true);
    setIsOpen(false);
  };
  const openSupportModal = () => {
    setShowSupportModal(true);
    setIsOpen(false);
  };
  const handleLogin = () => {
    setLogin(true);
    setSignup(false);

    setShowSignLogModal(true);
    setIsOpen(false);
  };
  const handleLoginF = () => {
    setLoginF(true);
    setSignupF(false);

    setShowFemaleLogin(true);
    setIsOpen(false);
  };
  const handleSignupF = () => {
    setShowSignupFemale(true);
  };
  const handleSignUp = () => {
    setLogin(false);
    setSignup(true);

    setShowSignLogModal(true);
    setIsOpen(false);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setDropdownOpen(false);
  };
  const handleValueChange = (value) => {
    setShowSignLogModal(value);
  };
  const handleClosedChange = (value) => {
    setShowSignupModal(value);
  };
  const handleFemaleValueChange = (value) => {
    setShowFemaleLogin(value);
  };
  const handleFemaleValueChangePopup = (val) => {
    setShowSignupFemale(val);
  };
  const handleCloseSignChange = (val) => {
    setShowSignupFemale(val);
  };
  const handleSettingsChange = (value) => {
    setShowSettings(value);
  };
  const handleSupportChange = (value) => {
    setShowSupportModal(value);
  };
  const handleForgotChange = (value) => {
    setShowForgotModal(value);
  };
  const handleValueForgotClose = (value) => {
    setShowForgotModal(value);
  };
  const openSignupModal = () => {
    setShowSignupModal(true);
  };
  const handleSignupSuccessChange = (value) => {
    setShowSignupSuccess(value);
  };
  const handleCloseSuccessSignup = (value) => {
    setShowSignupSuccess(value);
  };
  const handleValueProfileInfo = (value) => {
    setShowAccountDetails(value);
    setIsOpen(false);
  };
  const handleAccountDetailsChange = (value) => {
    setShowAccountDetails(value);
  };

  const handleUserChange = (value) => {
    setUsername(value);
  };
  const handleMailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setShowForgotModal(value);
  };
  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  return (
    <section
      className="view-page md:mb-10 text-center md:pb-12 md:pt-12"
      id="element1"
    >
      <h4 className=" text-4xl text-black mb-10 hidden md:block">
        Uk<span className="font-semibold">Crush</span>
      </h4>

      <div className="">
        <nav className="md:hidden upper">
          <ul className="flex justify-between">
            <button onClick={openModal} className="mr-auto">
              <FontAwesomeIcon icon={faBars} className="f-icon" />
            </button>
            {isOpen && (
              <div className="modalNav-overlay relative">
                <button onClick={closeModal}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="f-icon absolute right-[16px] top-[16px] bg-white rounded-full p-1"
                  />
                </button>
                <div
                  className=" bg-white rounded-lg text-center"
                  style={{ width: "15rem" }}
                >
                  <nav className="md:hidden bg-white text-black side-bar">
                    <SelectInputForm />
                    {!token && (
                      <button
                        onClick={handleLogin}
                        className="block border-b-2 py-2 md:border-0 w-full"
                      >
                        Login
                      </button>
                    )}
                    {!token && (
                      <button
                        onClick={handleSignUp}
                        className="block border-b-2 py-2 md:border-0 w-full"
                      >
                        SignUp
                      </button>
                    )}

                    <button
                      onClick={openSettings}
                      className="border-b-2 py-2 md:border-0"
                    >
                      Settings
                    </button>
                    <button
                      onClick={openSupportModal}
                      className=" border-b-2 py-2 md:border-0"
                    >
                      Support
                    </button>
                    {token && (
                      <div className="py-3 border-b-2">
                        <AccountDropdown
                          anchorEl={anchorEl}
                          onClose={handleDropdownClose}
                          onValueProfileInfo={handleValueProfileInfo}
                        />
                      </div>
                    )}
                    {token && (
                      <div className="py-3 border-b-2">
                        <BalanceDropDown className="py-3 border-b-2" />
                      </div>
                    )}
                  </nav>
                </div>
              </div>
            )}
            <button className="hidden">
              <svg
                fill="#f9096c"
                width="40px"
                height="40px"
                viewBox="0 0 200 200"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </button>
            {!token && (
              <button onClick={handleLogin}>
                <FontAwesomeIcon icon={faUser} className="f-icon" />
              </button>
            )}
            {token && <ClockBalanceDropDown />}
          </ul>
        </nav>
      </div>
      {showSettings && (
        <SettingsModal onChangeSettingModal={handleSettingsChange} />
      )}
      {showSupportModal && (
        <SupportModal onValueSupportChange={handleSupportChange} />
      )}
      {showSignLogModal && (
        <SignupLogin
          log={login}
          sign={signup}
          onValueSignChange={handleValueChange}
          onValueForgotChange={handleForgotChange}
          onValueSignupSuccessChange={handleSignupSuccessChange}
        />
      )}

      {showSignupModal && <SignUpModal onClosedChange={handleClosedChange} />}
      {showAccountDetails && (
        <AccountDetailsModal
          onValueAccDetailsChange={handleAccountDetailsChange}
          onvalueUserChange={handleUserChange}
          onValueMailChange={handleMailChange}
          onValuePasswordChange={handlePasswordChange}
        />
      )}
      {showForgotModal && (
        <ForgotPasswordModal onValueForgotClose={handleValueForgotClose} />
      )}
      {username && <UserName onValueUsernameChange={handleUsernameChange} />}
      {email && <EmailModal onValueEmailChange={handleEmailChange} />}
      <div className="card-view rounded-lg shadow-xl md:pb-36 overflow-hidden w-100 md:w-75">
        <nav className="hidden md:block bg-white text-black py-5 px-10 mb-20">
          <div className="flex">
            <div className="flex gap-3 mr-auto items-center">
              <button
                onClick={openSupportModal}
                className=" border-b-2 py-2 md:border-0"
              >
                Support
              </button>
              <CustomDropdown
                anchorEl={anchorEl}
                onClose={handleDropdownClose}
              />
            </div>
            <div className="flex gap-3 items-center">
              <button
                onClick={openSettings}
                className="border-b-2 py-2 md:border-0"
              >
                Settings
              </button>
              {!token && (
                <button
                  onClick={handleLogin}
                  className="block border-b-2 py-2 md:border-0 w-full"
                >
                  Login
                </button>
              )}
              {!token && (
                <button
                  onClick={handleSignUp}
                  className="block border-b-2 py-2 md:border-0 w-full"
                >
                  SignUp
                </button>
              )}

              {token && (
                <AccountDropdown
                  anchorEl={anchorEl}
                  onClose={handleDropdownClose}
                  onValueProfileInfo={handleValueProfileInfo}
                />
              )}
              {token && <BalanceDropDown />}
            </div>
          </div>
        </nav>

        {showSignupSuccess && (
          <SignupSuccessModal
            onValueCloseSuccessSignup={handleCloseSuccessSignup}
          />
        )}
        <h3 className="text-black hidden md:block text-4xl font-semibold mb-10">
          Welcome to the UkCrush video chat
        </h3>
        <h3 className="text-black block md:hidden text-4xl font-semibold mb-10 mt-12">
          Welcome to the
          <br></br>UkCrush video chat
        </h3>
        <h6 className="mt-3">
          <span className="font-bold text-blue">Men</span> are randomly paired
          with <span className="text-pink font-bold">women.</span>
        </h6>
        <h6 className="mb-3">
          <span className="text-pink font-bold">Women</span> are randomly paired
          with <span className="men font-bold text-blue">men.</span>
        </h6>
        <h3 className="text-black text-2xl font-semibold my-10">
          Click to start a chat
        </h3>
        <h6 className="text-semibold text-xl mb-4">
          1 million members from 100+ countries!
        </h6>
        {token && <AuthChatting />}
        <p>You will be asked to activate your camera</p>
      </div>
    </section>
  );
}
