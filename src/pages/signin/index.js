import TwofactorAuth from '@/components/2 factor Auth Page/TwofactorAuth'
import Buttons from '@/utils/Buttons'
import InputField from '@/utils/InputField'
import React, { useState } from 'react'

function Signin() {
    const [userinput, setUserInput] = useState({
        email: '',
        password: ''

    })
    const [isSubmitted, setisSubmitted] = useState(false)
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


            <h1 className='w-[106px] h-[48px] not-italic font-normal text-white text-[32px] text-center font-Prata leading-tight '>
                Sign in
            </h1>
            {isSubmitted == false ? <>
                <div className='mt-[50px] w-screen flex flex-col items-center' >
                    <InputField placeholder="Enter Email" label="Email" onChangeHandler={handleChange} value={userinput.email} name={"email"} type={"text"} />
                    <InputField placeholder="Enter Password" label="Password" onChangeHandler={handleChange} value={userinput.password} name={"password"} type={"password"} />
                    <Buttons label={'Sign in'} onClickHandler={() => { console.log(userinput); setisSubmitted(true)}} />
                </div>
            </>
                :
                <TwofactorAuth />}

        </>
    )
}

export default Signin