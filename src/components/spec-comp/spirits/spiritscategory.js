import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getCategoryList, getCategoryListByType, getProduct } from "@/store/slices/product";
import Breadcrumb from "@/components/Breadcrumb";
import useNavDetails from "@/Hooks/useNavDetails";
import Link from "next/link";
import { enUrl } from "@/utils/encoderfunc";
import Search from "@/utils/Search";
import { OrangeButtons } from "@/utils/Buttons";

function SpiritsCategory() {
    const isTablet = useMediaQuery("(max-width: 786px)");
    const dispatch = useDispatch();
    const { categoryList } = useSelector((state) => state.product);

    useEffect(() => {
        // dispatch(getCategoryListByType("spirit"))
        dispatch(getCategoryList("spirit"));
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

                    {!isTablet && <Search search={searchTerm} setSearch={(e) => {
                        setSearch(e);
                        //  filterData(e) 
                    }} />}

                </div>
                <div className="heading-container lg:mb-4  mb-3 flex justify-between">
                    <h2 className="text-white text-[24px] leading-9 font-bold ">
                        {'Spirits (Category)'}
                    </h2>
                    <Link href={`/specs/spirit/brands`} >
                        <OrangeButtons label="Brands" noPadding={true} />
                    </Link>
                </div>

                {isTablet && <Search search={searchTerm} setSearch={(e) => {
                    setSearch(e);
                    //  filterData(e) 
                }} />}

                <div className="cards-container grid lg:grid-cols-2 grid-cols-1  gap-x-[73px] gap-y-[12px] mt-4">
                    {finaldata?.map((card, inx) => {
                        return (
                            <div className=" col-span-1 ">
                                <Link href={`specs/spirit/${enUrl(card.drink_category_name)}?id=${card.drink_category_id}`}>
                                    <RectangularCard
                                        title={card.drink_category_name}
                                        // image={'/asset/vodka.svg'}
                                        image={card.image}
                                        circularImg={true}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default SpiritsCategory;
