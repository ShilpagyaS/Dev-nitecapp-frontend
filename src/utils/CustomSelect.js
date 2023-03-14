import Image from 'next/image';
import { useState } from 'react';

export default function CustomSelect({ items, optionalFunction }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
    <div className="relative w-[201px] h-[40px]">
      <button
        className="w-full py-[8px] pl-[28px] pr-[28px] text-[#767676] bg-[#1D1D1D] border border-[#1D1D1D] rounded-[10px] shadow-sm outline-none appearance-none focus:border-[#F19B6C] not-italic font-normal text-base leading-6 font-Inter inline-flex items-center justify-between"
        onClick={handleToggleDropdown}
      >
        {selectedItem ? selectedItem.label : 'Select an option'}
        <Image
          src={'/asset/DownArrow.svg'}
          width={14}
          height={25}
          className="bg-[#1D1D1D]"
        />
      </button>
      {isDropdownOpen && (
        <ul className="absolute z-10 bg-[#1D1D1D] rounded-md shadow-lg pb-[10px]">
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
