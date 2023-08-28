import React, {useState, useEffect} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";

// Importación de estilos globales para todos los archivos
import GlobalStyle from "./GlobalStyle";

// Temas de estilos claro y oscuro 
import { temaClaro, temaOscuro } from "./Components/UI/temas.js";
// ThemeProvider importador de temas
import { ThemeProvider } from "styled-components";
import { BtnTheme } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";

// La etiqueta ThemeProvider aplica los estilos a todos los elementos que encapsula
function App() {
  const [tema, setTema] = useState(localStorage.getItem("tema") === "true");

  useEffect(() => {
    localStorage.setItem("tema", tema);
  }, [tema]);

  const toggleTema = () => {
    setTema( (tema) => !tema );
  }
  return (
    <ThemeProvider theme = {tema ? temaClaro : temaOscuro}>
    {/* <ThemeProvider theme={temaClaro}> */}
      <GlobalStyle />
      <BtnTheme onClick={toggleTema}>
          <ThemeSwitcher tema={tema}/>
      </BtnTheme>
      <Header />
      <Container />

    </ThemeProvider>
  );
}

export default App;
