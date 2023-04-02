import Bullets from "@/utils/Bullets";
import { ConditionalButtons } from "@/utils/Buttons";
import { _ERROR, _INITIAL, _PASS } from "@/utils/Constants";
import InputField from "@/utils/InputField";
import React, { useEffect, useState } from "react";

function ChangePasswordComponent({ confirmationfunction }) {
  const [password, setUserInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [newpassResponse, setnewpassRes] = useState(_INITIAL);
  const [confpassResponse, setconfpassRes] = useState(_INITIAL);
  const [errors, setErrors] = useState({
    passwordLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
    match: false,
  });

  const [condition, setcondition] = useState(false);
  const [conditions, setconditions] = useState([
    { id: "1", message: "At least 12 characters.", response: _INITIAL },
    {
      id: "2",
      message: "Contains both uppercase and lowercase letters.",
      response: _INITIAL,
    },
    {
      id: "3",
      message: "Contains both letters and numbers.",
      response: _INITIAL,
    },
    {
      id: "4",
      message: "Contains atleast onw special character , e.g, ! @ # ? ]",
      response: _INITIAL,
    },
    { id: "5", message: "Password must match.", response: _INITIAL },
  ]);
  useEffect(() => {
    if (password.newPassword != "" || password.confirmPassword != "")
      updateConditionStatus();
    if (
      errors.passwordLength == true &&
      errors.uppercase == true &&
      errors.lowercase == true &&
      errors.number == true &&
      errors.special == true &&
      errors.match == true
    ) {
      setcondition(true);
    } else setcondition(false);
  }, [errors]);
  useEffect(() => { }, [conditions]);
  useEffect(() => {
    validatePassword();
  }, [password]);

  function validatePassword() {
    let passwordd = password.newPassword;
    const passwordLength = passwordd.length >= 12;
    const uppercase = /[A-Z]/.test(passwordd);
    const lowercase = /[a-z]/.test(passwordd);
    const number = /\d/.test(passwordd);
    const special = /[!@#$?]/.test(passwordd);

    setErrors({
      passwordLength,
      uppercase,
      lowercase,
      number,
      special,
      match:
        password.newPassword == password.confirmPassword &&
        password.newPassword != "",
    });
  }
  function updateConditionStatus() {
    let dummy = conditions?.map((cond) => {
      switch (cond.id) {
        case "1":
          if (errors.passwordLength == true)
            return { ...cond, response: _PASS };
          else return { ...cond, response: _ERROR };

        case "2":
          if (errors.uppercase == true && errors.lowercase == true)
            return { ...cond, response: _PASS };
          else return { ...cond, response: _ERROR };
        case "3":
          if (
            errors.number == true &&
            (errors.uppercase == true || errors.lowercase == true)
          )
            return { ...cond, response: _PASS };
          else return { ...cond, response: _ERROR };
        case "4":
          if (errors.special == true) return { ...cond, response: _PASS };
          else return { ...cond, response: _ERROR };
        case "5":
          if (password.confirmPassword == "")
            return { ...cond, response: _INITIAL };
          else if (errors.match == true) {
            setconfpassRes(_PASS);
            return { ...cond, response: _PASS };
          } else {
            setconfpassRes(_ERROR);
            return { ...cond, response: _ERROR };
          }
        default:
          return { ...cond };
      }
    });
    setconditions(() => [...dummy]);
    if (
      errors.passwordLength != true ||
      errors.uppercase != true ||
      errors.lowercase != true ||
      errors.special != true ||
      errors.number != true
    ) {
      setnewpassRes(_ERROR);
    } else {
      setnewpassRes(_PASS);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(
      name == "newPassword" &&
      (errors.passwordLength != true ||
        errors.uppercase != true ||
        errors.lowercase != true ||
        errors.special != true ||
        errors.number != true)
    );

    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function onClick() {
    if (condition == true) {
      confirmationfunction(password.newPassword, password.confirmPassword);
    }
  }
  return (
    <>
      <h1 className="h-[48px] not-italic font-normal text-white text-[32px] text-center font-Prata leading-tight ">
        Change Password
      </h1>

      <div className="mt-[40px] sm:mt-[50px] flex flex-col items-center">
        <InputField
          placeholder="Enter Password"
          label="New Password"
          onChangeHandler={handleChange}
          value={password.newPassword}
          name={"newPassword"}
          type={"password"}
          errorResponnse={newpassResponse}
        />
        <InputField
          placeholder="Re-enter Password"
          label="Confirm Password"
          onChangeHandler={handleChange}
          value={password.confirmPassword}
          name={"confirmPassword"}
          type={"password"}
          errorResponnse={confpassResponse}
        />
        <Bullets messageArray={conditions} />
        <ConditionalButtons
          condition={condition}
          onClick={onClick}
          label={"Continue"}
        />
      </div>
    </>
  );
}

export default ChangePasswordComponent;
