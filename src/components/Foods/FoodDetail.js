import { useEffect, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { CustomButton, OrangeButtons } from "@/utils/Buttons";
import { RectangularCard } from "@/utils/SpecCards";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useNavDetails from "@/Hooks/useNavDetails";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getProductById } from "@/store/slices/product";
import HeartLogo from "@/components/CustomHeart";
import Breadcrumb from "@/components/Breadcrumb";
import Notes from "../spec-comp/notesComp/notes";
import { enUrl } from "@/utils/encoderfunc";
import Link from "next/link";
import VideoModal from "@/components/modal/videoModal";
import ReactPlayer from "react-player";
import { whatsthestrength } from "@/utils/abvfinder";
import PriceGFVeganCAlContainer from "@/utils/PriceGFVeganCAlContainer";
import IngredientSwitch from "@/utils/IngredientSwitch";
import Customswitch from "@/utils/customswitch";

const FoodDetail = ({ id }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const isTablet = useMediaQuery("(max-width: 786px)");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRecipie, setRecipie] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductById('food', id))
    return () => {
      dispatch(emptyProductList())
    }
  }, [])
  const { productDetails } = useSelector((state) => state.product)

  const handleEditModalOpen = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(true);
  };

  const handleAddModalOpen = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };
  const { category, subcategory, productId } = useNavDetails()
  const [filledHeart, setfilledHeart] = useState(false)

  const [openvideo, setopenvideo] = useState(false)
  return (
    <div className="detail-page-container">

      <div className="text-container ">
        <Breadcrumb />
      </div>
      <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
        <div
          className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${isMobile ? "block m-auto" : "mr-[31px]"
            }`}
        >
          {/* <Image src="/asset/coctail1.png" fill /> */}
          <Image src={productDetails?.image || '/asset/nodrinkinverted.webp'} fill className="object-cover" priority />
        </div>
        <div className="desc-container inline-block w-full  text-white">
          <div
            className={`heading-container mb-8 flex justify-between items-center ${isMobile && "text-center"
              }`}
          >
            <div
              className={`w-full flex items-center ${isMobile && "justify-around"
                }`}
            >
              <h3 className="title text-[24px] font-bold mr-[16px]">
                {productDetails?.food_name}
              </h3>
              {/* <p className="status-text text-[18px]">{`${whatsthestrength(productDetails?.abv)} (${productDetails?.abv}%)`}</p> */}
            </div>
            {/* <HeartLogo filled={filledHeart} setfilled={setfilledHeart}/> */}

            {/* <div className="w-full flex justify-end">
              <div className="flex items-center justify-center">

                <p className={`not-italic ${isRecipie ? '' : 'text-primary-base '} font-semibold text-base font-Inter`}>Information</p>
                <div className="flex justify-center items-center mx-[10px]">

                  <IngredientSwitch showHideStatus={isRecipie} onChangeHandler={setRecipie} />
                </div>
                <p className={`not-italic ${isRecipie ? 'text-primary-base ' : ''} font-semibold text-base font-Inter`}>Recipe</p>
              </div>
            </div> */}
            <Customswitch first={isRecipie} setfirst={setRecipie} />

          </div>
          {/* <ul className="sm:divide-x sm:divide-[#959595] sm:flex sm:flex-row flex-col mb-5">
            {productDetails?.price &&
              <li className="min-w-[100px]">
                <div className="text-white w-full text-center pr-[10px]">
                  {`Price: $ ${productDetails.price}`}
                </div>
              </li>
            }
            {productDetails?.gluten_free &&

              <li className="min-w-[100px]">
                <div className="text-white w-full text-center">
                  GF
                </div>
              </li>
            }
            {productDetails?.vegan &&

              <li className="min-w-[100px]">
                <div className="text-white w-full text-center">
                  V
                </div>
              </li>
            }
            {productDetails?.calories &&

              <li className="min-w-[100px]">
                <div className="text-white w-full text-center ">
                  {`${productDetails?.calories} cal`}
                </div>
              </li>
            }
          </ul> */}
          <PriceGFVeganCAlContainer productDetails={productDetails} />

          <p
            className={`description text-[16px] leading-6 ${isMobile && "text-center"
              }`}
          >
            {productDetails?.description}
          </p>
        </div>
      </div>
      {isRecipie && <>
        {(productDetails?.ingredients?.values?.length > 0 && productDetails?.showIngredients) && <div className="ingridients-container mb-[16px] ">
          <div className="sub-heading-container  mb-[21px]">
            <h4 className="text-white text-[20px] leading-[32px] font-semibold mb-[14px] lg:mb-0">
              Ingredients
            </h4>
          </div>
          <div className="ingridient-details-container">
            {productDetails?.ingredients.values.map((ingridient, i) => {
              return (
                <>
                  <div className="choice-container bg-[#2C2C2C] w-full  py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px]">
                    <p className=" bg-transparent ">{ingridient?.name}</p>
                    <p className=" bg-transparent ">{`${ingridient?.quantity} ${ingridient?.measure_name}`}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>}
        {(productDetails?.presentations?.values?.length > 0 && productDetails?.showPresentations) &&
          <div className="presentation-container  mb-[16px]">
            <div className="sub-heading-container mb-[21px]">
              <h4 className="text-white text-[20px] leading-[32px] font-semibold  mb-[14px] lg:mb-0">
                Presentation
              </h4>
            </div>
            <div className="presentation-details-container">
              {productDetails?.presentations?.values.map((presentation, i) => {
                return (
                  <>
                    <div className="choice-container bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px]">
                      <p className=" bg-transparent ">{presentation?.step}</p>
                      <p className=" bg-transparent ">
                        {presentation?.detail}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        }
        <VideoModal isModalOpen={openvideo} onClickCancel={() => { setopenvideo(false) }}>

          <div className="relative mt-6 w-full max-w-full h-  justify-center flex">
            <ReactPlayer
              controls

              className="rounded-lg "
              url="https://www.youtube.com/watch?v=jCGMoNCtPx0&feature=youtu.be" />
          </div>


        </VideoModal  >
        {productDetails?.methods?.values?.length > 0 && productDetails?.showMethods &&
          <div className="method-container mb-[32px]">
            <div className="sub-heading-container flex justify-between items-center mb-[21px]">
              <h4 className="text-white text-[20px] leading-[32px] font-semibold">
                Method
              </h4>

              <OrangeButtons label="Video" noPadding={true} onClickHandler={() => setopenvideo(true)} />




            </div>
            <div className="method-details-container">
              {productDetails?.methods?.values?.map((method, i) => {
                return (
                  <>
                    <div className="choice-container bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
                      <p className=" bg-transparent ">
                        <span className="mr-6 bg-transparent">{i + 1}.</span>
                        {method?.name}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        }
      </>}
      <Notes id={id} subcategory={'food'} />
    </div>
  );
};

export default FoodDetail;
