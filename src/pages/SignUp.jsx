import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";


const validationSchema = Yup.object({
  fullname: Yup.string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  age: Yup.number()
  .typeError("Age must be a number")
  .required("Age is required")
  .min(16, "Age must be at least 16")
  .max(60, "Age cannot be more than 60"),
});


const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      age: 0,
      password: "",
    },

    validationSchema: validationSchema,

    // validate: (values) => {
    //   const errors = {};
    //   if (!values.fullname) {
    //     errors.fullname = "Full name is required";
    //   } else if (values.fullname.length < 3) {
    //     errors.fullname = "Full name must be at least 3 characters";
    //   }

    //   if (!values.email) {
    //     errors.email = "Email is required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //   ) {
    //     errors.email = "Invalid email address";
    //   }

    //   if (!values.age) {
    //     errors.age = "Age is required";
    //   } else if (Number(values.age) < 16) {
    //     errors.age = "You must be at least 16 years old";
    //   } else if (Number(values.age) > 100) {
    //     errors.age = "Enter a valid age";
    //   }

    //   if (!values.password) {
    //     errors.password = "Password is required";
    //   } else if (values.password.length < 6) {
    //     errors.password = "Password must be at least 6 characters";
    //   }

    //   console.log("Validation Errors:", errors);

    //   return errors;
    // },

    onSubmit: (values) => {
      console.log("check values");
      console.log(values);
    },
  });
  return (
    <div className="col-7 mx-auto rounded border p-3 my-3 shadow">
      <form action="" onSubmit={formik.handleSubmit}>
        <h1 className="fs-4 text-center text-success">Sign Up Form</h1>
        <input
          name="fullname"
          type="text"
          placeholder="Full Name"
          className={`form-control mb-3 ${
    formik.touched.fullname && formik.errors.fullname ? "is-invalid" : ""
  }`}
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.fullname && formik.errors.fullname && (
<p className="error text-danger">{formik.errors.fullname}</p>
)}
        <input
          name="email"
          type="text"
          placeholder="Email"
          className={`form-control mb-3 ${
    formik.touched.email && formik.errors.email ? "is-invalid" : ""
  }`}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
<p className="error text-danger">{formik.errors.email}</p>
)}
        <input
          name="age"
          type="text"
          placeholder="age"
          className={`form-control mb-3 ${
    formik.touched.age && formik.errors.age ? "is-invalid" : ""
  }`}
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age && (
<p className="error text-danger">{formik.errors.age}</p>
)}
        <input
          name="password"
          type="text"
          placeholder="Password"
          className={`form-control mb-3 ${
    formik.touched.password && formik.errors.password ? "is-invalid" : ""
  }`}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
<p className="error text-danger">{formik.errors.password}</p>
)}
        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
