import classes from './Projects.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../tempdata/tempdata'



const Projects = props => {
    return (
        <>
            <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Projects</h1>
            <div className={classes.cards}>

                {projects.map(project => (
                    <div className={classes.card} key={project.id}>

                        <div className={classes.imgdiv}>
                            <img className={classes.cardimage} src={project.image} alt='screenshot' />
                        </div>
                        <div className={classes.cardtitle}>
                            <Link className={classes.cardtitlelink} to={`/projects/${project.slug}`}>
                                <h3 style={{ color: 'aqua' }}>{project.title}</h3>
                            </Link>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default Projects