import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";

// Importación de estilos globales para todos los archivos
import GlobalStyle from "./GlobalStyle";

// Temas de estilos claro y oscuro 
import { temaClaro, temaOscuro } from "./Components/UI/temas.js";
// ThemeProvider importador de temas
import { ThemeProvider } from "styled-components";

// La etiqueta ThemeProvider aplica los estilos a todos los elementos que encapsula
function App() {
  return (
    <ThemeProvider theme={temaOscuro}>
    {/* <ThemeProvider theme={temaClaro}> */}
      <GlobalStyle />
      <Header />
      <Container />

    </ThemeProvider>
  );
}

export default App;
