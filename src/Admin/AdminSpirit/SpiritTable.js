import { AddCategory, EditCategory } from '@/components/modal/adminmodal';
import { createCategory, emptyProductList, getCategoryList, getCategoryListByType, getProduct, putCategory } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import { enUrl } from '@/utils/encoderfunc';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SpiritTable() {
    const router = useRouter();
    const { categoryList } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const [AddModal, setAdd] = useState(false)
    const [EditModal, setEdit] = useState(false)
    const [globalData, setGlobal] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getCategoryListByType('spirit'))

        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    console.log(categoryList);
    useEffect(() => {
        let dummy = categoryList?.map(
            (element) => {
                return {
                    id: element.drink_category_id,
                    itemImage: element.image,
                    itemName: element.drink_category_name,
                    showHideStatus: element.isActive,
                    data: element,
                    createdDate: element.createdAt,

                }

            }
        ) || []
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
    const HeaderArray = ["Category Image", "Category Name", "Show / Hide", "Action"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='relative flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C] h-[106px] w-[106px]'
                    >
                        <Image src={element.itemImage}
                            // <Image src={'/asset/vodkaImage.jpg'}
                            alt="image"
                          
                            fill
                            style={{ objectFit: 'cover' }} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>
                        <Link href={`/specs/spirit/${enUrl(element.itemName)}?id=${element.id}`} >
                            <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px] text-[#f19b6c]'>
                                {element.itemName}
                            </p>
                        </Link>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <SwitchComp showHideStatus={element.showHideStatus} onChangeHandler={() => { }} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        {/* <EditCircularButton onClickHandler={() => {
                            // router.push(`/specs/spirit/${element.itemName}?id=${element.id}`);
                            setGlobal({ ...element.data })
                            setEdit(true)
                        }}
                        /> */}
                        <div className='ml-[15px]'>

                            <DeleteCircularButton />
                        </div>
                    </div>
                </td>
            </>
        )
    }
    function onSave(name, logo) {
        console.log(name);
        let data = {
            drink_category_name: name,
            type: 'spirit'
        }
        dispatch(createCategory('spirit', data))

    }
    function onEdit(name, logo, id) {
        console.log(name, logo, id);
        let data = { ...globalData }
        data =
        {
            ...data,
            drink_category_name: name,
            image: logo,
        }
        console.log(data);

        dispatch(putCategory('spirit', id, data))

    }
    return (
        <>
            {AddModal &&
                <AddCategory
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAdd(false) }}
                    type={'spirit'}
                    title={'Spirit'}
                    onSave={(name, logo) => { onSave(name, logo) }}
                />
            }
            {EditModal &&
                <EditCategory
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEdit(false) }}
                    type={'spirit'}
                    inputone={globalData.drink_category_name}
                    inputtwo={globalData.image}
                    id={globalData.drink_category_id}
                    onSave={(name, logo, id) => { onEdit(name, logo, id) }}
                />
            }
            <TableContainerWithButtons label={'ADD CATEGORY'} buttonFunction={() => { setAdd(true); console.log('ri'); }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
        </>
    )
}

export default SpiritTable