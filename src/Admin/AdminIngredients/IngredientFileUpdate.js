import useMediaQuery from "@/Hooks/useMediaQuery";
import { AddCircularButton } from "@/utils/CircularButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function IngredientFileUpload({ setimage, defaultImage, isClear, isEdit }) {
    const [image, setImage] = useState({ preview: "", raw: "" });
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");
    const dispatch = useDispatch()


    useEffect(() => {
        if (defaultImage) {
            setImage({
                preview: defaultImage,
                raw: null
            })
        }
    }, [defaultImage])
    useEffect(() => {
        if (isClear) {
            setImage({
                preview: "",
                raw: ""
            })
        }
    }, [isClear])


    const handleChange = e => {
        if (e.target.files.length) {
            console.log(e.target.files)
            console.log(URL.createObjectURL(e.target.files[0]))
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
            setimage(e.target.files[0])
        }
    };

    return (
        <div>
            {image.preview ? (<>
                <div className="img-container relative w-[136px] h-[154px] mr-[31px]">

                    {/* <Image src="/asset/coctail1.png" className="w-full" fill /> */}

                    <Image src={image.preview} fill className="rounded-lg" />

                </div>
                <label htmlFor="upload-button">

                    {isEdit && <div className="editbutton flex items-center justify-center text-[#929292] ">
                        <Image
                            src={'/asset/EditVector.svg'}
                            // src={'/asset/DeleteVector.svg'}
                            width={20}
                            height={20}
                            className=""
                        />
                        <div className="ml-[12px]" >
                            Edit Image
                        </div>

                    </div>}
                </label>
            </>
            ) : (
                <label htmlFor="upload-button">
                    <div className="bg-[#1D1D1D] rounded-[8px] border border-[#787878] flex items-center cursor-pointer justify-center h-[191px] w-[132px] mr-[31px]">
                        <div className="flex flex-col bg-transparent justify-center items-center">

                            <Image
                                src={'/asset/AddButtonVector.svg'}
                                // src={'/asset/DeleteVector.svg'}
                                width={20}
                                height={20}
                                className="bg-[#171717] "
                            />

                            <h5 className="not-italic font-normal text-base leading-6 text-gray-600 font-Inter bg-transparent mt-[20px]">Upload Image</h5>
                        </div>
                    </div>


                </label>
            )}
            <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
            />
            <br />
        </div>
    );
}