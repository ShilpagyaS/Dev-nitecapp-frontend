import Breadcrumb from "@/components/Breadcrumb";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { emptyBrandsList } from "@/store/slices/brands";
import { getOutletDetail } from "@/store/slices/outlet";
import { CustomButton } from "@/utils/Buttons";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HotelBrandDetail = ({ productType, productId }) => {

    const { outletDetails } = useSelector((state) => state.outlets)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOutletDetail(productId))
        return () => dispatch(emptyBrandsList())
    }, [])
    const isTablet = useMediaQuery("(max-width: 786px)");
    return (
        <div className="brand-detail-container">
            <Breadcrumb />
            <div className=" w-full relative mb-8 h-[298px]" >

                {/* <Image
                    className=" w-full "
                    src={outletDetails.image}
                    fill
                    style={{ objectFit: 'cover' }}

                /> */}

                <img
                    className=" h-full w-full object-cover"
                    src={outletDetails.image}

                // style={{ objectFit: 'cover' }}

                />

            </div>

            <div className="properties-container text-white mb-8">

                <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Address</p>
                    <p className="font-medium">
                        {outletDetails.address}
                    </p>
                </div>
            </div>
            <div className="description-container text-white">

                <p className="mb-8">
                    {outletDetails.description}
                </p>
                <a href={`https://${outletDetails.website}`} target={'_blank'}>
                    <CustomButton label="Website" background="#F19B6C" />
                </a>
            </div>
            {outletDetails?.floor_image &&
                <div className="w-full flex justify-end">
                    <div className="relative w-full aspect-[16/9]">
                        <Image src={outletDetails?.floor_image} fill className="object-cover rounded-[10px]" />
                    </div>
                </div>
            }
        </div>
    );
};
export default HotelBrandDetail