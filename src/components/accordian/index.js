import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import menuOptions from "../mock/MenuOptions.json";
import Image from "next/image";
import { MenuIcon } from "../SIdebar/MenuIcons";
import Link from "next/link";

export default function Accordian({ category, subcategory }) {
  const options = menuOptions.menuOptions;
  const [isActiveAccordian, setIsActiveAccordian] = useState(false);

  const handleSelectAccordian = (id , subOptions) => {
    if(id === category && subOptions ){
      setIsActiveAccordian(id);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md text-white p-2">
        {options.map((option, i) => {
          return (
            <>
              <Disclosure key={option.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      onClick={() => handleSelectAccordian(option.id , option.subOptions)}
                      className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-semibold focus:outline-none focus:text-[#F19B6C]"
                    >
                      <Link
                        href={`/${option.id}/`}
                        className={`${
                          option.id == category
                            ? "text-[#F19B6C]"
                            : "text-[#959595]"
                        } text-[18px] leading-6 font-semibold `}
                      >
                        <span className="flex items-baseline">
                          {" "}
                          {MenuIcon(option.name, isActiveAccordian)}
                          {option.name}
                        </span>
                      </Link>
                      {option.subOptions.length ? (
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5`}
                        />
                      ) : null}
                    </Disclosure.Button>
                    {option.subOptions.length ? (
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white  transition duration-500">
                        {option.subOptions.map((subOption, i) => {
                          return (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-[7px] text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ">
                                <span className="flex items-center relative ">
                                  <Link
                                    href={`/${option.id}/${subOption.id}`}
                                    className={`${
                                      subOption.id == subcategory
                                        ? "text-[#F19B6C]"
                                        : "text-[#959595]"
                                    } text-[16px] leading-none ml-2`}
                                  >
                                    <svg
                                      width="18"
                                      height="35"
                                      className=" absolute -top-6 -left-2"
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
                                    <span className="ml-3 font-normal">
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
    </div>
  );
}
