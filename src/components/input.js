import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      <Status />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 100%;
  max-width: 350px;
  min-width: 277px;
  height: 40px;
  border: 1px solid #999999;
  margin: 1rem 0;
  background-color: #FFFFFF;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
    border-color: #1771DD; 
  }
`;



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Status = styled.div`
  height: 0;
  width: 0;
  background: #9d9d9d;
  border-radius: 0;
  margin-left: 1rem;
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #ffffff;
  }
  ${StyledInput}:valid + & {
    background: #ffffff;
  }
`;


export default Input;