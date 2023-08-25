import React from "react";
import { Caja } from "../UI"
import { lista } from "../../info"

const List = () => {
    const listado = <>{
        <Caja>
            {
                lista.cargos.map(
                    ({ id, type, value, from, date }) => {
                       return (
                            <div key = { id }>
                                <span> {type} </span>
                                <span> { value } </span>
                            </div>
                       )
                    }
                )
            }
        </Caja>
    }</>
    return listado
}

export default List