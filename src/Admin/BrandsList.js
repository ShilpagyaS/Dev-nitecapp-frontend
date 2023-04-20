import Breadcrumb from '@/components/Breadcrumb';
import { AddDrinkBrandsModal } from '@/components/modal/NewDminFlowModals';
import useMediaQuery from '@/Hooks/useMediaQuery';
import useNavDetails from '@/Hooks/useNavDetails';
import { createBrandAndUpdatingList, emptyBrandsList, getBrandsList, getBrandsListNew } from '@/store/slices/brands';
import ChipWithLeftButton from '@/utils/ChipWithLeftButton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enUrl } from '@/utils/encoderfunc'


function BrandsList({ productType }) {
    const isTablet = useMediaQuery("(max-width: 786px)");
    const { category, subcategory, subcategory3, productId } = useNavDetails()
    const isEdit = true
    const { brandsList } = useSelector((state) => state.brands)
    const [AddModal, setAddModal] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(getBrandsList(productType))
        dispatch(getBrandsListNew(productType))
        return () => dispatch(emptyBrandsList())
    }, [])
    return (
        <>
            {AddModal &&
                <AddDrinkBrandsModal
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    label={'Brands'}
                    type={productType}
                    title={'Drink Brand'}
                    onSave={(data) => {

                        return dispatch(createBrandAndUpdatingList(productType, data))
                    }}
                />
            }
            <div className="brands-container">
                <div className="search-container lg:flex lg:justify-between lg:items-center mb-8">
                    <Breadcrumb />

                </div>

                <div className='buttonRow flex pt-[18px] pb-[12.5px] px-[18px] items-center justify-between mb-[15px]'>
                    {/* grid for search and button  */}

                    <ChipWithLeftButton condition={true} label={'Add a Brand'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddModal(true) }} />

                </div>
                <div className="sub-heading-container flex justify-between items-center mb-[21px] pr-[18px]">
                    <h4 className="text-white text-[20px] leading-[32px] font-semibold capitalize">

                    </h4>

                </div>
                <div className="cards-container flex lg:justify-start justify-center items-center flex-wrap gap-x-[81px] gap-y-[50px]">
                    {brandsList.map((element) =>
                        <Link href={`${category}/${subcategory}/brands/${enUrl(element.drink_brand_name)}?id=${element.drink_brand_id}`}>
                            <div className='flex flex-col items-start justify-center'>

                                <div className=" bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max-w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
                                    <Image src={element.image != "" ? element.image : "/asset/brand3.svg"} fill style={{ objectFit: 'cover' }} className='rounded-[8px]' priority />
                                </div>
                                <h3 className="not-italic font-semibold text-white text-md lg:text-xl font-Inter mt-[10px]">{element.drink_brand_name}</h3>

                            </div>
                        </Link>
                    )}
                </div>

            </div>
        </>
    );
}

export default BrandsList