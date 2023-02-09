import Bullets from '@/utils/Bullets'
import { ConditionalButtons } from '@/utils/Buttons'
import InputField from '@/utils/InputField'
import React, { useEffect, useState } from 'react'

function TwofactorAuth() {
    const [tfaCondition, setTfaCondtion] = useState(false)

    const [tfaCode, setTfa] = useState("")
    const Message = ["An e-mail has been sent to you with an authentication code."]
    useEffect(() => {
        if (tfaCode.length > 5) {
            setTfaCondtion(true)

        }
        if (tfaCondition == true && tfaCode.length <= 5) {
            setTfaCondtion(false)

        }
    }, [tfaCode])

    return (
        <>
            <div className='mt-[50px] w-screen flex flex-col items-center' >
                <InputField placeholder="" label="2-Factor Authentication Code" onChangeHandler={(e) => { setTfa(e.target.value) }} value={tfaCode} name={"tfa"} type={"text"} />
                <Bullets messageArray={Message} />
                <ConditionalButtons condition={tfaCondition} label={"Sign in"} />
            </div>
        </>
    )
}

export default TwofactorAuth