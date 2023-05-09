import useMediaQuery from '@/Hooks/useMediaQuery';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CustomSelect({ customDropdowncss, items, optionalFunction, defaultSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const isTablet = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (defaultSelect)
      handleSelectItem(defaultSelect)
  }, [])

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
    console.log('items', item);
    optionalFunction(item)
  };



  return (
    <div className="relative md:w-[201px] w-full h-[40px]">
      <button
        className="w-full py-[8px] pl-[28px] pr-[28px] text-[#767676] bg-[#1D1D1D] border border-[#1D1D1D] rounded-[10px] shadow-sm outline-none appearance-none focus:border-primary-base not-italic font-normal text-base leading-6 font-Inter inline-flex items-center justify-between"
        onClick={handleToggleDropdown}
      >
        {selectedItem ? selectedItem.label : 'Select an option'}
        {isTablet == false &&
          <Image
            src={'/asset/DownArrow.svg'}
            width={14}
            height={25}
            className="bg-[#1D1D1D]"
          />
        }
      </button>
      {isDropdownOpen && (
        <ul className={`absolute z-10 bg-[#1D1D1D] rounded-md shadow-lg pb-[10px] ${customDropdowncss ? customDropdowncss : ''}`}>
          {items.map((item) => (
            <li key={item.value}>
              <button
                className={`w-[201px] not-italic font-normal text-base leading-6 text-[#767676] text-left p-[10px] pl-[19px] ${selectedItem?.value === item.value
                  ? 'bg-[#1D1D1D] '
                  : 'bg-[#1D1D1D] hover:bg-gray-100'
                  }`}
                onClick={() => handleSelectItem(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export function CustomSelectWithAllBlackTheme({ items, optionalFunction, defaultSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    if (defaultSelect)
      handleSelectItem(defaultSelect)
  }, [])

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
    console.log('items', item);
    optionalFunction(item)
  };



  return (
    <div className="relative h-[50px]">
      <button
        className="w-full h-[50px] py-[8px] pl-[28px] pr-[28px] text-white border border-[#3C3C3C] rounded-[10px] shadow-sm outline-none appearance-none focus:border-white not-italic font-normal text-[14px] leading-6 font-Inter inline-flex items-center justify-between"
        onClick={handleToggleDropdown}
      >
        {selectedItem ? selectedItem.label : <span className='text-[#767676]'>

          Select an option
        </span>
        }
        <Image
          src={'/asset/DownArrow.svg'}
          width={14}
          height={25}
          className="bg-transparent"
        />
      </button>
      {isDropdownOpen && (
        <ul className="brandModal absolute z-10 bg-[#1D1D1D] rounded-md shadow-lg w-full border border-white rounded=[10px] max-h-[90px] overflow-y-auto">
          {items.map((item) => (
            <li key={item.value}>
              <button
                className={` not-italic w-full z-10 font-normal text-base leading-6 text-[#767676] text-left p-[5px] pl-[19px] 
                ${selectedItem?.value === item.value
                    ? ' '
                    : 'hover:bg-gray-100'
                  }`}
                onClick={() => handleSelectItem(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export function CustomSelectForBrands({ items, optionalFunction, defaultSelect, isclear }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    console.log(defaultSelect);
    if (defaultSelect)
      handleSelectItem(defaultSelect)
  }, [])
  useEffect(() => {
    if (isclear == true)

      setSelectedItem(null)
  }, [isclear])

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
    console.log('items', item);
    optionalFunction(item)
  };



  return (
    <div className="relative w-[201px] h-[50px]">
      <button
        className="w-full py-[8px] pl-[28px] pr-[28px] text-white bg-[#2C2C2C] border border-[#2C2C2C] rounded shadow-sm capitalize outline-none appearance-none not-italic font-normal text-base leading-6 font-Inter inline-flex items-center justify-between"
        onClick={handleToggleDropdown}
      >
        {selectedItem ? selectedItem.label : <span className='text-[#767676] bg-transparent'>
          Select an option
        </span>}
        <Image
          src={'/asset/DownArrow.svg'}
          width={14}
          height={25}
          className="bg-[#2C2C2C]"
        />
      </button>
      {isDropdownOpen && (
        <ul className="brandModal absolute z-10 bg-[#2C2C2C] rounded-md shadow-lg pb-[10px] max-h-[200px] overflow-y-scroll">
          {items.map((item) => (
            <li key={item.value}>
              <button
                className={`w-[201px] capitalize not-italic font-normal text-base leading-6 text-[#767676] text-left p-[10px] pl-[19px] ${selectedItem?.value === item.value
                  ? 'bg-[#2C2C2C] '
                  : 'bg-[#2C2C2C] hover:bg-gray-100'
                  }`}
                onClick={() => handleSelectItem(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}