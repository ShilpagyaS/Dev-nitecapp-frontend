import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import menuOptions from "../mock/MenuOptions.json";
import Image from "next/image";

function menuIcon(menuOption) {
  const menuObj = {
    Dashboard: (
      <Image
        src="/asset/dashboard-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Learn: (
      <Image
        src="/asset/learn-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Specs: (
      <Image
        src="/asset/specs-icon.svg"
        width={15}
        height={15}
        className="mr-3"
        priority
      />
    ),
    Brand: (
      <Image
        src="/asset/brand-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Sales: (
      <Image
        src="/asset/sales-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Schedule: (
      <Image
        src="/asset/schedule-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Saved: (
      <Image
        src="/asset/heart-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
  };

  return <>{menuObj[menuOption]}</>;
}

export default function Accordian() {
  const options = menuOptions.menuOptions;
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md text-white p-2">
        {options.map((option, i) => {
          return (
            <>
              <Disclosure key={option.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-semibold focus:outline-none focus:text-[#F19B6C]">
                      <span className="flex">
                        {" "}
                        {menuIcon(option.name)}
                        {option.name}
                      </span>
                      {option.subOptions.length ? (
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5`}
                        />
                      ) : null}
                    </Disclosure.Button>
                    {option.subOptions.length ? (
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                        {option.subOptions.map((subOption, i) => {
                          return (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className="flex items-center">
                                  <svg
                                    width="18"
                                    height="33"
                                    className="-mt-[14px]"
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
                                  {subOption.name}
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
