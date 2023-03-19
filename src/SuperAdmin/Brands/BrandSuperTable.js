import { DeleteCircularButton, EditCircularButton, EyeCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AddSuperBrands } from '../Modal/SuperAdminModal';

function BrandSuperTable() {
    const router = useRouter();
    // const { productList } = useSelector((state) => state.product)
    // const [newList, setList] = useState([])
    // const dispatch = useDispatch()
    // useEffect(() => {

    //     dispatch(getProduct('cocktail'))

    //     return () => {
    //         dispatch(emptyProductList())
    //     }
    // }, [])
    // console.log(productList);
    // useEffect(() => {
    //     let dummy = productList?.map(
    //         (element) => {
    //             return {
    //                 id: element.cocktail_id,
    //                 itemImage: '',
    //                 itemName: element.cocktail_name,
    //                 showHideStatus: element.isActive,
    //                 popularity: 'New',
    //             }

    //         }
    //     ) || []
    //     console.log(dummy);
    //     setList([...dummy])

    // }, [productList])

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
    const [EditModal, setEditmodal] = useState(false)

    const HeaderArray = ["Brands", "Item Name", "Activate / Deactivate", "Actions"]
    function OuterRows({ element }) {

        return (
            <>
                {EditModal &&
                    <AddSuperBrands
                        isModalOpen={EditModal}
                        onClickCancel={() => { setEditmodal(false) }}


                    />
                }
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'
                    >
                        <Image src={'/asset/coctail1.png'}
                            alt="image"
                            width={106}
                            height={106} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
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

                        <EyeCircularButton onClickHandler={() => { router.push("/specs/cocktails-details"); }}
                        />
                        <div className='ml-[15px]'>
                            <EditCircularButton onClickHandler={() => { router.push("/specs/cocktails-details"); }}
                            />
                        </div>
                        <div className='ml-[15px]'>

                            <DeleteCircularButton />
                        </div>
                    </div>
                </td>
            </>
        )
    }
    return (
        <>
            <TableContainerWithButtons OuterRows={OuterRows} mockData={mockData} HeaderArray={HeaderArray} pageSize={5} label={'Create Brand'} buttonFunction={() => { setEditmodal(true) }} />
        </>
    )
}

export default BrandSuperTable