import mockData from "../mock/MenuOptions.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { MenuIcon } from "./MenuIcons";

function SideBar({ category, subcategory, menuOptions, setCollapse, Collapse }) {
  const router = useRouter();

  return (
    <>

      <div className="sidebar-container w-full h-full hidescrollbar overflow-y-auto mr-[10px]">
        {Collapse &&
          <div className={`w-full h-[24px] cursor-pointer flex justify-center py-[12px]`} onClick={() => setCollapse(!Collapse)} >
            <svg class="gb_h" focusable="false" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
            </svg>
          </div>
          // <div className={`w-full h-[24px] cursor-pointer flex justify-center py-[12px]`} onClick={() => setCollapse(!Collapse)} >
          //   <svg class="gb_h" focusable="false" viewBox="0 0 24 24" fill="white" width="24" height="24">
          //     <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
          //   </svg>
          // </div>
        }
        {!Collapse && <>
          {menuOptions?.map((option, ik) => {
            return (
              <>
                <div className="flex items-center justify-between py-[12px]" key={ik}>
                  <div className="flex items-center">
                    {MenuIcon(option.name, option.id === category)}

                    <Link
                      href={`/${option.id}/`}
                      className={`${option.id == category ? "text-primary-base" : "text-[#959595]"
                        } text-[18px] leading-6 font-semibold `}
                    >
                      {option.name}
                    </Link>
                  </div>
                  {
                    ik == 0 &&
                    <div className={`h-[24px] w-[24px] cursor-pointer flex justify-center items-center border border-primary-base rounded-full`} onClick={() => setCollapse(!Collapse)} >
                      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.70964 6.0965L7.45313 10.84L6.09784 12.1953L-0.00100178 6.0965L6.09784 -0.00223744L7.45313 1.35304L2.70964 6.0965Z" className="fill-primary-base" />
                      </svg>

                    </div>
                  }
                </div>
                <div className="ml-[6px]">
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
      </div>
    </>
  );
}

export default SideBar;
