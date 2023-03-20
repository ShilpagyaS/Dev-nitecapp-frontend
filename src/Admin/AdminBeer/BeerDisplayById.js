import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Image from "next/image";
import DetailsMock from "@/components/mock/DetailsMock.json";
import EditCard from "@/utils/Cards/Text card/EditCard";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
// import ConditionalButton from "./ConditionalButton";
import ChipWithLeftButton, { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import { AddGeneric, AddNewTitle, AddTitle, DeleteSection, EditDualValue } from "@/components/modal/adminmodal";
// import GenericCard from "./GenericCard";
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import GenericCard from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/GenericCard";
import Breadcrumb from "@/components/Breadcrumb";
import ButtonCombo from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ButtonCombo";
import SplitCard from "@/utils/Cards/Text card/SplitCard";

const BeerDisplayById = () => {
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");
    const ingridients = DetailsMock.ingridients;
    const presentation = DetailsMock.presentation;
    const method = DetailsMock.method;
    const lesson = DetailsMock.lesson;
    const notes = DetailsMock.notes;
    let superData = {
        cocktail_name: 'Blue Moon Belgian White',
        description: " A pre-Prohibition classic cocktail made popular at the “21 Club” in New York. A refreshing combination of Tanqueray gin, citrus + a kiss of mint.",
        ingredients: {},
        methods: {},
        presentation: {},
        image: {},

    }

    console.log(superData);
    const [newMockData, setNewMockData] = useState({

        strength: '2oz',
        tastes: 'Balanced, Bright, Citrus,Floral, Mint, Smooth,fresh',
        origin: 'Itly',
    });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEdit, setEdit] = useState(false)
    const textAreaRef = useRef(null);
    const nameref = useRef(null);
    const percentageref = useRef(null);
    const [editItem, setEditItem] = useState({})
    const [foucsed, setAsfocus] = useState(null)
    const [EditModal, setEditmodal] = useState(false)

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
        superData = { ...superData, ...newMockData }
        console.log('superData', superData);

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
    function editValues(title, data) {

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: data
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
            {/* {isAddModalOpen && <AddNewTitle
        isModalOpen={isAddModalOpen}
        onClickCancel={() => { setIsAddModalOpen(false) }}
        onSave={addNewTitle}
        title={'Title'}

      />
      } */}
            {EditModal &&
                <EditDualValue
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={editItem.desc}
                    inputtwo={editItem.quantity}
                    onSave={editValues}
                />
            }

            <div className="detail-page-container">
                <div className="flex flex-row items-center justify-between">

                    <div className="text-container ">
                        <p className="text-white text-[14px]">
                            <Breadcrumb />
                        </p>
                    </div>
                    <div className="flex items-center justify-center">

                        <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={toggleEdit} />
                        <div className="ml-[15px]">
                            <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
                        </div>
                    </div>
                </div>
                <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
                    <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">
                        <div className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${isMobile ? "block m-auto" : "mr-[31px] "
                            }`}>
                            <Image src="/asset/london-dry-green.svg" className="w-full" fill />

                        </div>
                        <div className="editbutton flex text-[#929292] ">
                            <Image
                                src={'/asset/EditVector.svg'}
                                // src={'/asset/DeleteVector.svg'}
                                width={20}
                                height={20}
                                className=""
                            />
                            <div className="ml-[12px]">
                                Edit Image
                            </div>
                        </div>
                    </div>

                    <div className="desc-container inline-block w-full  text-white">
                        <div
                            className={`heading-container mb-8 flex justify-between items-center ${isMobile && "text-center"}`}
                        >
                            <div
                                className={`w-full flex items-center ${isMobile && "justify-around"
                                    }`}
                            >
                                <h3 className="title text-[24px] font-bold mr-[16px]" >

                                    <EditCard editContent={superData.cocktail_name} isEdit={isEdit} divref={nameref} />
                                </h3>
                                <div className="status-text text-[18px]">
                                    <EditCard editContent={"Medium(12%)"} isEdit={isEdit} />
                                </div>
                            </div>
                        </div>

                        <p
                            className={`description text-[16px] leading-6 ${isMobile && "text-center"
                                }`}
                        >
                            <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={`${superData.description}`} />
                        </p>
                    </div>
                </div>
                <div className="titleContainer">
                    {/* <div className="flex items-center justify-between p-[10px]">
            <ChipWithLeftButton label={'ADD ITEM'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setIsAddModalOpen(true) }} />
          </div> */}
                    {/* 
                    {Object.keys(newMockData).map((e) =>
                        <GenericCard title={e} type={newMockData[e].type} arr={newMockData[e].values} isEdit={isEdit} setTypeFunction={(title, type, input1, input2) => { setType(title, type, input1, input2) }}
                            addValuesOnData={addValues} editValuesat={editValues} deleteItem={deleteItems} deleteSection={deleteSection} isActive={newMockData[e].isActive} setActive={setActive} />
                    )} */}
                    {/* BEER SPECIFIC */}
                    <div className="border border-[#3C3C3C] p-[15px] m-[8px]">
                        <div className="method-container mb-[32px]">
                            <div className="sub-heading-container flex justify-between items-center mb-[21px]">
                                <h4 className="text-white text-[20px] leading-[32px] font-semibold capitalize">

                                </h4>
                                {isEdit && <ButtonCombo onAddClick={() => {
                                    // type == null ? setFirstTimemodal(true) :
                                    //     setAddmodal(true)
                                    // console.log('not null --.', type);


                                }}
                                    // onDeleteClick={() => { setIsDeleteModalOpen(true) }}
                                    customize={{ add: false, switch: true }}
                                    // isActive={localIsActive}
                                    setActive={() => { }}


                                />}

                            </div>
                            <div className="method-details-container">

                                <div onDoubleClick={() => { setEditItem({ index: 0, desc: 'strength', quantity: newMockData.strength }); if (foucsed == 0) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                    onClick={() => { setAsfocus(0); if (foucsed == 0) setAsfocus(null) }} className={`${foucsed == 0 ? 'outline-none ring ring-violet-300' : ''}`}>

                                    <SplitCard desc={"Strength"} quantity={newMockData.strength} />

                                </div>
                                <div onDoubleClick={() => { setEditItem({ index: 1, desc: 'origin', quantity: newMockData.origin }); if (foucsed == 1) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                    onClick={() => { setAsfocus(1); if (foucsed == 1) setAsfocus(null) }} className={`${foucsed == 1 ? 'outline-none ring ring-violet-300' : ''}`}>

                                    <SplitCard desc={"Origin"} quantity={newMockData.origin} />
                                </div>
                                <div onDoubleClick={() => { setEditItem({ index: 2, desc: 'tastes', quantity: newMockData.tastes }); if (foucsed == 2) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                    onClick={() => { setAsfocus(2); if (foucsed == 2) setAsfocus(null) }} className={`${foucsed == 2 ? 'outline-none ring ring-violet-300' : ''}`}>

                                    <SplitCard desc={"Taste"} quantity={newMockData.tastes} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BeerDisplayById;
