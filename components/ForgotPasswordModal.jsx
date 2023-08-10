// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// const ForgotPasswordModal = ({ onValueForgotClose }) => {
//   const value = false;
//   const closeModal = () => {
//     onValueForgotClose(value);
//   };
//   return (
//     <>
//       <div className="modal-overlay">
//         <div className="relative contain-modal-content rounded-lg">
//           <div
//             className="modal-content bg-white rounded-lg"
//             style={{ height: "75%" }}
//           >
//             <button onClick={closeModal}>
//               <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
//             </button>

//             <div className="pd-sm bg-white rounded-lg pt-10">
//               <h4 className="modal-header text-black text-center mb-5">
//                 Forgot password
//               </h4>
//               <p>What is the email address associated with your account</p>
//               <form className="register">
//                 <div className="mb-4">
//                   <label for="email" className="mb-3">
//                     Email
//                   </label>
//                   <input type="text" placeholder="Email" className="w-full" />
//                 </div>

//                 <button className="btn-custom" type="submit">
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ForgotPasswordModal;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ForgotPasswordModal = ({ onValueForgotClose }) => {
  const value = false;
  const closeModal = () => {
    onValueForgotClose(value);
  };

  // Validation schema for the forgot password form
  const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  // Handle forgot password form submit
  const handleForgotPasswordSubmit = async (values) => {
    try {
      const url = "https://example.com/api/forgot-password"; // Replace with your forgot password API endpoint
      console.log(values.email);

      // Use the postData function to make the POST request
      // const response = await postData(url, values);

      // Handle the response if needed
      // console.log('POST request successful:', response);

      onValueForgotClose(value);
    } catch (error) {
      // Handle errors
      // console.error('Error making POST request:', error);
    }
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
                Forgot password
              </h4>
              <p>What is the email address associated with your account</p>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={forgotPasswordValidationSchema}
                onSubmit={handleForgotPasswordSubmit}
              >
                {({ isValid }) => (
                  <Form className="register">
                    <div className="mb-4">
                      <label htmlFor="email" className="mb-3">
                        Email
                      </label>
                      <Field
                        type="text"
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
                    <button
                      className={`btn-custom ${
                        !isValid ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      type="submit"
                      disabled={!isValid}
                    >
                      Send
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
