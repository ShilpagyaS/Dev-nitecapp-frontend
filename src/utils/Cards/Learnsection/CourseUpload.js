import useMediaQuery from "@/Hooks/useMediaQuery";
import { AddCircularButton } from "@/utils/CircularButton";
import { handleFileChange } from "@/utils/webpfunction";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function CourseFileUpload({ setimage, defaultImage, isClear, isEdit }) {
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
            // setImage({
            //     preview: URL.createObjectURL(e.target.files[0]),
            //     raw: e.target.files[0]
            // });
            // setimage(e.target.files[0])
            handleFileChange(e, e.target.files[0], setImage, setimage)

        }
    };

    return (
        <div>
            {image.preview ? (<>
                <div className="relative"> 

                    <div className=" w-full relative h-[243px] rounded-md" >

                        <Image
                            className=" w-full rounded-md "
                            src={image.preview}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority

                        />

                    </div>
                    <label htmlFor="upload-button">

                        {isEdit &&
                            <>
                                <div className="editbutton cursor-pointer flex items-center justify-center bg-primary-base p-2 rounded-full w-fit absolute bottom-0 right-1 ">
                                    <svg width="18" height="18" viewBox="0 0 18 18" className="bg-transparent" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.47275 15.4172H17.25V17.2506H0.75V13.3611L9.825 4.28615L13.7135 8.17648L6.47183 15.4172H6.47275ZM11.1202 2.9909L13.0654 1.04573C13.2373 0.873883 13.4704 0.777344 13.7135 0.777344C13.9566 0.777344 14.1897 0.873883 14.3616 1.04573L16.9548 3.63898C17.1267 3.81088 17.2232 4.044 17.2232 4.28706C17.2232 4.53013 17.1267 4.76325 16.9548 4.93515L15.0097 6.8794L11.1212 2.9909H11.1202Z" fill="white" />
                                    </svg>



                                </div>


                            </>
                        }
                    </label>
                </div>
            </>
            ) : (
                <label htmlFor="upload-button">
                    <div className="bg-black rounded-[8px] border border-[#787878] flex items-center cursor-pointer justify-center h-[191px] w-full mr-[31px]">
                        <div className="flex flex-col bg-transparent justify-center items-center">

                            <Image
                                src={'/asset/AddButtonVector.svg'}
                                // src={'/asset/DeleteVector.svg'}
                                width={20}
                                height={20}
                                className="bg-transparent"
                                
                            />

                            <h5 className="not-italic font-normal text-base leading-6 text-[#959595] font-Inter bg-transparent mt-[20px]">Upload Image</h5>
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