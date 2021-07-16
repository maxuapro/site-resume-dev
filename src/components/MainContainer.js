import React from 'react'
import classes from './MainContainer.module.css'

const MainContainer = props =>
    <div className={classes.maincont}>{props.children}</div>

export default MainContainer