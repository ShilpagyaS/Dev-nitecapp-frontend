import { DeleteProduct } from '@/components/modal/adminmodal';
import { deleteProductById, deleteProductbyIdWithCategory, emptyProductList, getCategoryList, getProduct, getProductByCategoryId, putProductByIdThenUpdateList } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SpiritBrandTable({ productId, subcategory }) {
    const router = useRouter();
    const { productsByCategory } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const [DeleteModal, setDeleteModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const dispatch = useDispatch() 
    useEffect(() => {

        dispatch(getProductByCategoryId('spirit', productId))

        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    console.log(productsByCategory);
    useEffect(() => {
        let dummy = productsByCategory.map(
            (element) => {
                return {
                    id: element.spirit_id,
                    itemImage: '',
                    itemName: element.spirit_name,
                    showHideStatus: element.isActive,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                }

            }
        )
        console.log(dummy);
        setList([...dummy])

    }, [productsByCategory])
    function toggleSwitch(e, element) {
        let data = { ...element.data, isActive: e }
        dispatch(putProductByIdThenUpdateList('spirit', element.id, data))
    }

    const HeaderArray = ["Item Image", "Item Name", "Show / Hide", "popularity", "Action"]
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

                        <SwitchComp showHideStatus={element.showHideStatus} onChangeHandler={(e) => {
                            console.log(e);
                            toggleSwitch(e, element)
                        }} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
                            {element.popularity}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/spirit/${subcategory}/${element.itemName}?id=${element.id}`); }}
                        />
                        <div className='ml-[15px]'>

                            <DeleteCircularButton onClickHandler={() => {
                                setElementItem({
                                    title: element.itemName,
                                    id: element.id
                                }); setDeleteModal(true)
                            }} />
                        </div>
                    </div>
                </td>
            </>
        )
    }
    function deleteProduct() {
        console.log('deleteing');
        console.log(elementItem);

        dispatch(deleteProductbyIdWithCategory('spirit', elementItem.id,productId))
    }
    return (
        <>
            {DeleteModal &&
                <DeleteProduct
                    isModalOpen={DeleteModal}
                    onClickCancel={() => { setDeleteModal(false) }}
                    title={elementItem.title}
                    onSave={deleteProduct}
                />
            }
            <TableContainerWithButtons label={'ADD ITEM'} buttonFunction={() => { router.push(`/specs/spirit/${subcategory}/new/newspirit?id=${productId}`) }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
        </>
    )
}

export default SpiritBrandTable