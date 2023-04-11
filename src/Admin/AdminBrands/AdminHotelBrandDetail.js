import Breadcrumb from "@/components/Breadcrumb";
import { EditKeyValue } from "@/components/modal/adminmodal";
import BrandFileUpload from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/BrandFileUpdate";
import ButtonCombo from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ButtonCombo";
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { emptyBrandsList } from "@/store/slices/brands";
import { getOutletDetail } from "@/store/slices/outlet";
import { CustomButton } from "@/utils/Buttons";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import SplitCard from "@/utils/Cards/Text card/SplitCard";
import { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminHotelBrandDetail = ({ productType, productId }) => {

    const { outletDetails } = useSelector((state) => state.outlets)
    const textAreaRef = useRef()
    const taglineref = useRef()
    const [tagline, setTagline] = useState()
    const [newMockData, setNewMockData] = useState({

        address: ''
    });
    const [foucsed, setAsfocus] = useState(null)
    const [EditModal, setEditmodal] = useState(false)
    const [isEdit, setEdit] = useState(false)
    const [editItem, setEditItem] = useState({})
    const [upimage, setimage] = useState()


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOutletDetail(productId))
        return () => dispatch(emptyBrandsList())
    }, [])
    const isTablet = useMediaQuery("(max-width: 786px)");
    const toggleEdit = () => {
        setEdit(prev => !prev)
        // console.log(textAreaRef.current.innerText);
    }
    function onSave() {
        setTagline(tagline.current.value)
        toggleEdit()
    }
    function editValues(title, data) {

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: data
            }
        }))

    }
    return (
        <>
            {EditModal &&
                <EditKeyValue
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={editItem.desc}
                    inputtwo={editItem.quantity}
                    onSave={editValues}
                />
            }
            <div className="brand-detail-container">
                <div className="flex flex-row items-center justify-between mb-[10px]">

                    <Breadcrumb />
                    <div className="flex items-center justify-center">

                        <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={onSave} />
                        <div className="ml-[15px]">
                            {!isEdit ?
                                <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
                                :
                                <ConditionalButton label={'Cancel'} condition={true} onClickHandler={() => { toggleEdit() }} />

                            }
                        </div>
                    </div>
                </div>
                {/* <div className=" w-full relative mb-8 h-[298px]" >

                    <Image
                        className=" w-full "
                        src={outletDetails.image}
                        fill
                        style={{ objectFit: 'cover' }}

                    />

                </div> */}
                <BrandFileUpload
                    defaultImage={outletDetails?.image}
                    setimage={setimage}
                    isEdit={isEdit} />

                <div className="properties-container text-white mb-8">

                    {!isEdit &&
                        <div className="properties-container text-white mb-8">


                            <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                                <p className="mr-6">Address</p>
                                <p className="font-medium">
                                    {outletDetails.address}
                                </p>
                            </div>
                        </div>
                    }
                    {isEdit && <div className="">
                        <div className="method-container mb-[32px]">
                            <div className="sub-heading-container flex justify-between items-center mb-[21px]">
                                <h4 className="text-white text-[20px] leading-[32px] font-semibold capitalize">

                                </h4>
                            </div>
                            <div className="method-details-container">

                                <div onDoubleClick={() => { setEditItem({ index: 0, desc: 'address', quantity: newMockData.address }); if (foucsed == 0) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                    onClick={() => { setAsfocus(0); if (foucsed == 0) setAsfocus(null) }} className={`${foucsed == 0 ? 'outline-none ring ring-violet-300' : ''}`}>

                                    <SplitCard desc={"Address"} quantity={newMockData.address} />

                                </div>

                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="description-container text-white">
                    {!isEdit ?
                        <p className="mb-8">
                            {outletDetails.description}
                        </p>
                        :
                        <div className=''>
                            <h2 className='not-italic font-semibold text-sm leading-6 text-[#929292] font-Inter mb-[12px]'>
                                About
                            </h2>
                            <DescriptionTextArea textAreaRef={textAreaRef} maxheight={toString(50)} isEdit={isEdit} content={outletDetails.description} />

                        </div>
                    }
                    {!isEdit &&
                        <a href={`https://${outletDetails.website}`} target={'_blank'}>

                            <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px] text-[#f19b6c] ml-[8px] '>
                                {outletDetails.website}
                            </p>
                        </a>
                    }
                    {isEdit &&
                        <div className=''>
                            <h2 className='not-italic font-semibold text-sm leading-6 text-[#929292] font-Inter mb-[12px]'>
                                Website
                            </h2>
                            <DescriptionTextArea textAreaRef={taglineref} isEdit={isEdit} content={outletDetails.website} />

                        </div>
                    }

                </div>

            </div>
        </>
    );
};
export default AdminHotelBrandDetail