import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";

// Importación de estilos globales para todos los archivos
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Container />
    </>
  );
}

export default App;
