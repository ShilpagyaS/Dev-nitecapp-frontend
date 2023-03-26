import useMediaQuery from "@/Hooks/useMediaQuery";
import { ConditionalButtons } from "@/utils/Buttons";
import { _INITIAL } from "@/utils/Constants";
import InputField from "@/utils/InputField";
import SelectWithSearch from "@/utils/SelectwithFilter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getConcept, updateUser } from "@/store/slices/Auth";
import { useFormik } from "formik";
import * as Yup from 'yup'
function OnboardingForm() {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const [conceptdata, setconcept] = useState([]);
  const { user } = useSelector((state) => state.auth);

  ;

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConcept()).then((res) => {
      debugger
      setconcept(res);
    });

  }, []);



  const handlesubmit = (values) => {
    dispatch(updateUser(values)).then((res) => {
      if (res?.data?.resCode === 200) router.push("/specs");
    });
  }
  const formik = useFormik({
    initialValues: {
      full_name: "",
      display_name: "",
      pronouns: "",
      role: "",
      concept: "",
      user_id: user?.user_id,
    },
    onSubmit: handlesubmit,
    validationSchema: Yup.object().shape({
      full_name: Yup.string().email("Please Enter Valid Email Address").required('Email is required'),
      display_name: Yup.string().test('len', 'Must be more 5 characters', val => val.length > 5).required('Password is required'),
      pronouns: Yup.string().required(),
      role: Yup.string().required(),
      concept: Yup.string().required(),
      user_id: Yup.string().required()
    }),
  })

  useEffect(() => {
    if (user) {
      formik.setFieldValue('full_name', user.full_name)
      formik.setFieldValue('display_name', user.display_name)
      formik.setFieldValue('pronouns', user.pronouns)
      formik.setFieldValue('role', user.full_name)
      formik.setFieldValue('concept', user.full_name)
      formik.setFieldValue('user_id', user.user_id)
    }

  }, [user]);
  return (
    <>
      <h1 className="h-full not-italic font-normal break-words text-white text-[32px] text-center font-Prata leading-tight ">
        Welcome to the team !
      </h1>

      <div className="mt-[24px]">
        <p className="h-full not-italic font-normal font-Inter leading-tight text-base text-center text-white ">
          Let's get you set up.
        </p>
      </div>
      {(
        <form
          onSubmit={formik.handleSubmit}
          className="mt-[24px] sm:mt-[24px] w-full flex flex-col items-center">
          <InputField
            placeholder=""
            label="Full Name"
            onChangeHandler={formik.handleChange}
            value={formik.values.full_name}
            name={"full_name"}
            type={"text"}
            error={formik.errors.full_name}
            touched={formik.touched.full_name}
            showerror
          />
          <InputField
            placeholder="Preferred Name"
            label="Display Name"
            onChangeHandler={formik.handleChange}
            value={formik.values.display_name}
            name={"display_name"}
            type={"text"}
            error={formik.errors.display_name}
            touched={formik.touched.display_name}
            showerror
          />
          <InputField
            placeholder="Your Pronouns"
            label="Pronouns"
            onChangeHandler={formik.handleChange}
            value={formik.values.pronouns}
            name={"pronouns"}
            type={"text"}
            error={formik.errors.pronouns}
            touched={formik.touched.pronouns}
            showerror
          />
          <InputField
            placeholder=""
            label="Role"
            onChangeHandler={formik.handleChange}
            value={formik.values.role}
            name={"role"}
            type={"text"}
            error={formik.errors.role}
            touched={formik.touched.role}
            showerror
          />
          <SelectWithSearch
            label={"concept"}
            placeholder={"Your Concept"}
            options={conceptdata}
            value={formik.values.concept}
            onChangeHandler={formik.handleChange}
            error={formik.errors.role}
            touched={formik.touched.role}

          />
          <ConditionalButtons
            condition={true}
            label={"Continue"}
            type="submit"
          />
        </form>
      )}

      {/* : (
        <div className="mt-[24px] sm:mt-[24px] w-full flex flex-col items-center">
          <InputField
            placeholder="Your Pronouns"
            label="Pronouns"
            onChangeHandler={formik.handleChange}
            value={formik.values.pronouns}
            name={"pronouns"}
            type={"text"}
            showerror
            error={formik.errors.pronouns}
          />
          <SelectWithSearch
            label={"Concept"}
            placeholder={"Your Concept"}
            options={concept}
            name={"concept"}
            value={formik.values.concept}
            onChangeHandler={formik.values.concept}
          />
          <ConditionalButtons
            condition={true}
            label={"Continue"}
            type="submit"
          />
        </div>
      )} */}
    </>
  );
}

export default OnboardingForm;
