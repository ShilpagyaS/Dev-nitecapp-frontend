import useMediaQuery from "@/Hooks/useMediaQuery";
import { AddCircularButton } from "@/utils/CircularButton";
import Image from "next/image";
import React, { useState } from "react";

export default function CocktailFileUpdate() {
    const [image, setImage] = useState({ preview: "", raw: "" });
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");
    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };

    return (
        <div>
            {image.preview ? (<>
                <div className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${isMobile ? "block m-auto" : "mr-[31px] "
                    }`}>
                    {/* <Image src="/asset/coctail1.png" className="w-full" fill /> */}

                    <Image src={image.preview} className="w-full" fill />

                </div>
                <label htmlFor="upload-button">

                    <div className="editbutton flex items-center justify-center text-[#929292] ">
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
                    </div>
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
                                className="bg-[#171717]"
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
            {/* <button onClick={handleUpload}>Upload</button> */}
        </div>
    );
}