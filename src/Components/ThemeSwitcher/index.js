import React from "react";
import { themeOn, themeOff } from "../../assets/images";
import { Icono } from "../UI";

const ThemeSwitcher = ({tema}) =>{
    const claro = <Icono src={themeOn} alt="Icono tema oscuro"/>
    const oscuro = <Icono src={themeOff} alt="Icono tema claro"/>
    const cambioTema = <>{tema ? claro : oscuro}</>
    return cambioTema
}

export default ThemeSwitcher;