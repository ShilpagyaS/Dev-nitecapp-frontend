import { DeleteProduct } from '@/components/modal/adminmodal'
import { AddItemModal } from '@/components/modal/NewDminFlowModals'
import { createProduct, createProductAndUpdatingList, createProductAndUpdatingListNew, deleteProductById, emptyProductList, getProduct, putProductById, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct } from '@/store/slices/product'
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
import { enUrl } from '@/utils/encoderfunc'
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
                    outlet: element.outlet_name,
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
    const HeaderArray = ["Drink Image", "Drink Name", "Show / Hide", "Outlet", "Edit / Delete"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center  p-[6px] md:p-[12px]'>
                    <div className='relative flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]
                     md:h-[106px] md:w-[106px] w-[80px] h-[80px]'
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
                <td className="min-w-[150px]" >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold  text-[13px] md:text-base leading-7 tracking-[-0.624px] text-white'>
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
                            {element?.outlet}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/beer/${enUrl(element.itemName)}?id=${element.id}`); }}
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

                        // return dispatch(createProductAndUpdatingList('beer', data))
                        return dispatch(createProductAndUpdatingListNew('beer', data))
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