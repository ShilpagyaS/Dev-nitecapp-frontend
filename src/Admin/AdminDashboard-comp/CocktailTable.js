import { DeleteProduct } from '@/components/modal/adminmodal'
import { deleteProductById, emptyProductList, getProduct, putProductByIdThenUpdateList, putProductByIdThenUpdateListShowProduct } from '@/store/slices/product'
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
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
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
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
                    itemImage: '',
                    itemName: element.cocktail_name,
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
        let data = { type: 'cocktail', id: element.id, showProduct: e }
        dispatch(putProductByIdThenUpdateListShowProduct(data))
    }
    const HeaderArray = ["Drink Image", "Drink Name", "Show / Hide", "Popularity", "Edit / Delete"]
    function OuterRows({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'
                    >
                        <Image src={'/asset/coctail1.png'}
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
                        {console.log(element.showHideStatus)}
                        <SwitchComp showHideStatus={element.showHideStatus} onChangeHandler={(e) => {
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

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/cocktail?id=${element.id}`); }}
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
            <TableContainerWithButtons label={'ADD COCKTAIL'} OuterRows={OuterRows} buttonFunction={() => { router.push("/specs/cocktail/new") }} mockData={newList} HeaderArray={HeaderArray} pageSize={3} />
        </>
    )
}

export default CocktailTable