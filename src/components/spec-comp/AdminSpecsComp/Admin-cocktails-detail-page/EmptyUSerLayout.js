import useMediaQuery from '@/Hooks/useMediaQuery';
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea';
import React, { useEffect, useRef, useState } from 'react'
import ConditionalButton from './ConditionalButton'
import CocktailFileUpdate from './CocktailFileUpdate';
import { AddGeneric, AddNewTitle } from '@/components/modal/adminmodal';
import ChipWithLeftButton from '@/utils/ChipWithLeftButton';
import GenericCard from './GenericCard';

function EmptyUSerLayout() {
    const isEdit = true;
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");

    const [newMockData, setNewMockData] = useState({
        ingredients: {
          values: [],
          type: 1,
          isActive: true
        },
        methods: {
          values: [],
          type: 0,
          isActive: false
    
        },
        presentation: {
          values: [],
          type: 1,
          isActive: true
    
        }
      });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const textAreaRef = useRef(null);


    const toggleEdit = () => {
        setEdit(prev => !prev)
        console.log(textAreaRef.current.innerText);
    }

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
                desc: desc
            }
        if (type == 1)
            firstval = {
                desc: desc,
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

                    <div className="text-container ">
                        <p className="text-white text-[14px]">
                            <span className="text-[#CCCCCC]">Specs / Coctail /</span> Southside
                        </p>
                    </div>
                    <div className="flex items-center justify-center">

                        <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={() => { }} />
                    </div>
                </div>
                {/* image and desc */}

                <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
                    <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">
                        <CocktailFileUpdate />
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
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Item Name</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none' />
                                </div>
                                <div className='input-val flex flex-col ml-[25px]'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Value</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none pr-[5px]' />

                                </div>
                            </div>
                        </div>

                        <p
                            className={`description text-[16px] leading-6 ${isMobile && "text-center"
                                }`}
                        >
                            <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Add Desc</h3>
                            <DescriptionTextArea textAreaRef={textAreaRef} isEdit={true} content={''} />
                        </p>
                    </div>

                </div>
                <div className="titleContainer">
                    <div className="flex items-center justify-between p-[10px]">
                        <ChipWithLeftButton label={'ADD ITEM'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setIsAddModalOpen(true) }} />
                    </div>

                    {Object.keys(newMockData).map((e) =>
                        <GenericCard title={e} type={newMockData[e].type} arr={newMockData[e].values} isEdit={isEdit} setTypeFunction={(title, type, input1, input2) => { setType(title, type, input1, input2) }}
                            addValuesOnData={addValues} editValuesat={editValues} deleteItem={deleteItems} deleteSection={deleteSection} isActive={newMockData[e].isActive} setActive={setActive} />
                    )}

                </div>
            </div>
        </>
    )
}

export default EmptyUSerLayout