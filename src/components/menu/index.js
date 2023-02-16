import Nav from "./Nav";

function MenuComp() {
  return (
    <div className="lg:max-w-[1024px] md:max-w-[768px] max-w-[414px]">
      <div className=" w-1/4 ">
        <Nav />
      </div>
      <div className=" w-3/4 "></div>
    </div>
  );
}

export default MenuComp;
