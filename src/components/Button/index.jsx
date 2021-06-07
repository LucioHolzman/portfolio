import React from 'react';
import './button.scss'
const Button = ({nameBtn, customStyle}) => {

    return (
        <>
            <div className="container-btn">
                <button 
                className='btn'
                style={customStyle} 
                >{nameBtn}</button>
            </div>
        </>
    )
}

export default Button;