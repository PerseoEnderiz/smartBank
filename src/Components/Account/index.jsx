import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

import { styled } from "styled-components";
import { Icono, Caja, Btn, Saldo, Detalle, IconoTema } from "../UI";

// elemento que servira para obtener estilos heredados
// Hereda los estilos del componente Icono
const IconoMargin = styled(Icono)`
  margin-top: 2px;
`;


const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Caja className="box">

      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconoTema className="imagen-icono" src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo className="saldo">
            <Detalle className="detalle">$</Detalle> 8,621.50
          </Saldo> 
        ) : null}
      </div>

      <Btn className="btn" onClick={toggleHandler}>

        <IconoMargin
          // sustituido por IconMargin
          // style={{ marginTop: "2px" }}
          className="imagen-icono"
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />

      </Btn>
    </Caja>
  );
};

export default Account;
