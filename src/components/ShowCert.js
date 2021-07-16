import React, { useState } from 'react'
import classes from './ShowCert.module.css'

const ShowCert = props => {
    const [show, setShow] = useState(false)
    const stateHandler = () => setShow(prev => !prev)


    return (
        <>
            {!show
                ? <p className={classes.closed} onClick={stateHandler}>▶ view cert</p>
                : props.image
                    ? <>
                        <p className={classes.opened} onClick={stateHandler}>▼ hide cert</p>
                        <img style={{ width: '100%' }} src={props.image} alt='cert' />
                    </>
                    : <>
                        <p className={classes.opened} onClick={stateHandler}>▼ hide cert</p>
                        <p style={{ color: 'aqua' }}>no certificate ☹️ yet..</p>
                    </>}
        </>
    )
}

export default ShowCert