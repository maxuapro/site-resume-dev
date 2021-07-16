import React, { useState } from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'
import show from '../images/show1.png'
import close from '../images/close.png'
import Menu from './Menu'


const Navbar = props => {
    const [showMenu, setShowMenu] = useState(false)
    console.log('Hey from Navbar')

    const onClickHandler = () => setShowMenu(prev => !prev)
 
    return (
        <>
        {showMenu && <Menu onClose={onClickHandler}/>}
            <div className={classes.navbar}>
                <h1 className={classes.logo}>{`{`} <span>maxuapro</span> {'}'}</h1>
                <div className={classes.linksblock}>
                    <Link className={classes.links} to="/">RESUMÉ</Link>
                    <Link className={classes.links} to="/knowledge">KNOWLEDGE</Link>
                    <Link className={classes.links} to="/projects">PROJECTS</Link>
                    <Link className={classes.links} to="/story">STORY</Link>
                    <Link className={classes.links} to="/blog">BLOG</Link>
                </div>
                <img className={classes.imgbutton} src={showMenu ? close : show} alt='sdfsdfsd sdf' onClick={onClickHandler} />
            </div>
            <div className={classes.fakenavbar}></div>
        </>
    )
}

export default Navbar