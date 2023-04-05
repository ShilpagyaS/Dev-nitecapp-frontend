import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const HeartLogo=({filled,setfilled})=>{
        return  !filled?<AiOutlineHeart size="25px" color="#fff" onClick={()=>setfilled(!filled)}/>
        :<AiFillHeart size="25px" color="#fff" fill="#fff"  onClick={()=>setfilled(!filled)}/>
}

export default HeartLogo