import useMediaQuery from '@/Hooks/useMediaQuery'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ChipWithLeftButton from './ChipWithLeftButton'
import { DeleteCircularButton, EditCircularButton } from './CircularButton'
import CustomSelect from './CustomSelect'
import Search from './Search'
import TableComponent from './TableComponent'

const items = [
    // { label: 'All', value: 'option1' },
    { label: 'Latest to Old', value: 'option2' },
    { label: 'Old to New', value: 'option3' },
];

function TableContainerWithButtons({ OuterRows, HeaderArray, mockData, pageSize, label, buttonFunction, deactivateadd }) {
    const isTablet = useMediaQuery("(max-width: 768px)");
    const router = useRouter();

    const [ListData, setListData] = useState([])
    const [MainListData, setMainListData] = useState([])
    const [searchTerm, setSearch] = useState("")
    useEffect(() => {
        if (mockData != []) {

            sortByDate('option2', [...mockData])
            setMainListData([...mockData])
        }
    }, [mockData])
    useEffect(() => {
        console.log(searchTerm);
    }, [searchTerm])

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(ListData.length / pageSize); //5 is page size
    const handleClick = (pageNum) => {
        setCurrentPage(pageNum);
    };

    const renderRows = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return ListData.slice(start, end)?.map((element, index) => (
            <tr key={index} className='md:h-[111px]'>
                <td className='p-[25px] text-white'>{element.indexnumber}</td>

                <OuterRows element={element} />

            </tr>
        ));
    };
    const renderHeader = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return <>
            <th className='bg-[#171717] w-[54px] not-italic font-normal text-[13px] md:text-base leading-6 text-[#959595] font-Inter'>#</th>
            {HeaderArray?.map((element, index) => (
                <th className='bg-[#171717] not-italic font-normal md:text-base text-[13px] leading-6 text-[#959595] font-Inter'>{element}</th>
            )
            )
            }
        </>
    };
    const renderPagination = () => {
        // console.log(totalPages);
        const pageLinks = [];
        for (let i = 1; i <= totalPages; i++) {
            pageLinks.push(
                <li key={i}>
                    <button
                        className={`${i === currentPage ? "bg-primary-base" : "bg-white"
                            } rounded-full h-[7.50px] w-[7.50px] m-[3.5px]`}
                        onClick={() => handleClick(i)}
                    >

                    </button>
                </li>
            );
        }
        return (


            <ul className="flex justify-center items-center w-full">{pageLinks}</ul>


        );
    };
    function sortByDate(value, dummyList) {
        let sortedItems;
        let indexedSortedList
        console.log(value);
        if (value == 'option2') {

            sortedItems = [...dummyList].sort((b, a) => {
                return new Date(a.createdDate) - new Date(b.createdDate)
            });
            indexedSortedList = sortedItems.map((data, i) => { return { ...data, indexnumber: i + 1 } })
            setListData(indexedSortedList)
        }
        if (value == 'option3') {

            sortedItems = [...dummyList].sort((a, b) => {
                return new Date(a.createdDate) - new Date(b.createdDate)
            });
            indexedSortedList = sortedItems.map((data, i) => { return { ...data, indexnumber: i + 1 } })
            setListData(indexedSortedList)
        }
        if (value == 'option1') {
            indexedSortedList = mockData.map((data, i) => { return { ...data, indexnumber: i + 1 } })
            setListData(indexedSortedList)
        }
        console.log(sortedItems);
    }
    function filterData(value) {
        let filterDummy = []
        filterDummy = MainListData.filter((item) =>

            item.itemName.toLowerCase().includes(value.toLowerCase())
        );
        console.log(filterDummy);
        setListData(filterDummy)
    }
    return (
        <>
            <div className='border border-[#3C3C3C] '>
                {isTablet == false &&
                    <div className='buttonRow flex pt-[18px] pb-[12.5px] px-[18px] items-center justify-between '>
                        {/* grid for search and button  */}

                        {!deactivateadd && <ChipWithLeftButton condition={true} label={label} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { buttonFunction() }} />
                        }
                        {deactivateadd && <div></div>}
                        <div className='flex pr-[38px] '>
                            <div className='mr-[20px]'>

                                <CustomSelect items={items} optionalFunction={(e) => { sortByDate(e.value, ListData) }} defaultSelect={items[0]} />
                                e             </div>

                            <Search search={searchTerm} setSearch={(e) => { setSearch(e); filterData(e) }} />
                        </div>
                    </div>
                }
                {isTablet == true &&
                    <div className='buttonRow flex flex-col w-full pt-[18px] pb-[12.5px] px-[18px] '>
                        {/* grid for search and button  */}
                        <div className='w-full mb-[15px]'>

                            <Search search={searchTerm} setSearch={(e) => { setSearch(e); filterData(e) }} />
                        </div>


                        {deactivateadd && <div></div>}
                        <div className='flex items-center flex-wrap justify-between pr-[3px] '>
                            {!deactivateadd && <ChipWithLeftButton condition={true} label={label} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { buttonFunction() }} />
                            }
                            <div className=''>

                                <CustomSelect items={items} optionalFunction={(e) => { sortByDate(e.value, ListData) }} defaultSelect={items[0]} />
                            </div>

                        </div>
                    </div>
                }

                {mockData?.length &&
                    <div className='Table'>
                        <TableComponent renderRows={renderRows} renderHeader={renderHeader} />

                    </div>
                }
                {!mockData?.length &&

                    <div className='flex flex-col items-center justify-center h-full w-full'>
                        <Image
                            className="bg-transparent"
                            src="/asset/EmptyFrame.svg"
                            width={302}
                            height={186}
                            alt="Empty"
                            priority
                        />
                        <p className='not-italic font-bold text-xl font-Inter text-white mt-[54px]'>You have not added, any items</p>
                        <p className='not-italic font-semibold text-base leading-6 text-[#959595] mt-[10px] mb-[17px]'>Please add Item to Show</p>
                    </div>
                }


            </div>
            {mockData?.length &&
                <div className=' w-full flex flex-row mt-[20px] items-center'>
                    {renderPagination()}
                    <div className='h-[33px] flex items-center justify-center'>
                        <button className='mr-[8px] w-[37px] h-[33px] bg-primary-base flex items-center justify-center rounded-[5px]'
                            onClick={() => { if (currentPage > 1) handleClick(currentPage - 1) }}>
                            <Image
                                src="/asset/LeftArrow.svg"
                                width={11}
                                height={6}
                                className="bg-transparent"
                                priority
                            />
                        </button >
                        <button className='w-[37px] h-[33px] bg-primary-base flex items-center justify-center rotate-180 rounded-[5px]'
                            onClick={() => { if (currentPage < totalPages) handleClick(currentPage + 1) }}>
                            <Image
                                src="/asset/LeftArrow.svg"
                                width={11}
                                height={6}
                                className="bg-transparent"
                                priority
                            />
                        </button>
                    </div>

                </div>
            }
        </>
    )
}

export default TableContainerWithButtons