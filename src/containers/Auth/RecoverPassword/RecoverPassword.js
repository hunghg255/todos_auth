import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";

import Heading from "../../../components/UI/Headings/Heading";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Message from "../../../components/UI/Message/Message";

import * as actions from "../../../store/actions";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const RecoveryPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The password is required.")
});

const RecoverPassword = ({ loading, error, sendEmailRecoverPassword }) => {
  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={RecoveryPasswordSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await sendEmailRecoverPassword(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            RECOVERY YOUR PASSWORD
          </Heading>
          <Heading size="h4" bold color="white">
            Type in your e-mail to recover your password
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Type your email..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Sending recover email..." : null}
              type="submit"
            >
              Recover email
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
              <Message success show={error === false}>
                Recover message sent Successfully!
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoveryPassword.loading,
  error: auth.recoveryPassword.error
});

const mapDispatchToProps = {
  sendEmailRecoverPassword: actions.recoveryPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoverPassword);
