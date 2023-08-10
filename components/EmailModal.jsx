// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// const EmailModal = ({ onValueEmailChange }) => {
//   const value = false;
//   const closeModal = () => {
//     onValueEmailChange(value);
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
//                 Change email
//               </h4>
//               <form className="register">
//                 <div className="mb-4">
//                   <label for="email" className="mb-3">
//                     Enter new mail
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

// export default EmailModal;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EmailModal = ({ onValueEmailChange }) => {
  const value = false;
  const closeModal = () => {
    onValueEmailChange(value);
  };

  // Validation schema for the email form
  const emailValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  // Handle email form submit
  const handleEmailSubmit = async (values) => {
    try {
      const url = "https://example.com/api/send-email"; // Replace with your email API endpoint
      console.log(values.email);

      // Use the postData function to make the POST request
      // const response = await postData(url, values);

      // Handle the response if needed
      // console.log('POST request successful:', response);

      onValueEmailChange(value);
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
                Change email
              </h4>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={emailValidationSchema}
                onSubmit={handleEmailSubmit}
              >
                {({ isValid }) => (
                  <Form className="register">
                    <div className="mb-4">
                      <label htmlFor="email" className="mb-3">
                        Enter new mail
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

export default EmailModal;
