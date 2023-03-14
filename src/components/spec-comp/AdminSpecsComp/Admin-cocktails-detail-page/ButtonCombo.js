import { AddCircularButton, DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
import SwitchComp from '@/utils/SwitchComp'
import React from 'react'

function ButtonCombo({ onAddClick, onDeleteClick }) {
    return (
        <div className='flex items-center justify-center'>
            <AddCircularButton onClickHandler={onAddClick} />
            <div className='ml-[15px]'>

                <DeleteCircularButton onClickHandler={onDeleteClick} />
            </div>
            <div className='ml-[15px]'>

                <SwitchComp />
            </div>
        </div>
    )
}

export default ButtonCombo