const { useSelector } = require("react-redux");

const Loader=()=>{
    const { loader } = useSelector((state) => state.ui);
    return <div className={` ${!loader?'hidden':''} h-screen w-screen flex justify-center items-center bg-black opacity-80 fixed top-0 left-0 z-[10000]`}>
<div className="w-[40px] h-[40px] rounded-full border-4 border-white border-r-orange-500 animate-spin">
      </div>
    </div>
}

export default Loader