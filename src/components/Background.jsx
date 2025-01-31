import React from 'react'

function Background() {
  return (
   <>
    <div className='fixed z-[2] w-full h-screen'>  
      <div className='absolute top-[10%] w-full py-15 flex justify-center text-xl text-zinc-500 font-semibold'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tighter font-semibold text-zinc-500'>MY_WEBSITE</h1>
    </div>
   </>
  )
}

export default Background
