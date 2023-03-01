import useMediaQuery from "@/Hooks/useMediaQuery";
import { ConditionalButtons } from "@/utils/Buttons";
import { _INITIAL } from "@/utils/Constants";
import InputField from "@/utils/InputField";
import SelectWithSearch from "@/utils/SelectwithFilter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getConcept, updateUser } from "@/store/slices/Auth";

function OnboardingForm({ employeeName }) {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const [concept, setconcept] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [onboardingForm, setonBoardingForm] = useState({
    fullName: "Zaylan",
    dislplayName: "",
    pronouns: "",
    role: "Bar Tender",
    concept: "",
    user_id: user?.user_id,
  });
  debugger;
  function handleChange(e) {
    const { name, value } = e.target;

    setonBoardingForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConcept()).then((res) => {
      setconcept(res);
    });
  }, []);

  return (
    <>
      <h1 className="h-full not-italic font-normal break-words text-white text-[32px] text-center font-Prata leading-tight ">
        Welcome to the team , {employeeName}!
      </h1>

      <div className="mt-[24px]">
        <p className="h-full not-italic font-normal font-Inter leading-tight text-base text-center text-white ">
          Let's get you set up.
        </p>
      </div>
      {!isMobile ? (
        <div className="mt-[24px] sm:mt-[24px] w-full flex flex-col items-center">
          <InputField
            placeholder=""
            label="Full Name"
            onChangeHandler={handleChange}
            value={onboardingForm.fullName}
            name={"fullName"}
            type={"text"}
            errorResponnse={_INITIAL}
          />
          <InputField
            placeholder="Preferred Name"
            label="Display Name"
            onChangeHandler={handleChange}
            value={onboardingForm.dislplayName}
            name={"dislplayName"}
            type={"text"}
            errorResponnse={_INITIAL}
          />
          <InputField
            placeholder="Your Pronouns"
            label="Pronouns"
            onChangeHandler={handleChange}
            value={onboardingForm.pronouns}
            name={"pronouns"}
            type={"text"}
            errorResponnse={_INITIAL}
          />
          <InputField
            placeholder=""
            label="Role"
            onChangeHandler={handleChange}
            value={onboardingForm.role}
            name={"role"}
            type={"text"}
            errorResponnse={_INITIAL}
          />
          <SelectWithSearch
            label={"Concept"}
            placeholder={"Your Concept"}
            options={concept}
            value={onboardingForm.concept}
            onChangeHandler={handleChange}
          />
          <ConditionalButtons
            condition={true}
            label={"Continue"}
            onClickHandler={(e) => {
              e.preventDefault();
              dispatch(updateUser(onboardingForm)).then((res) => {
                if (res?.data?.resCode === 200) router.push("/specs");
              });
            }}
          />
        </div>
      ) : (
        <div className="mt-[24px] sm:mt-[24px] w-full flex flex-col items-center">
          <InputField
            placeholder="Your Pronouns"
            label="Pronouns"
            onChangeHandler={handleChange}
            value={onboardingForm.pronouns}
            name={"pronouns"}
            type={"text"}
            errorResponnse={_INITIAL}
          />
          <SelectWithSearch
            label={"Concept"}
            placeholder={"Your Concept"}
            options={concept}
            value={onboardingForm.concept}
            onChangeHandler={handleChange}
          />
          <ConditionalButtons
            condition={true}
            label={"Continue"}
            onClickHandler={(e) => {
              e.preventDefault();
              dispatch(updateUser(onboardingForm)).then((res) => {
                if (res?.data?.resCode === 200) router.push("/specs");
              });
            }}
          />
        </div>
      )}
    </>
  );
}

export default OnboardingForm;
