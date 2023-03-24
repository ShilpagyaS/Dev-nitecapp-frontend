import Breadcrumb from '@/components/Breadcrumb';
import ButtonCombo from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ButtonCombo';
import useMediaQuery from '@/Hooks/useMediaQuery';
import useNavDetails from '@/Hooks/useNavDetails';
import ChipWithLeftButton from '@/utils/ChipWithLeftButton';
import Search from '@/utils/Search';
import Link from 'next/link';
import React from 'react'
import { CiSearch } from 'react-icons/ci';

function AdminBrandsBeer() {
    const isTablet = useMediaQuery("(max-width: 786px)");
    const { category, subcategory, productId } = useNavDetails()
    const isEdit = true
    return (
        <div className="brands-container">
            <div className="search-container lg:flex lg:justify-between lg:items-center mb-8">
                <Breadcrumb />

            </div>

            <div className='buttonRow flex pt-[18px] pb-[12.5px] px-[18px] items-center justify-between mb-[15px]'>
                {/* grid for search and button  */}

                <ChipWithLeftButton condition={true} label={'Add Item'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { }} />
                <div className='flex pr-[38px] '>
                    <Search />
                </div>
            </div>
            <div className="sub-heading-container flex justify-between items-center mb-[21px] pr-[18px]">
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
            <div className="cards-container flex lg:justify-start justify-center items-center flex-wrap gap-x-[81px] gap-y-[50px]">
                <Link href={`${category}/${subcategory}/brands?id=1`}>
                    <div className="bg-[url('/asset/brand1.svg')] bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max-w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
                        {/* <Image src="/asset/brand1.svg" fill /> */}
                    </div>{" "}
                </Link>
                <Link href={`${category}/${subcategory}/brands?id=1`}>
                    <div className="bg-[url('/asset/brand2.svg')] bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max:w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
                        {/* <Image src="/asset/brand2.svg" fill /> */}
                    </div>{" "}
                </Link>
                <Link href={`${category}/${subcategory}/brands?id=1`}>
                    <div className="bg-[url('/asset/brand3.svg')] bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max-w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
                        {/* <Image src="/asset/brand3.svg" fill /> */}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AdminBrandsBeer