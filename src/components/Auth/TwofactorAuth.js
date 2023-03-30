import Bullets from "@/utils/Bullets";
import { ConditionalButtons } from "@/utils/Buttons";
import { _ERROR, _INITIAL } from "@/utils/Constants";
import InputField from "@/utils/InputField";
import React, { useEffect, useState } from "react";

function TwofactorAuth({ authHandler, opterror, setotperror }) {
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
            setotperror(null)
          }}
          value={tfaCode}
          name={"tfa"}
          type={"text"}
          error={opterror}
          showerror
          touched={opterror}
        />
        <Bullets messageArray={message} />
        <ConditionalButtons
          condition={tfaCondition}
          label={"Sign in"}
          onClick={handleButton}
        />
      </div>
    </>
  );
}

export default TwofactorAuth;
