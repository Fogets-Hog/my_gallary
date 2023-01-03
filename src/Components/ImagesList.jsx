import React,{useState} from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
const ImagesList = ({imgs}) => {
const[modalActive,setModalActive]= useState(false);
const [ImgSrcActive,setImgSrcActive] = useState("");
    const ShowModal = (src) => {
        setModalActive(true);
        setImgSrcActive(src);   
     }
    return (
        <div className='container'>
                {imgs.map((img)=>
                 <ImageItem img={img}
                 onClick ={()=>ShowModal(img.src)}
                 />
                )}
                <ImageModal
                srcImg={ImgSrcActive}
                active={modalActive}
                setActive={setModalActive}
                />
        </div>
    );
};

export default ImagesList;