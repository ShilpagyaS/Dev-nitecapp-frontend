import mockData from "../MenuOptions.json";

function Menu() {
  const menuOptions = mockData.menuOptions;
  console.log("mockData", mockData);
  return (
    <>
      <div>
        {menuOptions.map((option) => {
          return (
            <>
              <p className="text-white">{option.name}</p>
              <div className=" ml-4">
                {option.subOptions.map((subOption) => {
                  return (
                    <>
                      <p className="text-white">{subOption}</p>
                    </>
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

export default Menu;
