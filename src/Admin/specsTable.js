import { DeleteProduct } from '@/components/modal/adminmodal';
import { emptyAllProduct, getAllProduct } from '@/store/slices/allproducts';
import { putProductByIdThenUpdateList } from '@/store/slices/product';
import { EditCircularButton } from '@/utils/CircularButton';
import SwitchComp from '@/utils/SwitchComp';
import TableContainerWithButtons from '@/utils/TableContainerWithButtons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SpecsTable() {
    const router = useRouter();
    const { low_no_abvList, beerList, wineList, spiritList, cocktailList } = useSelector((state) => state.allproducts)
    const [newcocktailList, setcocktailList] = useState([])
    const [newbeerList, setbeerList] = useState([])
    const [newwineList, setwineList] = useState([])
    const [newspiritList, setspiritList] = useState([])
    const [newlow_no_abvList, setlow_no_abvList] = useState([])
    const [DeleteModal, setDeleteModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getAllProduct(['cocktail', 'spirit', 'beer', 'low_no_abv', 'wine']))

        return () => {
            dispatch(emptyAllProduct())
        }
    }, [])
    useEffect(() => {
        let dummy = cocktailList.map(
            (element) => {
                return {
                    id: element.cocktail_id,
                    itemImage: '',
                    itemName: element.cocktail_name,
                    showHideStatus: element.isActive,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                    type: 'cocktail'
                }

            }
        )
        console.log(dummy);
        setcocktailList([...dummy])
    }, [cocktailList])
    useEffect(() => {
        let dummy = beerList.map(
            (element) => {
                return {
                    id: element.beer_id,
                    itemImage: '',
                    itemName: element.beer_name,
                    showHideStatus: element.isActive,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                    type: 'beer'
                }

            }
        )
        console.log(dummy);
        setbeerList([...dummy])
    }, [beerList])
    useEffect(() => {
        let dummy = spiritList.map(
            (element) => {
                return {
                    id: element.spirit_id,
                    itemImage: '',
                    itemName: element.spirit_name,
                    showHideStatus: element.isActive,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                    type: 'spirit'
                }

            }
        )
        console.log(dummy);
        setspiritList([...dummy])
    }, [spiritList])
    useEffect(() => {
        let dummy = wineList.map(
            (element) => {
                return {
                    id: element.wine_id,
                    itemImage: '',
                    itemName: element.wine_name,
                    showHideStatus: element.isActive,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                    type: 'wine'
                }

            }
        )
        console.log(dummy);
        setwineList([...dummy])
    }, [wineList])
    useEffect(() => {
        let dummy = low_no_abvList.map(
            (element) => {
                return {
                    id: element.low_no_abv_id,
                    itemImage: '',
                    itemName: element.low_no_abv_name,
                    showHideStatus: element.isActive,
                    popularity: 'New',
                    data: element,
                    createdDate: element.createdAt,
                    type: 'low_no_abv'
                }

            }
        )
        console.log(dummy);
        setlow_no_abvList([...dummy])
    }, [low_no_abvList])

    function toggleSwitch(e, element) {
        let data = { ...element.data, isActive: e }
        dispatch(putProductByIdThenUpdateList(element.type, element.id, data))
            .then(dispatch(getAllProduct(['cocktail', 'spirit', 'beer', 'low_no_abv', 'wine'])))
    }
    const HeaderArray = ["Item Image", "Item Name", "Show / Hide", "Popularity", "Action"]
    function OuterRowsnormal({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'
                    >
                        <Image src={'/asset/blue-moon.svg'}
                            alt="image"
                            width={106}
                            height={106} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
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

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
                            {element.popularity}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/${element.type}?id=${element.id}`); }}
                        />
                        {/* <div className='ml-[15px]'>

                            <DeleteCircularButton onClickHandler={() => {
                                setElementItem({
                                    title: element.itemName,
                                    id: element.id
                                }); setDeleteModal(true)
                            }} />
                        </div> */}
                    </div>
                </td>
            </>
        )
    }
    function OuterRowsspiritandwine({ element }) {

        return (
            <>
                <td className='flex flex-row items-center justify-center p-[12px]'>
                    <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'
                    >
                        <Image src={'/asset/blue-moon.svg'}
                            alt="image"
                            width={106}
                            height={106} />
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
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

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
                            {element.popularity}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <EditCircularButton onClickHandler={() => { router.push(`/specs/${element.type}/category/${element.itemName}?id=${element.id}`); }}
                        />
                        {/* <div className='ml-[15px]'>

                            <DeleteCircularButton onClickHandler={() => {
                                setElementItem({
                                    title: element.itemName,
                                    id: element.id
                                }); setDeleteModal(true)
                            }} />
                        </div> */}
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
            />
        }
            <div className='admincomponents mt-[23px]'>
                <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
                    <p>
                        Cocktail
                    </p>
                </div>
                <TableContainerWithButtons label={'ADD ITEM'} buttonFunction={() => { router.push("/specs/beer/new") }} OuterRows={OuterRowsnormal} mockData={newcocktailList} HeaderArray={HeaderArray} pageSize={3} deactivateadd={true} />
            </div>
            <div className='admincomponents mt-[23px]'>
                <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
                    <p>
                        Beer
                    </p>
                </div>
                <TableContainerWithButtons label={'ADD ITEM'} buttonFunction={() => { router.push("/specs/beer/new") }} OuterRows={OuterRowsnormal} mockData={newbeerList} HeaderArray={HeaderArray} pageSize={3} deactivateadd={true}/>
            </div>
            <div className='admincomponents mt-[23px]'>
                <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
                    <p>
                        Spirit
                    </p>
                </div>
                <TableContainerWithButtons label={'ADD ITEM'} buttonFunction={() => { router.push("/specs/beer/new") }} OuterRows={OuterRowsspiritandwine} mockData={newspiritList} HeaderArray={HeaderArray} pageSize={3} deactivateadd={true}/>
            </div>
            <div className='admincomponents mt-[23px]'>
                <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
                    <p>
                        Wine
                    </p>
                </div>
                <TableContainerWithButtons label={'ADD ITEM'} buttonFunction={() => { router.push("/specs/beer/new") }} OuterRows={OuterRowsspiritandwine} mockData={newwineList} HeaderArray={HeaderArray} pageSize={3} deactivateadd={true}/>
            </div>
            <div className='admincomponents mt-[23px]'>
                <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
                    <p>
                        Low / No ABV
                    </p>
                </div>
                <TableContainerWithButtons label={'ADD ITEM'} buttonFunction={() => { router.push("/specs/beer/new") }} OuterRows={OuterRowsnormal} mockData={newlow_no_abvList} HeaderArray={HeaderArray} pageSize={3} deactivateadd={true}/>
            </div>
        </>
    )
}


export default SpecsTable