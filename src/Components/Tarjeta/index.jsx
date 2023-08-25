import { styled } from "styled-components";
import React from "react";

const Tarjeta = styled.div`
    box-shadow: 0.3rem 0.3rem 1.25rem 0 rgba(0,0,0,0.1);
    border-radius: 0.625rem;
    margin: 0.125rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.625rem;
    font-size: 0.75rem;
`
// Se pueden crear clases css dentro de elementos estilizados
const Info =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .type{
        font-weight: bold;
    }
`

export default ({cargo}) => {
    const {id, type, value, from, date} = cargo;
    return <Tarjeta>
        <Info>
            <span className="type">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Info>
        <span>{date}</span>
    </Tarjeta>
}