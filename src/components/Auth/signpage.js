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
  changePassword,
  login,
  setLoggedInUser,
  verifyOTP,
} from "@/store/slices/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthWrapper from "@/components/Auth/AuthWarpper";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Link from "next/link";
function Signin() {
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
    await dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    ).then((res) => {

      if (res?.data?.resCode === 200) {
        setstep(2);
      } else if (res?.error) {
        formik.setFieldError('email', res.message)

      }
    })

  };

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Please Enter Valid Email Address").required('Email is required'),
      password: Yup.string().test('len', 'Must be more 5 characters', val => val.length > 5).required('Password is required'),
    }),
    onSubmit: handleSubmitForm,
    initialValues: {
      email: "",
      password: "",
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
                Sign in
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
                <InputField
                  placeholder="Enter Password"
                  label="Password"
                  onChangeHandler={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                  type={"password"}
                  touched={formik.touched.password}
                  error={formik.errors.password}
                  showerror
                />
                <Link href="/forgotpassword" className=" w-full text-right max-w-[300px]"> 
                <p className="text-sm  text-[#959598]  cursor-pointer">
                  Forgot Password ?
                </p>
                </Link>
                <Buttons label={"Sign in"}
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
                await dispatch(verifyOTP(code)).then((res) => {
                  if (res?.status === 200) {
                    dispatch(setLoggedInUser(res?.data));
                    if (res?.data?.data?.first_time_login) {
                      setstep(3);
                    } else {
                      router.push("/specs");
                    }
                  } else {

                    if (res.error) {
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
                  changePassword({ new_password, confirm_password })
                ).then((res) => {
                  if (res?.data?.status === 200) {
                    setstep(4);
                  }
                });
              }}
            />
          )}

          {step === 4 && (
            <Slider
              skipTo={() => {
                setstep(5);
              }}
            />
          )}

          {step === 5 && <OnboardingForm />}
        </LayoutWithHeader>
      </AuthWrapper>
    </>
  );
}

export default Signin;
