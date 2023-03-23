import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Image from "next/image";
import DetailsMock from "../../../mock/DetailsMock.json";
import EditCard from "@/utils/Cards/Text card/EditCard";
import IngredientContainer from "./IngredientContainer";
import MethodContainer from "./MethodContainer";
import Presentations from "./Presentations";
import LessonsSection from "./LessonsSection";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import ConditionalButton from "./ConditionalButton";
import ChipWithLeftButton, { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import Simplecard from "@/utils/Cards/Text card/Simplecard";
import { AddGeneric, AddNewTitle, AddTitle, DeleteSection } from "@/components/modal/adminmodal";
import GenericCard from "./GenericCard";

const CocktailAdminDetailPage = () => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const isTablet = useMediaQuery("(max-width: 786px)");
  const ingridients = DetailsMock.ingridients;
  const presentation = DetailsMock.presentation;
  const method = DetailsMock.method;
  const lesson = DetailsMock.lesson;
  const notes = DetailsMock.notes;
  let superData = {
    cocktail_name: 'SouthSide',
    description: " A pre-Prohibition classic cocktail made popular at the “21 Club” in New York. A refreshing combination of Tanqueray gin, citrus + a kiss of mint.",
    ingredients: {},
    methods: {},
    presentation: {},
    image: {},

  }

  console.log(superData);
  const [newMockData, setNewMockData] = useState({
    ingredients: {
      values: [],
      type: 1,
      isActive: true
    },
    methods: {
      values: [],
      type: 0,
      isActive: false

    },
    presentation: {
      values: [],
      type: 1,
      isActive: true

    }
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEdit, setEdit] = useState(false)
  const textAreaRef = useRef(null);


  const toggleEdit = () => {
    setEdit(prev => !prev)
    console.log(textAreaRef.current.innerText);
  }

  // new generic approach
  useEffect(() => {
    console.log(newMockData);

  }, [newMockData])

  function addNewTitle(name) {
    setNewMockData(((prev) => {
      return {
        ...prev,
        [name]: {
          type: null,
          values: [],
        }
      }
    }))

  }
  function setType(title, type, desc, quantity) {
    let firstval = {}
    if (type == 0)
      firstval = {
        desc: desc
      }
    if (type == 1)
      firstval = {
        desc: desc,
        quantity: quantity
      }

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          type: type,
          values: [{ ...firstval }],
        }
      }
    }))

  }
  function setActive(title, data) {
    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          isActive: data,
        }
      }
    }))
    superData = { ...superData, ...newMockData }
    console.log('superData', superData);

  }
  function addValues(title, data) {

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          values: [...prev[title].values, { ...data }],
        }
      }
    }))

  }
  function editValues(title, data, index) {

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          values: prev[title].values.map((e, i) => {
            if (i == index)
              return { ...data }
            return { ...e }

          }
          ),
        }
      }
    }))

  }
  function deleteItems(title, data) {

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          values: [...data]
        }
      }
    }))

  }
  function deleteSection(title) {
    setNewMockData(((prev) => {
      const copy = { ...prev }
      delete copy[title]
      console.log(copy);
      return copy

    }))

  }
  return (
    <>
      {isAddModalOpen && <AddNewTitle
        isModalOpen={isAddModalOpen}
        onClickCancel={() => { setIsAddModalOpen(false) }}
        onSave={addNewTitle}
        title={'Title'}

      />
      }
      {isEditModalOpen && <AddGeneric
        isModalOpen={isEditModalOpen}
        onClickCancel={() => { setIsEditModalOpen(false) }}
        onSave={addDesc}
        title={'Title'}

      />
      }

      <div className="detail-page-container">
        <div className="flex flex-row items-center justify-between">

          <div className="text-container ">
            <p className="text-white text-[14px]">
              <span className="text-[#CCCCCC]">Specs / Coctail /</span> Southside
            </p>
          </div>
          <div className="flex items-center justify-center">

            <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={toggleEdit} />
            <div className="ml-[15px]">
              <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
            </div>
          </div>
        </div>
        <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
          <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">
            <div className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${isMobile ? "block m-auto" : "mr-[31px] "
              }`}>
              <Image src="/asset/coctail1.png" className="w-full" fill />

            </div>
            <div className="editbutton flex text-[#929292] ">
              <Image
                src={'/asset/EditVector.svg'}
                // src={'/asset/DeleteVector.svg'}
                width={20}
                height={20}
                className=""
              />
              <div className="ml-[12px]">
                Edit Image
              </div>
            </div>
          </div>

          <div className="desc-container inline-block w-full  text-white">
            <div
              className={`heading-container mb-8 flex justify-between items-center ${isMobile && "text-center"}`}
            >
              <div
                className={`w-full flex items-center ${isMobile && "justify-around"
                  }`}
              >
                <h3 className="title text-[24px] font-bold mr-[16px]" >

                  <EditCard editContent={superData.cocktail_name} isEdit={isEdit} />
                </h3>
                <div className="status-text text-[18px]">
                  <EditCard editContent={"Medium(12%)"} isEdit={isEdit} />
                </div>
              </div>
            </div>

            <p
              className={`description text-[16px] leading-6 ${isMobile && "text-center"
                }`}
            >
              <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={`${superData.description}`} />
            </p>
          </div>
        </div>
        <div className="titleContainer">
          {/* <div className="flex items-center justify-between p-[10px]">
            <ChipWithLeftButton label={'ADD ITEM'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setIsAddModalOpen(true) }} />
          </div> */}

          {Object.keys(newMockData).map((e) =>
            <GenericCard title={e} type={newMockData[e].type} arr={newMockData[e].values} isEdit={isEdit} setTypeFunction={(title, type, input1, input2) => { setType(title, type, input1, input2) }}
              addValuesOnData={addValues} editValuesat={editValues} deleteItem={deleteItems} deleteSection={deleteSection} isActive={newMockData[e].isActive} setActive={setActive} />
          )}

        </div>
        {/* <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <IngredientContainer ingridients={ingridients} isEdit={isEdit} />
        </div>
        <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <Presentations presentation={presentation} isEdit={isEdit} />
        </div>
        <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <MethodContainer methods={method} isEdit={isEdit} />
        </div>
        <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <LessonsSection lesson={lesson} isEdit={isEdit} />
        </div> */}
      </div>
    </>
  );
};

export default CocktailAdminDetailPage;