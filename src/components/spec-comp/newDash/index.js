import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Trending from '../Trending'
import BannerSlider from '@/components/brands/explore-brands/BannerSlider'
import TrendingDash from './slider'
import { emptyAllOutlet, getOutlets } from '@/store/slices/outlet'
import Link from 'next/link'
import { enUrl } from '@/utils/encoderfunc'

function NewUserDashboard() {
    const { user } = useSelector((state) => state.auth)
    const { outlets } = useSelector((state) => state.outlets)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOutlets())
        return () => dispatch(emptyAllOutlet())
    }, [])

    const data1 = [{ image: '/asset/cocktailnew.png', title: 'Cocktails', link: '/specs/cocktail' },
    { image: '/asset/coffee.jpg', title: 'Coffee', link: '/specs/coffee' },
    { image: '/dash/ck2.png', title: 'Wine', link: '/specs/wine' },
    { image: '/dash/ck3.png', title: 'Spirits', link: '/specs/spirit' },
    { image: '/dash/ck4.png', title: 'Beer/Seltzer', link: '/specs/beer' },
    { image: '/dash/ck1.png', title: 'Low / No ABV', link: '/specs/low_no_abv' }
    ]
    const data2 = outlets?.map((i) => { return { title: i.outlet_name, image: i.image, link: `/brands/all_Brands/${enUrl(i.outlet_name)}?id=${i.outlet_id}` } })
    return (
        <>
            <div className="Header-container flex-col flex justify-between lg:items-center md:items-center mb-8 w-full ">
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h1 className="heading text-white text-[32px] leading-tight font-semibold font-Inter">
                        Dashboard
                    </h1>
                </div>
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h5 className='text-white not-italic font-normal text-base font-Inter'>Welcome back, {user?.display_name || ""}! We are grateful to have you on The Delphi team.</h5>
                </div>
            </div>
            <div className="explore-brands-banner-contaiiner mb-8">
                <BannerSlider pagination={false} height="250px" />

            </div>
            <TrendingDash data={data1} title={"Specs"} isBig={false} />

            <TrendingDash data={data2} title={"Outlets"} isBig={true} />

        </>
    )
}

export default NewUserDashboard