import React from "react";
import { Caja, Btn } from "../UI"
import { lista } from "../../info"
import Tarjeta from "../Tarjeta";

const List = () => {
    const listado = <>{
        <Caja>
            {lista.cargos.map(
                ( cargo, i ) => {
                    return <Tarjeta key={i} cargo={cargo}/>
                }
            )}
            <Btn> Ver mas </Btn>
        </Caja>
    }</>
    return listado
}

export default List