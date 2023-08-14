import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import DashboardLayout from "@/components/DashboardLayout";

const UpdateDetails = () => {
  const router = useRouter();

  const initialValues = {
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    age: 0,
    gender: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    location: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    age: Number(Yup.string().required("Username is required")),

    gender: Yup.string().required("Gender is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const url = "https://example.com/api/users";
      console.log(values.firstName);
      console.log(values.lastName);
      console.log(values.location);
      // const response = await postData(url, values);
      // Handle the response if needed
      // console.log('POST request successful:', response);
    } catch (error) {
      // console.error('Error making POST request:', error);
    }
  };
  const handleDashboard = () => {
    router.push("/dashboard/");
  };

  return (
    <>
      <DashboardLayout>
        <div className="mt-10">
          <div className="md:w-1/2 m-auto shadow-lg p-5 bg-white rounded-md">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="female-register">
                <div className="sm:flex gap-4">
                  <div className="mb-4 w-full">
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
                  <div className="mb-4 w-full">
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
                </div>
                <div className="sm:flex gap-4">
                  <div className="mb-4 w-full">
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
                  <div className="mb-4 w-full">
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
                <button
                  className="text-pink underline mr-4"
                  onClick={handleDashboard}
                >
                  Back
                </button>
                <button className="btn-custom" type="submit">
                  Next
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default UpdateDetails;
