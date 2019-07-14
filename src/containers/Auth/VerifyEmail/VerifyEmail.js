import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { FormWrapper } from "../../../hoc/layout/elements";
import Heading from "../../../components/UI/Headings/Heading";
import Button from "../../../components/UI/Forms/Button/Button";
import Message from "../../../components/UI/Message/Message";
import * as actions from "../../../store/actions";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0;
`;

const VerifyEmail = ({ sendVerification, loading, error, cleanup }) => {
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return (
    <FormWrapper>
      <Wrapper>
        <Heading color="white" size="h1">
          VerifyEmail
        </Heading>
        <Heading color="white" bold size="h4">
          Go to your email inbox, and please verify your email
        </Heading>
        <Button
          loading={loading ? "Sending email..." : null}
          disabled={loading}
          onClick={() => sendVerification()}
        >
          Re-send verification email
        </Button>
        <MessageWrapper>
          <Message error show={error}>
            {error}
          </Message>
          <Message success show={error === false}>
            Message sent Successfully!
          </Message>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
  cleanup: actions.clean
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
