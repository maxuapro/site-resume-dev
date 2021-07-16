import React from 'react'
import classes from './Story.module.css'

const Story = props => {
    return (
        <>
            <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Story</h1>
            <div className={classes.storyblock}>
                <p className={classes.text}>Hi, my name is Max, and I love coding!🤓</p>
                <p className={classes.text}>The first code I wrote, I saved on audiotape.</p>
                <p className={classes.text}>I'm a self educated web developer. Since the December of 2020 I study hard everything related to Web Development based on JavaScript and Node.js. And also I am very interested in Artificial Itellegence. Why, you might ask? What motivates you, Max?</p>

                <p className={classes.text}>Well, I'm a big fan of automation of any sort, and as you can easily assume, programming is an example of a pure automation concept. Machine can do work for you.. or instead of you.. what can be more excitng?🤓</p>
            </div>
        </>
    )
}

export default Story