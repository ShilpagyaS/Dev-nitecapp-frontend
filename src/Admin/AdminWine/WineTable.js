import { AddCategory, EditCategory } from '@/components/modal/adminmodal';
import { createCategory, emptyProductList, getCategoryList, getCategoryListByType, getProduct, putCategory } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function WineTable() {
    const router = useRouter();
    const { categoryList } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const [AddModal, setAdd] = useState(false)
    const [EditModal, setEdit] = useState(false)
    const [globalData, setGlobal] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getCategoryListByType('wine'))

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

    const HeaderArray = ["Category Image", "Category Name", "Show / Hide", "Action"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'
                    >
                        <Image src={element.itemImage}
                            alt="image"
                            width={106}
                            height={106} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1 '>
                        <Link href={`/specs/wine/${element.itemName}?id=${element.id}`} >

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
                            // router.push(`/specs/wine/${element.itemName}?id=${element.id}`);
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
            type: 'wine'
        }
        dispatch(createCategory('wine', data))

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

        dispatch(putCategory('wine', id, data))

    }
    return (
        <>
            {AddModal &&
                <AddCategory
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAdd(false) }}
                    type={'wine'}
                    title={'Wine'}
                    onSave={(name, logo) => { onSave(name, logo) }}
                />
            }
            {EditModal &&
                <EditCategory
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEdit(false) }}
                    type={'wine'}
                    inputone={globalData.drink_category_name}
                    inputtwo={globalData.image}
                    id={globalData.drink_category_id}
                    onSave={(name, logo, id) => { onEdit(name, logo, id) }}
                />
            }
            <TableContainerWithButtons label={'ADD CATEGORY'} buttonFunction={() => { setAdd(true); console.log('ri');  }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />

        </>
    )
}

export default WineTable