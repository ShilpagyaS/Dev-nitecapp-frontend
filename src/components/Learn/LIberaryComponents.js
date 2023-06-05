import DashboardLiberaryCard from '@/utils/Cards/Learnsection/DashboardLiberaryCard'
import { enUrl } from '@/utils/encoderfunc'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

function LIberaryComponents({ allCourses, isAdmin }) {
    const router = useRouter();

    const aray = [
        {
            img: '/asset/learnsectoinbuilding.png',
            name: 'The Delphi Brand Orientation ',
            progress: 30,
            desc: ' Learn the Delphi Brand, Tone of Voice, Menus, and everything else...'
        },
        {
            img: '/asset/Psychology of Hospitality.png',
            name: 'Psychology of Hospitality',
            progress: 38,
            desc: ' Learn the Delphi Brand, Tone of Voice, Menus, and everything else...'
        },
        {
            img: '/asset/Raise the Bar.png',
            name: 'Raise the Bar',
            progress: 60,
            desc: ' Learn the Delphi Brand, Tone of Voice, Menus, and everything else...'
        },
        {
            img: '/asset/Bar 101.png',
            name: 'Bar 101',
            progress: 50,
            desc: ' Learn the Delphi Brand, Tone of Voice, Menus, and everything else...'
        },
        {
            img: '/asset/sales.png',
            name: 'Sales Stars',
            progress: 0,
            desc: ' Learn the Delphi Brand, Tone of Voice, Menus, and everything else...'
        },
    ]
    return (
        <div className='w-full mt-[35px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                {allCourses.map((item) =>
                    <div className='w-full  mb-[10px]' >
                        <DashboardLiberaryCard item={item} completionPercentageOuter={item.progress} image={item.img} name={item.name} desc={item.desc} isAdmin={isAdmin} />
                    </div>
                )

                }

            </div>
        </div>
    )
}

export default LIberaryComponents