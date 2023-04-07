import Breadcrumb from '@/components/Breadcrumb'
import ButtonCombo from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ButtonCombo'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import { CustomButton } from '@/utils/Buttons'
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea'
import EditCard from '@/utils/Cards/Text card/EditCard'
import SplitCard from '@/utils/Cards/Text card/SplitCard'
import { CustomChipWithLeftButton } from '@/utils/ChipWithLeftButton'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

function BrandDetailPage() {
    const [isEdit, setEdit] = useState(false)
    const [tagline, setTagline] = useState("the tag line info")
    const textAreaRef = useRef()
    const aboutreaRef = useRef()
    const websiteRef = useRef()
    const toggleEdit = () => {
        setEdit(prev => !prev)
    }
    const [newMockData, setNewMockData] = useState({

        strength: '2oz',
        founding: '1997',
        origin: 'Itly',
    });
    const nameref = useRef(null);
    const percentageref = useRef(null);
    const [editItem, setEditItem] = useState({})
    const [foucsed, setAsfocus] = useState(null)
    const [EditModal, setEditmodal] = useState(false)
    function onSave() {
        console.log(isEdit);
        if (isEdit == true) {

            //     superData = { ...superData, ...newMockData }
            //     dispatch(putProductById(subcategory, productId, { ...productDetails, [`${subcategory}_name`]: nameref.current.innerText }))
            //     console.log(nameref.current.innerText);
            setTagline(textAreaRef.current.value)
            toggleEdit()
        }
        // console.log(superData);
    }
    return (
        <>
            <div className="brand-detail-container">
                <div className="flex flex-row items-center justify-between mb-[40px]">

                    <div className="text-container ">
                        <p className="text-white text-[14px]">
                            <Breadcrumb />
                        </p>
                    </div>
                    {/* <div className="flex items-center justify-center">

                        <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={onSave} />
                        <div className="ml-[15px]">
                            <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
                        </div>
                    </div> */}
                </div>
                <div className="text-[24px] font-bold italic m-[10px]">
                    <EditCard editContent={`Blue Moon`} isEdit={isEdit} />
                </div>
                <div className="banner-container w-full h-[269px] bg-[url('/asset/brand-bg.svg')] bg-no-repeat bg-cover bg-center mb-8 p-[44px]">
                    <div className="relative w-[235px] h-[74px] bg-[transparent] block m-auto">
                        <Image
                            className="bg-[transparent]"
                            src="/asset/brand-logo.svg"
                            fill
                        />
                    </div>
                    {!isEdit &&
                        <p className="text-black bg-[transparent] text-center text-[16px] font-[400]">
                            {textAreaRef?.current?.value || tagline}
                        </p>
                    }
                </div>
                {isEdit &&
                    <div className=''>
                        <h2 className='not-italic font-semibold text-sm leading-6 text-[#929292] font-Inter mb-[12px]'>
                            Tagline
                        </h2>
                        <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={tagline} />
                    </div>
                }
                {!isEdit &&
                    <div className="properties-container text-white mb-8">
                        <div className="strength-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                            <p className="mr-6">Strength</p>
                            <p className="font-medium">45%</p>
                        </div>
                        <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                            <p className="mr-6">Origin</p>
                            <p className="font-medium">Italy</p>
                        </div>
                        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                            <p className="mr-6">Founding Year</p>
                            <p className="font-medium">
                                1997
                            </p>
                        </div>
                    </div>
                }
                {isEdit && <div className="">
                    <div className="method-container mb-[32px]">
                        {/* <div className="sub-heading-container flex justify-between items-center mb-[21px]">
                
                            {isEdit && <ButtonCombo onAddClick={() => {
                                // type == null ? setFirstTimemodal(true) :
                                //     setAddmodal(true)
                                // console.log('not null --.', type);


                            }}
                                // onDeleteClick={() => { setIsDeleteModalOpen(true) }}
                                customize={{ add: false, switch: false }}
                                // isActive={localIsActive}
                                setActive={() => { }}


                            />}

                        </div> */}
                        <h2 className='not-italic font-semibold text-sm leading-6 text-[#929292] font-Inter mb-[12px]'>
                            Other Details
                        </h2>
                        <div className="method-details-container">

                            <div onDoubleClick={() => { setEditItem({ index: 0, desc: 'strength', quantity: newMockData.strength }); if (foucsed == 0) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                onClick={() => { setAsfocus(0); if (foucsed == 0) setAsfocus(null) }} className={`${foucsed == 0 ? 'outline-none ring ring-violet-300' : ''}`}>

                                <SplitCard desc={"Strength"} quantity={newMockData.strength} />

                            </div>
                            <div onDoubleClick={() => { setEditItem({ index: 1, desc: 'origin', quantity: newMockData.origin }); if (foucsed == 1) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                onClick={() => { setAsfocus(1); if (foucsed == 1) setAsfocus(null) }} className={`${foucsed == 1 ? 'outline-none ring ring-violet-300' : ''}`}>

                                <SplitCard desc={"Origin"} quantity={newMockData.origin} />
                            </div>
                            <div onDoubleClick={() => { setEditItem({ index: 2, desc: 'founding', quantity: newMockData.founding }); if (foucsed == 2) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                onClick={() => { setAsfocus(2); if (foucsed == 2) setAsfocus(null) }} className={`${foucsed == 2 ? 'outline-none ring ring-violet-300' : ''}`}>

                                <SplitCard desc={"Founding Year"} quantity={newMockData.founding} />
                            </div>

                        </div>
                    </div>
                </div>
                }
                <div className=''>
                    <h2 className='not-italic font-semibold text-sm leading-6 text-[#929292] font-Inter mb-[12px]'>
                        About
                    </h2>
                    <DescriptionTextArea textAreaRef={aboutreaRef} maxheight={'360'} isEdit={isEdit} content={`
                        Hendrick’s Gin launched in 1999. It likely needs no introduction.
                        Hendrick’s Gin was launched by William Grant & Sons at a time when gin
                        wasn’t the diverse, thriving category it is today. A clear callback to
                        gin’s forbears, the apothecary style bottle suggests comparison to
                        Genevers and a time when gin was a medicine. The Edwardian era
                        advertising campaign has helped make the brand a stalwart both in bars
                        and in homes.`} />

                </div>
                <div className=''>
                    <h2 className='not-italic font-semibold text-sm leading-6 text-[#929292] font-Inter mb-[12px]'>
                        Website
                    </h2>
                    <div className="status-text text-[18px]">
                    <DescriptionTextArea textAreaRef={websiteRef} isEdit={isEdit} content={`www.abc.com`} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default BrandDetailPage