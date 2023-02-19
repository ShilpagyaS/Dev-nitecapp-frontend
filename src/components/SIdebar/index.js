import mockData from "../mock/MenuOptions.json";
import { useRouter } from "next/router";
import Link from "next/link";
function SideBar({ category, subcategory }) {
  const router = useRouter();

  const menuOptions = mockData.menuOptions;
  console.log("mockData", mockData);
  return (
    <>
      <div className="sidebar-container w-auto h-full">
        {menuOptions.map((option) => {
          return (
            <>
              <div className="w-[139px] py-[8px]">
                <Link
                  href={`/${option.name.toLowerCase()}/`}
                  className={`${
                    option.name.toLowerCase() == category
                      ? "text-orange-500"
                      : "text-[#959595]"
                  } text-[16px] leading-6 font-semibold`}
                >
                  {option.name}
                </Link>
              </div>
              <div className="ml-4">
                {option.subOptions.map((subOption, i) => {
                  return (
                    <div className="w-[139px] py-[8px]" key={i}>
                      <Link
                        href={`/${option.name.toLowerCase()}/${subOption
                          .toLowerCase()
                          .replace("/", "-")}`}
                        className={`${
                          subOption.toLowerCase().replace("/", "-") ==
                          subcategory
                            ? "text-orange-500"
                            : "text-[#959595]"
                        } text-[16px] leading-6 font-semibold`}
                      >
                        {subOption}
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
