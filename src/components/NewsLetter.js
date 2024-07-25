import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#242424]'>
      <div className='mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1>Need Advice how to improve flow</h1>
            <p>Sign up to join NewsLetter</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input
                type='email'
                className='p-3 flex w-full rounded-md text-black'
                />
                <button className='bg-[#00df9a] text-white rounded-md font-medium w-[300px] ml-3 px-4 py-3 border-none'>
                    Notify Me
                </button>
            </div>
            <p>We care about your data. Read("")
            <span className='text-[#00df9a]'>Privacy Policy</span>
            </p>
        </div>
        <hr className='my-8 bg-grey-700 border-1'/>
      </div>
    </div>
  )
}

export default NewsLetter
