import React from 'react';
import '../Style/App.css';
const ImageModal = ({active,setActive,srcImg}) => {
    console.log({srcImg})
    return (
                 <div className={active? 'modal active':'modal'} onClick={()=>setActive(false)}>       
            
                 </div>
    );
};

export default ImageModal;