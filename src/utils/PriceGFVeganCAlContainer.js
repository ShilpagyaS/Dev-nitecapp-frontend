import Image from 'next/image'
import React from 'react'

function PriceGFVeganCAlContainer({ productDetails }) {
    return (
        <ul className="sm:divide-x sm:divide-[#959595] sm:flex sm:flex-row flex-col mb-2">
            {productDetails?.price &&
                <li className="min-w-[100px]">
                    <div className="text-white w-full text-center pr-[10px]">
                        {`Price: $ ${productDetails.price}`}
                    </div>
                </li>
            }
            {productDetails?.gluten_free &&

                <li className="min-w-[100px]">
                    <div className="text-white w-full text-center flex items-center justify-center">
                        GF
                        <div className='relative w-[20px] h-[20px] ml-[5px]'>
                            <Image src={'/asset/gluten-free.png'} fill className="object-contain" />
                        </div>
                    </div>
                </li>
            }
            {productDetails?.vegan &&

                <li className="min-w-[100px]">
                    <div className="text-white w-full text-center flex items-center justify-center">
                        V
                        <div className='relative w-[20px] h-[20px] ml-[5px]'>
                            <Image src={'/asset/vegan.png'} fill className="object-contain" />
                        </div>
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
        </ul>)
}

export default PriceGFVeganCAlContainer