import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Modal from "../../../../components/UI/Modal/Modal";
import Heading from "../../../../components/UI/Headings/Heading";
import Button from "../../../../components/UI/Forms/Button/Button";
import Message from "../../../../components/UI/Message/Message";

import * as actions from "../../../../store/actions";

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  width: 100%;
`;

const DeleteTodo = ({ show, close, todo, loading, error, deleteTodo }) => {
  return (
    <Modal opened={show} closed={close}>
      <Heading size="h1" noMargin color="white">
        DELETE TODO
      </Heading>
      <Heading size="h3" color="white">
        Are you sure you want to delete this todo?
      </Heading>
      <Heading color="white" size="h2" noMargin>
        {todo.todo}
      </Heading>
      <ButtonsWrapper>
        <Button
          type="button"
          color="red"
          contain
          onClick={() => deleteTodo(todo.id)}
          disabled={loading}
          loading={loading ? "Deleting..." : null}
        >
          Delete
        </Button>
        <Button type="button" color="main" contain onClick={close}>
          Cancel
        </Button>
      </ButtonsWrapper>
      <MessageWrapper>
        <Message error show={error}>
          {error}
        </Message>
      </MessageWrapper>
    </Modal>
  );
};

const mapStateToProps = ({ todos }) => ({
  loading: todos.deleteTodo.loading,
  error: todos.deleteTodo.error
});

const mapDispatchToProps = {
  deleteTodo: actions.deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteTodo);
