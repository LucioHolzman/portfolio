import React from 'react';
import './card.scss';
import Post from '../Post';
import ImageContainer from '../ImageContainer';
import {contentCard} from '../../API/projects/project';
import Button from '../Button';
const Card = () => {

    const styleBtn = {
        backgroundColor: '#333',
        borderRadius: '5px',
        border: 'none',
        padding: '10px 15px',
        color: '#fff'
    }
    return (
        <>
            <div className="cotainer-card">
                <div className="img-card">
                <ImageContainer
                    imgData={contentCard}
                />
                </div>
                <Post
                    postData={contentCard}
                />
                <Button
                nameBtn='Button'
                customStyle={styleBtn}
                />
            </div>
        </>
    )
}

export default Card;