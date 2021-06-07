import React from 'react';
import ImageContainer from '../ImageContainer';
import './post.scss';

const Post = ({postData: {title, content}}) => {
    const customImg = {
    }
    
    return (
        <>
            <div className="container-post">
                <h1 className="title">{title}</h1>
                <p className="post">{content}</p>
            </div>
        </>
    )
}

export default Post;