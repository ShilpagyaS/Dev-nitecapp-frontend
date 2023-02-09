import React, { useEffect } from 'react'

function Header() {
    useEffect(() => {
        //for logo url
      }, [])
    
  return (
    <div className='flex absolute left-0 flex-col items-start justify-center h-20 w-screen py-[12px] px-[36px] bg-black'>
        <img className='w-[56px] h-[57px]' src='https://seekvectorlogo.com/wp-content/uploads/2021/12/marriott-vector-logo-small.png'/>
    </div>
  )
}

export default Header