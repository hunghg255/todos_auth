import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Formik, Field } from "formik";

import { StyledForm } from "../../../../hoc/layout/elements";
import Button from "../../../../components/UI/Forms/Button/Button";
import Modal from "../../../../components/UI/Modal/Modal";
import Message from "../../../../components/UI/Message/Message";
import Heading from "../../../../components/UI/Headings/Heading";
import Input from "../../../../components/UI/Forms/Input/Input";

import * as actions from "../../../../store/actions";

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

const EditSchema = Yup.object().shape({
  id: Yup.number(),
  todo: Yup.string()
});

const EditTodo = ({ editTodo, todo, show, closed, loading, error }) => {
  return (
    <>
      <Modal opened={show} closed={closed}>
        <Heading size="h1" noMargin color="white">
          Edit todo
        </Heading>
        <Heading size="h3" color="white">
          Type your todo and press edit
        </Heading>
        <Formik
          initialValues={{
            id: todo.id,
            todo: todo.todo
          }}
          validationSchema={EditSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            let res = await editTodo(values);
            if (res) {
              closed();
            } else {
              closed();
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
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
                  loading={loading ? "Editing..." : null}
                >
                  Edit todo
                </Button>
                <Button
                  type="button"
                  color="main"
                  contain
                  onClick={() => {
                    closed();
                  }}
                >
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
  loading: todos.editTodo.loading,
  error: todos.editTodo.error
});

const mapDispatchToProps = {
  editTodo: actions.editTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo);
