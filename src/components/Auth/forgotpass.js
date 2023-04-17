import TwofactorAuth from "@/components/Auth/TwofactorAuth";
import Bullets from "@/utils/Bullets";
import { Buttons } from "@/utils/Buttons";
import InputField from "@/utils/InputField";
import React, { useEffect, useState } from "react";
import { _INITIAL, _ERROR, _PASS } from "@/utils/Constants";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import OnboardingForm from "@/components/Auth/OnboardingForm";
import ChangePasswordComponent from "@/components/Auth/ChangePasswordComponent";
import Slider from "@/components/slider";
import {
  changeForgotPassword,
  changePassword,
  login,
  sendForgotOTP,
  setLoggedInUser,
  verifyforgotOTP,
} from "@/store/slices/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthWrapper from "@/components/Auth/AuthWarpper";
import { useFormik } from "formik";
import * as Yup from 'yup';
function ForgotPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth)
  const [step, setstep] = useState(1);
  useEffect(() => {
    if (user?.first_time_login) {
      setstep(3)
    }
    else setstep(1)
  }, [user])


  const handleSubmitForm = async (values) => {
    await dispatch(sendForgotOTP(values.email)).then((res) => {
      if (res?.status === 200) {
        setstep(2);
      } else if (res?.error) {
        formik.setFieldError('email', res.message)
      }
    })

  };

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Please Enter Valid Email Address").required('Email is required'),
    }),
    onSubmit: handleSubmitForm,
    initialValues: {
      email: "",
    },

  })
  const [opterror, setotperror] = useState()
  return (
    <>
      <AuthWrapper>
        <LayoutWithHeader>
          {step === 1 && (
            <>
              <h1 className=" h-[48px] not-italic font-normal text-white text-[32px] text-center font-Prata leading-tight  w-full sm:mt-[20px]">
                Forgot Password
              </h1>

              <form
                onSubmit={formik.handleSubmit}
                className="mt-[40px] sm:mt-[50px] flex flex-col items-center">
                <InputField
                  placeholder="Enter Email"
                  label="Email"
                  onChangeHandler={formik.handleChange}
                  alue={formik.values.email}
                  name="email"
                  type={"text"}
                  touched={formik.touched.email}
                  error={formik.errors.email}
                  showerror
                />

                <Buttons label={"Send Code"}
                  type="submit"
                />
              </form>
            </>
          )}

          {step === 2 && (
            <TwofactorAuth
              opterror={opterror}
              setotperror={setotperror}
              authHandler={async (code) => {
                await dispatch(verifyforgotOTP(code)).then((res) => {
                  if (res?.status === 200) {
                    setstep(3);
                  } else {

                    if (res?.error) {
                      setotperror(res.message)
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
                  changeForgotPassword({ new_password, confirm_password })
                ).then((res) => {
                  if (res?.status === 200) {
                    router.push('/signin')
                  }
                });
              }}
            />
          )}




        </LayoutWithHeader>
      </AuthWrapper>
    </>
  );
}

export default ForgotPassword;
