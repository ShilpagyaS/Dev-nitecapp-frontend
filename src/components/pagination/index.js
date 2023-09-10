import { networkInterfaces } from "os"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"


export const Pagination = ({ totalelements, currentPage, pageSize, setcurrentPage, ...rest }) => {
    const noOfpages = Math.ceil(totalelements / pageSize)

    return noOfpages > 1 ? <ReactPaginate
        breakLabel="..."
        nextLabel={<ForwardButton />}
        className="flex justify-between items-center w-fit  p-2 rounded-lg "
        activeClassName="bg-primary-base text-white h-[30px] w-[30px] flex justify-center items-center font-satoshi font-[500] "
        pageClassName={`text-[14px] cursor-pointer w-[30px] border border-white h-[30px]  mx-2 flex justify-center items-center `}
        pageLinkClassName="flex justify-center items-center font-satoshi leading-[18.2px] text-white bg-transparent w-full h-full "
        onPageChange={(event) => { setcurrentPage(event.selected + 1) }}
        pageRangeDisplayed={2}
        pageCount={noOfpages}
        forcePage={currentPage - 1}
        previousLabel={<BackButton />}
        renderOnZeroPageCount={null}
    /> : <></>
}

export default Pagination


const BackButton = () => {
    return <div className="p-1 bg-primary-base rotate-180">


        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className="bg-transparent" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3658 11.4993L12.4173 5.55078L11.062 6.90607L15.6552 11.4993L11.062 16.0925L12.4173 17.4478L18.3658 11.4993ZM12.9513 11.4993L7.00281 5.55078L5.64752 6.90607L10.2407 11.4993L5.64752 16.0925L7.00281 17.4478L12.9513 11.4993Z" fill="white" />
        </svg>
    </div>


}

const ForwardButton = () => {
    return <div className="p-1 bg-primary-base">


        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className="bg-transparent" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3658 11.4993L12.4173 5.55078L11.062 6.90607L15.6552 11.4993L11.062 16.0925L12.4173 17.4478L18.3658 11.4993ZM12.9513 11.4993L7.00281 5.55078L5.64752 6.90607L10.2407 11.4993L5.64752 16.0925L7.00281 17.4478L12.9513 11.4993Z" fill="white" />
        </svg>
    </div>


}