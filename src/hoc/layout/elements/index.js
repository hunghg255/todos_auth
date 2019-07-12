import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;
  max-width: 5140rem;
  margin: 0 auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 55rem;
  padding: 3rem 8rem;
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--color-mainDark);
  box-shadow: 0rem 0.5rem 3.5rem var(--color-shadow);
`;

export const StyledForm = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
