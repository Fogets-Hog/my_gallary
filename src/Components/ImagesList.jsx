import React from 'react';
import ImageItems from './ImageItems';
const ImagesList = ({imgs}) => {
    return (
        <div className='container'>
                {imgs.map((img)=>
                 <ImageItems img={img}/>
                )}
        </div>
    );
};

export default ImagesList;