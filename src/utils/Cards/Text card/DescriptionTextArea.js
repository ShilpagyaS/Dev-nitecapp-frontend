import React, { useEffect, useRef, useState } from 'react'
function DescriptionTextArea({ content, textAreaRef, isEdit, maxheight, isSAve, infiniteHeight }) {
  const [val, setVal] = useState(content);
  // const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(
    () => {
      setVal(content)
      // textAreaRef.current.value = content || '' 
    }
    , [content])
  useEffect(
    () => {
      isSAve == true ?
        setVal('') :
        ''
    }
    , [isSAve])

  useEffect(resizeTextArea, [val]);

  const onChange = e => {
    setVal(e.target.value);
  };
  return (
    // <div ref={textAreaRef} className="choice-container bg-[#2C2C2C] w-full  py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center" contentEditable={true} onClick={() => { console.log(textAreaRef.current.innerText) }}>
    //   {content}
    // </div>
    <div>
      <textarea ref={textAreaRef} className={`choice-container ${isEdit ? 'bg-[#2C2C2C]' : ''} w-full ${maxheight ? `max-h-[${maxheight}px]` : infiniteHeight ? '' : `max-h-[90px]`} py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none`}
        value={val}
        onChange={onChange} rows={1} style={{ resize: 'none', overflowY: 'hidden' }} disabled={!isEdit ? true : false} />
    </div>


  )
}

export default DescriptionTextArea

