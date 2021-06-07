import React from 'react';
import './side.scss';
import ImageContainer from '../ImageContainer';

const Side = ({transformPost: {title, content, side, img}, handleContentPost}) => {
    return (
        <>
            <div 
            onClick={() => handleContentPost(title, content)} 
            className={side}
            >
            <ImageContainer
            imgData={{img, title}}
            />
            </div>
        </>
    )
}
      
export default Side;