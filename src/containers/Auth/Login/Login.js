import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  FormWrapper,
  StyledForm
} from "../../../hoc/layout/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Buttom from "../../../components/UI/Forms/Buttom/Buttom";
import Heading from '../../../components/UI/Headings/Heading';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required"),
  password: Yup.string().required("The password is required.")
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading size="h1" noMargin color="white">LOGIN INTO YOUR ACCOUNT</Heading>
          <Heading size="h3" color="white">Please fill in your details to into your account</Heading>
          <StyledForm>
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
            <Buttom disabled={!isValid} type="submit">Submit</Buttom>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
