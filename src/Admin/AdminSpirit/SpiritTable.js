import { emptyProductList, getCategoryList, getProduct } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SpiritTable() {
    const router = useRouter();
    const { categoryList } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getCategoryList('spirit'))

        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    console.log(categoryList);
    useEffect(() => {
        let dummy = categoryList.map(
            (element) => {
                return {
                    id: element.drink_category_id,
                    itemImage: '',
                    itemName: element.drink_category_name,
                    showHideStatus: element.isActive,
                    popularity: 'New',
                }

            }
        )
        console.log(dummy);
        setList([...dummy])

    }, [categoryList])

    const mockData = [
        {
            id: 1,
            itemImage: '',
            itemName: 'Old Fashioned',
            showHideStatus: true,
            popularity: 'New',

        },
        {
            id: 2,
            itemImage: '',
            itemName: 'Darusi',
            showHideStatus: true,
            popularity: 'New',

        },
        {
            id: 3,
            itemImage: '',
            itemName: 'SouthSide',
            showHideStatus: false,
            popularity: 'None',

        },
        {
            id: 4,
            itemImage: '',
            itemName: 'Old Monk',
            showHideStatus: false,
            popularity: 'None',

        },
        {
            id: 5,
            itemImage: '',
            itemName: 'Old Fashioned2',
            showHideStatus: true,
            popularity: 'None',

        },
    ]
    const HeaderArray = ["Item Image", "Item Name", "Show / Hide", "Action"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'
                    >
                        <Image src={'/asset/blue-moon.svg'}
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

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/spirit/${element.itemName}?id=${element.id}`); }}
                        />
                        <div className='ml-[15px]'>

                            <DeleteCircularButton />
                        </div>
                    </div>
                </td>
            </>
        )
    }
    return (
        <TableContainerWithButtons label={'ADD ITEM'} buttonFunction={() => { router.push("/specs/new-beer") }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
    )
}

export default SpiritTable