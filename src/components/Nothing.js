import React from 'react';
import datareal from '../data';

const Nothing = (props) => {
  const { data, setData } = props;

  const resetHandler = () => {
    setData(datareal);
  };

  return (
    <div className='w-full h-full overflow-y-hidden pb-36'>
      <div className='flex flex-col items-center overflow-y-hidden w-full h-full justify-center gap-y-6'>
        <div className='text-2xl font-bold overflow-y-hidden'>No Tours Left</div>
        <button onClick={resetHandler} className='bg-slate-200 flex justify-center items-center h-[10%] w-[13%] rounded-lg'>Refresh</button>
      </div>
    </div>
  );
};

export default Nothing;
