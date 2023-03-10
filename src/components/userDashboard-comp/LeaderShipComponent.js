import React from 'react'
import LeaderShipSlider from './LeaderShipSlider'

function LeaderShipComponent() {
    return (
        <div className='learn-container'>
            <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[33px]'>
                Leaderboards
            </h5>
            
            <LeaderShipSlider />
        </div>
    )
}

export default LeaderShipComponent