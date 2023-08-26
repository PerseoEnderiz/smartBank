import React from "react";

import Title from "../Title";
import Account from "../Account";

import { styled } from "styled-components";
import List from "../List";

const StyleContenedor = styled.div`
  /* Al color de fondo agregale el color que recibas del tema */
  background-color: ${({theme})=>theme.body};
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
        <List></List>
      </StyleContenido>

    </StyleContenedor>
  );
};

export default Container;
