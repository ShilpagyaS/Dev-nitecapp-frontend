import { DeleteProduct, DeleteProductFromOutlet, ShowHideIdsOnOutletBasis } from '@/components/modal/adminmodal'
import { AddItemModal } from '@/components/modal/NewDminFlowModals'
import { createProduct, createProductAndUpdatingList, createProductAndUpdatingListNew, deleteProductById, deleteProductByIdAccToOutlet, delinkProductById, emptyProductList, getProduct, putProductById, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct, showhideProductByIdAccToOutlet } from '@/store/slices/product'
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
    const [DeleteModalOutlets, setDeleteModalOutlets] = useState(false)
    const [ShowHideModal, setShowHideModal] = useState(false)

    const [AddModal, setAddModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const [elementItemOutlet, setElementItemOutlet] = useState({
        title: '',
        outlets: [],
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
                    outlet: element?.outlet.length > 1 ? `${element?.outlet.length} Outlets` : element?.outlet[0].outlet_name,
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
                    <div className='relative rounded-[10px] flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]
                     md:h-[106px] md:w-[106px] w-[80px] h-[80px]'
                    >
                        {!element.itemImage &&
                            <Image src={'/asset/nodrinkinverted.webp'}
                                // <Image src={'/asset/noimagedrinkeditsquare.jpg'}
                                alt="image"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-[10px]"
                                priority

                            />
                        }
                        {element.itemImage &&
                            <Image src={element.itemImage}
                                alt="image"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-[10px]"
                                priority

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
                        {element?.data?.outlet.length > 1 ? <>
                            <div className=' cursor-pointer p-[5px] rounded-[3px] text-primary-base text-[14px] border border-primary-base'
                                onClick={() => {
                                    setElementItemOutlet({
                                        title: element.itemName,
                                        outlets: [...element?.data?.outlet]
                                    })
                                    setShowHideModal(true)
                                }}
                            >
                                Manage Status
                            </div>
                        </> :

                            <SwitchComp showHideStatus={element.showHideStatus} onChangeHandler={(e) => {
                                toggleSwitch(e, element)
                            }} />
                        }
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
                                if (element?.data?.outlet.length > 1) {
                                    setElementItemOutlet({
                                        title: element.itemName,
                                        outlets: [...element?.data?.outlet]
                                    })
                                    setDeleteModalOutlets(true)
                                }
                                else {

                                    setElementItem({
                                        title: element.itemName,
                                        id: element.id
                                    });
                                    setDeleteModal(true)
                                }

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

        // dispatch(deleteProductById('beer', elementItem.id))
        let data = {
            type: 'beer',
            id: elementItem.id,
        }
        dispatch(delinkProductById(data))
    }
    return (
        <>   {DeleteModal &&
            <DeleteProduct
                isModalOpen={DeleteModal}
                onClickCancel={() => { setDeleteModal(false) }}
                title={elementItem.title}
                onSave={deleteProduct}
            />}
            {DeleteModalOutlets &&
                <DeleteProductFromOutlet
                    isModalOpen={DeleteModalOutlets}
                    onClickCancel={() => { setDeleteModalOutlets(false) }}
                    title={elementItemOutlet.title}
                    outlets={elementItemOutlet.outlets}
                    itemtype={'beer'}
                    type={2}
                    onSave={(ids) => {
                        console.log(ids);
                        dispatch(deleteProductByIdAccToOutlet('beer',
                            {
                                isActive: false,
                                ids: [...ids]
                            }
                        ))
                    }}
                />
            }
            {ShowHideModal &&
                <ShowHideIdsOnOutletBasis
                    isModalOpen={ShowHideModal}
                    onClickCancel={() => { setShowHideModal(false) }}
                    title={elementItemOutlet.title}
                    outlets={elementItemOutlet.outlets}
                    itemtype={'beer'}
                    type={2}
                    onSave={(ids, hideIds) => {
                        console.log(ids);
                        if (ids.length > 0) {

                            dispatch(showhideProductByIdAccToOutlet('beer',
                                {
                                    showProduct: true,
                                    ids: [...ids]
                                }
                            ))
                        }
                        if (hideIds.length > 0) {

                            dispatch(showhideProductByIdAccToOutlet('beer',
                                {
                                    showProduct: false,
                                    ids: [...hideIds]
                                }
                            ))
                        }

                    }}
                />
            }
            {AddModal &&
                <AddItemModal
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    label={'Beers'}
                    type={'beer'}
                    title={'Beer'}
                    onSave={(data, id) => {
                        // return dispatch(createProductAndUpdatingList('low_no_abv', data)) 
                        let body = {}
                        body = { ...data, outlet_id: [...id] }
                        // return dispatch(createProductAndUpdatingList('beer', data))
                        return dispatch(createProductAndUpdatingListNew('beer', body))
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