import Image from 'next/image'
import React from 'react'

function CircularButton({ svgUrl, onClickHandler }) {
    return (
        <button className='h-[44px] w-[44px] rounded-full bg-[#171717] flex items-center justify-center' onClick={onClickHandler}>
            <Image
                src={svgUrl}
                // src={'/asset/DeleteVector.svg'}
                width={20}
                height={20}
                className="bg-[#171717]"
            />
        </button>
    )
}

export default CircularButton
export function EditCircularButton({ onClickHandler }) {
    return (
        <CircularButton svgUrl='/asset/EditVector.svg' onClickHandler={onClickHandler} />
    )
}
export function AddCircularButton({ onClickHandler }) {
    return (
        <CircularButton svgUrl='/asset/AddButtonVector.svg' onClickHandler={onClickHandler} />
    )
}
export function DeleteCircularButton({ onClickHandler }) {
    return (
        <CircularButton svgUrl={'/asset/DeleteVector.svg' } onClickHandler={onClickHandler} />
    )
}

