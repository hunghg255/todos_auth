import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  FormWrapper,
  StyledForm
} from "../../../hoc/layout/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Buttom from "../../../components/UI/Forms/Buttom/Buttom";
import Heading from "../../../components/UI/Headings/Heading";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your First Name")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your First Name")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string().required("The password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password  doesn't match.")
    .required("You need to confirm your password.")
});

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading size="h1" noMargin color="white">
            SIGN UP FOR A ACCOUNT
          </Heading>
          <Heading size="h3" color="white">
            Please fill to register your account
          </Heading>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Buttom disabled={!isValid} type="submit">
              Sign up
            </Buttom>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUp;
