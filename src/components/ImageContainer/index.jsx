import React from 'react';
import './imageContainer.scss';
const ImageContainer = ({imgData: {img, title, customImg}}) => {
    return (
        img ?
        <div className="container-img">
            <img 
            src={img} 
            alt={title} 
            style={customImg} 
            />
        </div>
        :
        <>
        </>
    )
}

export default ImageContainer;