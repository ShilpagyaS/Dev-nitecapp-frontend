import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CustomButton } from "@/utils/Buttons";
import { logout } from "@/store/slices/Auth";
import { useDispatch } from "react-redux";
import { IoNotifications } from "react-icons/io5";

export default function ProfileDropdown(props) {
  const dispatch = useDispatch()
  return (
    <div className=" w-fit h-fit">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {/* Options */}
            <ChevronDownIcon
              className=" h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-2 border border-[#959595] rounded-lg">
              <Menu.Item onClick={() => { ; dispatch(logout()) }}>

                <CustomButton

                  label="Logout"
                  background="#CBAF69"
                />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
export function NotificationDropdown(props) {
  const dispatch = useDispatch()
  return (
    <div className=" w-fit h-fit">
      <Menu as="div" className="relative inline-block">
        <div className="flex justify-center items-center">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {/* Options */}
            <IoNotifications
              color="#fff"
              className="lg:text-[25px] text-[29px] cursor-pointer"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-2 border border-[#959595] rounded-lg">
              <Menu.Item onClick={() => { }}>
                <h3 className='italic font-normal text-[14px] leading-6 text-primary-base font-Inter mb-[7px]'>
                  {`No Notitfication Present`}
                </h3>

              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
