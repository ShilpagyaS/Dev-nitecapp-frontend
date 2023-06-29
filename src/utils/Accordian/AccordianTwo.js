import Image from 'next/image';
import React, { useState } from 'react';

function AccordianTwo({ items, onClickItem }) {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const handleItemClick = (index) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter((i) => i !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    const handleExpandAll = () => {
        if (activeIndexes.length === items.length) {
            setActiveIndexes([]);
        } else {
            setActiveIndexes(items.map((_, index) => index));
        }
    };

    const renderItems = (items, parentIndex = '') => {
        return items?.map((item, index) => {
            const itemIndex = parentIndex ? `${parentIndex}-${index}` : `${index}`;

            return (
                <div key={itemIndex} className='w-full'>
                    <div
                        onClick={() => { handleItemClick(itemIndex); if (item?.content) onClickItem(item) }}
                        style={{ cursor: 'pointer' }}
                        className={`w-full flex justify-between items-center ${item?.type == 'chapter' ? 'bg-[#040404]' : item?.type == 'module' ? 'bg-[#272727]' : 'bg-[#191919] border border-transparent border-b-[#292929]'} p-[15px]`}
                    >
                        <div className='flex shrink-0 items-center bg-transparent'>

                            {(item?.type == 'chapter' || item?.type == 'module') &&

                                <span className={`bg-transparent ${activeIndexes.includes(itemIndex) ? 'rotate-0' : 'rotate-180'}`}>
                                    <Image src={'/asset/learnCourseArrowButton.svg'} height={22} width={18} className='bg-transparent' />
                                </span>
                            }
                            {item?.type == 'content' &&

                                <span className={`bg-transparent mr-[5px]`}>
                                    <Image src={'/asset/doc.svg'} height={22} width={18} className='bg-transparent' />
                                </span>
                            }
                            {item?.type == 'video' &&

                                <span className={`bg-transparent mr-[5px]`}>
                                    <Image src={'/asset/vid.svg'} height={22} width={18} className='bg-transparent' />
                                </span>
                            }

                            <h3 className='text-white bg-transparent ml-[8px]'>{item?.title}</h3>
                        </div>
                        {/* {(item.type == 'chapter' || item.type == 'module' || item.type == 'video') &&
                <div className='flex bg-transparent items-center'>
                  {item?.totaldocuments &&
                    <div className='flex items-center bg-transparent'>
  
                      <span className={`bg-transparent mr-[5px]`}>
                        <Image src={'/asset/doc.svg'} height={22} width={18} className='bg-transparent' />
                      </span>
                      <p className='text-[#B3B3B3] font-thin bg-transparent text-[14px] text-center'>{item.totaldocuments} Documents</p>
                    </div>
                  }
                  {item?.videoTime &&
                    <div className='ml-[15px] flex items-center bg-transparent'>
  
                      <span className={`bg-transparent mr-[5px]`}>
                        <Image src={'/asset/vid.svg'} height={22} width={18} className='bg-transparent' />
                      </span>
                      <p className='text-[#B3B3B3] font-thin bg-transparent text-[14px] text-center'>{item?.videoTime}</p>
                    </div>
                  }
                </div>
              } */}
                    </div>
                    {
                        activeIndexes.includes(itemIndex) && (
                            <div className='bg-transparent'>
                                {/* {item.content && <p className='text-white bg-transparent'>{item.content}</p>} */}
                                {item?.items && renderItems(item?.items, itemIndex)}
                            </div>
                        )
                    }
                </div >
            );
        });
    };

    return (
        <div>
            {/* <button onClick={handleExpandAll} className='text-white'>
          {activeIndexes.length === items.length ? 'Collapse All' : 'Expand All'}
        </button> */}
            {renderItems(items)}
        </div>
    );
}

export default AccordianTwo