import React from "react";
import styled from "styled-components";
import Heading from "../../../components/UI/Headings/Heading";

const Wrapper = styled.div`
  padding: 4rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0 0.5rem 3.5rem var(--shadow);
  margin: 3rem;
  border-radius: 0.5rem;
  text-align: center;
`;

const Todos = ({ todo }) => {
  return (
    <Wrapper>
      <Heading color="white" size="h2" noMargin>
        {todo.todo}
      </Heading>
    </Wrapper>
  );
};

export default Todos;
