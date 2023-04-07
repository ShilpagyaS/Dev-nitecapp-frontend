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
import ProfileFileUpdate from "./profileupload";
import TextAreaField from "@/utils/textArea";
import { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import ConditionalButton from "../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
function OnboardingForm() {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const [conceptdata, setconcept] = useState([]);
  const { user,role } = useSelector((state) => state.auth);
  const [isEdit, setEdit] = useState(false)
const [indata,setindata]=useState({})
  ;

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConcept()).then((res) => {
      setconcept(res);
    });

  }, []);

  const toggleEdit = () => {
    setEdit(prev => !prev)
  
  }

  const handlesubmitdata = (values) => {
    
    dispatch(updateUser(values)).then((res) => {
      if (res?.data?.resCode === 200) router.push("/specs");
    });
  }

  const formik = useFormik({
    initialValues: indata,
    enableReinitialize: true,
    onSubmit: handlesubmitdata,
    validationSchema: Yup.object().shape({
      full_name: Yup.string().required('Full name is required'),
      display_name: Yup.string().required('Display is required'),
      pronouns: Yup.string().required(),
      role: Yup.string().required(),
      concept: Yup.string().required(),
      user_id: Yup.string().required()
    }),
  })
  console.log("error",formik.errors)
  useEffect(() => {
    if (user) {
      setindata({...user,user_id:user.id,role:role?.name})
    }

  }, [user,role]);

  return (
    <div className="grid place-items-center">
    {/* <ProfileFileUpdate/> */}
    <div className="flex justify-between w-full max-w-[706px]">
    <h1 className="text-white font-[700] text-[32px] leading-[48px]">Profile</h1>
    <div className="flex items-center justify-center">

<ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={() => {  }} />
<div className="ml-[15px]">
  <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
</div>
</div>
    </div>
   <ProfileFileUpdate/>
      {(
        <form
          onSubmit={formik.handleSubmit}
          className="mt-[24px] sm:mt-[24px] w-full grid grid-cols-1  max-w-[706px]">
          <InputField
            placeholder="First Name"
            label="First Name"
            onChangeHandler={formik.handleChange}
            value={formik.values.first_name}
            name={"first_name"}
            type={"text"}
            error={formik.errors.first_name}
            touched={formik.touched.first_name}
            showerror
            
          />
          <InputField
            placeholder="Last Name"
            label="Last Name"
            onChangeHandler={formik.handleChange}
            value={formik.values.last_name}
            name={"last_name"}
            type={"text"}
            error={formik.errors.last_name}
            touched={formik.touched.last_name}
            showerror
            
          />
          <InputField
            placeholder="Email"
            label="Email"
            onChangeHandler={formik.handleChange}
            value={formik.values.email}
            name={"pronouns"}
            type={"text"}
            error={formik.errors.email}
            touched={formik.touched.email}
            showerror
            
          />
          <InputField
            placeholder=""
            label="Contact No."
            onChangeHandler={formik.handleChange}
            value={formik.values.contact}
            name={"role"}
            type={"text"}
            disabled
            error={formik.errors.contact}
            touched={formik.touched.contact}
            showerror
            
          />
          <SelectWithSearch
            label={"Country"}
            placeholder={"Country"}
            options={[{label:"yo",value:"yo"}]}
            value={formik.values.concept}
            onChangeHandler={formik.handleChange}
            error={formik.errors.concept}
            touched={formik.touched.concept}
            showerror
            
          />

<SelectWithSearch
            label={"State"}
            placeholder={"State"}
            options={[{label:"yo",value:"yo"}]}
            value={formik.values.concept}
            onChangeHandler={formik.handleChange}
            error={formik.errors.concept}
            touched={formik.touched.concept}
            showerror
            
          />
          <div className="col-span-1 md:col-span-2 w-full flex justify-center">
          <InputField
            placeholder=""
            label="Address Line 1st"
            onChangeHandler={formik.handleChange}
            value={formik.values.contact}
            name={"role"}
            type={"text"}
            disabled
            error={formik.errors.contact}
            touched={formik.touched.contact}
            showerror
            fullwidth
          />
          </div>

          <div className="col-span-1 md:col-span-2 w-full flex justify-center">
          <InputField
            placeholder=""
            label="Address Line 2nd"
            onChangeHandler={formik.handleChange}
            value={formik.values.contact}
            name={"role"}
            type={"text"}
            disabled
            error={formik.errors.contact}
            touched={formik.touched.contact}
            showerror
            fullwidth
          />
          </div>

          <InputField
            placeholder=""
            label="Role"
            onChangeHandler={formik.handleChange}
            value={formik.values.role}
            name={"role"}
            type={"text"}
            disabled
            error={formik.errors.role}
            touched={formik.touched.role}
            showerror
            
          />

<InputField
            placeholder=""
            label="Password"
            onChangeHandler={formik.handleChange}
            value={formik.values.role}
            name={"role"}
            type={"text"}
            disabled
            error={formik.errors.role}
            touched={formik.touched.role}
            showerror
            
          />

<div className="col-span-1 md:col-span-2 w-full flex justify-center">
          <TextAreaField
            placeholder=""
            label="Description"
            onChangeHandler={formik.handleChange}
            value={formik.values.contact}
            name={"role"}
            type={"text"}
            disabled
            error={formik.errors.contact}
            touched={formik.touched.contact}
            showerror
            fullwidth
          />
          </div>

          
          <div className="col-span-1 md:col-span-2">
          <ConditionalButtons
            condition={true}
            label={"Continue"}
            type="submit"
          />
          </div>
          
        </form>
      )}

     
    </div>
  );
}

export default OnboardingForm;
