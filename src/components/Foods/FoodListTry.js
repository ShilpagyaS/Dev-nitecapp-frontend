import useFilteredData from '@/Hooks/useFilteredData';
import useMediaQuery from '@/Hooks/useMediaQuery';
import { emptyProductList, getcategoriesbytype, getProduct } from '@/store/slices/product';
import { enUrl } from '@/utils/encoderfunc';
import Search from '@/utils/Search';
import { FoodCard } from '@/utils/SpecCards';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { OrangeButtons } from '@/utils/Buttons';

function FoodListTry() {
  const isTablet = useMediaQuery("(max-width: 786px)");

  const dispatch = useDispatch();
  const [searchTerm, setSearch] = useState("")
  const { productList } = useSelector((state) => state.product);
  const [finaldata, setfinaldata] = useState([])
  const [categoryArray, setCategory] = useState([])
  const [maindata, setmaindata] = useState([])
  const [selectedcategory, setSelectedcategory] = useState('');


  useEffect(() => {
    dispatch(getProduct("food"));
    dispatch(getcategoriesbytype('food')).then((res) => { console.log(res); setCategory(res) })
    return () => {
      dispatch(emptyProductList());
    };
  }, []);

  useEffect(() => {
    if (productList) {
      setmaindata(productList)
    }
  }, [productList]);
  useEffect(() => {
    let temp = []
    if (searchTerm == "") {
      temp = [...maindata]
    } else {
      const info = maindata.filter((i) => i.food_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      temp = [...info]
    }
    setfinaldata([...temp])
  }, [maindata, searchTerm]);
  const filteredData = useFilteredData(finaldata, true, "food", "category_name")
  function onCatClick(catVal) {
    if (selectedcategory == catVal) {
      setSelectedcategory('')
      setmaindata(productList)


    }
    else {
      if (catVal == 'all') {
        setSelectedcategory(catVal)
        setmaindata(productList)
      }
      else {

        setSelectedcategory(catVal)
        let dummy = productList.filter(e => e.category_id == catVal)
        setmaindata(dummy)
      }
    }

  }


  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 flex-wrap">
          <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
            Food
          </h1>
          {!isTablet && <Search search={searchTerm} setSearch={(e) => {
            setSearch(e);
            //  filterData(e) 
          }} />}

        </div>
        {isTablet && (
          <Search search={searchTerm} setSearch={(e) => {
            setSearch(e);
            //  filterData(e) 
          }} />
        )}
        <div className='alphabetscroll overflow-x-auto flex items-center mb-[26px] mt-[15px]  pb-[15px]' >
          {[{ value: 'all', label: 'All' }, ...categoryArray].map((e) =>
            <div className={`not-italic flex-shrink-0 font-medium cursor-pointer text-base font-Inter ${selectedcategory == e.value ? 'border text-primary-base border-primary-base' : 'text-white border border-white'} rounded-full px-2 py-[1px] capitalize mr-[12px]`} onClick={() => { onCatClick(e.value) }}>{e.label}</div>
          )}
        </div>
        {/* <div className='relative h-[50px] w-full'>
          <div className='absolute right-0'>
            <Link href={`/food/ingredients`}>
              <OrangeButtons label="Ingredients" noPadding={true} />
            </Link>
          </div>
        </div> */}
        <div className="bottle-cards-container mb-8">
          {filteredData.map((section, i) => {

            return (
              <div className="mb-8">
                <p className="text-white text-[20px] font-semibold mb-5 capitalize">
                  {section.type || " "}
                </p>
                <div className="cards-container grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-[10px]  ">
                  {section.data.map((card, i) => {
                    return (
                      <div className=" ">
                        <Link href={`/food/${enUrl(card.food_name)}?id=${card.food_id}`}>
                          <FoodCard image={card.image} title={card.food_name} no={i + 1} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default FoodListTry