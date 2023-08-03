import BannerSlider from '@/components/brands/explore-brands/BannerSlider'
import TrendingDash, { CircularTrendingDash } from '@/components/spec-comp/newDash/slider'
import { emptyAllOutlet, getBrandsImages, getOutlets } from '@/store/slices/outlet'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enUrl } from '@/utils/encoderfunc'
import { getProduct } from '@/store/slices/product'
import { getCourses } from '@/store/slices/learnslice'
import { getGuests } from '@/store/slices/guests'


function AdminDashboardNew() {
    const { user } = useSelector((state) => state.auth)
    const { outlets, brandsImages } = useSelector((state) => state.outlets)
    const { brand_display } = useSelector((state) => state.auth)
    const { productList } = useSelector((state) => state.product);
    const { liberarycourse } = useSelector((state) => state.learn)
    const { guests } = useSelector((state) => state.guests)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOutlets())
        dispatch(getBrandsImages())
        dispatch(getProduct("food"));
        dispatch(getCourses())
        dispatch(getGuests())

        return () => dispatch(emptyAllOutlet())
    }, [])

    const data1 = [{ image: '/asset/cocktailnew.png', title: 'Cocktails', link: '/specs/cocktail' },
    { image: '/dash/ck2.png', title: 'Wine', link: '/specs/wine' },
    { image: '/dash/ck3.png', title: 'Spirits', link: '/specs/spirit' },
    { image: '/dash/ck4.png', title: 'Beer/Seltzer', link: '/specs/beer' },
    { image: '/dash/ck1.png', title: 'Low / No ABV', link: '/specs/low_no_abv' },
    { image: '/asset/coffee.jpg', title: 'Coffee', link: '/specs/coffee' },

    ]
    const data2 = outlets?.map((i) => { return { title: i.outlet_name, image: i.image, link: `/brands/${enUrl(i.outlet_name)}?id=${i.outlet_id}` } })
    const data3 = productList?.map((i) => { return { title: i.food_name, image: i.image, link: `/food/${enUrl(i.food_name)}?id=${i.food_id}` } })
    const data4 = liberarycourse?.map((i) => { return { title: i.name, image: i.image, link: `/learn/library/${enUrl(i.name)}?id=${i.course_id}` } })
    const data5 = guests?.map((i) => { return { title: i.first_name, image: i.image, link: `/guests/${enUrl(i.first_name)}?id=${i.guest_id}` } })
  
    return (
        <>
            <div className="Header-container flex-col flex justify-between lg:items-center md:items-center mb-8 w-full ">
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h1 className="heading text-white text-[32px] leading-tight font-semibold font-Inter">
                        Dashboard
                    </h1>
                </div>
                <div className="heading-text w-full lg:mb-0 md:mb-0 my-[20px]">
                    <h5 className='text-white not-italic font-normal text-base font-Inter'>{`Welcome back, `}<span className='capitalize font-semibold text-primary-base'>{user?.display_name || ""}</span>{`! We are grateful to have you on the team.`}</h5>
                </div>
            </div>
            <div className="explore-brands-banner-contaiiner mb-8">
                <BannerSlider pagination={false} height="250px" data={brandsImages || []} />

            </div>
            <TrendingDash data={data1} title={"Specs"} isBig={false} />
            {
                productList.length > 0 &&
                <TrendingDash data={data3.slice(0, 8)} title={"Foods"} isBig={false} isSeeAllUrl={'/food'} />

            }
            {
                liberarycourse.length > 0 &&
                <TrendingDash data={data4.slice(0, 8)} title={"Courses"} isBig={false} isSeeAllUrl={'/learn/library'} />

            }
            {
                guests.length > 0 &&
                <CircularTrendingDash data={data5.slice(0, 10)} title={"Guests"} isSeeAllUrl={'/guests'} />
            }
            {
                outlets.length > 0 &&
                <TrendingDash data={data2} title={"Outlets"} isBig={true} />
            }
        </>
    )
}

export default AdminDashboardNew