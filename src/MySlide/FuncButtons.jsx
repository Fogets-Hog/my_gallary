import React from 'react';
import '../Style/App.css';
const FuncButtons = ({imgs,idImg,active,ChangeSlidePrev,ChangeSlideNext,setActive,setIdImg}) => {
    

    return (
        <div>
           
            <div className={active ? 'FuncButt active' : 'FuncButt'}  >
                <div className='prevButt' alt='gdgdf' onClick={ChangeSlidePrev}>❮</div>
                <div className='nextButt' alt='gdgdf' onClick={ChangeSlideNext}>❯</div>
                <div className={active ? 'backgroundFunc active' : 'backgroundFunc'} onClick={() => setActive(false)}></div>
            </div>
            
        </div>
    );
};

export default FuncButtons;