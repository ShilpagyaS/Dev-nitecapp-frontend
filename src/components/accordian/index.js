import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import menuOptions from "../mock/MenuOptions.json";
import Image from "next/image";
import { MenuIcon } from "../SIdebar/MenuIcons";
import Link from "next/link";

export default function Accordian({ category, subcategory, handleClose, isFeedbackShow, setFeedback }) {
  const options = menuOptions.menuOptions;

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md text-white p-2">
        {options?.map((option, i) => {
          return (
            <>
              <Disclosure key={option.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-semibold focus:outline-none focus:text-primary-base">
                      <Link
                        href={`/${option.id}/`}
                        onClick={handleClose}
                        className={`${option.id == category
                          ? "text-primary-base"
                          : "text-[#959595]"
                          } text-[18px] leading-6 font-semibold flex justify-center items-center `}
                      >
                        <div className="mr-2"> {MenuIcon(option.name, category === option.id)}</div>
                        <div className="flex items-baseline">
                          {" "}


                          {option.name}
                        </div>
                      </Link>
                      {option.subOptions.length ? (
                        <ChevronUpIcon
                          className={`${open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                        />
                      ) : null}
                    </Disclosure.Button>
                    {option.subOptions.length ? (
                      <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-white  transition duration-500">
                        {option?.subOptions?.map((subOption, i) => {
                          return (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-[7px] text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ">
                                <span className="flex items-center relative ">
                                  <Link
                                    href={`/${option.id}/${subOption.id}`}
                                    onClick={handleClose}
                                    className={`${subOption.id == subcategory
                                      ? "text-primary-base"
                                      : "text-[#959595]"
                                      } text-[16px] leading-none ml-2`}
                                  >
                                    <svg
                                      width="18"
                                      height="30"
                                      className=" absolute -top-5 -left-3"
                                      viewBox="0 0 18 33"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1 0.999996L1 26.3529C1 29.4717 3.52827 32 6.64706 32V32L17 32"
                                        stroke="#3C3C3C"
                                        stroke-linecap="round"
                                      />
                                    </svg>
                                    <span className="ml-2 font-normal">
                                      {subOption.name}
                                    </span>
                                  </Link>
                                </span>
                              </Disclosure.Button>
                            </>
                          );
                        })}
                      </Disclosure.Panel>
                    ) : null}
                  </>
                )}
              </Disclosure>
            </>
          );
        })}
      </div>

      <div className="w-full flex mt-3 justify-center  ">
        {isFeedbackShow && <>
          <h1 className="text-primary-base border rounded-lg border-primary-base py-[3px] px-[5px] cursor-pointer font-Inter not-italic mt-[1 0px] text-center" onClick={() => { setFeedback() }}> Feedback</h1>
          {/* <h1 className="text-primary-base border rounded-lg border-primary-base py-[3px] px-[5px] cursor-pointer font-Inter not-italic ml-[28px] absolute left-2 bottom-5 " onClick={() => { setFeedback() }}> Feedback</h1> */}
        </>
        }
      </div>
    </div>
  );
}
