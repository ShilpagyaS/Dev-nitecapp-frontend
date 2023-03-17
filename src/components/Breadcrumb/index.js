import useNavDetails from "@/Hooks/useNavDetails";

export default function Breadcrumb({ last }) {
  const { category, subcategory, productId } = useNavDetails()
  let crun = ""
  if (category) crun = crun + `${category} /`
  if (subcategory) crun = crun + ` ${subcategory} / `
  if (productId && !last) crun = crun + `${productId}`
  if (last) crun = crun + `${last}`
  return <div className="text-container ">
    <p className="text-white text-[14px]">
      <span className="text-[#CCCCCC] capitalize">{crun}</span>
    </p>
  </div>
}
