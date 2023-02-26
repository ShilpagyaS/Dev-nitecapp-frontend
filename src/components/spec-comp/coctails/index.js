import { CiSearch } from "react-icons/ci";

function Coctails() {
  return (
    <>
      <div className="coctail-container">
        <div className="sub-heading-container flex justify-between items-center">
          <div></div>
          <h3 className="text-white text-[20px] font-semibold">Coctail</h3>
          <div className="search-container flex items-center bg-[#1D1D1D] md:w-[358px] h-[40px] rounded-[10.9744px] px-[26px]">
            <CiSearch
              color="#929292"
              size="15px"
              className="bg-[#1D1D1D] mr-[26px]"
            />
            <input
              className="text-[#767676] bg-[#1D1D1D] text-[16px] leading-6 h-full"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Coctails;
