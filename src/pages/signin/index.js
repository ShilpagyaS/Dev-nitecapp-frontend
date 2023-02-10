import TwofactorAuth from '@/components/2 factor Auth Page/TwofactorAuth'
import Bullets from '@/utils/Bullets'
import Buttons from '@/utils/Buttons'
import InputField from '@/utils/InputField'
import React, { useEffect, useState } from 'react'
import { _INITIAL, _ERROR, _PASS } from '@/utils/Constants'

function Signin() {
    const [userinput, setUserInput] = useState({
        email: '',
        password: ''

    })

    const [usernameError, setUserNameError] = useState(_INITIAL)
    const [passwordError, setPasswordError] = useState(_INITIAL)
    const [errorMessage, setErrorMessage] = useState([])
    const [isSubmitted, setisSubmitted] = useState(false)
    useEffect(() => {

    }, [errorMessage])
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(e)
        setUserInput((prev) => {
            return {

                ...prev, [name]: value
            }
        })

    }
    function handleSubmit() {

        let dummyEmailError = _INITIAL
        let dummyPasswordError = _INITIAL
        let dummyStringArray = []
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(emailRegEx.test(userinput.email))
        const checkemailvalidity = emailRegEx.test(userinput.email)
        if (userinput.email == "" || checkemailvalidity == false) {
            dummyEmailError = _ERROR
            dummyStringArray = [{ message: "Please Enter Valid Email Address", response: _ERROR }]
        } else {
            if (userinput.email != 'sr@gmail.com') {
                dummyEmailError = _ERROR
                dummyStringArray = [{ message: "Your email doesn't match our records", response: _ERROR }]
            }
            else {

                if (userinput.password != "1234567") {
                    dummyPasswordError = _ERROR
                    dummyStringArray = [{ message: "Your password doesn't match our records", response: _ERROR }]

                }
            }
        }
        setUserNameError(dummyEmailError)
        setPasswordError(dummyPasswordError)
        setErrorMessage(dummyStringArray)
        if (dummyEmailError != _ERROR && dummyPasswordError != _ERROR) {
            setisSubmitted(true)
            setErrorMessage([])
        }

    }
    return (

        <>


            <h1 className='w-[106px] h-[48px] not-italic font-normal text-white text-[32px] text-center font-Prata leading-tight '>
                Sign in
            </h1>
            {isSubmitted == false ? <>
                <div className='mt-[50px] w-screen flex flex-col items-center' >
                    <InputField placeholder="Enter Email" label="Email" onChangeHandler={handleChange} value={userinput.email} name={"email"} type={"text"} errorResponnse={usernameError} />
                    <InputField placeholder="Enter Password" label="Password" onChangeHandler={handleChange} value={userinput.password} name={"password"} type={"password"} errorResponnse={passwordError} />
                    {errorMessage.length > 0 &&
                        <Bullets messageArray={errorMessage} />
                    }
                    <Buttons label={'Sign in'} onClickHandler={handleSubmit} />
                </div>
            </>
                :
                <TwofactorAuth />}

        </>
    )
}

export default Signin