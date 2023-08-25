import React from "react";
//Importamos la libreria de styled componentes
import styled from "styled-components"

// Este codigo es el dado por la biblioteca styled components
// Se instala extension en vscode "styled components" mpara dar formato
const Title = styled.h1`
  color: grey;
  padding: 25px 0px;
  // es codigo css en un jsx
`

// Este es el codigo funcionando con estilos css
/* const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
}; */
export default Title;
