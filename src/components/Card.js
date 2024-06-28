import React, { useState } from 'react'

const Card = (props) => {
    const card=props.card;
    const [info,setinfo]=useState(false);
    function infoHandler(){
        setinfo(!info);
    }
  return (
    <div className='flex flex-col justify-between'>
      {/* id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://cdn.thecodehelp.in/Agra.jpeg",
		price: "35,758", */}
        <img src={card.image} className='h-[50vh] w-full'></img>
        <div className='text-green-600 text-xl font-semibold mt-2'>₹ {card.price}</div>
        <div className='font-bold text-2xl'>{card.name}</div>
        <div className='font-semibold'>{card.info.length<=200 || info ?card.info:`${card.info.substring(0,200)}...`}
        <span >{card.info.length > 200 &&
         info ? (<button onClick={infoHandler} className='text-blue-400'>Show Less</button>):(<button onClick={infoHandler} className='text-blue-400'>Read More</button>) }</span>
        </div>
    </div>
  )
}

export default Card
