import React from 'react';
import classes from './Toolbar.module.css';
import ToggleMenu from '../SideDrawer/ToggleMenu/ToggleMenu';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleMenu toggleSideDrawer={props.toggle} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;