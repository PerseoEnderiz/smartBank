import React from "react"
import * as Images from './assets/images/index.js';
import { Icono, IconoTema } from "./Components/UI"

const IconFilter = (type) => {
    const iconosFiltrados = {
        Restaurante: <IconoTema src={Images.alimentacion} alt="Icono Restaurante"/>,
        Salud: <IconoTema src={Images.salud} alt="Icono Salud"/>,
        Dinero: <IconoTema src={Images.dinero} alt="Icono Dinero"/>,
        Transporte: <IconoTema src={Images.transporte} alt="Icono Transporte"/>,
        Utilidades: <IconoTema src={Images.utilidades} alt="Icono Utilidades"/>,
        default: <IconoTema src={Images.otros} alt="Icono Otro"/>,
    } 
    return iconosFiltrados[type] || iconosFiltrados["default"];
}

export default IconFilter