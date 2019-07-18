import React, { useState } from "react";
import styled from "styled-components";

import Heading from "../../../components/UI/Headings/Heading";
import DeleteTodo from "./DeleteTodo/DeleteTodo";
import EditTodo from "./EditTodo/EditTodo";

const Wrapper = styled.div`
  padding: 4rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0 0.5rem 3.5rem var(--shadow);
  margin: 3rem;
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const EditStyle = {
  color: "var(--color-main)",
  margin: "0 2rem",
  fontSize: "1.6rem",
  cursor: "pointer"
};

const DeleteStyle = {
  color: "red",
  fontSize: "1.6rem",
  cursor: "pointer"
};

const Todos = ({ todo }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setisEditing] = useState(false);

  return (
    <Wrapper>
      <Heading color="white" size="h2" noMargin>
        {todo.todo}
      </Heading>
      <Controls>
        <i
          className="fas fa-edit"
          style={EditStyle}
          onClick={() => setisEditing(true)}
        />
        <i
          className="fas fa-trash-alt"
          style={DeleteStyle}
          onClick={() => setIsDeleting(true)}
        />
      </Controls>
      <DeleteTodo
        todo={todo}
        show={isDeleting}
        close={() => setIsDeleting(false)}
      />
      <EditTodo
        todo={todo}
        show={isEditing}
        closed={() => setisEditing(false)}
      />
    </Wrapper>
  );
};

export default Todos;
