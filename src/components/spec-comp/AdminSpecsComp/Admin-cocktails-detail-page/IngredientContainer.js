import { AddIngredientModal, EditIngredientModal } from '@/components/modal/adminmodal';
import PrepText from '@/utils/Cards/Text card/PrepText';
import React, { useState } from 'react'
import ButtonCombo from './ButtonCombo';

function IngredientContainer({ ingridients, isEdit }) {
    const [foucsed, setAsfocus] = useState(null)
    const [arr, setArry] = useState([...ingridients])
    const [addModal, setAddmodal] = useState(false)
    const [EditModal, setEditmodal] = useState(false)
    const [editIngredient, setEditIngredient] = useState({})
    console.log(arr);
    function onAdd(name, value) {
        console.log('adding');
        setArry((prev) => {
            return [...prev,
            {
                name: name, quantity: value
            }]
        })

    }
    function onEdit(name, value, index) {
        
        let dummy;
        dummy = arr.map((element, i) => {
            if (i == index)
                return {
                    name: name, quantity: value
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
            <AddIngredientModal
                isModalOpen={addModal}
                onClickCancel={() => { setAddmodal(false) }}
                onSave={onAdd}
                title={'Ingredient'}

            />
            {EditModal &&
                <EditIngredientModal
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={editIngredient.name}
                    inputtwo={editIngredient.quantity}
                    onSave={onEdit}
                    title={'Ingredient'}
                    index={editIngredient.index}
                />
            }
            <div className="ingridients-container mb-[16px] ">
                <div className="sub-heading-container  mb-[21px] flex items-center justify-between">
                    <h4 className="text-white text-[20px] leading-[32px] font-semibold mb-[14px] lg:mb-0">
                        Ingredients
                    </h4>
                    {isEdit && <ButtonCombo onAddClick={() => { setAddmodal(true) }} onDeleteClick={onDelete} />}
                </div>
                <div className="ingridient-details-container">
                    {arr.map((ingridient, i) => {
                        return (
                            <div onDoubleClick={() => { setEditIngredient({ ...ingridient, index: i }); if (foucsed == i) setAsfocus(null); if (isEdit) setEditmodal(true) }} onClick={() => { setAsfocus(i); if (foucsed == i) setAsfocus(null) }} className={`${foucsed == i ? 'outline-none ring ring-violet-300' : ''}`}>
                                <PrepText ingredient={ingridient.name} quantity={ingridient.quantity} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default IngredientContainer