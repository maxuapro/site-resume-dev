import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Resume.module.css'
import me from '../images/me.jpg'
import { FaEnvelope } from 'react-icons/fa'
import codesignal from '../images/codesignal.png'

import { FaTelegramPlane } from 'react-icons/fa' // telegram
import { FaWhatsapp } from 'react-icons/fa' // whatsapp

import { FaCodepen } from 'react-icons/fa'// codepen
import { FaGithub } from 'react-icons/fa'// github
import { FaLinkedin } from 'react-icons/fa'// linkedin
import { FaFacebook } from 'react-icons/fa'// fb

const Resume = () => {
    return (
        <>
            <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Resume</h1>
            <div className={classes.resume}>
                <div className={classes.leftside}>
                    <div style={{ textAlign: 'center' }}>
                        <img className={classes.me} src={me} alt="me" />
                    </div>
                    <br />
                    <h3 style={{ color: 'aqua', borderBottom: '1px solid aqua', marginBottom: '30px' }}>Contacts:</h3>
                    <h4 className={classes.contacts} style={{ marginTop: '50px' }}><FaTelegramPlane className={classes.resicons} />+380678407335</h4>
                    <h4 className={classes.contacts}><FaWhatsapp className={classes.resicons} />+48607974195</h4>
                    <h4 className={classes.contacts} style={{ marginBottom: '40px' }}><FaEnvelope className={classes.resicons} />max.kosh.on@gmail.com</h4>
                    <h3 style={{ color: 'aqua', borderBottom: '1px solid aqua', marginBottom: '30px' }}>Links:</h3>

                    <div className={classes.linkicons}>

                        <a href="https://codepen.io/max-koshovyi" target="_blank" rel="noreferrer">
                            <FaCodepen className={classes.greatericons} />
                        </a>
                        <a href="https://github.com/maxuapro" target="_blank" rel="noreferrer">
                            <FaGithub className={classes.greatericons} />
                        </a>
                        <a href="https://www.linkedin.com/in/maksym-koshovyi-055995116/" target="_blank" rel="noreferrer">
                            <FaLinkedin className={classes.greatericons} />
                        </a>
                        <a href="https://www.facebook.com/max.koshovyi/" target="_blank" rel="noreferrer">
                            <FaFacebook className={classes.greatericons} />
                        </a>

                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <a href="https://app.codesignal.com/profile/maxuapro" target="_blank" rel="noreferrer">
                            <img className={classes.codesignal} src={codesignal} alt='codesignal' />
                        </a>
                    </div>
                </div>
                <div className={classes.rightside}>
                    <h1>Max Koshovyi</h1>
                    <h3>web developer/Ukraine</h3>
                    <h2 className={classes.divider}>Experience</h2>

                    <div className={classes.expblock}>
                        <h3>Fabryka reklam Neon1 sp.z.o.o.,<span className={classes.country}> Warsaw, Poland — Designer, sign maker</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>March 2019 - September 2019</span>
                        <p>Sign making, photo editing, design</p>
                    </div>

                    <div className={classes.expblock}>
                        <h3>Best Worker Ltd.,<span className={classes.country}> Bielsko-Biala, Poland — Concrete finisher</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>November 2017 - January 2018</span>
                        <p>Concrete reinforcement, carpentry</p>
                    </div>

                    <div className={classes.expblock}>
                        <h3>Self employed in design and advertising industry,<span className={classes.country}> Ukraine</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>November 2009 - August 2017</span>
                        <p>Specific contracts</p>
                    </div>

                    <div className={classes.expblock}>
                        <h3>Entrepreneur/own business,<span className={classes.country}> Polohy, Ukraine — owner</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>March 2005 - October 2009</span>
                        <p>design, outdoor advertising, publishing local newspaper and local phone-book</p>
                    </div>

                    <div className={classes.expblock}>
                        <h3>AIW Ltd.,<span className={classes.country}> Zaporizhia, Ukraine — project manager</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>December 2004 - March 2005</span>
                        <p>Outdoor advertising (work with customers)</p>
                    </div>

                    <div className={classes.expblock}>
                        <h3>Polohy Art School,<span className={classes.country}> Polohy, Ukraine — Teacher of composition and computer graphics</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>September 2000 - May 2003</span>
                        <p></p>
                    </div>

                    <h2 className={classes.divider}>Education</h2>

                    <div className={classes.expblock}>
                        <h3>Web-development, (Javascript, MERN stack),<span className={classes.country}> Self-education</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>since December 2020</span>
                    </div>

                    <div className={classes.note}>
                        <p>Learn more about my webdev education <Link className={classes.notelink} to="/knowledge">here</Link></p>
                    </div>

                    <div className={classes.expblock}>
                        <h3>Polohy Art School,<span className={classes.country}> Polohy city, Ukraine</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>May 2000</span>
                    </div>

                    <div className={classes.expblock}>
                        <h3>High School #349,<span className={classes.country}> Moscow, Russia</span></h3>
                        <span style={{ fontSize: '14px', color: 'grey' }}>May 1998</span>
                    </div>

                    <h2 className={classes.divider}>Languages</h2>
                    <ul style={{margin: '20px auto'}}>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>Ukrainian (native)</li>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>Russian (native)</li>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>English (advanced)</li>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>Polish (beginner)</li>
                    </ul>

                    <h2 className={classes.divider}>Skills</h2>
                    <ul style={{margin: '20px auto'}}>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>Design, Composition</li>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>JavaScript, Python, React</li>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>Adobe Graphic Suite (Photoshop, Illustrator, InDesign, etc.)</li>
                        <li style={{ marginLeft: '30px' }} className={classes.country}>Corel Draw, Davinci Resolve, 3dsMax, Blender, etc.</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Resume