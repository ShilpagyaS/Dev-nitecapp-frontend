import { emptyBrandList, getBrandList } from '@/store/slices/superAdmin';
import { DeleteCircularButton, EditCircularButton, EyeCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddSuperBrands, SuperBrandDelete } from '../Modal/SuperAdminModal';

function BrandSuperTable() {
    const router = useRouter();
    const dispatch = useDispatch()
    const { brandList } = useSelector((state) => state.superAdmin)
    const [newList, setList] = useState([])

    useEffect(() => {

        dispatch(getBrandList())

        return () => {
            dispatch(emptyBrandList())
        }
    }, [])
    console.log(brandList);
    useEffect(() => {
        let dummy = brandList?.map(
            (element) => {
                return {
                    id: element.hotel_brand_id,
                    itemImage: '',
                    itemName: element.name,
                    showHideStatus: element.isActive,
                    createdDate: element.createdAt,
                    data: element

                }

            }
        ) || []
        console.log(dummy);
        setList([...dummy])

    }, [brandList])

    const mockData = [
        {
            id: 1,
            itemImage: '',
            itemName: 'Sayaji',
            showHideStatus: true,

        },
        {
            id: 2,
            itemImage: '',
            itemName: 'Taj Groups',
            showHideStatus: true,

        },
        {
            id: 3,
            itemImage: '',
            itemName: 'Justa',
            showHideStatus: false,

        },
        {
            id: 4,
            itemImage: '',
            itemName: 'Marriott',
            showHideStatus: false,

        },
        {
            id: 5,
            itemImage: '',
            itemName: 'Hayat',
            showHideStatus: true,

        },
    ]
    const [AddModal, setAddmodal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    const HeaderArray = ["Brands", "Item Name", "Activate / Deactivate", "Actions"]
    function onCreate(logo, data) {
        let dummydata = {}
    }

    function OuterRows({ element }) {

        return (
            <>
                {AddModal &&
                    <AddSuperBrands
                        isModalOpen={AddModal}
                        onClickCancel={() => { setAddmodal(false) }}
                        onSave={(logo, data) => { console.log(logo, data); }}


                    />
                }
                {DeleteModal &&
                    <SuperBrandDelete
                        isModalOpen={DeleteModal}
                        onClickCancel={() => { setDeleteModal(false) }}
                        onSave={() => { }}


                    />
                }
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'
                    >
                        <Image src={'/asset/Sayaji.jpg'}
                            alt="image"
                            width={106}
                            height={106} 
                            priority/>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px] text-white'>
                            {element.itemName}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <SwitchComp showHideStatus={element.showHideStatus} onChangeHandler={() => { }} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <EyeCircularButton onClickHandler={() => {
                            // router.push("/specs/cocktails-details");
                        }}
                        />
                        <div className='ml-[15px]'>
                            <EditCircularButton onClickHandler={() => {
                                // router.push("/specs/cocktails-details");
                            }}
                            />
                        </div>
                        <div className='ml-[15px]'>

                            <DeleteCircularButton onClickHandler={() => { setDeleteModal(true) }} />
                        </div>
                    </div>
                </td>
            </>
        )
    }
    return (
        <>
            <TableContainerWithButtons OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} label={'Create Brand'} buttonFunction={() => { setAddmodal(true) }} />
        </>
    )
}

export default BrandSuperTable