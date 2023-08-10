import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "@/service/apiCalls/Fetcher";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CustomModal from "./CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SignupLogin({
  log,
  sign,
  onValueSignChange,
  onValueForgotChange,
  onValueSignupSuccessChange,
}) {
  const value = false;
  const showForgot = true;
  const successChange = true;
  const [login, setLogin] = useState(log);
  const [signup, setSignup] = useState(sign);
  //Signup form initial values

  const initialSignupValues = {
    firstName: "",
    lastName: "",
    location: "",
    age: 0,
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: 0,
    // agreement: false,
  };
  //Signup form scheme

  const signupValidationSchema = Yup.object({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
    location: Yup.string().required("Location is required"),
    age: Number(Yup.string().required("Username is required")),
    phoneNumber: Yup.string().required("Phonenumber is required"),
    // gender: Yup.string().required("Gender is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required, should be greater than 6")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    // agreement: Yup.boolean().oneOf(
    //   [true],
    //   "You must agree to the terms and conditions"
    // ),
  });

  //Login form initial values

  const initialLoginValues = {
    email: "",
    password: "",
  };

  // Login Form Validation Schema
  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const [isOpen, setIsOpen] = useState(false);
  const showLogin = () => {
    setSignup(false);
    setLogin(true);
  };

  const showSignup = () => {
    setSignup(true);
    setLogin(false);
  };
  const openModal = (e) => {
    e.preventDefault();
    onValueSignChange(value);
    onValueSignupSuccessChange(successChange);
  };
  const closeModal = () => {
    setIsOpen(false);
    onValueSignChange(value);
  };

  const handleIsForgotOpen = (e) => {
    onValueForgotChange(showForgot);
    onValueSignChange(value);
    e.preventDefault();
  };
  const handleSignupSubmit = async (values) => {
    try {
      const url = "https://ukcrushreal.onrender.com/api/user/register";
      console.log(values.email);
      console.log(values.userName);
      console.log(values.password);
      console.log(values.confirmPassword);
      console.log(values.firstName);
      console.log(values.lastName);
      console.log(values.location);
      console.log(values.age);
      console.log(values.phoneNumber);
      console.log(values.gender);
      console.log(typeof values);

      // Use the postData function to make the POST request
      const response = await postData(url, values);

      // Handle the response if needed
      console.log("POST request successful:", response);

      onValueSignChange(value);
      onValueSignupSuccessChange(successChange);
    } catch (error) {
      // Handle errors
      console.error("Error making POST request:", error);
    }
  };

  const handleLoginSubmit = async (values) => {
    try {
      const url = "https://ukcrushreal.onrender.com/api/user/login";
      console.log(values.email);
      console.log(values.password);

      // Use the postData function to make the POST request
      const response = await postData(url, values);

      // Handle the response if needed
      console.log("POST request successful:", response);

      onValueSignChange(value);
    } catch (error) {
      // Handle errors
      console.error("Error making POST request:", error);
    }
  };
  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay">
        <div className="relative contain-modal-content rounded-lg">
          <div
            className="modal-content bg-white rounded-lg"
            style={{ height: "75%" }}
          >
            <div className="flex text-center" style={{ background: "#EAEAEA" }}>
              <button
                className={`w-full p-3 ${signup ? "class1" : "class2"}`}
                onClick={showSignup}
              >
                Signup
              </button>
              <button
                className={`w-full p-3 ${login ? "class1" : "class2"}`}
                onClick={showLogin}
              >
                Login
              </button>
            </div>
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button>
            {signup && (
              <div
                className="pd-sm m-auto overflow-scroll overflow-x-hidden"
                style={{ height: "75%" }}
              >
                <Formik
                  initialValues={initialSignupValues}
                  validationSchema={signupValidationSchema}
                  onSubmit={handleSignupSubmit}
                >
                  {({ isValid }) => (
                    <Form className="register text-start">
                      <div className="mb-4">
                        <label htmlFor="firstName" className="mb-3">
                          Firstname
                        </label>
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="Firstname"
                          className="w-full"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lastName" className="mb-3">
                          Lastname
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Lastname"
                          className="w-full"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="location" className="mb-3">
                          Location
                        </label>
                        <Field
                          type="text"
                          name="location"
                          placeholder="Location"
                          className="w-full"
                        />
                        <ErrorMessage
                          name="location"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="age" className="mb-3">
                          Age
                        </label>
                        <Field
                          type="number"
                          name="age"
                          placeholder="Age"
                          className="w-full"
                        />
                        <ErrorMessage
                          name="age"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="userName" className="mb-3">
                          Username
                        </label>
                        <Field
                          type="text"
                          name="userName"
                          placeholder="Username"
                          className="w-full"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="userName"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="email" className="mb-3">
                          Email
                        </label>
                        <Field type="text" name="email" placeholder="Email" />
                        <ErrorMessage
                          name="email"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="phoneNumber" className="mb-3">
                          Phone number
                        </label>
                        <Field
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          className="w-full"
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="mb-3">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="w-full"
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className="mb-3">
                          Confirm password
                        </label>
                        <Field
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm password"
                          className="w-full"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="span"
                          style={{ color: "red" }}
                        />
                      </div>

                      <div className="mb-5 flex items-center">
                        {/* <div
                          style={{ width: "40px" }}
                          className="mr-4 self-center"
                        >
                          <Field
                            type="checkbox"
                            className="accept"
                            name="agreement"
                          />
                          <ErrorMessage
                            name="agreement"
                            component="span"
                            style={{ color: "red", display: "block" }}
                          />
                        </div> */}
                        <p>
                          I am over 18 years old and I accept the{" "}
                          <Link
                            className="text-pink ml-auto"
                            target="_blank"
                            href="/"
                          >
                            Terms & Conditions.
                          </Link>
                        </p>
                      </div>
                      <button
                        className={`rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4 ${
                          !isValid ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        type="submit"
                        // disabled={!isValid}
                      >
                        Sign Up
                      </button>
                    </Form>
                  )}
                </Formik>
                <button className="text-pink underline" onClick={showLogin}>
                  I already have an account
                </button>
              </div>
            )}
            {login && (
              <div
                className="pd-sm m-auto text-start overflow-scroll overflow-x-hidden"
                style={{ height: "75%" }}
              >
                <Formik
                  initialValues={initialLoginValues}
                  validationSchema={loginValidationSchema}
                  onSubmit={handleLoginSubmit}
                >
                  <Form className="register">
                    <div className="mb-4">
                      <label htmlFor="email">Email</label>
                      <Field type="text" name="email" placeholder="Email" />
                      <ErrorMessage
                        name="email"
                        component="span"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full"
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        style={{ color: "red" }}
                      />
                    </div>
                    <button
                      className="text-pink underline block mb-4"
                      onClick={handleIsForgotOpen}
                      type="button"
                    >
                      Forgot Password
                    </button>
                    <button
                      className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4 block"
                      type="submit"
                    >
                      Login
                    </button>
                  </Form>
                </Formik>

                <button className="text-pink underline" onClick={showSignup}>
                  Create an account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
