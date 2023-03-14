import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ChipWithLeftButton from './ChipWithLeftButton'
import { DeleteCircularButton, EditCircularButton } from './CircularButton'
import CustomSelect from './CustomSelect'
import Search from './Search'
import SwitchComp from './SwitchComp'
import TableComponent from './TableComponent'
const mockData = [
    {
        id: 1,
        itemImage: '',
        itemName: 'Old Fashioned',
        showHideStatus: true,
        popularity: 'New',

    },
    {
        id: 2,
        itemImage: '',
        itemName: 'Darusi',
        showHideStatus: true,
        popularity: 'New',

    },
    {
        id: 3,
        itemImage: '',
        itemName: 'SouthSide',
        showHideStatus: false,
        popularity: 'None',

    },
    {
        id: 4,
        itemImage: '',
        itemName: 'Old Monk',
        showHideStatus: false,
        popularity: 'None',

    },
    {
        id: 5,
        itemImage: '',
        itemName: 'Old Fashioned2',
        showHideStatus: true,
        popularity: 'None',

    },
]
const items = [
    { label: 'All', value: 'option1' },
    { label: 'Latest to Old', value: 'option2' },
    { label: 'Old to New', value: 'option3' },
];
function TableContainerWithButtons() {
    const router = useRouter();

    const pageSize = 3
    const [data, setData] = useState(mockData)
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / pageSize); //5 is page size
    const handleClick = (pageNum) => {
        setCurrentPage(pageNum);
    };
    const renderRows = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return data.slice(start, end).map((element, index) => (
            <tr key={index} className='h-[111px]'>
                <td className='p-[25px]'>{index + 1}</td>
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

                        <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
                            {element.itemName}
                        </p>
                    </div>
                </td>
                <td >
                    <div className='flex flex-row items-center justify-center p-1'>

                        <SwitchComp showHideStatus={element.showHideStatus} />
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

                        <EditCircularButton onClickHandler={() => { router.push("/specs/cocktails-details"); }}
                        />
                        <div className='ml-[15px]'>

                            <DeleteCircularButton />
                        </div>
                    </div>
                </td>
            </tr>
        ));
    };
    const renderPagination = () => {
        console.log(totalPages);
        const pageLinks = [];
        for (let i = 1; i <= totalPages; i++) {
            pageLinks.push(
                <li key={i}>
                    <button
                        className={`${i === currentPage ? "bg-[#F19B6C]" : "bg-white"
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
    return (
        <>
            <div className='border border-[#3C3C3C] '>
                <div className='buttonRow flex pt-[18px] pb-[12.5px] px-[18px] items-center justify-between '>
                    {/* grid for search and button  */}

                    <ChipWithLeftButton label={'ADD ITEM'} srcPath={'/asset/PlusVector.svg'} onClickHandler={()=>{router.push("/specs/new-cocktail")}} />
                    <div className='flex pr-[38px] '>
                        <div className='mr-[20px]'>

                            <CustomSelect items={items} optionalFunction={() => { }} />
                        </div>

                        <Search />
                    </div>
                </div>
                <div className='Table'>
                    <TableComponent renderRows={renderRows} />

                </div>

            </div>
            <div className=' w-full flex flex-row mt-[20px] items-center'>
                {renderPagination()}
                <div className='h-[33px] flex items-center justify-center'>
                    <button className='mr-[8px] w-[37px] h-[33px] bg-[#F19B6C] flex items-center justify-center rounded-[5px]'
                        onClick={() => { if (currentPage > 1) handleClick(currentPage - 1) }}>
                        <Image
                            src="/asset/LeftArrow.svg"
                            width={11}
                            height={6}
                            className="bg-transparent"
                        />
                    </button >
                    <button className='w-[37px] h-[33px] bg-[#F19B6C] flex items-center justify-center rotate-180 rounded-[5px]'
                        onClick={() => { if (currentPage < totalPages) handleClick(currentPage + 1) }}>
                        <Image
                            src="/asset/LeftArrow.svg"
                            width={11}
                            height={6}
                            className="bg-transparent"
                        />
                    </button>
                </div>

            </div>
        </>
    )
}

export default TableContainerWithButtons