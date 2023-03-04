import { useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { CustomButton, OrangeButtons } from "@/utils/Buttons";
import { RectangularCard } from "@/utils/SpecCards";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import DetailsMock from "../../mock/DetailsMock.json";
import NotesModal from "./Modal";

const DetailPage = () => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const isTablet = useMediaQuery("(max-width: 786px)");
  const ingridients = DetailsMock.ingridients;
  const presentation = DetailsMock.presentation;
  const method = DetailsMock.method;
  const lesson = DetailsMock.lesson;
  const notes = DetailsMock.notes;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditModalOpen = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(true);
  };

  const handleAddModalOpen = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

  return (
    <div className="detail-page-container">
      <NotesModal
        title="New Notes"
        desc="This is my Note: |"
        isModalOpen={isAddModalOpen}
        onClickCancel={handleCloseModal}
      />
      <NotesModal
        title="Edit Notes"
        desc="This is my Note: I like this pre-Prohibition classic cocktail made popular at the “21 Club” in New York. A refreshing combination of Tanqueray gin, citrus + a kiss of mint."
        deleteBtn={true}
        isModalOpen={isEditModalOpen}
        onClickCancel={handleCloseModal}
      />
      <div className="text-container ">
        <p className="text-white text-[14px]">
          <span className="text-[#CCCCCC]">Specs / Coctail/</span> Southside
        </p>
      </div>
      <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
        <div
          className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${
            isMobile ? "block m-auto" : "mr-[31px]"
          }`}
        >
          <Image src="/asset/coctail1.png" fill />
        </div>
        <div className="desc-container inline-block w-full  text-white">
          <div
            className={`heading-container mb-8 flex justify-between items-center ${
              isMobile && "text-center"
            }`}
          >
            <div
              className={`w-full flex items-center ${
                isMobile && "justify-around"
              }`}
            >
              <h3 className="title text-[24px] font-bold mr-[16px]">
                Southside
              </h3>
              <p className="status-text text-[18px]">Medium(12%)</p>
            </div>
            {!isMobile && <AiOutlineHeart size="25px" color="#fff" />}
          </div>
          <p
            className={`description text-[16px] leading-6 ${
              isMobile && "text-center"
            }`}
          >
            A pre-Prohibition classic cocktail made popular at the “21 Club” in
            New York. A refreshing combination of Tanqueray gin, citrus + a kiss
            of mint.
          </p>
        </div>
      </div>
      <div className="ingridients-container lg:flex lg:justify-between mb-[16px]">
        <div className="sub-heading-container">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold mb-[14px] lg:mb-0">
            Ingredients
          </h4>
        </div>
        <div className="ingridient-details-container">
          {ingridients.map((ingridient, i) => {
            return (
              <>
                <div className="choice-container bg-[#2C2C2C] w-full lg:w-[486px] py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px]">
                  <p className=" bg-transparent ">{ingridient.name}</p>
                  <p className=" bg-transparent ">{ingridient.quantity}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="presentation-container lg:flex lg:justify-between mb-[16px]">
        <div className="sub-heading-container">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold  mb-[14px] lg:mb-0">
            Presentation
          </h4>
        </div>
        <div className="presentation-details-container">
          {presentation.map((presentation, i) => {
            return (
              <>
                <div className="choice-container bg-[#2C2C2C] w-full lg:w-[486px] py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px]">
                  <p className=" bg-transparent ">{presentation.name}</p>
                  <p className=" bg-transparent ">
                    {presentation.presentation}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="method-container mb-[32px]">
        <div className="sub-heading-container flex justify-between items-center mb-[21px]">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold">
            Method
          </h4>
          <OrangeButtons label="Video" noPadding={true} />
        </div>
        <div className="method-details-container">
          {method.map((method, i) => {
            return (
              <>
                <div className="choice-container bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
                  <p className=" bg-transparent ">
                    <span className="mr-6 bg-transparent">{i + 1}</span>
                    {method.method}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="lessons-container mb-[32px]">
        <div className="sub-heading-container mb-[21px]">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold">
            Lessons
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-x-[73px] gap-y-[16px] lessons-details-container">
          {lesson.map((lesson, i) => {
            return (
              <div className={`${!isTablet ? "col-span-1" : "col-span-2"}`}>
                <RectangularCard
                  image={lesson.img}
                  title={lesson.title}
                  subtitle={lesson.subtitle}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="notes-container ">
        <div className="sub-heading-container flex justify-between items-center mb-[21px]">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold">
            Notes
          </h4>
          <OrangeButtons
            onClickHandler={handleAddModalOpen}
            label="Add Notes"
            noPadding={true}
          />
        </div>
        <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
          {notes.map((note, i) => {
            return <p className=" bg-transparent mr-24px">{note.note}</p>;
          })}
          <CustomButton
            onClickHandler={handleEditModalOpen}
            label="Edit"
            color="#F19B6C"
            noPadding={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
