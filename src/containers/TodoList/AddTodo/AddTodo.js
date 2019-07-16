import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Formik, Field } from "formik";

import { StyledForm } from "../../../hoc/layout/elements";
import Button from "../../../components/UI/Forms/Button/Button";
import Modal from "../../../components/UI/Modal/Modal";
import Message from "../../../components/UI/Message/Message";
import Heading from "../../../components/UI/Headings/Heading";
import Input from "../../../components/UI/Forms/Input/Input";

import * as actions from "../../../store/actions";


const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const TodoSchema = Yup.object().shape({
  todo: Yup.string().required("The todo is required")
});

const AddTodo = ({ loading, error, addTodo }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <Button color="main" contain onClick={() => setIsOpened(true)}>
        Add todo
      </Button>
      <Modal opened={isOpened} closed={() => setIsOpened(false)}>
        <Heading size="h1" noMargin color="white">
          Add your new todo
        </Heading>
        <Heading size="h3" color="white">
          Type your todo and press add
        </Heading>
        <Formik
          initialValues={{
            todo: ""
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            //send todo
            const res = await addTodo(values);
            if (res) {
              setIsOpened(false);
            } else {
              setIsOpened(false);
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid }) => (
            <StyledForm>
              <Field
                type="text"
                name="todo"
                placeholder="Write your TODO..."
                component={Input}
              />
              <ButtonsWrapper>
                <Button
                  type="submit"
                  color="main"
                  contain
                  disabled={!isValid || isSubmitting}
                  loading={loading ? "Adding..." : null}
                >
                  Add todo
                </Button>
                <Button color="main" contain onClick={() => setIsOpened(false)}>
                  Cancel
                </Button>
              </ButtonsWrapper>

              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ todos }) => ({
  loading: todos.loading,
  error: todos.error
});

const mapDispatchToProps = {
  addTodo: actions.addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
