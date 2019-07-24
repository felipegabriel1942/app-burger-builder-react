import React from 'react';

import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
                </li> );
        })

    return (
        <Aux>
            <h3>Seu pedido</h3>
            <p>Um delicioso hamburguer com os seguintes ingredientes:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Finalizar pedido?</p>
        </Aux>
    );
};

export default OrderSummary;