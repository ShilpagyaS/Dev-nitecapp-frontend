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
export function CustomSelectWithAllBlackTheme({ items, optionalFunction, defaultSelect, resetValue }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    if (defaultSelect)
      handleSelectItem(defaultSelect)
  }, [])
  useEffect(() => {
    console.log(resetValue);
    if (resetValue)
      setSelectedItem(null);
  }, [resetValue])

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
export function CustomSelectForBrandsfull({ items, optionalFunction, defaultSelect, isclear }) {
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
    <div className="relative w-full h-[50px]">
      <button
        className="w-full py-[8px] pl-[28px] pr-[28px] text-white bg-trans border border-[#2C2C2C] rounded-md shadow-sm capitalize outline-none appearance-none not-italic font-normal text-base leading-6 font-Inter inline-flex items-center justify-between"
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
        <ul className="brandModal w-full absolute z-10 bg-black border border-[#2C2C2C] rounded-md shadow-lg pb-[10px] max-h-[200px] overflow-y-scroll">
          {items.map((item) => (
            <li key={item.value}>
              <button
                className={`w-full capitalize not-italic font-normal border border-[#2C2C2C] text-base leading-6 text-[#767676] text-left p-[10px] pl-[19px] ${selectedItem?.value === item.value
                  ? 'bg-black '
                  : 'bg-black hover:bg-gray-100'
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
export function CustomMultiselect({ items, optionalFunction, defaultSelect, isclear }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [defaultassigned, setdefaultassigned] = useState(false)
  useEffect(() => {
    if (defaultSelect && defaultSelect.length > 0 && !defaultassigned && items.length > 0) {
      console.log('default', defaultSelect);
      handdefalutselected([...defaultSelect])
    }
  }, [defaultSelect])
  useEffect(() => {
    if (isclear == true)

      setSelectedItem([])
  }, [isclear])
  useEffect(() => {
    console.log('default item selected', selectedItem);
  }, [selectedItem])

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const handdefalutselected = (item) => {
    console.log('default item ', item);
    setSelectedItem([...item])
    optionalFunction(true, item)
    setdefaultassigned(true)

  }
  // const handleSelectItem = (item) => {
  //   setSelectedItem(item);
  //   setIsDropdownOpen(false);
  //   // console.log('items', item);
  //   optionalFunction(item)
  // };
  function handleselected(item) {
    console.log('default item selected 2', selectedItem.includes(item));

    if (selectedItem.some((obj) => obj.value === item.value)) {
      setSelectedItem(selectedItem.filter((id) => id.value != item.value))
    }
    else {
      setSelectedItem([...selectedItem, item])
    }
    optionalFunction(false, item)
  }


  return (
    <div className="relative min-w-[201px] h-[50px]">
      <button
        className="w-full py-[8px] pl-[28px] pr-[28px] h-[44px] truncate text-white bg-[#2C2C2C] border border-[#2C2C2C] rounded shadow-sm capitalize outline-none appearance-none not-italic font-normal text-base leading-6 font-Inter inline-flex items-center justify-between"
        onClick={handleToggleDropdown}
      >
        {/* {selectedItem ? selectedItem.label : <span className='text-[#767676] bg-transparent'>
          Select an option
        </span>} */}
        {
          selectedItem.length == 0 && <span className='text-[#767676] bg-transparent'>
            Select an option
          </span>
        }
        {
          selectedItem.length == 1 &&
          selectedItem[0].label
        }
        {
          selectedItem.length > 1 && selectedItem.length != items.length &&
          `${selectedItem.length} Selected`
        }
        {
          selectedItem.length == items.length &&
          `All Selected`
        }
        <Image
          src={'/asset/DownArrow.svg'}
          width={14}
          height={25}
          className="bg-[#2C2C2C]"
        />
      </button>
      {isDropdownOpen && (
        <ul className="brandModal w-full absolute z-10 bg-[#2C2C2C] rounded-md shadow-lg pb-[10px] max-h-[200px] overflow-y-scroll">
          {items.map((item) => (
            <li key={item.value}>
              <button
                className={`min-w-[201px] w-full capitalize not-italic font-normal text-base leading-6 text-[#767676] text-left p-[10px] pl-[19px] ${selectedItem.some((obj) => obj.value === item.value)
                  ? 'bg-[#2C2C2C]  text-primary-base'
                  : 'bg-[#2C2C2C] hover:bg-gray-100 text-[#767676]'
                  }`}
                onClick={() => handleselected(item)}
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
export function CustomMultiselectBlack({ items, optionalFunction, defaultSelect, isclear }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [defaultassigned, setdefaultassigned] = useState(false)
  useEffect(() => {
    if (defaultSelect && defaultSelect.length > 0 && !defaultassigned && items.length > 0) {
      console.log('default', defaultSelect);
      handdefalutselected([...defaultSelect])
    }
  }, [defaultSelect])
  useEffect(() => {
    if (isclear == true)

      setSelectedItem([])
  }, [isclear])
  useEffect(() => {
    console.log('default item selected', selectedItem);
  }, [selectedItem])

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const handdefalutselected = (item) => {
    console.log('default item ', item);
    setSelectedItem([...item])
    optionalFunction(true, item)
    setdefaultassigned(true)

  }
  // const handleSelectItem = (item) => {
  //   setSelectedItem(item);
  //   setIsDropdownOpen(false);
  //   // console.log('items', item);
  //   optionalFunction(item)
  // };
  function handleselected(item) {
    console.log('default item selected 2', selectedItem.includes(item));

    if (selectedItem.some((obj) => obj.value === item.value)) {
      setSelectedItem(selectedItem.filter((id) => id.value != item.value))
    }
    else {
      setSelectedItem([...selectedItem, item])
    }
    optionalFunction(false, item)
  }


  return (
    <div className="relative min-w-[201px] h-[50px]">
      <button
        className="w-full py-[8px] pl-[28px] pr-[28px] h-[44px] rounded-[10px] truncate text-white bg-transparent border border-[#2C2C2C] shadow-sm capitalize outline-none appearance-none not-italic font-normal text-base leading-6 font-Inter inline-flex items-center justify-between"
        onClick={handleToggleDropdown}
      >
        {/* {selectedItem ? selectedItem.label : <span className='text-[#767676] bg-transparent'>
          Select an option
        </span>} */}
        {
          selectedItem.length == 0 && <span className='text-[#767676] bg-transparent'>
            Select an option
          </span>
        }
        {
          selectedItem.length == 1 &&
          selectedItem[0].label
        }
        {
          selectedItem.length > 1 && selectedItem.length != items.length &&
          `${selectedItem.length} Selected`
        }
        {
          selectedItem.length == items.length &&
          `All Selected`
        }
        <Image
          src={'/asset/DownArrow.svg'}
          width={14}
          height={25}
          className="bg-transparent"
        />
      </button>
      {isDropdownOpen && (
        <ul className="brandModal w-full absolute z-10 bg-black border border-[#2C2C2C] rounded-md shadow-lg pb-[10px] max-h-[200px] overflow-y-scroll">
          {items.map((item) => (
            <li key={item.value}>
              <button
                className={`min-w-[201px] w-full capitalize not-italic font-normal text-base leading-6 text-[#767676] text-left p-[10px] pl-[19px] ${selectedItem.some((obj) => obj.value === item.value)
                  ? 'bg-black  text-primary-base'
                  : 'bg-black hover:bg-gray-100 text-[#767676]'
                  }`}
                onClick={() => handleselected(item)}
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