import React from 'react';
import classes from './ToggleMenu.module.css';

const toggleMenu = (props) => (
    <div className={classes.ToggleMenu} onClick={props.toggleSideDrawer}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggleMenu;