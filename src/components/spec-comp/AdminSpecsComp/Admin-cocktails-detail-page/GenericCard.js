import { AddIngredientModal, AddNewDataModal, AddNewFirstItem, DeleteSection, EditNewModal, EditIngredientModal } from '@/components/modal/adminmodal';
import MethodCard from '@/utils/Cards/Text card/MethodCard'
import PrepText from '@/utils/Cards/Text card/PrepText'
import Simplecard from '@/utils/Cards/Text card/Simplecard'
import SplitCard from '@/utils/Cards/Text card/SplitCard';
import React, { useState } from 'react'
import ButtonCombo from './ButtonCombo';

function GenericCard({ title, type, arr, isEdit, setTypeFunction, addValuesOnData, editValuesat, deleteItem, deleteSection, isActive, setActive, fromeditnigscreen }) {
    console.log(title, type, arr, isActive);
    if (title == 'ingredients') type = 1
    if (title == 'presentations') type = 1
    if (title == 'methods') type = 0
    // console.log(title, type, arr, isActive);
    const [FirstModal, setFirstTimemodal] = useState(false)
    const [addModal, setAddmodal] = useState(false)
    const [addIngredients, setAddIngredients] = useState(false)
    const [EditModal, setEditmodal] = useState(false)
    const [EditIngredient, setEditIngredient] = useState(false)
    const [editItem, setEditItem] = useState({})
    const [foucsed, setAsfocus] = useState(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // const [localIsActive, setLocalIsActive] = useState()



    function initiateFirst(input1, input2, cardType) {
        setTypeFunction(title, cardType, input1, input2)

        setFirstTimemodal(false)
    }
    function addValues(input1, input2) {
        let dummy = {}
        if (type == 0) dummy = { name: input1 }
        if (type == 1) {
            if (title == 'ingredients') dummy = { name: input1, quantity: input2 }
            if (title == 'presentations') dummy = { step: input1, detail: input2 }
        }
        // console.log(type, dummy);
        addValuesOnData(title, dummy)
        setAddmodal(false)

    }
    function addTngredientValues(dummy) {
        addValuesOnData(title, dummy)
        setAddmodal(false)

    }
    function editValues(input1, input2) {
        let dummy = {}
        if (type == 0) dummy = { name: input1 }
        if (type == 1) {
            if (title == 'ingredients') dummy = { name: input1, quantity: input2 }
            if (title == 'presentations') dummy = { step: input1, detail: input2 }
        }
        // console.log(dummy);
        editValuesat(title, dummy, editItem.index)
        setEditmodal(false)
    }
    function editIngredientValues(dummy) {

        editValuesat(title, dummy, editItem.index)
        setEditmodal(false)
    }
    function onDelete() {
        let dummy;
        dummy = arr.filter((ele, i) => i != editItem.index)
        console.log(dummy);
        deleteItem(title, dummy)
        setEditmodal(false)
        setEditIngredient(false)

        setAsfocus(null)

    }
    function onDeleteSection() {
        deleteSection(title)
        setIsDeleteModalOpen(false)

        setAsfocus(null)

    }
    function setActiveData(e) {
        // setLocalIsActive(e);
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
            {addIngredients && <AddIngredientModal
                isModalOpen={addIngredients}
                onClickCancel={() => { setAddIngredients(false) }}
                onSave={addTngredientValues}
                title={'Ingredient'}
                type={type}
                header={title}

            />}
            {addModal && <AddNewDataModal
                isModalOpen={addModal}
                onClickCancel={() => { setAddmodal(false) }}
                onSave={addValues}
                title={title}
                type={type}
                header={title}

            />}
         
            {EditModal &&
                <EditNewModal
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={title == 'presentations' ? editItem.step : editItem.name}
                    inputtwo={title == 'presentations' ? editItem.detail : editItem.quantity}
                    onSave={editValues}
                    title={title}
                    index={editItem.index}
                    type={type}
                    deleteBtn={onDelete}
                />
            }
            {EditIngredient &&
                <EditIngredientModal
                    isModalOpen={EditIngredient}
                    onClickCancel={() => { setEditIngredient(false) }}
                    data={editItem}
                    onSave={editIngredientValues}
                    title={'ingredient'}
                    index={editItem.index}
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
                            // type == null ? setFirstTimemodal(true) :
                            if (title == 'ingredients') setAddIngredients(true)
                            else setAddmodal(true)
                            // console.log('not null --.', type);


                        }}
                            onDeleteClick={() => { setIsDeleteModalOpen(true) }}
                            customize={{ add: true, switch: fromeditnigscreen && isEdit ? true : false }}
                            isActive={isActive}
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
                                        <div onDoubleClick={() => {
                                            setEditItem({ ...e, index: i });
                                            if (foucsed == i) setAsfocus(null);

                                            if (isEdit) {
                                                if (title == 'ingredients') {
                                                    setEditIngredient(true)
                                                }
                                                else
                                                    setEditmodal(true)

                                            }
                                        }}

                                            onClick={() => { setAsfocus(i); if (foucsed == i) setAsfocus(null) }} className={`${foucsed == i ? 'outline-none ring ring-violet-300' : ''}`}>

                                            <SplitCard desc={title == 'ingredients' ? e.name : e.step} quantity={title == 'ingredients' ? `${e.quantity} ${e.measure_name}` : e.detail} />
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