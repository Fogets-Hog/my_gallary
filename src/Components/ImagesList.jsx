import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from '../MySlide/ImageModal';
import FuncButtons from '../MySlide/FuncButtons';
const ImagesList = ({ imgs }) => {
    
    const [modalActive, setModalActive] = useState(false);
    const [ImgSrcActive, setImgSrcActive] = useState("");
    const [ImgIDActive, setImgIDActive] = useState("");
    const ShowModal = (src, id) => {
        setModalActive(true);
        setImgSrcActive(src);
        setImgIDActive(id);
    }
    // const ChangeSlide = (n) => {
    //     console.log(n);
    // }
          
   const ChangeSlideNext=()=>{
if (ImgIDActive===imgs.length){
    
    setImgIDActive(1);
    setImgSrcActive(imgs[0].src);
    console.log(ImgIDActive);
}
else{
    setImgIDActive(ImgIDActive+1);
    setImgSrcActive(imgs[ImgIDActive].src);
    console.log(ImgIDActive);
}

   }
   const ChangeSlidePrev=()=>{
    if (ImgIDActive<=1){
        setImgIDActive(imgs.length);
        setImgSrcActive(imgs[imgs.length-1].src);
        console.log(ImgIDActive);
    }
    else{
    setImgIDActive(ImgIDActive-1);
    setImgSrcActive(imgs[ImgIDActive].src);
    console.log(ImgIDActive);
    }
}
    return (
        <div className='container'>
            {imgs.map((img) =>
                <ImageItem img={img}
                    onClick={() => ShowModal(img.src, img.id)}
                />
            )}
            <FuncButtons
                active={modalActive}
                idImg={ImgIDActive}
                // ChangeSlide={() => ChangeSlide()}
                ChangeSlidePrev={() =>ChangeSlidePrev()}
                ChangeSlideNext={() =>ChangeSlideNext()}
                setActive={setModalActive}
                setIdImg={setImgIDActive}
  
                setSrcImg ={setImgSrcActive}
                
            />
            <ImageModal
                imgs ={ imgs }
                idImg={ImgIDActive}
                srcImg={ImgSrcActive}
               
                setSrcImg ={setImgSrcActive}
                active={modalActive}
                setActive={setModalActive}
            />
        </div>
    );
};

export default ImagesList;