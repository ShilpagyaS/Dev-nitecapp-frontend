import { DeleteProduct, DeleteProductFromOutlet } from '@/components/modal/adminmodal';
import { AddItemModal } from '@/components/modal/NewDminFlowModals';
import { createProductAndUpdatingList, createProductAndUpdatingListNew, deleteProductById, deleteProductByIdAccToOutlet, delinkProductById, emptyProductList, getProduct, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct } from '@/store/slices/product';
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton';
import { enUrl } from '@/utils/encoderfunc';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function LowAbvtable() {
    const router = useRouter();
    const { productList } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const dispatch = useDispatch()
    const [DeleteModal, setDeleteModal] = useState(false)
    const [DeleteModalOutlets, setDeleteModalOutlets] = useState(false)

    const [AddModal, setAddModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const [elementItemOutlet, setElementItemOutlet] = useState({
        title: '',
        outlets: [],
    })
    useEffect(() => {

        dispatch(getProduct('low_no_abv'))

        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    console.log(productList);
    useEffect(() => {
        let dummy = productList?.map(
            (element) => {
                return {
                    id: element.low_no_abv_id,
                    itemImage: element.image,
                    itemName: element.low_no_abv_name,
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
        let data = { type: 'low_no_abv', id: element.id, showProduct: e }
        dispatch(putProductByIdThenUpdateListShowProduct(data))
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

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/low_no_abv/${enUrl(element.itemName)}?id=${element.id}`); }}
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

        // dispatch(deleteProductById('low_no_abv', elementItem.id))
        let data = {
            type: 'low_no_abv',
            id: elementItem.id,
        }
        dispatch(delinkProductById(data))
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
                    itemtype={'low_no_abv'}
                    type={2}
                    onSave={(ids) => {
                        console.log(ids);
                        dispatch(deleteProductByIdAccToOutlet('low_no_abv',
                            {
                                isActive: false,
                                ids: [...ids]
                            }
                        ))
                    }}
                />
            }
            {AddModal &&
                <AddItemModal
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    label={'Low / No ABV'}
                    type={'low_no_abv'}
                    title={'Low / No ABV'}
                    onSave={(data, id) => {
                        // return dispatch(createProductAndUpdatingList('low_no_abv', data)) 
                        let body = {}
                        body = { ...data, outlet_id: [...id] }
                        return dispatch(createProductAndUpdatingListNew('low_no_abv', body))
                    }}
                />
            }
            <TableContainerWithButtons label={'ADD LOW / NO ABV'} buttonFunction={() => {
                // router.push("/specs/low_no_abv/new")
                setAddModal(true)
            }}
                OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={3} />
        </>
    )
}

export default LowAbvtable