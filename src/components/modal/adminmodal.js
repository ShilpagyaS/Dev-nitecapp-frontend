import { getUnitOFMeasure } from '@/store/slices/product';
import { _INITIAL } from '@/utils/Constants';
import CustomSelect, { CustomSelectWithAllBlackTheme } from '@/utils/CustomSelect';
import SelectWithDebounce from '@/utils/DebounceSelect';
import InputFieldWirhAutoWidth from '@/utils/InputFieldWithAutoWidth';
import UploadBrandLogoInput from '@/utils/uploadBrandInput';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import { useDispatch } from 'react-redux';
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';

export function AddIngredientModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [ingredient, setingredient] = useState({ ingredient_id: '', name: '' })
    const [quantity, setQuantity] = useState("")
    const [measure, setmeasure] = useState({ measure_id: '', measure_name: '' })
    const dispatch = useDispatch()
    const [measureArray, setmeasureArray] = useState([])
    useEffect(() => {
        dispatch(getUnitOFMeasure()).then((res) => { setmeasureArray(res) })
    }, [])
    useEffect(() => { console.log(ingredient); }, [ingredient])
    useEffect(() => { console.log(measure); }, [measure])
    useEffect(() => { console.log(quantity); }, [quantity])

    function onIngredientSelect(data) {
        console.log(data);
        setingredient({ ingredient_id: data.value, name: data.label })
    }
    const handleNumberChange = event => {
        const newValue = event.target.value;
        if (/^\d*\.?\d*$/.test(newValue)) {
            setQuantity(newValue);
        }
    };
    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {
        let body = { ...ingredient, quantity, ...measure }
        console.log(body);
        onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-[200px] mb-[10px]'>

                <SelectWithDebounce
                    label={"Ingredients"}
                    placeholder={"search here"}
                    onChangeHandler={(e) => { onIngredientSelect(e) }}
                />
                <div className='flex'>

                    <div className='flex flex-col w-full'>
                        <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Quantity</h3>
                        <input value={quantity} onChange={handleNumberChange} className='box-border py-[8px] pl-[16px] rounded-[9px] h-[50px] border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px] 
                     placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none
                     focus:border-white  focus:ring-offset-white focus:ring-1 
                     block w-full  appearance-none pr-[35px]' />
                    </div>

                    <div className='flex flex-col w-full ml-[20px]'>
                        <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Unit</h3>

                        <CustomSelectWithAllBlackTheme
                            items={measureArray}
                            optionalFunction={(e) => { console.log(e); setmeasure({ measure_id: e.value, measure_name: e.label }) }} />
                    </div>
                </div>
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditIngredientModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, data, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [ingredient, setingredient] = useState({ ingredient_id: '', name: '' })
    const [quantity, setQuantity] = useState("")
    const [measure, setmeasure] = useState({ measure_id: '', measure_name: '' })
    const dispatch = useDispatch()
    const [measureArray, setmeasureArray] = useState([])
    const [EditModal, setEditmodal] = useState(false)


    const handleCancel = () => {
        onClickCancel();


    };
    const handleSave = () => {
        let body;
        body = { ...ingredient, quantity, ...measure }
        console.log(body);
        onSave(body)
        onClickCancel();


    };
    function onIngredientSelect(data) {
        console.log(data);
        setingredient({ ingredient_id: data.value, name: data.label })
    }
    const handleNumberChange = event => {
        const newValue = event.target.value;
        if (/^\d*\.?\d*$/.test(newValue)) {
            setQuantity(newValue);
        }
    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        dispatch(getUnitOFMeasure()).then((res) => { setmeasureArray(res) })
        console.log(data);
        setingredient({ ingredient_id: data.ingredient_id, name: data.name })
        setmeasure({ measure_id: data.measure_id, measure_name: data.measure_name })
        setQuantity(data.quantity)
    }, [])

    return (
        <>
            {EditModal &&
                <Delete
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={ingredient.name}
                    inputtwo={"2"}
                    onSave={() => { setEditmodal(false) }}
                    title={title}
                    index={0}
                    deleteBtn={deleteBtn}
                />
            }
            <Modal
                isOpen={isModalOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={customStyles}
            >
                <div className="text-white border-none outline-none">
                    <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
                </div>
                <div className='h-[200px] mb-[10px]'>

                    <SelectWithDebounce
                        label={"Ingredients"}
                        placeholder={"search here"}
                        defaultvalue={data}
                        onChangeHandler={(e) => { onIngredientSelect(e) }}
                    />
                    <div className='flex'>

                        <div className='flex flex-col w-full'>
                            <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Quantity</h3>
                            <input value={quantity} onChange={handleNumberChange} className='box-border py-[8px] pl-[16px] rounded-[9px] h-[50px] border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px] 
     placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none
     focus:border-white  focus:ring-offset-white focus:ring-1 
     block w-full  appearance-none pr-[35px]' />
                        </div>

                        <div className='flex flex-col w-full ml-[20px]'>
                            <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Unit</h3>

                            <CustomSelectWithAllBlackTheme
                                items={measureArray}
                                defaultSelect={{ value: data.measure_id, label: data.measure_name }}
                                optionalFunction={(e) => { console.log(e); setmeasure({ measure_id: e.value, measure_name: e.label }) }} />
                        </div>
                    </div>
                </div>

                <div className='btncontainers flex items-center justify-between mt-[18px] '>
                    <div className="flex items-center">
                        <button
                            className={`bg-[#3E3E3E] py-[7px] px-[24px] h-[41px] rounded-full 
                           
                        
                            text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                            onClick={() => { setEditmodal(true) }}
                        >
                            Delete
                        </button>
                    </div >
                    <div className='flex items-center'>

                        <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                        <div className='ml-[24px]'>
                            <ConditionalButton label={'Save'} condition={true} onClickHandler={handleSave} />
                        </div>
                    </div>

                </div>

            </Modal>
        </>
    )
}
export function AddMethodModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        // setinput2("");

    };

    const handleSave = () => {
        onSave(input1)
        onClickCancel();
        setinput1("");
        // setinput2("");

    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            {/* <div className='flex flex-col w-full'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Value</h3>
                <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={(input1 != "") ? true : false} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditMethodModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, inputone, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        // setinput2("");

    };


    const handleSave = () => {
        onSave(input1, index)
        onClickCancel();
        setinput1("");
        // setinput2("");

    };
    useEffect(() => {
        setinput1(inputone)
        // setinput2(inputtwo)
    }, [])
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            {/* <div className='flex flex-col w-full'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Value</h3>
                <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={(input1 != "") ? true : false} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}

export function AddTitle({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave(input1, input2)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Title</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            <div className='flex flex-col w-full'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Type</h3>
                <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={(input1 != "" && input2 != "") ? true : false} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddGeneric({ isModalOpen, onClickCancel, onSave, data, title }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave(input1, input2, index, type)


        onClickCancel();
        setinput1("");
        setinput2("");

    };
    const [selectarray, setArray] = useState([])
    const [type, setType] = useState(0)
    const [index, setIndex] = useState("")
    useEffect(() => {
        // console.log(data);
        let a = Object.keys(data)
        let d = a.map((e) => {
            return {
                value: data[e].name,
                label: data[e].name,
                type: data[e].type,
                indexat: e,
            }
        })
        setArray([...d])

    }, [])

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            {type == 1 &&
                < div className='flex flex-col w-full mb-[26px]'>
                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Value</h3>
                    <input value={input2} onChange={(e) => { setinput2(e.target.value) }}
                        className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                </div>
            }
            < div className='flex flex-col w-full'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Type</h3>
                <CustomSelect items={selectarray} optionalFunction={(e) => { setType(e.type), setIndex(e.indexat) }} />
            </div>

            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'}
                        condition={true}
                        // condition={(input1 != "" && input2 != "") ? true : false}
                        onClickHandler={handleSave} />
                </div>

            </div>

        </Modal >
    )
}
export function AddNewTitle({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    // const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        // setinput2("");

    };

    const handleSave = () => {
        onSave(input1)
        onClickCancel();
        setinput1("");
        // setinput2("");

    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Title</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            {/* <div className='flex flex-col w-full'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Type</h3>
                <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={input1 != "" ? true : false} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddNewFirstItem({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        let dummytype = null
        if (input2 == "") dummytype = 0
        else dummytype = 1
        onSave(input1, input2, dummytype)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Title</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            <div className='flex flex-col w-full'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Type</h3>
                <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={input1 != "" ? true : false} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddNewDataModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    // console.log(type);
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        // console.log(type);
        onSave(input1, input2)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div>
            {type == 1 &&
                <div className='flex flex-col w-full'>
                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Value</h3>
                    <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                </div>
            }
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={
                        true
                    } onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditNewModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [EditModal, setEditmodal] = useState(false)

    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave(input1, input2, index)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <>
            {EditModal &&
                <Delete
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={input1}
                    inputtwo={input2}
                    onSave={() => { setEditmodal(false) }}
                    title={title}
                    index={0}
                    type={type}
                    deleteBtn={deleteBtn}
                />
            }
            <Modal
                isOpen={isModalOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={customStyles}
            >
                <div className="text-white border-none outline-none">
                    <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
                </div>
                <div className='flex flex-col w-full mb-[26px]'>
                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Description</h3>
                    <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                </div>
                {type == 1 &&
                    <div className='flex flex-col w-full'>
                        <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Value</h3>
                        <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                    </div>
                }
                <div className='btncontainers flex items-center justify-between mt-[18px] '>
                    <div className="flex items-center">
                        <button
                            className={`bg-[#3E3E3E] py-[7px] px-[24px] h-[41px] rounded-full 
                           
                        
                            text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                            onClick={() => { setEditmodal(true) }}
                        >
                            Delete
                        </button>
                    </div >
                    <div className='flex items-center'>

                        <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                        <div className='ml-[24px]'>
                            <ConditionalButton label={'Save'} condition={(input1 != "" && input2 != "") ? true : false} onClickHandler={handleSave} />
                        </div>
                    </div>

                </div>

            </Modal>
        </>
    )
}
export function Delete({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        deleteBtn()
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Delete ${input1}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                    {`Do You Want To Delete ${input1} from ${title}`}
                </h3>

            </div>
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>No </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Yes'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function DeleteSection({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave()
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Delete ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                    {`Do You Want To Delete ${input1} ?"`}
                </h3>

            </div>
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>No </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Yes'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditDualValue({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [EditModal, setEditmodal] = useState(false)

    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave(input1, input2)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <>
            {EditModal &&
                <Delete
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={input1}
                    inputtwo={input2}
                    onSave={() => { setEditmodal(false) }}
                    title={title}
                    index={0}
                    type={type}
                    deleteBtn={deleteBtn}
                />
            }
            <Modal
                isOpen={isModalOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={customStyles}
            >
                <div className="text-white border-none outline-none">
                    <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
                </div>
                <div className='flex flex-col w-full mb-[26px]'>
                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Description</h3>
                    <input disabled value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                </div>

                <div className='flex flex-col w-full'>
                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Value</h3>
                    <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                </div>

                <div className='btncontainers flex items-center justify-between mt-[18px] '>
                    <div className="flex items-center">
                        {/* <button
                            className={`bg-[#3E3E3E] py-[7px] px-[24px] h-[41px] rounded-full 
                           
                        
                            text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                            onClick={() => { setEditmodal(true) }}
                        >
                            Delete
                        </button> */}
                    </div >
                    <div className='flex items-center'>

                        <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                        <div className='ml-[24px]'>
                            <ConditionalButton label={'Save'} condition={(input1 != "" && input2 != "") ? true : false} onClickHandler={handleSave} />
                        </div>
                    </div>

                </div>

            </Modal>
        </>
    )
}
export function EditKeyValue({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [EditModal, setEditmodal] = useState(false)

    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave(input1, input2)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <>
            {EditModal &&
                <Delete
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={input1}
                    inputtwo={input2}
                    onSave={() => { setEditmodal(false) }}
                    title={title}
                    index={0}
                    type={type}
                    deleteBtn={deleteBtn}
                />
            }
            <Modal
                isOpen={isModalOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={customStyles}
            >
                <div className="text-white border-none outline-none">
                    <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit `}<span className='capitalize'> {`${input1}`}</span></h4>
                </div>
                <div className='flex flex-col w-full'>
                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>{`Enter ${input1} value`}</h3>
                    <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                </div>

                <div className='btncontainers flex items-center justify-between mt-[18px] '>
                    <div className="flex items-center">
                        {/* <button
                            className={`bg-[#3E3E3E] py-[7px] px-[24px] h-[41px] rounded-full 
                           
                        
                            text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                            onClick={() => { setEditmodal(true) }}
                        >
                            Delete
                        </button> */}
                    </div >
                    <div className='flex items-center'>

                        <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                        <div className='ml-[24px]'>
                            <ConditionalButton label={'Save'} condition={(input1 != "" && input2 != "") ? true : false} onClickHandler={handleSave} />
                        </div>
                    </div>

                </div>

            </Modal>
        </>
    )
}
export function AddKeyValue({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [EditModal, setEditmodal] = useState(false)

    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave(input1, input2)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <>
            {EditModal &&
                <Delete
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={input1}
                    inputtwo={input2}
                    onSave={() => { setEditmodal(false) }}
                    title={title}
                    index={0}
                    type={type}
                    deleteBtn={deleteBtn}
                />
            }
            <Modal
                isOpen={isModalOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={customStyles}
            >
                <div className="text-white border-none outline-none">
                    <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${input1}`}</h4>
                </div>
                <div className='flex flex-col w-full'>
                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>{`Enter ${input1} Value`}</h3>
                    <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none'
                        placeholder='Enter Value' />
                </div>

                <div className='btncontainers flex items-center justify-between mt-[18px] '>
                    <div className="flex items-center">
                        {/* <button
                            className={`bg-[#3E3E3E] py-[7px] px-[24px] h-[41px] rounded-full 
                           
                        
                            text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                            onClick={() => { setEditmodal(true) }}
                        >
                            Delete
                        </button> */}
                    </div >
                    <div className='flex items-center'>

                        <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                        <div className='ml-[24px]'>
                            <ConditionalButton label={'Save'} condition={(input1 != "" && input2 != "") ? true : false} onClickHandler={handleSave} />
                        </div>
                    </div>

                </div>

            </Modal>
        </>
    )
}
export function AddCategory({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {

        onSave(input1, input2)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    function handleChange(e) {
        const { name, value } = e.target;

        setBrandForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none w-full flex items-center justify-center ">
                <h4 className="text-[32px] not-italic font-normal font-Prata mb-[20px]">{`Create ${title} Category`}</h4>
            </div>
            <div className='max-h-[456px]' >
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Name"
                    onChangeHandler={(e) => { setinput1(e.target.value) }}
                    value={input1}
                    name={"email"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <UploadBrandLogoInput
                    placeholder=""
                    label="Category Image"
                    onChangeHandler={(e) => { setinput2(e.target.value) }}
                    value={input2}
                    name={"logo"}
                    type={"text"}
                    errorResponnse={_INITIAL} />


                <div className='btncontainers flex items-center justify-between mt-[20px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Save'} condition={input1 != "" ? true : false} onClickHandler={handleSave} />
                    </div>

                </div>
            </div>
        </Modal>
    )
}
export function EditCategory({ isModalOpen, onClickCancel, onSave, inputone, inputtwo, id }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {

        onSave(input1, input2, id)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none w-full flex items-center justify-center ">
                <h4 className="text-[32px] not-italic font-normal font-Prata mb-[20px]">{`Edit Category`}</h4>
            </div>
            <div className='max-h-[456px]' >
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Name"
                    onChangeHandler={(e) => { setinput1(e.target.value) }}
                    value={input1}
                    name={"email"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <UploadBrandLogoInput
                    placeholder=""
                    label="Brand Logo"
                    onChangeHandler={(e) => { setinput2(e.target.value) }}
                    value={input2}
                    name={"logo"}
                    type={"text"}
                    errorResponnse={_INITIAL} />


                <div className='btncontainers flex items-center justify-between mt-[20px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Save'} condition={input1 != "" ? true : false} onClickHandler={handleSave} />
                    </div>

                </div>
            </div>
        </Modal>
    )
}
export function DeleteProduct({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave()
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Delete ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                    {`Deleting this will permanantly remove all the data of the Item .Do You Want To Delete ${title} ?"`}
                </h3>

            </div>
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>No </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Yes'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}