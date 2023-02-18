import mockData from "../mock/MenuOptions.json";

function SideBar() {
  const menuOptions = mockData.menuOptions;
  console.log("mockData", mockData);
  return (
    <>
      <div className="sidebar-container w-auto h-full">
        {menuOptions.map((option) => {
          return (
            <>
              <div className="w-[139px] py-[8px]">
                <p className="text-[#959595] text-[16px] leading-6 font-semibold">
                  {option.name}
                </p>
              </div>
              <div className="ml-4">
                {option.subOptions.map((subOption, i) => {
                  return (
                    <div className="w-[139px] py-[8px]" key={i}>
                      <p className="text-[#959595] text-[16px] leading-6 font-semibold">
                        {subOption}
                      </p>
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
