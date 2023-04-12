import Image from 'next/image'
import React, { useState } from 'react'
import { DeleteCircularButton, EditCircularButton } from './CircularButton'
import SwitchComp from './SwitchComp'

function TableComponent({ renderRows, renderHeader }) {

    return (
        <div className='TableComponent w-auto overflow-x-auto sm:overflow-hidden sm:w-full'>
            <table class="table-fixed  border border-b-[#3C3C3C] border-r-0 border-t-0 border-l-0 sm:w-full">
                <thead className='h-[56px]'>
                    <tr >
                        {renderHeader()}
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#3C3C3C]">

                    {renderRows()}
                </tbody>
            </table>
        </div >
    )
}

export default TableComponent