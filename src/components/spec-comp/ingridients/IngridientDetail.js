import { useEffect } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Coctails from "../coctails";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/store/slices/product";
import useNavDetails from "@/Hooks/useNavDetails";
import Link from "next/link";
import { RectangularCard } from "@/utils/SpecCards";
import Breadcrumb from "@/components/Breadcrumb";
import { emptyIngredientsList, getIngredientsDetails } from "@/store/slices/ingredients";

const IngridientDetail = ({ productType, productId }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const { ingredientDetails } = useSelector((state) => state.ingredients);


  console.log(ingredientDetails)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsDetails(productType, productId));
    return () => dispatch(emptyIngredientsList())
  }, []);

  return (
    <div className="ingridient-detail-container">
      <div className="text-container ">
        <Breadcrumb />
      </div>
      <div className="img-title-container md:flex md:items-center lg:flex lg:items-center mb-8">
        <div className="title-container text-white w-[294px] mr-8">
          <h3 className="title text-[24px] font-bold mb-6">{ingredientDetails.ingredient_type_name}</h3>
          <p
            className={`sub-title text-[16px] leading-6 ${isMobile && "text-center"
              }`}
          >
            Spirit made through the distillation mainly of granis or potatos
          </p>
        </div>
        <div className="img-container relative w-[136px] h-[154px]">
          <Image src="/asset/london-dry-green.svg" fill />
        </div>
      </div>
      <div className="description-container text-white mb-8">
        <div className="strength-container flex items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Strength</p>
          <p className="font-medium">45%</p>
        </div>
        <div className="desc-container text-[16px]">
          Usually high-proof(45% ABV), crisp style of gin with prominent flavors
          of juniper and citrus. The London dry style is considered the
          benchmark for all other gin. While it is associated with London, it
          does not need to be made there - only a couple of London dry gins are
          made in the city.
        </div>
      </div>
      <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
        <h2 className="text-white text-[24px] leading-9 font-bold capitalize">
          {productType}
        </h2>

      </div>
      <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
        {[{ cocktail_name: "wola", cocktail_id: 4 }]?.map((card, i) => {
          return (
            <div className=" col-span-1 ">
              <Link href={`/specs/${productType}?id=${card?.[`${productType}_id`]}`}>
                <RectangularCard
                  title={card.cocktail_name}
                  image={"/asset/coctail1.png"}
                  subtitle="Medium(12%)"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IngridientDetail;
