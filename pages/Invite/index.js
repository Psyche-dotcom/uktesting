import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "@/service/apiCalls/Fetcher";
import Image from "next/image";

const Invite = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    location: "",
    email: "",
    age: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    location: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    age: Yup.string().required("Age is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const url = "https://example.com/api/users";
      console.log(values.firstname);
      console.log(values.email);
      console.log(values.gender);
      console.log(values.age);

      // Use the postData function to make the POST request
      // const response = await postData(url, values);

      // Handle the response if needed
      // console.log('POST request successful:', response);
    } catch (error) {
      // Handle errors
      // console.error('Error making POST request:', error);
    }
  };
  return (
    <div className="view-page">
      <div className="md:flex gap-4 registration-container">
        <div className="invite-bg-image w-full relative hidden md:block"></div>
        <div className="pd-sm md:rounded-lg w-full">
          <h3 className="font-semibold text-3xl text-center text-black">
            Add Cam girls
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="female-register">
              <div className="mb-4">
                <label htmlFor="firstname" className="mb-3">
                  Firstname
                </label>
                <Field
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="w-full"
                />
                <ErrorMessage
                  name="firstname"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastname" className="mb-3">
                  Lastname
                </label>
                <Field
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  className="w-full"
                />
                <ErrorMessage
                  name="lastname"
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
              <div className="mb-4 border-2">
                <Field as="select" name="gender" className="w-full p-2">
                  <option value="">Select a gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="gender"
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
              <button className="text-pink underline mr-4">Back</button>
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

export default Invite;
