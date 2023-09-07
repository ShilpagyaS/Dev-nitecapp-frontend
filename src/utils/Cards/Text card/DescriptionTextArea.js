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
      <textarea ref={textAreaRef} className={`notificationModal choice-container ${isEdit ? 'bg-[#2C2C2C]' : ''} w-full ${maxheight ? `max-h-[${maxheight}px]` : infiniteHeight ? '' : `max-h-[90px]`} py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none`}
        value={val}
        onChange={onChange} rows={1} style={{ resize: 'none', overflowY: 'auto' }} disabled={!isEdit ? true : false} />
    </div>


  )
}

export default DescriptionTextArea
export function DescriptionTextAreaGray({ content, textAreaRef, isEdit, maxheight, isSAve, infiniteHeight, disabled }) {
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
    <div className='bg-transparent'>
      <textarea ref={textAreaRef} className={`hidescrollbar choice-container bg-[#2C2C2C] w-full ${maxheight ? `max-h-[${maxheight}px]` : infiniteHeight ? '' : `max-h-[90px]`} py-2 px-4 flex justify-between text-white items-center text-left outline-none`}
        value={val}
        onChange={onChange} rows={1} style={{ resize: 'none', overflowY: 'auto' }} disabled={disabled ? true : false} />
    </div>


  )
}
export function DescriptionTextAreaGrayWintBorder({ content, textAreaRef, isEdit, maxheight, isSAve, infiniteHeight, disabled, placeholder }) {
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
    <div className='bg-transparent'>
      <textarea ref={textAreaRef} className={`hidescrollbar placeholder:text-[#959595] choice-container border border-[#363636] rounded-[7px] bg-[#101010] w-full ${maxheight ? `max-h-[${maxheight}px]` : infiniteHeight ? '' : `max-h-[90px]`} py-2 px-4 flex justify-between text-white items-center text-left outline-none`}
        value={val}
        placeholder={placeholder || ''}
        onChange={onChange} rows={1} style={{ resize: 'none', overflowY: 'auto' }} disabled={disabled ? true : false} />
    </div>


  )
}


export function DescriptionTextAreaGrayWintBorderWithDebounce({ content, textAreaRef,
  isEdit, maxheight, isSAve,
  infiniteHeight, disabled,
  placeholder, debounceCall }) {
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
      if(isSAve == true) {
        setVal(''); 
      //  textAreaRef.current.setAttribute('value','')
      }
      
    }
    , [isSAve])

  useEffect(resizeTextArea, [val]);

  const onChange = e => {
    setVal(e.target.value);

  };
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      debounceCall(val)
    }, 600);
    return () => clearTimeout(timeoutId);
  }, [val, 600]);

  return (
    // <div ref={textAreaRef} className="choice-container bg-[#2C2C2C] w-full  py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center" contentEditable={true} onClick={() => { console.log(textAreaRef.current.innerText) }}>
    //   {content}
    // </div>
    <div className='bg-transparent'>
      <textarea ref={textAreaRef} className={`hidescrollbar placeholder:text-[#959595] choice-container border border-[#363636] rounded-[7px] bg-[#101010] w-full ${maxheight ? `max-h-[${maxheight}px]` : infiniteHeight ? '' : `max-h-[90px]`} py-2 px-4 flex justify-between text-white items-center text-left outline-none`}
        defaultValue={val}
        value={isSAve ? val :textAreaRef?.current?.value}
        placeholder={placeholder || ''}
        onChange={onChange} rows={1} style={{ resize: 'none', overflowY: 'auto' }} disabled={disabled ? true : false} />
    </div>


  )
}

