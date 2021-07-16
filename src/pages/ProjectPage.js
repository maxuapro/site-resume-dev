import React from 'react'
import { useParams } from "react-router-dom";
import projects from '../tempdata/tempdata'
import classes from './ProjectPage.module.css'


const ProjectPage = () => {
    let { project } = useParams()
    // console.log(project)
    const theProject = projects.filter(el => el.slug === project)[0]
    console.log('project page', project)

    if (!theProject) {
        return <h1 style={{ color: 'white', textAlign: 'center', fontSize: '46px' }}>😭</h1>
    }
    return (
        <>
            <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>
                {theProject.title}
            </h1>
            <div className={classes.projecttemplate}>
                <div className={classes.leftside}>
                    <img src={theProject.image} alt="screenshot" />
                    <br />
                    <div className={classes.links}>
                        {theProject.links[0].link
                            ? <a target="_blank" rel="noreferrer" href={theProject.links[0].link}><p>VEIW LIVE</p></a>
                            : ''}
                        {theProject.links[1].link
                            ? <a target="_blank" rel="noreferrer" href={theProject.links[1].link}><p>VIEW CODE</p></a>
                            : ''}
                    </div>

                </div>
                <div className={classes.rightside}>
                    <h2 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Description:</h2>
                    <p>{theProject.description}</p>
                    <h2 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Tech stack:</h2>
                    <ul>
                        {theProject.tech.map(el => <li key={el}>{el}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProjectPage