import React from "react";

import Title from "../Title";
import Account from "../Account";

import { styled } from "styled-components";

const StyleContenedor = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`
const StyleContenido = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <StyleContenedor className="container">
      
      <Title>Smart Bank</Title>

      <StyleContenido className="content">
        <Account />
      </StyleContenido>

    </StyleContenedor>
  );
};

export default Container;
