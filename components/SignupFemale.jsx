import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "@/service/apiCalls/Fetcher";

const SignupFemale = ({ onValueCloseSignChange }) => {
  const value = false;
  const closeModal = () => {
    onValueCloseSignChange(value);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    location: "",
    age: 0,
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: 1,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
    location: Yup.string().required("Location is required"),
    age: Number(Yup.string().required("Username is required")),
    phoneNumber: Yup.string().required("Phonenumber is required"),
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
  });

  const handleSubmit = async (values) => {
    try {
      const url = "https://ukcrushreal.onrender.com/api/user/register";
      console.log(values.name);
      console.log(values.email);
      console.log(values.password);
      const response = await postData(url, values);
      console.log("POST request successful:", response);
      onValueCloseSignChange(value);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div
        className="border-b-2 py-2 md:border-0 m-auto bg-white overflow-scroll"
        style={{ height: "75%" }}
      >
        <button onClick={closeModal} className="btn-custom">
          Close
        </button>
        <div className="pd-sm">
          <h3 className="font-semibold text-3xl">My account</h3>
          <p>Welcome! Let&apos;s start by creating an account.</p>
          <p>It only takes 3 minutes!</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="female-register">
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
                  placeholder="Location"
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
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmEmail" className="mb-3">
                  Confirm email
                </label>
                <Field
                  type="email"
                  name="confirmEmail"
                  placeholder="Confirm Email"
                  className="w-full"
                />
                <ErrorMessage
                  name="confirmEmail"
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
                  placeholder="Phone number"
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
                <label htmlFor="confirmpassword" className="mb-3">
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
              <div className="mb-5 flex gap-4">
                <p>
                  I am over 18 years old and I accept the{" "}
                  <button className="text-pink ml-auto">
                    Terms & Conditions.
                  </button>
                </p>
              </div>
              <button className="text-pink underline mr-4" onClick={closeModal}>
                Back
              </button>
              <button className="btn-custom" type="submit">
                Next
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupFemale;
