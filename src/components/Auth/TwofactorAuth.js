import Bullets from "@/utils/Bullets";
import { ConditionalButtons } from "@/utils/Buttons";
import { _ERROR, _INITIAL } from "@/utils/Constants";
import InputField from "@/utils/InputField";
import React, { useEffect, useState } from "react";

function TwofactorAuth({ authHandler }) {
  const [tfaCondition, setTfaCondtion] = useState(false);

  const [tfaCode, setTfa] = useState("");
  const [message, setMessage] = useState([
    {
      message: "An e-mail has been sent to you with an authentication code.",
      response: _INITIAL,
    },
  ]);
  useEffect(() => {
    if (tfaCode.length > 4) {
      setTfaCondtion(true);
    }
    if (tfaCondition == true && tfaCode.length <= 4) {
      setTfaCondtion(false);
    }
  }, [tfaCode]);
  function handleButton(params) {
    if (tfaCode.length > 4) {
      authHandler(tfaCode);
      // if (  message.length < 2) {
      //     let dummyArray;
      //     [...dummyArray] = [...message, { message: 'Your Authentication code is invalid', response: _ERROR }]
      //     console.log(dummyArray);
      //     setMessage(() => [...dummyArray])
      // }

      // if ( message.length < 1) {

      //     let dummyArray;
      //     [...dummyArray] = [...message]
      //     dummyArray.pop()
      //     console.log(dummyArray);
      //     setMessage(() => [...dummyArray])
      //     authHandler()
      // }
      // if (tfaCode == '123QWE') {
      //     let dummyArray;
      //     [...dummyArray] = [...message]
      //     console.log(dummyArray);
      //     setMessage(() => [...dummyArray])
      //     authHandler()
      // }
    }
  }

  return (
    <>
      <div className="mt-[50px] w-full flex flex-col items-center">
        <InputField
          placeholder=""
          label="2-Factor Authentication Code"
          onChangeHandler={(e) => {
            setTfa(e.target.value);
          }}
          value={tfaCode}
          name={"tfa"}
          type={"text"}
          errorResponnse={message.length > 1 ? _ERROR : _INITIAL}
        />
        <Bullets messageArray={message} />
        <ConditionalButtons
          condition={tfaCondition}
          label={"Sign in"}
          onClickHandler={handleButton}
        />
      </div>
    </>
  );
}

export default TwofactorAuth;