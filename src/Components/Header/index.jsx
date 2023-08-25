import React from "react";
import logo from "../../assets/images/logo.svg";

// Traer variables de variables.js
import { styled } from "styled-components";
import { colorPrimario } from "../UI/variables"

// usar variables en propiedades
const StyleHeader = styled.nav`
  background-color: ${ colorPrimario };
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

// Tambiens e pueden usar props
// ${ funcion anonima }
const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  
  color: ${ 
    (props) => props.primary ? "white" : colorPrimario 
  };
  background: ${
    ( { primary  }) => primary ? "transparent" : "white" 
  };
`


const Header = () => {
  return (
    <StyleHeader>
      <Logo className="imagen-logo" src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader className="btn-secundario" href="https://google.com">
          Ayuda
        </BtnHeader>
        <BtnHeader primary="true" className="btn-primario" href="https://google.com">
          Salir
        </BtnHeader>
      </div>
    </StyleHeader>
  );
};

export default Header;
