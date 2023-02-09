import Bullets from '@/utils/Bullets';
import { ConditionalButtons } from '@/utils/Buttons';
import InputField from '@/utils/InputField';
import React, { useState } from 'react'

function ChangePassword() {
    const [password, setUserInput] = useState({
        newPassword: '',
        confirmPassword: ''

    })
    const [isSubmitted, setisSubmitted] = useState(false)
    const [conditions, setconditions] = useState(["At least 12 characters.", "Contains both uppercase and lowercase letters.", "Contains both letters and numbers.", "Contains atleast onw special character , e.g, ! @ # ? ]", "Password must match."])
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(e)
        setUserInput((prev) => {
            return {

                ...prev, [name]: value
            }
        })

    }
    return (
        <>
            <h1 className='h-[48px] not-italic font-normal text-white text-[32px] text-center font-Prata leading-tight '>
                Change Password
            </h1>

            <div className='mt-[50px] w-screen flex flex-col items-center' >
                <InputField placeholder="Enter Password" label="New Passeord" onChangeHandler={handleChange} value={password.newPassword} name={"newPassword"} type={"password"} />
                <InputField placeholder="Re-enter Password" label="Confirm Password" onChangeHandler={handleChange} value={password.confirmPassword} name={"confirmPassword"} type={"password"} />
                <Bullets messageArray={conditions} />
                <ConditionalButtons condition={true} label={"Continue"} />
            </div>
        </>
    )
}

export default ChangePassword