import React from 'react'

const Model = () => {
  return (
    <div>
      <div className='absolute inset-x-0  top-[15%] text-center text-[#171a20]'>
        <h1 className='text-4xl font-extrabold m-2'>Model S</h1>
        <p className='text-xl font-bold'>From $71,090*</p>
        <p style={{ fontSize: '12px', fontWeight: 100 }}>After Est. Gas Savings</p>
      </div>
      <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
        <button className='bg-white opacity-65  rounded-sm w-80 lg:w-56 lg:mx-3 h-9 mt-2 text-xs font-semibold'>Explore Inventory</button>
        <button className='bg-[#393c41] opacity-65  rounded-sm w-80 lg:w-56 lg:mx-3 h-9 mt-2 text-white text-xs font-semibold'>Demo Drive</button>
      </div>
      <div style={{ fontSize: '12px', fontWeight: 100 }} className='text-center justify-center absolute inset-x-0 bottom-[3%]'>
        <p>*Price before savings is $74,990, excluding taxes and fees. Subject to change.</p>
        <p className='underline underline-offset-4'>Learn about est. gas savings.</p>
      </div>
  
    </div>
  )
}

export default Model