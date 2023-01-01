import React from 'react';
import { useState } from 'react';
import '../Style/App.css';
import ImageModal from './ImageModal';
const ImageItems = (props) => {
    const[modalActive,setModalActive]= useState(true)
    const ShowModal = (src) => {
      console.log(src);
<ImageModal active={modalActive} setActive={setModalActive} srcImg={src}/>
        return (
            <div>
                
            </div>
        );
    };

    return (
        <div>

            <div className='img-box' onClick={() => ShowModal(props.img.src)} alt='gdgdffs\f'>
                <img src={props.img.src} alt='gdgdf'/>
                
            </div>
        </div>
    );
};

export default ImageItems;