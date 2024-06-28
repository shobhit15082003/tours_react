import React from 'react'
import Card from './Card';
import Nothing from "./Nothing"
const Cards = (props) => {
    const data=props.data;
    const setData=props.setData;
    function dataHandler(id){
        const newData=data;
        const neww=newData.filter((dataa)=>dataa.id!==id);
        setData(neww);
            // console.log(id);
    }
  return (
    <div className='w-full h-full '>
        {
            (data.length!=0?
            data.map((card)=>(
                <div>
              <Card card={card} key={card.id}> </Card>  
              <button onClick={()=>dataHandler(card.id)}>Not Intereted</button>
              </div>
            )):
            <div className=' w-full h-full'><Nothing data={data} setData={setData}></Nothing></div>)
        }
    </div>
  )
}

export default Cards
