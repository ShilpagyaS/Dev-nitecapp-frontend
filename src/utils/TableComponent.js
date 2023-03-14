import Image from 'next/image'
import React, { useState } from 'react'
import { DeleteCircularButton, EditCircularButton } from './CircularButton'
import SwitchComp from './SwitchComp'
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
        itemName: 'Old Fashioned',
        showHideStatus: false,
        popularity: 'None',

    },
]

function TableComponent({ renderRows }) {
    // const pageSize = 2
    // const [data, setData] = useState(mockData)
    // const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = Math.ceil(data.length / pageSize); //5 is page size
    // const handleClick = (pageNum) => {
    //     setCurrentPage(pageNum);
    // };
    // const renderRows = () => {
    //     const start = (currentPage - 1) * pageSize;
    //     const end = start + pageSize;
    //     return data.slice(start, end).map((element, index) => (
    //         <tr key={index} className='h-[111px]'>
    //             <td className='p-[25px]'>{index + 1}</td>
    //             <td className='flex flex-row items-center justify-center p-[12px]'>
    //                 <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'>

    //                     <Image src={'/asset/coctail1.png'}
    //                         alt="image"
    //                         width={106}
    //                         height={106} />
    //                 </div>
    //             </td>
    //             <td >
    //                 <div className='flex flex-row items-center justify-center p-1'>

    //                     <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
    //                         {element.itemName}
    //                     </p>
    //                 </div>
    //             </td>
    //             <td >
    //                 <div className='flex flex-row items-center justify-center p-1'>

    //                     <SwitchComp showHideStatus={element.showHideStatus} />
    //                 </div>
    //             </td>
    //             <td >
    //                 <div className='flex flex-row items-center justify-center p-1'>

    //                     <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px]'>
    //                         {element.popularity}
    //                     </p>
    //                 </div>
    //             </td>
    //             <td >
    //                 <div className='flex flex-row items-center justify-center p-1'>

    //                     <EditCircularButton />
    //                     <div className='ml-[15px]'>

    //                         <DeleteCircularButton />
    //                     </div>
    //                 </div>
    //             </td>
    //         </tr>
    //     ));
    // };
    // const renderPagination = () => {
    //     const pageLinks = [];
    //     for (let i = 1; i <= totalPages; i++) {
    //         pageLinks.push(
    //             <li key={i}>
    //                 <button
    //                     className={`${i === currentPage ? "bg-[#F19B6C]" : "bg-white"
    //                         } rounded-full h-[7.50px] w-[7.50px] m-[3.5px]`}
    //                     onClick={() => handleClick(i)}
    //                 >

    //                 </button>
    //             </li>
    //         );
    //     }
    //     return (


    //         <ul className="flex justify-center items-center w-full">{pageLinks}</ul>


    //     );
    // };
    return (
        <div className='TableComponent w-full '>
            <table class="table-fixed w-full text-white border border-b-[#3C3C3C] border-r-0 border-t-0 border-l-0">
                <thead className='h-[56px]'>
                    <tr >
                        <th className='bg-[#171717] w-[54px] not-italic font-normal text-base leading-6 text-gray-600 font-Inter'>#</th>
                        <th className='bg-[#171717] not-italic font-normal text-base leading-6 text-gray-600 font-Inter'>Item Image</th>
                        <th className='bg-[#171717] not-italic font-normal text-base leading-6 text-gray-600 font-Inter'>Item Name</th>
                        <th className='bg-[#171717] not-italic font-normal text-base leading-6 text-gray-600 font-Inter'>Show/Hide</th>
                        <th className='bg-[#171717] not-italic font-normal text-base leading-6 text-gray-600 font-Inter'>Popularity</th>
                        <th className='bg-[#171717] not-italic font-normal text-base leading-6 text-gray-600 font-Inter'>Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#3C3C3C]">
                    {/* {mockData.map((element, index) =>

                        <tr className='h-[111px]'>
                            <td className='p-[25px]'>{index + 1}</td>
                            <td className='flex flex-row items-center justify-center p-[12px]'>
                                <div className='flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C]'>

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

                                    <EditCircularButton />
                                    <div className='ml-[15px]'>

                                        <DeleteCircularButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )} */}
                    {renderRows()}
                </tbody>
            </table>
            {/* <div className=' w-full flex flex-row mt-[20px] items-center'>
                {renderPagination()}
                <div className='h-[33px] flex items-center justify-center'>
                    <button className='mr-[8px] w-[37px] h-[33px] bg-[#F19B6C] flex items-center justify-center rounded-[5px]'>
                        <Image
                            src="/asset/LeftArrow.svg"
                            width={11}
                            height={6}
                            className="bg-transparent"
                        />
                    </button>
                    <button className='w-[37px] h-[33px] bg-[#F19B6C] flex items-center justify-center rotate-180 rounded-[5px]'>
                        <Image
                            src="/asset/LeftArrow.svg"
                            width={11}
                            height={6}
                            className="bg-transparent"
                        />
                    </button>
                </div>

            </div> */}

        </div >
    )
}

export default TableComponent