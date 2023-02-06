import React from 'react';
import '../Style/App.css';
const ImageModal = ({ active, srcImg,idImg }) => {
    return ( 
            <div className={active ? 'modal active' : 'modal'}>
                <div className='boxModal'>
                <div className='modal__content'>
                    <img src={srcImg} alt='modal-img' />
                </div>
                </div>
            </div>            
    );
};

export default ImageModal;