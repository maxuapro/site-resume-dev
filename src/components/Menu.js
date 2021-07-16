import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Menu.module.css'
import { Link } from 'react-router-dom'

const Backdrop = props => <div className={classes.backdrop} onClick={props.onClose}></div>


const MenuStuff = props => {
    return (
        <div className={classes.menu}>
            <Link className={classes.link} to='/'>
                <div className={classes.links} onClick={props.onClose}>
                    <h2 className={classes.linktext}>Resume</h2>
                </div>
            </Link>
            <Link className={classes.link} to='/knowledge'>
                <div className={classes.links} onClick={props.onClose}>
                    <h2 className={classes.linktext}>Knowledge</h2>
                </div>
            </Link>
            <Link className={classes.link} to='/story'>
                <div className={classes.links} onClick={props.onClose}>
                    <h2 className={classes.linktext}>Story</h2>
                </div>
            </Link>
            <Link className={classes.link} to='/projects'>
                <div className={classes.links} onClick={props.onClose}>
                    <h2 className={classes.linktext}>Projects</h2>
                </div>
            </Link>
            <Link className={classes.link} to='/blog'>
                <div className={classes.links} onClick={props.onClose} style={{ borderBottom: 'none' }}>
                    <h2 className={classes.linktext}>Blog</h2>
                </div>
            </Link>
        </div>
    )
}

const popupPortal = document.getElementById('menu')

const Menu = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, popupPortal)}
            {ReactDOM.createPortal(<MenuStuff onClose={props.onClose} />, popupPortal)}
        </>
    )
}

export default Menu