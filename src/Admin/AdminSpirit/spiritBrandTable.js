import { DeleteProduct, DeleteProductFromOutlet, ShowHideIdsOnOutletBasis } from '@/components/modal/adminmodal';
import { AddItemModal } from '@/components/modal/NewDminFlowModals';
import { createProductAndUpdatingCAtegoryListNew, createProductAndUpdatingList, createProductAndUpdatingListNew, deleteProductById, deleteProductbyIdWithCategory, delinkProductByIdwithCAtegory, delinkProductByIdwithCAtegoryAccToOutlet, emptyProductList, getCategoryList, getProduct, getProductByCategoryId, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct, putProductByIdThenUpdateListShowProductForCategory, showhideproductProductByIdwithCAtegoryAccToOutlet } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enUrl } from "@/utils/encoderfunc";
import { getOutlets } from '@/store/slices/outlet';

function SpiritBrandTable({ productId, subcategory }) {
    const router = useRouter();
    const { productsByCategory } = useSelector((state) => state.product)
    const { outlets } = useSelector((state) => state.outlets)
    const [newList, setList] = useState([])
    const [DeleteModal, setDeleteModal] = useState(false)
    const [DeleteModalOutlets, setDeleteModalOutlets] = useState(false)
    const [ShowHideModal, setShowHideModal] = useState(false)

    const [AddModal, setAddModal] = useState(false)
    const [outletIds, setOutletIds] = useState([])
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

        dispatch(getProductByCategoryId('spirit', productId))
        dispatch(getOutlets())
        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    useEffect(() => {
        if (outlets.length > 0) {
            let id = outlets.map((outlet) => { return outlet.outlet_id })
            console.log([...id]);
            setOutletIds([...id])
        }
    }, [outlets])

    console.log(productsByCategory);
    useEffect(() => {
        let dummy = productsByCategory?.map(
            (element) => {
                return {
                    id: element.spirit_id,
                    itemImage: element.image,
                    itemName: element.spirit_name,
                    showHideStatus: element.showProduct,
                    outlet: element?.outlet.length > 1 ? `${element?.outlet.length} Outlets` : element?.outlet[0].outlet_name,
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
        dispatch(putProductByIdThenUpdateListShowProductForCategory('spirit', data, productId))
    }

    const HeaderArray = ["Drink Image", "Drink Name", "Show / Hide", "Outlet", "Edit / Delete"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='relative rounded-[10px] flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C] h-[106px] w-[106px]'
                    >
                        {!element.itemImage &&
                            <Image src={'/asset/nodrinkinverted.webp'}
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
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px] text-white'>
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

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/spirit/${enUrl(subcategory)}/${enUrl(element.itemName)}?id=${element.id}&typeid=${productId}`); }}
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

        // dispatch(deleteProductbyIdWithCategory('spirit', elementItem.id, productId))
        let data = {
            type: 'spirit',
            id: elementItem.id,
        }
        dispatch(delinkProductByIdwithCAtegory(data, productId))
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
            {DeleteModalOutlets &&
                <DeleteProductFromOutlet
                    isModalOpen={DeleteModalOutlets}
                    onClickCancel={() => { setDeleteModalOutlets(false) }}
                    title={elementItemOutlet.title}
                    outlets={elementItemOutlet.outlets}
                    itemtype={'spirit'}
                    type={2}
                    onSave={(ids) => {
                        console.log(ids);
                        dispatch(delinkProductByIdwithCAtegoryAccToOutlet('spirit',
                            {
                                isActive: false,
                                ids: [...ids]
                            }
                            , productId
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
                    itemtype={'spirit'}
                    type={2}
                    onSave={(ids, hideIds) => {
                        console.log(ids);
                        if (ids.length > 0) {

                            dispatch(showhideproductProductByIdwithCAtegoryAccToOutlet('spirit',
                                {
                                    showProduct: true,
                                    ids: [...ids]
                                }, productId
                            ))
                        }
                        if (hideIds.length > 0) {

                            dispatch(showhideproductProductByIdwithCAtegoryAccToOutlet('spirit',
                                {
                                    showProduct: false,
                                    ids: [...hideIds]
                                }, productId
                            ))
                        }

                    }}
                />
            }
            {AddModal &&
                <AddItemModal
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    label={'Spirits'}
                    type={'spirit'}
                    title={'Spirit'}
                    productId={productId}
                    onSave={(data, id) => {
                        let body = {}
                        body = { ...data, category_id: productId, outlet_id: [...id] }
                        // return dispatch(createProductAndUpdatingList('spirit', body))
                        return dispatch(createProductAndUpdatingCAtegoryListNew('spirit', body, productId))

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