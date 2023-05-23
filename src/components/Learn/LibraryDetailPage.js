import LibraryDetailcard from '@/utils/Cards/Learnsection/LibraryDetailcard'
import { Customswitch2 } from '@/utils/customswitch'
import Image from 'next/image'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

function LibraryDetailPage() {
    return (
        <div>
            <Breadcrumb />
            <h2 className="text-white text-[24px] leading-9 font-bold mb-[20px] ">
                The Delphi Orientation
            </h2>
            <div className='relative w-full h-[243px] rounded-md'>
                <Image src={'https://s3-alpha-sig.figma.com/img/9770/d818/a32e7194911e9df4c2a5d70359966994?Expires=1685318400&Signature=RgW9nRp4fhiRCAwyTeo98tdo33EC3vgMXfmNqOMGpzXAzkKLEQUIDe0FcLYdPXRMc8ctftepWNkZ2phTc3R8q1~rqhRRPO13XPmk7py3vwuL9PwqxlKo18oEd2RHzMCFmG3P65Iw4P7DbwP-6BOT6gk698mPaQJqhnwcQvjC4Xh0kANHdTwbhep6ujyrpigWZ19Bb8i78IaOBpHopz08VApgIs5eojobqZMcWQ35NuEIznUJz3ti66Ichw-9RGfn22YKTo075LRR52IOYebAggGdtudze390JoWqUDbqy6dfTN5gPfxu6vcjOlx4Fmw0YPJRLPCiF7bpnc327KggaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} fill className='object-cover rounded-md' />


            </div>
            <div className='my-[24px]'>

                <Customswitch2 />
            </div>
            <LibraryDetailcard />
            <LibraryDetailcard />
        </div>
    )
}

export default LibraryDetailPage