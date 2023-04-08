import { DeleteProduct } from '@/components/modal/adminmodal'
import { AddItemModal } from '@/components/modal/NewDminFlowModals'
import { createProduct, createProductAndUpdatingList, deleteProductById, emptyProductList, getProduct, putProductById, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct } from '@/store/slices/product'
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
import SwitchComp from '@/utils/SwitchComp'
import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
function BeerTable() {
    const router = useRouter();
    const { productList } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const [DeleteModal, setDeleteModal] = useState(false)
    const [AddModal, setAddModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getProduct('beer'))

        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    console.log(productList);
    useEffect(() => {
        let dummy = productList?.map(
            (element) => {
                return {
                    id: element.beer_id,
                    itemImage: element.image,
                    itemName: element.beer_name,
                    showHideStatus: element.showProduct,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                }

            }
        ) || []
        console.log(dummy);
        setList([...dummy])
    }, [productList])


    function toggleSwitch(e, element) {
        let data = { type: 'beer', id: element.id, showProduct: e }
        dispatch(putProductByIdThenUpdateListShowProduct(data))
    }
    const HeaderArray = ["Drink Image", "Drink Name", "Show / Hide", "Popularity", "Edit / Delete"]
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

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/beer?id=${element.id}`); }}
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

        dispatch(deleteProductById('beer', elementItem.id))
    }
    return (
        <>   {DeleteModal &&
            <DeleteProduct
                isModalOpen={DeleteModal}
                onClickCancel={() => { setDeleteModal(false) }}
                title={elementItem.title}
                onSave={deleteProduct}
            />}
            {AddModal &&
                <AddItemModal
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    label={'Beers'}
                    type={'beer'}
                    title={'Beer'}
                    onSave={(data) => {

                        return dispatch(createProductAndUpdatingList('beer', data))
                    }}
                />
            }
            <TableContainerWithButtons label={'ADD BEER'} buttonFunction={() => {
                // router.push("/specs/beer/new")
                setAddModal(true)
            }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
        </>
    )
}

export default BeerTable