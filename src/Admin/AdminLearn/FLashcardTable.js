import { AddFlashCard, DeleteLearn } from '@/components/modal/LearnModals'
import useNavDetails from '@/Hooks/useNavDetails'
import { emptycourses, getFlashCardsBySubcategoryId } from '@/store/slices/learnslice'
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
import { enUrl } from '@/utils/encoderfunc'
import SwitchComp from '@/utils/SwitchComp'
import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function FlashCardTables({ id }) {
    const router = useRouter();
    const { course } = useSelector((state) => state.learn)
    const [newList, setList] = useState([])
    const [DeleteModal, setDeleteModal] = useState(false)
    const { category, subcategory, subcategory2, subcategory3, subcategory4, productId, typeid, path, infoid } =
    useNavDetails();

    const [AddModal, setAddModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getFlashCardsBySubcategoryId(id))

        return () => {
            dispatch(emptycourses())
        }
    }, [])
    console.log(course);
    useEffect(() => {
        let dummy = course?.map(
            (element) => {
                return {
                    id: element.flashcard_id,
                    itemImage: element.image,
                    itemName: element.name,
                    // itemName: element.front_text,
                    showHideStatus: element.showProduct || false,
                    data: element,
                    createdDate: element.createdAt,
                }

            }
        ) || []
        console.log(dummy);
        setList([...dummy])
    }, [course])


    function toggleSwitch(e, element) {
        let data = { type: 'beer', id: element.id, showProduct: e }
        // dispatch(putProductByIdThenUpdateListShowProduct(data))
    }
    const HeaderArray = ["Card Image", "Card Questions", "Show / Hide", "Edit / Delete"]
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

                        <SwitchComp showHideStatus={element.showHideStatus} onChangeHandler={(e) => {
                            console.log(e);
                            toggleSwitch(e, element)
                        }} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <EditCircularButton
                            onClickHandler={() => {
                                router.push(`/learn/flashcards/${enUrl(subcategory2)}/${enUrl(subcategory3)}/${enUrl(element.itemName)}?id=${element.data.flashcard_id}&typeid=${element.data.flashcard_subcategory_id}&infoid=${element.data.flashcard_category_id}`);
                            }}
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

        // dispatch(deleteProductById('beer', elementItem.id))
        let data = {
            type: 'beer',
            id: elementItem.id,
        }
        // dispatch(delinkProductById(data))
    }
    return (
        <>
            {DeleteModal &&
                <DeleteLearn
                    isModalOpen={DeleteModal}
                    onClickCancel={() => { setDeleteModal(false) }}
                    title={elementItem.title}
                    onSave={deleteProduct}
                />}
            {AddModal &&
                <AddFlashCard
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    title={'Flashcard'}
                    onSave={() => { }}
                />
            }
            <TableContainerWithButtons label={'Add Flashcard'} buttonFunction={() => {
                // router.push("/specs/beer/new")
                setAddModal(true)
            }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
        </>
    )
}

export default FlashCardTables