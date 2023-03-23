import { AddMethodModal, EditMethodModal } from '@/components/modal/adminmodal';
import MethodCard from '@/utils/Cards/Text card/MethodCard';
import React, { useState } from 'react'
import ButtonCombo from './ButtonCombo';

function MethodContainer({ methods, isEdit }) {
    const [foucsed, setAsfocus] = useState(null)
    const [arr, setArry] = useState([...methods])
    const [addModal, setAddmodal] = useState(false)
    const [EditModal, setEditmodal] = useState(false)
    const [editIngredient, setEditIngredient] = useState({})

    console.log(arr);
    function onAdd(method) {
        console.log('adding');
        setArry((prev) => {
            return [...prev,
            {
                method: method
            }]
        })
    }
    function onEdit(method, index) {

        let dummy;
        dummy = arr.map((element, i) => {
            if (i == index)
                return {
                    method: method
                }
            else return { ...element }

        })
        setArry(dummy)

    }
    function onDelete() {
        let dummy;
        dummy = arr.filter((ele, i) => i != foucsed)
        console.log(dummy);
        setArry(dummy)
        setAsfocus(null)

    }
    return (
        <>
            <AddMethodModal
                isModalOpen={addModal}
                onClickCancel={() => { setAddmodal(false) }}
                onSave={onAdd}
                title={'Method'}
            />
            {EditModal &&
                <EditMethodModal
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={editIngredient.method}
                    onSave={onEdit}
                    title={'Method'}
                    index={editIngredient.index}
                />
            }
            <div className="method-container mb-[32px]">
                <div className="sub-heading-container flex justify-between items-center mb-[21px]">
                    <h4 className="text-white text-[20px] leading-[32px] font-semibold">
                        Method
                    </h4>
                    {isEdit && <ButtonCombo onAddClick={() => { setAddmodal(true) }} onDeleteClick={onDelete} />}

                </div>
                <div className="method-details-container">
                    {arr.map((method, i) => {
                        return (
                            <div onDoubleClick={() => { setEditIngredient({ ...methods, index: i }); if (foucsed == i) setAsfocus(null); if (isEdit) setEditmodal(true) }} onClick={() => { setAsfocus(i); if (foucsed == i) setAsfocus(null) }} className={`${foucsed == i ? 'outline-none ring ring-violet-300' : ''}`}>
                                <MethodCard method={method.method} i={i + 1} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default MethodContainer