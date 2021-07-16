import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import posts from '../tempdata/tempPostData'
import classes from './BlogPostPage.module.css'
import { postsFirebase } from '../firebase/config'


const normDate = dateStr => {
    const mon = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const date = new Date(Date.parse(dateStr))
    return `${mon[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}


const BlogPostPage = props => {


    let { blogpost } = useParams()



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



    const thePost = posts.filter(post => post.slug === blogpost)[0]

    return (
        <>
            <h1 style={{ color: 'white', borderBottom: '1px solid aqua', marginBottom: '20px' }}>Blog</h1>
            <div className={classes.posttemplate}>
                <div className={classes.leftside}>

                </div>

                {/* ----------------------------------------------------- */}

                {thePost
                    ? <div className={classes.rightside}>
                        <img src={thePost.image} className={classes.featuredimage} alt={thePost.title} />
                        <h1 className={classes.title}>{thePost.title}</h1>
                        <p className={classes.postdate}>Posted: {normDate(thePost.date.toDate())}</p>
                        <div className={classes.htmlblock} dangerouslySetInnerHTML={{ __html: thePost.text }}></div>
                        <p className={classes.tagblock}>TAGS:</p>
                        {thePost.categories.map(tag => <p className={classes.tagss} key={tag}>{tag} </p>)}
                    </div>
                    : <h1 style={{ color: 'white' }}>Error</h1>}
            </div>

        </>
    )
}

export default BlogPostPage
