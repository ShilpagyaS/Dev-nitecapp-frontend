import mockData from "../mock/MenuOptions.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { MenuIcon } from "./MenuIcons";

function SideBar({ category, subcategory }) {
  const router = useRouter();
  const menuOptions = mockData.menuOptions;

  return (
    <>
      <div className="sidebar-container w-auto h-full">
        {menuOptions?.map((option, ik) => {
          return (
            <>
              <div className="flex items-center py-[12px]" key={ik}>
                {MenuIcon(option.name, option.id === category)}
                <Link
                  href={`/${option.id}/`}
                  className={`${option.id == category ? "text-[#F19B6C]" : "text-[#959595]"
                    } text-[18px] leading-6 font-semibold `}
                >
                  {option.name}
                </Link>
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
                          ? "text-[#F19B6C]"
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
        })}
      </div>
    </>
  );
}

export default SideBar;
