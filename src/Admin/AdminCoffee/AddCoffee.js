import useMediaQuery from '@/Hooks/useMediaQuery';
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea';
import React, { useEffect, useRef, useState } from 'react'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import CocktailFileUpdate from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/CocktailFileUpdate';
import { AddGeneric, AddNewTitle } from '@/components/modal/adminmodal';
import GenericCard from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/GenericCard';
import { useDispatch } from 'react-redux';
import { createProduct } from '@/store/slices/product';
import Breadcrumb from '@/components/Breadcrumb';
import { uploadimage } from '@/store/slices/ui';
import { successtoast, errortoast } from '@/components/tostify';
import Link from 'next/link';


function AddCoffee({subcategory}) {
    const isEdit = true;
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");
    const [newMockData, setNewMockData] = useState({
        ingredients: {
            values: [],
        },
        methods: {
            values: [],

        },
        presentations: {
            values: [],

        }
    });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const textAreaRef = useRef(null);
    const [drinkName, setName] = useState('')
    const [abv, setabv] = useState('')
    const [isSAve, setSaved] = useState(false)
    const [upimage, setimage] = useState()
    const dispatch = useDispatch()

    // new generic approach
    useEffect(() => {
        console.log(newMockData);

    }, [newMockData])
    function addNewTitle(name) {
        setNewMockData(((prev) => {
            return {
                ...prev,
                [name]: {
                    type: null,
                    values: [],
                }
            }
        }))

    }
    function setType(title, type, desc, quantity) {
        let firstval = {}
        if (type == 0)
            firstval = {
                name: desc
            }
        if (type == 1)
            firstval = {
                name: desc,
                quantity: quantity
            }

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: {
                    type: type,
                    values: [{ ...firstval }],
                }
            }
        }))

    }
    function setActive(title, data) {
        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: {
                    ...prev[title],
                    isActive: data,
                }
            }
        }))

    }
    function addValues(title, data) {

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: {
                    ...prev[title],
                    values: [...prev[title].values, { ...data }],
                }
            }
        }))

    }
    function editValues(title, data, index) {

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: {
                    ...prev[title],
                    values: prev[title].values.map((e, i) => {
                        if (i == index)
                            return { ...data }
                        return { ...e }

                    }
                    ),
                }
            }
        }))

    }
    function deleteItems(title, data) {

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: {
                    ...prev[title],
                    values: [...data]
                }
            }
        }))

    }
    function deleteSection(title) {
        setNewMockData(((prev) => {
            const copy = { ...prev }
            delete copy[title]
            console.log(copy);
            return copy

        }))

    }
    function createdrink() {
        console.log('calling');
        let data
        data = {
            [`${subcategory}_name`]: drinkName,
            description: textAreaRef.current.value || '',
            abv: abv,
            ingredients: newMockData.ingredients,
            methods: newMockData.methods,
            presentations: newMockData.presentations,


        }


        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(createProduct(subcategory, { ...data, image: imageurl })).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            : successtoast({ message: `${drinkName} is created successfully` });
                        if (!res?.error)
                            clearForm()
                    })
                else console.log("cannot upload")
            })
        }
        else
            dispatch(createProduct(subcategory, data)).then((res) => {
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: `${drinkName} is created successfully` });
                if (!res?.error)
                    clearForm()
            })

    }
    function clearForm() {

        setName("");
        setabv("");
        setNewMockData({
            ingredients: {
                values: [],
                // isActive: false
            },
            methods: {
                values: [],
                // isActive: false

            },
            presentations: {
                values: [],
                // isActive: false

            }
        });
        setimage()
        setSaved(true)
        setTimeout(() => {

            setSaved(false)
        }, 1000);
    }
    function checkVals() {
        if (

            drinkName != "" 
            // &&
            // newMockData.ingredients.values.length > 0 &&
            // newMockData.methods.values.length > 0 &&
            // newMockData.presentations.values.length > 0
        )
            return true
        return false
    }
    const handleChange = event => {
        const newValue = event.target.value;
        if (/^\d*\.?\d*$/.test(newValue)) {
            setabv(newValue);
        }
    };
    return (
        <>
            {isAddModalOpen && <AddNewTitle
                isModalOpen={isAddModalOpen}
                onClickCancel={() => { setIsAddModalOpen(false) }}
                onSave={addNewTitle}
                title={'Title'}

            />
            }
            {isEditModalOpen && <AddGeneric
                isModalOpen={isEditModalOpen}
                onClickCancel={() => { setIsEditModalOpen(false) }}
                onSave={addDesc}
                title={'Title'}

            />
            }
            <div className='outer-container'>
                <div className="flex flex-row items-center justify-between">
                    <Breadcrumb />
                    <div className="flex items-center justify-center">

                        <ConditionalButton label={'Save'} condition={checkVals()} onClickHandler={() => { createdrink() }} />
                        <Link href={`specs/cocktail`}>
                            <div className=' ml-[10px] '>

                                <ConditionalButton label={'Cancel'} condition={true} onClickHandler={() => { }} />
                            </div>
                        </Link>
                    </div>
                </div>
                {/* image and desc */}

                <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
                    <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">
                        <CocktailFileUpdate setimage={setimage} isClear={isSAve} isEdit={true} />
                    </div>

                    <div className="desc-container inline-block w-full  text-white">
                        <div
                            className={`heading-container mb-[12px] flex justify-between items-center ${isMobile && "text-center"}`}
                        >
                            <div
                                className={`w-full flex items-center ${isMobile && "justify-around"
                                    }`}
                            >
                                <div className='input-desc flex flex-col'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Item Name</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                                        value={drinkName || ''} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                {/* <div className='input-val flex flex-col ml-[25px]'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Alcohol percentage</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none pr-[5px]'
                                        value={abv || ''} onChange={(e) => { handleChange(e) }} />

                                </div> */}
                            </div>
                        </div>

                        <p
                            className={`description text-[16px] leading-6 ${isMobile && "text-center"
                                }`}
                        >
                            <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Add Desc</h3>
                            <DescriptionTextArea textAreaRef={textAreaRef} isEdit={true} content={''} isSAve={isSAve} />
                        </p>
                    </div>

                </div>
                <div className="titleContainer">
                    {/* <div className="flex items-center justify-between p-[10px]">
                        <ChipWithLeftButton label={'ADD ITEM'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setIsAddModalOpen(true) }} />
                    </div> */}

                    {Object.keys(newMockData).map((e) =>
                        <GenericCard title={e} type={"notype"} arr={newMockData[e].values} isEdit={isEdit} setTypeFunction={(title, type, input1, input2) => { setType(title, type, input1, input2) }}
                            addValuesOnData={addValues} editValuesat={editValues} deleteItem={deleteItems} deleteSection={deleteSection} isActive={newMockData[e].isActive} setActive={setActive} />
                    )}

                </div>
            </div>
        </>
    )
}

export default AddCoffee