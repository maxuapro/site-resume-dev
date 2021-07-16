import { useState, useEffect } from 'react'
import { postsFirebase } from '../firebase/config'
import classes from './Blog.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
// import posts from '../tempdata/tempPostData' // change to database

const normDate = dateStr => {
    const mon = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const date = new Date(Date.parse(dateStr))
    return `${mon[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const Blog = props => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postData = postsFirebase.collection('posts')
            .orderBy('date', 'desc')
            .onSnapshot(snap => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
                setPosts(documents)
            })
        return () => postData()
    }, [])


    return (
        <>
            <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Blog</h1>
            <div className={classes.blog}>

                <div className={classes.leftside}>

                    <div className={classes.latestblock}>
                        <h1 className={classes.latest}>LATEST POST</h1>
                        {posts.filter((post, ind) => ind === 0).map(post => {
                            return (

                                <div key={post.id}>
                                    <Link to={`/blog/${post.slug}`} className={classes.latesttitle}>
                                        <h1>{post.title}</h1>
                                    </Link>

                                    <p className={classes.latestdate}>posted: {normDate(post.date.toDate())}</p>
                                    
                                    <img className={classes.latestimage} src={post.image} alt='whatever' />
                                    <p style={{color: 'white'}}>{post.description}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>

                {/* ---------------------------------line--------------------------------- */}

                <div className={classes.leftside}>
                    {posts.filter((post, ind) => ind !== 0).map(post => {
                        return (
                            <div className={classes.postblock} key={post.id}>
                                <Link to={`/blog/${post.slug}`} className={classes.posttitle}>
                                    <h1>{post.title}</h1>
                                </Link>

                                <p style={{color: 'white'}}>{post.description}</p>
                                <p className={classes.latestdate}>posted: {normDate(post.date.toDate())}</p>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Blog