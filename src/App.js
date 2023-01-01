import React,{useState} from 'react';
import ImagesList from './Components/ImagesList';

import "./Style/App.css";
function App() {
  const [imgs,setImgs]= useState([
    {id:1,src:'https://sun9-31.userapi.com/impg/vRwb_d3F2Zk_CLNdL13ZdnHRxoEojh_AL3dzVg/hoDWU_KwhDk.jpg?size=1920x1381&quality=96&sign=7b5e6d7515f00425fd4635f6940400b8&type=album'},
    {id:2,src:'https://sun9-62.userapi.com/impg/9cX8akgV4HNLYLpWQbuw25UilFXUUYtlv0oL_Q/lUeq7TI4e1Y.jpg?size=1920x1392&quality=96&sign=4f6ac3dae5743da4f81c4c8b187ad9a3&type=album'},
    {id:3,src:'https://sun9-27.userapi.com/impg/DpVxuWYORImDEezbyNbZ__qYCPibvtjtIoqHPQ/5Ty-HSju-Y4.jpg?size=1920x1080&quality=96&sign=7b5a61e34ad686e3158d434ce1b0c973&type=album'},
    {id:4,src:'https://sun9-72.userapi.com/impg/9z94NmlMDZ0kbPLFYUBZnPtI-pDbyX-j2SVPtQ/SiIcQYzvQx0.jpg?size=2560x1832&quality=96&sign=396a45ca3e1989bc98a324d0ea5af7ce&type=album'},
    {id:5,src:'https://sun9-87.userapi.com/impg/tFOB3fU9Oj20KiKUzQwWUfMkEDkdvc9eNjHewA/bDtnV5v6YO0.jpg?size=1920x1080&quality=96&sign=adf3e0edda9900875ecc496ebcef3b4e&type=album'},
    {id:6,src:'https://sun9-31.userapi.com/impg/vRwb_d3F2Zk_CLNdL13ZdnHRxoEojh_AL3dzVg/hoDWU_KwhDk.jpg?size=1920x1381&quality=96&sign=7b5e6d7515f00425fd4635f6940400b8&type=album'},
    {id:7,src:'https://sun9-62.userapi.com/impg/9cX8akgV4HNLYLpWQbuw25UilFXUUYtlv0oL_Q/lUeq7TI4e1Y.jpg?size=1920x1392&quality=96&sign=4f6ac3dae5743da4f81c4c8b187ad9a3&type=album'},
    {id:8,src:'https://sun9-27.userapi.com/impg/DpVxuWYORImDEezbyNbZ__qYCPibvtjtIoqHPQ/5Ty-HSju-Y4.jpg?size=1920x1080&quality=96&sign=7b5a61e34ad686e3158d434ce1b0c973&type=album'},
    {id:9,src:'https://sun9-72.userapi.com/impg/9z94NmlMDZ0kbPLFYUBZnPtI-pDbyX-j2SVPtQ/SiIcQYzvQx0.jpg?size=2560x1832&quality=96&sign=396a45ca3e1989bc98a324d0ea5af7ce&type=album'},
    {id:10,src:'https://sun9-31.userapi.com/impg/vRwb_d3F2Zk_CLNdL13ZdnHRxoEojh_AL3dzVg/hoDWU_KwhDk.jpg?size=1920x1381&quality=96&sign=7b5e6d7515f00425fd4635f6940400b8&type=album'},
    {id:11,src:'https://sun9-62.userapi.com/impg/9cX8akgV4HNLYLpWQbuw25UilFXUUYtlv0oL_Q/lUeq7TI4e1Y.jpg?size=1920x1392&quality=96&sign=4f6ac3dae5743da4f81c4c8b187ad9a3&type=album'},
    {id:12,src:'https://sun9-27.userapi.com/impg/DpVxuWYORImDEezbyNbZ__qYCPibvtjtIoqHPQ/5Ty-HSju-Y4.jpg?size=1920x1080&quality=96&sign=7b5a61e34ad686e3158d434ce1b0c973&type=album'},
    {id:13,src:'https://sun9-72.userapi.com/impg/9z94NmlMDZ0kbPLFYUBZnPtI-pDbyX-j2SVPtQ/SiIcQYzvQx0.jpg?size=2560x1832&quality=96&sign=396a45ca3e1989bc98a324d0ea5af7ce&type=album'},
    {id:14,src:'https://sun9-87.userapi.com/impg/tFOB3fU9Oj20KiKUzQwWUfMkEDkdvc9eNjHewA/bDtnV5v6YO0.jpg?size=1920x1080&quality=96&sign=adf3e0edda9900875ecc496ebcef3b4e&type=album'},
    {id:15,src:'https://sun9-31.userapi.com/impg/vRwb_d3F2Zk_CLNdL13ZdnHRxoEojh_AL3dzVg/hoDWU_KwhDk.jpg?size=1920x1381&quality=96&sign=7b5e6d7515f00425fd4635f6940400b8&type=album'},
    {id:16,src:'https://sun9-62.userapi.com/impg/9cX8akgV4HNLYLpWQbuw25UilFXUUYtlv0oL_Q/lUeq7TI4e1Y.jpg?size=1920x1392&quality=96&sign=4f6ac3dae5743da4f81c4c8b187ad9a3&type=album'},
    {id:17,src:'https://sun9-27.userapi.com/impg/DpVxuWYORImDEezbyNbZ__qYCPibvtjtIoqHPQ/5Ty-HSju-Y4.jpg?size=1920x1080&quality=96&sign=7b5a61e34ad686e3158d434ce1b0c973&type=album'},
    {id:18,src:'https://sun9-72.userapi.com/impg/9z94NmlMDZ0kbPLFYUBZnPtI-pDbyX-j2SVPtQ/SiIcQYzvQx0.jpg?size=2560x1832&quality=96&sign=396a45ca3e1989bc98a324d0ea5af7ce&type=album'},
  
  ]);

 
  return (
    <div className='App'>
      <div className='Header'>

      </div>
      <div className='Gallery'>
        <ImagesList imgs={imgs}/>
      </div>
    </div>
  );
}

export default App;
