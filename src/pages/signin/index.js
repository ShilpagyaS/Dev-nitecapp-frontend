import TwofactorAuth from "@/components/Auth/TwofactorAuth";
import Bullets from "@/utils/Bullets";
import Buttons from "@/utils/Buttons";
import InputField from "@/utils/InputField";
import React, { useEffect, useState } from "react";
import { _INITIAL, _ERROR, _PASS } from "@/utils/Constants";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import OnboardingForm from "@/components/Auth/OnboardingForm";
import ChangePasswordComponent from "@/components/Auth/ChangePasswordComponent";
import Slider from "@/components/slider";
import {
  changePassword,
  login,
  setLoggedInUser,
  verifyOTP,
} from "@/store/slices/Auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Signin() {
  const [userinput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const [isFirstTimeSignin, seFirstTimeSignin] = useState(false);
  const [istfacompleted, settfaCompleted] = useState(false);
  const [ischangePasswordcompleted, sechangePasswordCompleted] =
    useState(false);
  const [issliderActive, setSliderActive] = useState(false);

  const [usernameError, setUserNameError] = useState(_INITIAL);
  const [passwordError, setPasswordError] = useState(_INITIAL);
  const [errorMessage, setErrorMessage] = useState([]);
  const [isSubmitted, setisSubmitted] = useState(false);

  const [step, setstep] = useState(1);
  useEffect(() => {}, [errorMessage]);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e);
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handleSubmit = async () => {
    let dummyEmailError = _INITIAL;
    let dummyPasswordError = _INITIAL;
    let dummyStringArray = [];
    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(emailRegEx.test(userinput.email));
    const checkemailvalidity = emailRegEx.test(userinput.email);
    if (userinput.email == "" || checkemailvalidity == false) {
      dummyEmailError = _ERROR;
      dummyStringArray = [
        { message: "Please Enter Valid Email Address", response: _ERROR },
      ];
    }
    //  else {
    //   if (userinput.email != "sr@gmail.com") {
    //     dummyEmailError = _ERROR;
    //     dummyStringArray = [
    //       { message: "Your email doesn't match our records", response: _ERROR },
    //     ];
    //   } else {
    //     if (userinput.password != "1234567") {
    //       dummyPasswordError = _ERROR;
    //       dummyStringArray = [
    //         {
    //           message: "Your password doesn't match our records",
    //           response: _ERROR,
    //         },
    //       ];
    //     }
    //   }
    // }
    setUserNameError(dummyEmailError);
    setPasswordError(dummyPasswordError);
    setErrorMessage(dummyStringArray);
    if (dummyEmailError != _ERROR && dummyPasswordError != _ERROR) {
      //login function

      await dispatch(
        login({
          email: userinput.email,
          password: userinput.password,
        })
      ).then((res) => {
        debugger;
        if (res?.data?.resCode === 200) {
          setstep(2);
        }
      });

      setErrorMessage([]);
    }
  };

  return (
    <>
      <LayoutWithHeader>
        {step === 1 && (
          <>
            <h1 className=" h-[48px] not-italic font-normal text-white text-[32px] text-center font-Prata leading-tight  w-full sm:mt-[20px]">
              Sign in
            </h1>

            <div className="mt-[40px] sm:mt-[50px] flex flex-col items-center">
              <InputField
                placeholder="Enter Email"
                label="Email"
                onChangeHandler={handleChange}
                value={userinput.email}
                name={"email"}
                type={"text"}
                errorResponnse={usernameError}
              />
              <InputField
                placeholder="Enter Password"
                label="Password"
                onChangeHandler={handleChange}
                value={userinput.password}
                name={"password"}
                type={"password"}
                errorResponnse={passwordError}
              />
              <p className="text-sm max-w-[300px] text-[#959598] text-right cursor-pointer w-full">
                Forgot Password ?
              </p>
              {errorMessage.length > 0 && (
                <Bullets messageArray={errorMessage} />
              )}
              <Buttons label={"Sign in"} onClickHandler={handleSubmit} />
            </div>
          </>
        )}

        {step === 2 && (
          <TwofactorAuth
            authHandler={async (code) => {
              await dispatch(verifyOTP(code)).then((res) => {
                if (res?.data?.resCode === 200) {
                  dispatch(setLoggedInUser(res?.data));
                  if (res?.data?.data?.first_time_login) {
                    setstep(3);
                  } else {
                    router.push("/specs");
                  }
                }
              });
            }}
          />
        )}

        {step === 3 && (
          <ChangePasswordComponent
            confirmationfunction={async (new_password, confirm_password) => {
              await dispatch(
                changePassword({ new_password, confirm_password })
              ).then((res) => {
                if (true) {
                  setstep(4);
                }
              });
            }}
          />
        )}

        {step === 4 && (
          <Slider
            skipTo={() => {
              setSliderActive(false);
              setstep(5);
            }}
          />
        )}

        {step === 5 && <OnboardingForm employeeName={"Zaylan"} />}
      </LayoutWithHeader>
    </>
  );
}

export default Signin;
