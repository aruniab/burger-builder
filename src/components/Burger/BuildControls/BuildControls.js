import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price: Rs <strong>{props.price.toFixed(2)}</strong></p>
        
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.addIngredients(ctrl.type) }
                removed={() => props.removeIngredients(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}

        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;