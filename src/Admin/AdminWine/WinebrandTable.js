import { DeleteProduct } from '@/components/modal/adminmodal';
import { AddItemModal } from '@/components/modal/NewDminFlowModals';
import { createProductAndUpdatingCAtegoryListNew, createProductAndUpdatingList, createProductAndUpdatingListNew, deleteProductById, deleteProductbyIdWithCategory, emptyProductList, getCategoryList, getProduct, getProductByCategoryId, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProductForCategory } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import { enUrl } from '@/utils/encoderfunc';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function WinebrandTable({ productId, subcategory }) {
    const router = useRouter();
    const { productsByCategory } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const dispatch = useDispatch()
    const [DeleteModal, setDeleteModal] = useState(false)
    const [AddModal, setAddModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    useEffect(() => {

        dispatch(getProductByCategoryId('wine', productId))

        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    console.log(productsByCategory);
    useEffect(() => {
        let dummy = productsByCategory?.map(
            (element) => {
                return {
                    id: element.wine_id,
                    itemImage: element.image,
                    itemName: element.wine_name,
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
        let data = { type: 'wine', id: element.id, showProduct: e }
        dispatch(putProductByIdThenUpdateListShowProductForCategory('wine', data, productId))
    }

    const HeaderArray = ["Drink Image", "Drink Name", "Show / Hide", "Popularity", "Edit / Delete"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='relative h-[106px] w-[106px] flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C] '
                    >
                        {!element.itemImage &&
                            <Image src={'/asset/noimagedrinkeditsquare.jpg'}
                                alt="image"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        }
                        {element.itemImage &&
                            <Image src={element.itemImage}
                                alt="image"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        }
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

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/wine/${enUrl(subcategory)}/${enUrl(element.itemName)}?id=${element.id}&typeid=${productId}`); }}
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

        dispatch(deleteProductbyIdWithCategory('wine', elementItem.id, productId))
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
                    label={'Wines'}
                    type={'wine'}
                    title={'Wine'}
                    onSave={(data) => {
                        let body = {}
                        body = { ...data, category_id: productId, }
                        // return dispatch(createProductAndUpdatingList('wine', body))
                        return dispatch(createProductAndUpdatingCAtegoryListNew('wine', body, productId))
                    }}
                />
            }
            <TableContainerWithButtons label={'ADD WINE'} buttonFunction={() => {
                //  router.push(`/specs/wine/${subcategory}/new/newwine?id=${productId}`) 
                setAddModal(true)

            }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
        </>
    )
}

export default WinebrandTable