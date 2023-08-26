import React from "react"
import * as Images from './assets/images/index.js';
import { Icono } from "./Components/UI"

const IconFilter = (type) => {
    const iconosFiltrados = {
        Restaurante: <Icono src={Images.alimentacion} alt="Icono Restaurante"/>,
        Salud: <Icono src={Images.salud} alt="Icono Salud"/>,
        Dinero: <Icono src={Images.dinero} alt="Icono Dinero"/>,
        Transporte: <Icono src={Images.transporte} alt="Icono Transporte"/>,
        Utilidades: <Icono src={Images.utilidades} alt="Icono Utilidades"/>,
        default: <Icono src={Images.otros} alt="Icono Otro"/>,
    } 
    return iconosFiltrados[type] || iconosFiltrados["default"];
}

export default IconFilter