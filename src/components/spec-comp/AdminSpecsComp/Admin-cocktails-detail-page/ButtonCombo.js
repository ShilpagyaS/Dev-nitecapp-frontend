import { AddCircularButton, DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
import SwitchComp from '@/utils/SwitchComp'
import React from 'react'

function ButtonCombo({ onAddClick, onDeleteClick, customize, isActive, setActive }) {
    return (
        <div className='flex items-center justify-center'>
            {customize.add &&
                <AddCircularButton onClickHandler={onAddClick} />
            }
            {customize.delete &&

                <div className='ml-[15px]'>

                    <DeleteCircularButton onClickHandler={onDeleteClick} />
                </div>
            }
            {customize.switch &&

                <div className='ml-[15px]'>

                    <SwitchComp showHideStatus={isActive} onChangeHandler={setActive} />
                </div>
            }
        </div>
    )
}

export default ButtonCombo