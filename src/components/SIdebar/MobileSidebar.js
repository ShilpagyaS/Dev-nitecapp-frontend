import Image from "next/image";
import mockData from "../mock/MenuOptions.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillAppstore } from "react-icons/ai";
import { ImGlass2 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCalendarRangeFill } from "react-icons/bs";

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
        src="/asset/calander-icon.svg"
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

function MobileSidebar({ category, subcategory }) {
  const router = useRouter();
  const menuOptions = mockData.menuOptions;

  return (
    <>
      <div className="MobileSidebar-container w-auto h-full">
        {menuOptions.map((option, ik) => {
          return (
            <>
              <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="flush-headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Accordion Item #1
                    <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="!visible border-0"
                  data-te-collapse-item
                  data-te-collapse-show
                  aria-labelledby="flush-headingOne"
                  data-te-parent="#accordionFlushExample"
                >
                  <div className="py-4 px-5">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the
                    <code>.accordion-flush</code> class. This is the first
                    item's accordion body.
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MobileSidebar;
