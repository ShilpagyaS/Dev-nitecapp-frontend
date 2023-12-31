import Breadcrumb from '@/components/Breadcrumb'
import useNavDetails from '@/Hooks/useNavDetails'
import React from 'react'
import WinebrandTable from './WinebrandTable'

function AdminWineCategory({ productId, subcategory }) {
  const { category } = useNavDetails()
  let crun = ""
  if (category) crun = crun + `${category} /`
  if (subcategory) crun = crun + ` ${subcategory} `
  return (
    <div className="coctail-container">
      <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
       <Breadcrumb/>
      </div>

      <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
        <h2 className="text-white text-[24px] leading-9 font-bold ">
          Wine
        </h2>
      </div>

      <WinebrandTable productId={productId} subcategory={subcategory} />
    </div>
  )
}

export default AdminWineCategory