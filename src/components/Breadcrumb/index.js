import useNavDetails from "@/Hooks/useNavDetails";

export default function Breadcrumb() {
    const {category,subcategory,productId}=useNavDetails()
let crun=""
if(category) crun=crun+`${category} /`
if(subcategory) crun=crun+` ${subcategory} / `
if(productId) crun=crun+`${productId} `
  return <div className="text-container ">
  <p className="text-white text-[14px]">
    <span className="text-[#CCCCCC] capitalize">{crun}</span>
  </p>
</div>
}
