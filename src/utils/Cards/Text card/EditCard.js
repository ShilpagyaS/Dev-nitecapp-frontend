import Image from 'next/image'
import React from 'react'

function EditCard({ editContent, isEdit }) {
    return (
        <div className={`choice-container ${isEdit ? 'bg-[#2C2C2C]  py-2 px-4 rounded-[5px] ':''} flex justify-between text-white items-center`}>
            <p className=" bg-transparent outline-none " contentEditable={isEdit ? true : false}>{`${editContent} `}</p>
            {/* <Image
                src={'/asset/EditVector.svg'}
                // src={'/asset/DeleteVector.svg'}
                width={20}
                height={20}
                className="bg-transparent cursor-pointer ml-[15px]"
                onClick={() => { console.log("hahah"); }}
            /> */}
        </div>
    )
}

export default EditCard