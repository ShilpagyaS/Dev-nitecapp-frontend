import mockData from "../mock/MenuOptions.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { MenuIcon } from "./MenuIcons";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function SideBar({ category, subcategory, menuOptions, setCollapse, Collapse, setFeedback }) {
  const router = useRouter();
  const [opensubmenu, setsubmenu] = useState(null)
  useEffect(() => {
    const activemenu = menuOptions.find((option) => option.id === category)
    if (activemenu)
      setsubmenu(activemenu)
    else setsubmenu(null)
  }, [router.asPath])

  return (
    <>

      <div className="sidebar-container w-full h-full hidescrollbar overflow-y-auto mr-[10px]">
        {Collapse &&
          <div className={`w-full h-[24px] cursor-pointer flex justify-center py-[12px]`} onClick={() => setCollapse(!Collapse)} >
            <svg class="gb_h" focusable="false" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
            </svg>
          </div>

        }
        {!Collapse && <>
          {menuOptions?.map((option, ik) => {
            return (
              <>
                <div className="flex items-center justify-between py-[12px] " key={ik}>
                  <div className="flex items-center w-full justify-between">
                    <div className="flex  justify-center items-center">


                      <Link
                        href={`/${option.id}/`}
                        className={`${option.id == category ? "text-primary-base" : "text-[#959595]"
                          } text-[18px]  font-semibold flex gap-2 `}
                      >
                        {MenuIcon(option.name, option.id === category)} {option.name}
                      </Link>
                    </div>
                    <div className={`${opensubmenu?.id === option.id ? '' : 'rotate-90 '} mr-4 transition-all cursor-pointer`}
                      onClick={() => {
                        if (opensubmenu?.id === option.id) setsubmenu(null)
                        else setsubmenu(option)
                      }}
                    >
                      {option.subOptions?.length > 0 ? <>
                        <ChevronDownIcon
                          className=" h-5 w-5 text-[#959595] "
                          aria-hidden="true"
                        />
                      </> : <>
                      </>}
                    </div>
                    {
                      ik == 0 &&
                      <div className={`h-[26px] w-[26px] cursor-pointer border border-primary-base flex justify-center items-center rounded-full`} onClick={() => setCollapse(!Collapse)} >
                        <svg width="13" height="13" className="fill-primary-base ml-[2px] mt-[-2px]" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.70964 6.0965L7.45313 10.84L6.09784 12.1953L-0.00100178 6.0965L6.09784 -0.00223744L7.45313 1.35304L2.70964 6.0965Z" />
                        </svg>

                      </div>
                    }
                  </div>

                </div>
                <div className={`ml-[6px] ${opensubmenu?.id === option.id ? `h-auto` : `h-0 overflow-hidden`} transition-all duration-500 delay-150 ease-out `}>

                  {option.subOptions?.map((subOption, i) => {

                    return (
                      <div
                        className="w-[139px] mt- flex items-baseline py-[6px] relative"
                        key={i}
                      >
                        <svg
                          width="18"
                          height="30"
                          className=" absolute -top-3 -left-0"
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

                        <Link
                          href={`/${option.id}/${subOption.id}`}
                          className={`${subOption.id == subcategory
                            ? "text-primary-base"
                            : "text-[#959595]"
                            } text-[16px] leading-none ml-5 py-[1px]  `}
                        >
                          {subOption.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}</>}

        <h1 className="text-primary-base cursor-pointer font-semibold w-full ml-[28px]  " onClick={() => { setFeedback() }}> Feedback</h1>
      </div>
    </>
  );
}

export default SideBar;
