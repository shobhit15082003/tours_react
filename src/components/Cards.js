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
    <div className='w-full h-full grid grid-cols-3 px-32 gap-8  '>
        {
            (data.length!=0?
            data.map((card)=>(
                <div className=''><div className='mt-12 bg-slate-100 shadow-xl p-4 rounded-xl'>
                
                <Card card={card} key={card.id}> </Card>  
                <button className='bg-red-200 flex items-center justify-center mt-5 mx-auto w-9/12 h-[5vh] rounded-xl' onClick={()=>dataHandler(card.id)}>Not Intereted</button>
                </div></div>
            )):
            <div className=' w-full h-full'><Nothing data={data} setData={setData}></Nothing></div>)
        }
    </div>
  )
}

export default Cards
