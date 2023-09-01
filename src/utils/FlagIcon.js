import React from 'react'

function FlagIcon({ condition }) {
    return (
        <div className='p-[3px] rounded-full h-[30px] w-[30px] bg-[#292929] flex items-center justify-center'>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                <path d="M12.258 9.297L11.16 8.199C10.899 7.974 10.746 7.641 10.737 7.272C10.719 6.867 10.881 6.462 11.178 6.165L12.258 5.085C13.194 4.149 13.545 3.249 13.248 2.538C12.96 1.836 12.069 1.449 10.755 1.449H1.35V0.675C1.35 0.306 1.044 0 0.675 0C0.306 0 0 0.306 0 0.675V17.325C0 17.694 0.306 18 0.675 18C1.044 18 1.35 17.694 1.35 17.325V12.933H10.755C12.051 12.933 12.924 12.537 13.221 11.826C13.518 11.115 13.176 10.224 12.258 9.297Z"
                    className={`${condition ? 'fill-yellow-200' : ' fill-white'}`}
                />
            </svg>
        </div>
    )
}

export default FlagIcon