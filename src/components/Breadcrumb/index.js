import useNavDetails from "@/Hooks/useNavDetails";
import { enUrl } from "@/utils/encoderfunc";
import Link from "next/link";


export default function Breadcrumb({ last }) {
  const { category, subcategory, subcategory2, subcategory3,subcategory4,subcategory5, productId, path,typeid,infoid } =
    useNavDetails()
  let crun = []
  if (category) crun.push( {label:category.replace('_'," "),link:`/${enUrl(category)}`})
  if (subcategory) crun.push( {label:subcategory.replace('_'," "),link:`/${enUrl(category)}/${enUrl(subcategory)}`})
  if (subcategory2) crun.push( {label:subcategory2.replace('_'," "),link:`/${enUrl(category)}/${enUrl(subcategory)}/${enUrl(subcategory2)}${typeid?`?id=${typeid}`:''}`})
  if (subcategory3) crun.push( {label:subcategory3.replace('_'," "),link:`/${enUrl(category)}/${enUrl(subcategory)}/${enUrl(subcategory2)}/${enUrl(subcategory3)}${typeid?`?id=${typeid}`:''}${infoid?`&typeid=${infoid}`:''}`})
  if (subcategory4) crun.push( {label:subcategory4.replace('_'," "),link:`/${enUrl(category)}/${enUrl(subcategory)}/${enUrl(subcategory2)}/${enUrl(subcategory3)}/${enUrl(subcategory4)}${typeid?`?id=${typeid}`:''}${infoid?`&typeid=${infoid}`:''}`})
  // if (subcategory5) crun.push( {label:subcategory5.replace('_'," "),link:`/${enUrl(category)}/${enUrl(subcategory)}/${enUrl(subcategory2)}/${enUrl(subcategory3)}/${enUrl(subcategory4)}/${enUrl(subcategory5)}${typeid?`?id=${typeid}`:''}`})
  if (last) crun.push( {label:last|| "",link:""})
  return <div className="text-container my-2 ">
    <p className="text-white text-[14px]">
      {crun.map((i,inx)=>{
        return i.link!=="" && inx<crun.length-1 ?<Link href={i.link}><span>{`${inx!==0 ? " / " :"" }`}</span><span className="text-[#CCCCCC] capitalize">{i.label}</span></Link>
        :<><span>{`${inx!==0 ? " / " :"" }`}</span><span className="text-[#CCCCCC] capitalize">{i.label}</span></>
      })}
    </p>
  </div>
}
