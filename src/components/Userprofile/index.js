import useMediaQuery from "@/Hooks/useMediaQuery";
import { ConditionalButtons } from "@/utils/Buttons";
import { _INITIAL } from "@/utils/Constants";
import InputField from "@/utils/InputField";
import SelectWithSearch from "@/utils/SelectwithFilter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getConcept, getuserbyid, updateUser, updateUser2 } from "@/store/slices/Auth";
import { useFormik } from "formik";
import * as Yup from 'yup'
import ProfileFileUpdate from "./profileupload";
import TextAreaField from "@/utils/textArea";
import { uploadimage } from "@/store/slices/ui";
function OnboardingForm() {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const [conceptdata, setconcept] = useState([]);
  const { user, role } = useSelector((state) => state.auth);
  const [isEdit, setEdit] = useState(false)
  const [indata, setindata] = useState({})
  const [upimage, setimage] = useState(null)

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getuserbyid())
  }, []);

  const toggleEdit = () => {
    setEdit(prev => !prev)

  }





  const handlesubmitdata = (values) => {

    if (upimage) {
      dispatch(uploadimage(upimage)).then((imageurl) => {
        if (imageurl)
          dispatch(updateUser2({
            full_name: values.full_name,
            display_name: values.display_name,
            email: values.email,
            phone: values.phone,
            country: values.country,
            state: values.state,
            address: values.address,
            description: values.description,
            image: imageurl,
            user_id: user.id
          })).then((res) => {
            if (res?.data?.resCode === 200) router.push("/specs");
          });
        else console.log("cannot upload")
      })
    }
    else {
      dispatch(updateUser2({
        full_name: values.full_name,
        display_name: values.display_name,
        email: values.email,
        phone: values.phone,
        country: values.country,
        state: values.state,
        address: values.address,
        description: values.description,
        user_id: user.id
      })).then((res) => {
        if (res?.data?.resCode === 200) router.push("/specs");
      });
    }




  }



  const formik = useFormik({
    initialValues: indata,
    enableReinitialize: true,
    onSubmit: handlesubmitdata,
    validationSchema: Yup.object().shape({
      full_name: Yup.string().required('Full name is required'),
      phone: Yup.string(),
      full_name: Yup.string().required('Full name is required'),
      pronouns: Yup.string().required(),
      // role: Yup.string().required(),
    }),
  })
  console.log("error", formik.errors)
  useEffect(() => {
    if (user) {
      setindata({ ...user, user_id: user.id, role: role?.name })
    }

  }, [user, role]);

  return (
    <div className="grid place-items-center">
      {/* <ProfileFileUpdate/> */}
      <div className="flex justify-between w-full max-w-[706px]">
        <h1 className="text-white font-[700] text-[32px] leading-[48px]">Profile</h1>
        {/* <div className="flex items-center justify-center">

          <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={() => { }} />
          <div className="ml-[15px]">
            <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
          </div>
        </div> */}
      </div>
      <ProfileFileUpdate setimage={setimage} upimage={upimage} defaultImage={user.image || null} />
      {(
        <form
          onSubmit={formik.handleSubmit}
          className="mt-[24px] sm:mt-[24px] w-full grid md:grid-cols-2 grid-cols-1 max-w-[706px] gap-3 place-items-center">
          <InputField
            placeholder="Full Name"
            label="Full Name"
            onChangeHandler={formik.handleChange}
            value={formik.values.full_name}
            name={"full_name"}
            type={"text"}
            error={formik.errors.full_name}
            touched={formik.touched.full_name}
            showerror
            fullwidth
          />
          <InputField
            placeholder="Display Name"
            label="Display Name"
            onChangeHandler={formik.handleChange}
            value={formik.values.display_name}
            name={"display_name"}
            type={"text"}
            error={formik.errors.display_name}
            touched={formik.touched.display_name}
            showerror
            fullwidth
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
            disabled
            fullwidth
          />
          <InputField
            placeholder=""
            label="Contact No."
            onChangeHandler={formik.handleChange}
            value={formik.values.phone}
            name={"phone"}
            type={"text"}
            error={formik.errors.phone}
            touched={formik.touched.phone}
            showerror
            fullwidth
          />
          <SelectWithSearch
            label={"Country"}
            placeholder={"Country"}
            options={[]}
            value={formik.values.country}
            onChangeHandler={formik.handleChange}
            error={formik.errors.country}
            touched={formik.touched.country}
            showerror
            fullwidth
          />

          <SelectWithSearch
            label={"State"}
            placeholder={"State"}
            options={[]}
            value={formik.values.state}
            onChangeHandler={formik.handleChange}
            error={formik.errors.state}
            touched={formik.touched.state}
            showerror
            fullwidth
          />
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
            fullwidth
          />

          <div className="col-span-1 md:col-span-2 w-full flex justify-center">
            <InputField
              placeholder=""
              label="Address"
              onChangeHandler={formik.handleChange}
              value={formik.values.address}
              name={"address"}
              type={"text"}
              error={formik.errors.address}
              touched={formik.touched.address}
              showerror
              fullwidth
            />
          </div>




          <div className="col-span-1 md:col-span-2 w-full flex justify-center">
            <TextAreaField
              placeholder=""
              label="Description"
              onChangeHandler={formik.handleChange}
              value={formik.values.description}
              name={"description"}
              type={"text"}

              error={formik.errors.description}
              touched={formik.touched.description}
              showerror
              fullwidth
            />
          </div>


          <div className="col-span-1 md:col-span-2">
            <ConditionalButtons
              condition={true}
              disabled={!formik.dirty}
              label={"Save Changes"}
              type="submit"
            />
          </div>

        </form>
      )}


    </div>
  );
}

export default OnboardingForm;
