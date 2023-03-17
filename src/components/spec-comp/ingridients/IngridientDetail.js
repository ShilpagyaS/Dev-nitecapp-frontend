import useMediaQuery from "@/Hooks/useMediaQuery";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Coctails from "../coctails";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/store/slices/product";
import useNavDetails from "@/Hooks/useNavDetails";

const IngridientDetail = () => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const { productDetails } = useSelector((state) => state.product);

  console.log("=================product details in ingridient===========", productDetails)

  const { productId } = useNavDetails();

  console.log("productId================", productId)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById("cocktail_ingredients", productId));
  }, []);

  return (
    <div className="ingridient-detail-container">
      <div className="text-container ">
        <p className="text-white text-[14px] mb-6">
          <span className="text-[#CCCCCC]">Specs / Coctail/ Ingredients /</span>{" "}
          London Dry Green
        </p>
      </div>
      <div className="img-title-container md:flex md:items-center lg:flex lg:items-center mb-8">
        <div className="title-container text-white w-[294px] mr-8">
          <h3 className="title text-[24px] font-bold mb-6">London Dry Gin</h3>
          <p
            className={`sub-title text-[16px] leading-6 ${
              isMobile && "text-center"
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
      <Coctails headerHidden={true} />
    </div>
  );
};

export default IngridientDetail;
