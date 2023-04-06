import { DeleteProduct } from '@/components/modal/adminmodal';
import { AddItemModal } from '@/components/modal/NewDminFlowModals';
import { createProductAndUpdatingList, deleteProductById, deleteProductbyIdWithCategory, emptyProductList, getCategoryList, getProduct, getProductByCategoryId, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct, putProductByIdThenUpdateListShowProductForCategory } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enUrl } from "@/utils/encoderfunc";

function SpiritBrandTable({ productId, subcategory }) {
    const router = useRouter();
    const { productsByCategory } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const [DeleteModal, setDeleteModal] = useState(false)
    const [AddModal, setAddModal] = useState(false)
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
        let dummy = productsByCategory?.map(
            (element) => {
                return {
                    id: element.spirit_id,
                    itemImage: element.image,
                    itemName: element.spirit_name,
                    showHideStatus: element.showProduct,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                }

            }
        ) || []
        console.log(dummy);
        setList([...dummy])

    }, [productsByCategory])
    function toggleSwitch(e, element) {
        let data = { type: 'spirit', id: element.id, showProduct: e }
        dispatch(putProductByIdThenUpdateListShowProductForCategory(data, productId))
    }

    const HeaderArray = ["Drink Image", "Drink Name", "Show / Hide", "Popularity", "Edit / Delete"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='relative flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C] h-[106px] w-[106px]'
                    >
                        <Image src={element.itemImage}
                            alt="image"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
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

                        <SwitchComp showHideStatus={element.showHideStatus} onChangeHandler={(e) => {
                            console.log(e);
                            toggleSwitch(e, element)
                        }} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px] text-white'>
                            {element.popularity}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/spirit/${enUrl(subcategory)}/${enUrl(element.itemName)}?id=${element.id}`); }}
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

        dispatch(deleteProductbyIdWithCategory('spirit', elementItem.id, productId))
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
            {AddModal &&
                <AddItemModal
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    label={'Spirits'}
                    type={'spirit'}
                    title={'Spirit'}
                    onSave={(data) => {
                        let body = {}
                        body = { ...data, category_id: productId, }
                        return dispatch(createProductAndUpdatingList('spirit', body))

                    }}
                />
            }
            <TableContainerWithButtons label={'ADD SPIRIT'} buttonFunction={() => {
                // router.push(`/specs/spirit/${subcategory}/new/newspirit?id=${productId}`) 
                setAddModal(true)
            }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
        </>
    )
}

export default SpiritBrandTable