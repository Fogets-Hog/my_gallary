import React from 'react';
import { useState } from 'react';
import '../Style/App.css';
const ImageItem = (props) => {
    return (
        <div>
            <div className='img-box' >
                <img src={props.img.src} onClick={props.onClick} alt='gdgdf'/>
            </div>
        </div>
    );
};

export default ImageItem;