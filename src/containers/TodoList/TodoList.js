import React from "react";
import styled from "styled-components";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Heading from "../../components/UI/Headings/Heading";
import { Container } from "../../hoc/layout/elements";
import AddTodo from "./AddTodo/AddTodo";
import Loader from "../../components/UI/Loader/Loader";
import Todos from './Todos/Todos';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  align-self: flex-start;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainDark);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 60rem;
  flex-direction: column;
  margin-top: 3rem;
  align-items: ${({center}) => (center ? 'center' : null)}
`;

const TodoList = ({ todos, requesting, requested, userId }) => {
  let content;
  if (!todos) {
    content = (
      <Content center>
        <Loader isWhite/>
      </Content>
    );
  } else if (!todos[userId] && requested[`todos/${userId}`]) {
    content = (
      <Heading color="white" size="h2">
        You have no todos
      </Heading>
    );
  } else {
    content = (
      <Content>
        {todos[userId].todos.map(todo => (
          <Todos key={todo.id} todo={todo} />
        ))}
      </Content>
    );
  }

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size="h1" color="white">
            Your Todos
          </Heading>
          <Heading bold size="h4" color="white">
            All you have to do for now...
          </Heading>
          <AddTodo />
          {content}
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  todos: firestore.data.todos,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested
});

const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [`todos/${props.userId}`])
)(TodoList);
