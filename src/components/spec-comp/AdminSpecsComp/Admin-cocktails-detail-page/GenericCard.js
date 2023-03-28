import { AddIngredientModal, AddNewDataModal, AddNewFirstItem, DeleteSection, EditNewModal } from '@/components/modal/adminmodal';
import MethodCard from '@/utils/Cards/Text card/MethodCard'
import PrepText from '@/utils/Cards/Text card/PrepText'
import Simplecard from '@/utils/Cards/Text card/Simplecard'
import SplitCard from '@/utils/Cards/Text card/SplitCard';
import React, { useState } from 'react'
import ButtonCombo from './ButtonCombo';

function GenericCard({ title, type, arr, isEdit, setTypeFunction, addValuesOnData, editValuesat, deleteItem, deleteSection, isActive, setActive }) {
    console.log(title, type, arr, isActive);
    if (title == 'ingredients') type = 1
    if (title == 'presentation') type = 1
    if (title == 'methods') type = 0
    console.log(title, type, arr, isActive);
    const [FirstModal, setFirstTimemodal] = useState(false)
    const [addModal, setAddmodal] = useState(false)
    const [EditModal, setEditmodal] = useState(false)
    const [editItem, setEditItem] = useState({})
    const [foucsed, setAsfocus] = useState(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [localIsActive, setLocalIsActive] = useState(isActive)



    function initiateFirst(input1, input2, cardType) {
        setTypeFunction(title, cardType, input1, input2)

        setFirstTimemodal(false)
    }
    function addValues(input1, input2) {
        let dummy = {}
        if (type == 0) dummy = { name: input1 }
        if (type == 1) {
            if (title == 'ingredients') dummy = { name: input1, quantity: input2 }
            if (title == 'presentation') dummy = { step: input1, detail: input2 }
        }
        console.log(type, dummy);
        addValuesOnData(title, dummy)
        setAddmodal(false)

    }
    function editValues(input1, input2) {
        let dummy = {}
        if (type == 0) dummy = { name: input1 }
        if (type == 1) {
            if (title == 'ingredients') dummy = { name: input1, quantity: input2 }
            if (title == 'presentation') dummy = { step: input1, detail: input2 }
        }
        console.log(dummy);
        editValuesat(title, dummy, editItem.index)
        setEditmodal(false)
    }
    function onDelete() {
        let dummy;
        dummy = arr.filter((ele, i) => i != editItem.index)
        console.log(dummy);
        deleteItem(title, dummy)
        setEditmodal(false)

        setAsfocus(null)

    }
    function onDeleteSection() {
        deleteSection(title)
        setIsDeleteModalOpen(false)

        setAsfocus(null)

    }
    function setActiveData(e) {
        setLocalIsActive(e);
        setActive(title, e)
    }
    return (
        <>
            {FirstModal &&
                <AddNewFirstItem
                    isModalOpen={FirstModal}
                    onClickCancel={() => { setFirstTimemodal(false) }}
                    onSave={initiateFirst}
                    title={'Values'}
                />
            }
            {addModal && <AddNewDataModal
                isModalOpen={addModal}
                onClickCancel={() => { setAddmodal(false) }}
                onSave={addValues}
                title={'Values'}
                type={type}
                header={title}

            />}
            {EditModal &&
                <EditNewModal
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={title == 'presentation' ? editItem.step : editItem.name}
                    inputtwo={title == 'presentation' ? editItem.detail : editItem.quantity}
                    onSave={editValues}
                    title={title}
                    index={editItem.index}
                    type={type}
                    deleteBtn={onDelete}
                />
            }
            {isDeleteModalOpen && <DeleteSection
                isModalOpen={isDeleteModalOpen}
                onClickCancel={() => { setIsDeleteModalOpen(false) }}
                onSave={onDeleteSection}
                title={'Section'}
                inputone={title}

            />
            }
            <div className="border border-[#3C3C3C] p-[15px] m-[8px]">
                <div className="method-container mb-[32px]">
                    <div className="sub-heading-container flex justify-between items-center mb-[21px]">
                        <h4 className="text-white text-[20px] leading-[32px] font-semibold capitalize">
                            {title}
                        </h4>
                        {isEdit && <ButtonCombo onAddClick={() => {
                            type == null ? setFirstTimemodal(true) :
                                setAddmodal(true)
                            // console.log('not null --.', type);


                        }}
                            onDeleteClick={() => { setIsDeleteModalOpen(true) }}
                            customize={{ add: true, switch: true }}
                            isActive={localIsActive}
                            setActive={setActiveData}


                        />}

                    </div>
                    <div className="method-details-container">
                        {type == 0 &&
                            <>
                                {
                                    arr.map((e, i) =>
                                        <div onDoubleClick={() => { setEditItem({ ...e, index: i }); if (foucsed == i) setAsfocus(null); if (isEdit) setEditmodal(true) }} onClick={() => { setAsfocus(i); if (foucsed == i) setAsfocus(null) }} className={`${foucsed == i ? 'outline-none ring ring-violet-300' : ''}`}>
                                            <Simplecard content={e.name} i={i + 1} />
                                        </div>
                                    )
                                }
                            </>
                        }
                        {type == 1 &&
                            <>
                                {
                                    arr.map((e, i) =>
                                        <div onDoubleClick={() => { setEditItem({ ...e, index: i }); if (foucsed == i) setAsfocus(null); if (isEdit) setEditmodal(true) }} onClick={() => { setAsfocus(i); if (foucsed == i) setAsfocus(null) }} className={`${foucsed == i ? 'outline-none ring ring-violet-300' : ''}`}>

                                            <SplitCard desc={title == 'ingredients' ? e.name : e.step} quantity={title == 'ingredients' ? e.quantity : e.detail} />
                                        </div>
                                    )
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenericCard