import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { emptyProductList, getCategoryList, getCategoryListByType, getProduct } from "@/store/slices/product";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { enUrl } from "@/utils/encoderfunc";
import Search from "@/utils/Search";
import { OrangeButtons } from "@/utils/Buttons";


function WineCategory() {
    const dispatch = useDispatch();
    const isTablet = useMediaQuery("(max-width: 786px)");
    const { categoryList } = useSelector((state) => state.product);


    useEffect(() => {
        // dispatch(getCategoryList("wine"));
        dispatch(getCategoryListByType("wine"))

        return () => {
            dispatch(emptyProductList());
        };
    }, []);

    const [finaldata, setfinaldata] = useState([])
    const [searchTerm, setSearch] = useState("")
    useEffect(() => {
        let temp = []
        if (searchTerm == "") {
            temp = [...categoryList]
        } else {
            const info = categoryList.filter((i) => i.drink_category_name?.toLowerCase()?.includes(searchTerm.toLowerCase()))
            temp = [...info]
        }
        setfinaldata([...temp])
    }, [categoryList, searchTerm]);



    return (
        <>
            <div className="coctail-container">
                <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                    <Breadcrumb />
                    {!isTablet && (
                        // <div className="search-container flex items-center bg-[#1D1D1D] md:w-[358px] h-[40px] rounded-[10.9744px] px-[26px]">
                        //     <CiSearch
                        //         color="#929292"
                        //         size="15px"
                        //         className="bg-[#1D1D1D] mr-[26px]"
                        //     />
                        //     <input
                        //         className="text-[#767676] bg-[#1D1D1D] text-[16px] leading-6 h-full"
                        //         type="text"
                        //         placeholder="Search"
                        //     />
                        // </div>
                        <Search search={searchTerm} setSearch={(e) => {
                            setSearch(e);
                            //  filterData(e) 
                        }} />
                    )}
                </div>
                <div className="heading-container lg:mb-4  mb-3 flex justify-between py-4">
                    <h2 className="text-white text-[1.5rem] leading-9 font-semibold ">   {'Wine (Category)'}</h2>
                    <Link href={`/specs/wine/brands`} >
                        <OrangeButtons label="Brands" noPadding={true} />
                    </Link>
                </div>
                {isTablet && (
                    <Search search={searchTerm} setSearch={(e) => {
                        setSearch(e);
                        //  filterData(e) 
                    }} />
                )}
                <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] mt-4">
                    {finaldata?.map((card, inx) => {
                        return (
                            <>
                                {
                                    card.showProduct &&

                                    <div className=" col-span-1 " key={inx}>
                                        <Link href={`specs/wine/${enUrl(card.drink_category_name)}?id=${card.category_id}`}>
                                            <RectangularCard
                                                title={card.drink_category_name}
                                                // image={'/asset/vodka.svg'}
                                                image={card.image}
                                                circularImg={true}
                                            />
                                        </Link>
                                    </div>
                                }
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default WineCategory;
