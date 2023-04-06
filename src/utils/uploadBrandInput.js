import Image from "next/image";
import React, { useState } from "react";
import { _INITIAL, _PASS } from "./Constants";

function UploadBrandLogoInput({
    placeholder,
    label,
    value,
    name,
    onChangeHandler,
    type,
    errorResponnse,
}) {
    const [isfocused, setisFocused] = useState(false);
    const [image, setImage] = useState({ preview: "", raw: "" });
    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
            console.log('uplods');
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
        <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
            <h5
                className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${errorResponnse == _INITIAL
                    ? isfocused == false
                        ? "text-[#959595]"
                        : "text-white"
                    : errorResponnse == _PASS
                        ? "text-[#3FD79C]"
                        : "text-[#EB4949]"
                    }`}
            >
                {label}
            </h5>
            <div className="w-full">
                <div className="w-full">
                    {image.preview ? (<>
                        <div className={`img-container relative mr-[31px]`}>
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
                            <div className="rounded-[8px] border border-[#787878] flex items-end cursor-pointer justify-center h-[116px] w-full">
                                <h5 className="not-italic font-normal text-sm text-[#959595] bg-transparent mb-[20px]">Upload Category Image</h5>
                            </div>
                        </label>
                    )}
                    <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                    <br />
                    {/* <button onClick={handleUpload}>Upload</button> */}
                </div>
            </div>

            {/* <input
                className={`box-border mt-[4px] py-[8px] pr-[13px] pl-[16px] rounded-[9px] h-[50px] min-w-[328px] sm:min-w-[302px] border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px]  placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none ${errorResponnse == _INITIAL
                    ? "focus:border-white  focus:ring-offset-white focus:ring-1 "
                    : errorResponnse == _PASS
                        ? "border-[#3FD79C] ring-1 ring-[#3FD79C]"
                        : "border-[#EB4949] ring-1 ring-[#EB4949]"
                    } block w-full  appearance-none`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChangeHandler}
                type={type}
                onFocus={(e) => {
                    setisFocused(true);
                }}
                onBlur={(e) => {
                    setisFocused(false);
                }}
            /> */}
        </div>
    );
}

export default UploadBrandLogoInput;
