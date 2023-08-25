import { DeleteProduct, DeleteProductFromOutlet, ShowHideIdsOnOutletBasis } from '@/components/modal/adminmodal'
import { deleteProductById, deleteProductByIdAccToOutlet, emptyProductList, getProduct, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct, showhideProductByIdAccToOutlet } from '@/store/slices/product'
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
import { enUrl } from '@/utils/encoderfunc'
import SwitchComp from '@/utils/SwitchComp'
import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CocktailTable() {
    const router = useRouter();
    const { productList } = useSelector((state) => state.product)
    const [newList, setList] = useState([])
    const dispatch = useDispatch()
    const [DeleteModal, setDeleteModal] = useState(false)
    const [DeleteModalOutlets, setDeleteModalOutlets] = useState(false)
    const [ShowHideModal, setShowHideModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const [elementItemOutlet, setElementItemOutlet] = useState({
        title: '',
        outlets: [],
    })
    useEffect(() => {

        dispatch(getProduct('cocktail'))

        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    console.log(productList);
    useEffect(() => {
        let dummy = productList?.map(
            (element) => {
                return {
                    id: element.cocktail_id,
                    itemImage: element.image,
                    itemName: element.cocktail_name,
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
        let data = { type: 'cocktail', id: element.id, showProduct: e }
        dispatch(putProductByIdThenUpdateListShowProduct(data))
    }
    const HeaderArray = ["Drink Image", "Drink Name", "Show / Hide", "Outlet", "Edit / Delete"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center 
                    justify-center p-1 bg-[#0C0C0C] border relative rounded-[10px]
                     border-[#3C3C3C] md:h-[106px] md:w-[106px] w-[80px] h-[80px]'
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
                <td className='min-w-[150px]'>
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold md:text-[13px] text-base leading-7 tracking-[-0.624px] text-white'>
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
                            {element.outlet}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>
                        <div>

                            <EditCircularButton onClickHandler={() => { router.push(`/specs/cocktail/${enUrl(element.itemName)}?id=${element.id}`); }}
                            />
                        </div>
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

        dispatch(deleteProductById('cocktail', elementItem.id))
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
                    itemtype={'cocktail'}
                    type={1}
                    onSave={(ids) => {
                        console.log(ids);
                        dispatch(deleteProductByIdAccToOutlet('cocktail',
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
                    itemtype={'cocktail'}
                    type={1}
                    onSave={(ids, hideIds) => {
                        console.log(ids);
                        if (ids.length > 0) {

                            dispatch(showhideProductByIdAccToOutlet('cocktail',
                                {
                                    showProduct: true,
                                    ids: [...ids]
                                }
                            ))
                        }
                        if (hideIds.length > 0) {

                            dispatch(showhideProductByIdAccToOutlet('cocktail',
                                {
                                    showProduct: false,
                                    ids: [...hideIds]
                                }
                            ))
                        }

                    }}
                />
            }
            <TableContainerWithButtons label={'ADD COCKTAIL'} OuterRows={OuterRows} buttonFunction={() => { router.push("/specs/cocktail/new") }} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
        </>
    )
}

export default CocktailTable