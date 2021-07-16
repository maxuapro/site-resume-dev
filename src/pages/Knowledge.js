import React from 'react'
import classes from './Knowledge.module.css'
import certJS from '../images/certificates/freeCodeCampcert.jpg'
import certPython from '../images/certificates/kaggle-python.png'
import certPython2 from '../images/certificates/PuthonCompFreeCodeCamp.jpg'
import certML from '../images/certificates/kaggle-intro-to-ml.png'
import ShowCert from '../components/ShowCert'
import { knowledgedata, goingtolearn } from '../tempdata/knowledgedata'

const Knowledge = () => {
    return (
        <>
            <div className={classes.pageblock}>

                <div className={classes.courses}>
                    <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Courses</h1>
                    <div className={classes.explain}>
                        <p>I have taken many courses in order to learn web development and went through tons of Youtube tutorials and here are presented some of those I find worth mentioning the most:</p>
                    </div>

                    <div className={classes.courseblock}>
                        <h3>Scientific Computing with Python</h3>
                        <p className={classes.pi}>by: FreeCodeCamp.org</p>
                        <p className={classes.pi}>graduated: July 10, 2021</p>

                        <div className={classes.certblock}>
                            <ShowCert image={certPython2} />
                        </div>
                    </div>

                    <div className={classes.courseblock}>
                        <h3>JavaScript Algorithms and Data Structure</h3>
                        <p className={classes.pi}>by: FreeCodeCamp.org</p>
                        <p className={classes.pi}>graduated: April 5, 2021</p>

                        <div className={classes.certblock}>
                            <ShowCert image={certJS} />
                        </div>
                    </div>                    

                    <div className={classes.courseblock}>
                        <h3>React - The Complete Guide</h3>
                        <p className={classes.pi}>by: Maximilian Schwarzmüller</p>
                        <p className={classes.pi}>graduated: still learning</p>

                        <div className={classes.certblock}>
                            <ShowCert />
                        </div>
                    </div>

                    <div className={classes.courseblock}>
                        <h3>Python</h3>
                        <p className={classes.pi}>by: Kaggle.com</p>
                        <p className={classes.pi}>graduated: December 23, 2020</p>

                        <div className={classes.certblock}>
                            <ShowCert image={certPython} />
                        </div>

                    </div>

                    <div className={classes.courseblock}>
                        <h3>Intro to Machine Learning</h3>
                        <p className={classes.pi}>by: Kaggle.com</p>
                        <p className={classes.pi}>graduated: December 22, 2020</p>

                        <div className={classes.certblock}>
                            <ShowCert image={certML} />
                        </div>
                    </div>

                </div>

                {/* --------------------------------------line-------------------------------------- */}
                
                <div className={classes.courses}>
                    <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Knowledge</h1>
                    <div className={classes.explain}>
                        <p>This data represents how I personally assess my knoledge. It may have nothing to do with reality though.. The list does also kinda represents the Roadmap for me to become a true webdev) If you would like to make corrections to the list, please contact me, it will be very appreciated)</p>
                    </div>

                    <div className={classes.knowledge}>
                        {knowledgedata.map(el => (
                            <div className={classes.subjects} key={el.sub}>
                                <h3>{el.sub}</h3>
                                <div className={classes.progress}>
                                    <div style={{ width: el.value + '%' }} className={classes.progressvalue}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={classes.explain}>
                        <p>There are also things I'm going to learn as well in the nearest future, after I'm done with the core stuff, which is mostly related to web development. I mean, the list may change. It's just what I've come up with at the moment)</p>
                    </div>

                    <div className={classes.knowledge}>
                        {goingtolearn.map(el => (
                            <div className={classes.subjects} key={el.sub}>
                                <h3>{el.sub}</h3>
                                <div className={classes.progress}>
                                    <div style={{ width: el.value + '%', backgroundColor: 'violet' }} className={classes.progressvalue}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Knowledge