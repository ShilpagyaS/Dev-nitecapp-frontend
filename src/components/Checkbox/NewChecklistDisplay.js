import { CircularProgressForCheckbox } from '@/utils/CircularProgress'
import React, { useEffect, useState } from 'react'

function NewChecklistDisplay({ tasks, onClickCheck, onflagged, onCompleted, setProgresspercentage, setchecked }) {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        if (tasks.length > 0) {
            let dummy = tasks.filter((t) => t.isChecked || t.isFlagged)
            let cheked = tasks.filter((t) => t.isChecked)
            setProgress(parseInt((dummy.length / tasks.length) * 100))
            setProgresspercentage(parseInt((cheked.length / tasks.length) * 100))
            setchecked(cheked.length)
        }
    }, [tasks])

    return (
        <div className='bg-transparent w-full  px-[15px]'>
            {
                tasks.map((task, i) =>
                    <>  {
                        (task.isChecked == false && task?.isFlagged != true) &&
                        <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-white hover:border-primary-base transition-all'

                            onClick={() => { onClickCheck(i, true) }}>
                            <div className='flex items-center my-[12px]'>

                                <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-white bg-transparent'>

                                </div>
                                <h3 className='h-full w-full ml-[15px] bg-transparent'>
                                    {task.task}
                                </h3>
                            </div>
                            <div className='flex bg-transparent'>
                                {/* <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                    <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                        Ritwik K. (08/10/23) 10:32pm
                                    </h3>
                                </div> */}
                                <div className='flex items-center mx-[2px]' onClick={(e) => { e.stopPropagation() }}>
                                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99178 18.6773L2.16602 22.1179V3.93223C2.16602 3.38933 2.65105 2.94922 3.24935 2.94922H22.7493C23.3477 2.94922 23.8327 3.38933 23.8327 3.93223V17.6943C23.8327 18.2373 23.3477 18.6773 22.7493 18.6773H6.99178ZM7.58268 9.83027V11.7963H9.74935V9.83027H7.58268ZM11.916 9.83027V11.7963H14.0827V9.83027H11.916ZM16.2493 9.83027V11.7963H18.416V9.83027H16.2493Z" className='fill-primary-base' />
                                    </svg>
                                </div>
                                <div className='flex items-center ml-[15px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true) }}>
                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H9.382C9.7607 0 10.107 0.236526 10.2764 0.610978L11 2.21053H17C17.5523 2.21053 18 2.70537 18 3.31579V15.4737C18 16.0841 17.5523 16.5789 17 16.5789H10.618C10.2393 16.5789 9.893 16.3424 9.7236 15.968L9 14.3684H2V21H0V0Z"
                                            className='fill-white'
                                        />
                                    </svg>

                                </div>
                            </div>

                        </div>
                    }{
                            (task.isChecked == false && task?.isFlagged == true) &&
                            <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-[#191919] cursor-pointer duration-200 border border-white transition-all'

                                onClick={() => {
                                    //  onClickCheck(i, true)
                                }}>
                                <div className='flex items-center my-[12px] bg-transparent'>

                                    <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-white bg-transparent'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent'>
                                        {task.task}
                                    </h3>
                                </div>
                                <div className='flex bg-transparent'>
                                    <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                        <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                            Ritwik K. (08/10/23) 10:32pm
                                        </h3>
                                    </div>
                                    <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => { e.stopPropagation() }}>
                                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                                            <path d="M6.99178 18.6773L2.16602 22.1179V3.93223C2.16602 3.38933 2.65105 2.94922 3.24935 2.94922H22.7493C23.3477 2.94922 23.8327 3.38933 23.8327 3.93223V17.6943C23.8327 18.2373 23.3477 18.6773 22.7493 18.6773H6.99178ZM7.58268 9.83027V11.7963H9.74935V9.83027H7.58268ZM11.916 9.83027V11.7963H14.0827V9.83027H11.916ZM16.2493 9.83027V11.7963H18.416V9.83027H16.2493Z" className='fill-primary-base' />
                                        </svg>
                                    </div>
                                    <div className='flex items-center ml-[15px] bg-transparent' onClick={(e) => { e.stopPropagation(); onflagged(i, false) }}>
                                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                                            <path d="M0 0H9.382C9.7607 0 10.107 0.236526 10.2764 0.610978L11 2.21053H17C17.5523 2.21053 18 2.70537 18 3.31579V15.4737C18 16.0841 17.5523 16.5789 17 16.5789H10.618C10.2393 16.5789 9.893 16.3424 9.7236 15.968L9 14.3684H2V21H0V0Z"
                                                className={`${task?.isFlagged == true ? 'fill-yellow-200' : ' fill-white'}`}
                                            />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                        }
                        {
                            task.isChecked == true &&
                            // <div className='rounded-[10px] flex items-center w-full h-full my-[10px] p-[12px] bg-[#191919]  border border-white  cursor-pointer'
                            <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black  border border-white  cursor-pointer'
                                onClick={() => { onClickCheck(i, false) }}>
                                <div className='flex items-center my-[12px]'>

                                    <div className='checkboxcircle h-[18px] w-[18px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-[#7B7B7B]'>
                                        {task.task}
                                    </h3>
                                </div>
                                <div className='flex bg-transparent'>
                                    <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                        <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                            Ritwik K. (08/10/23) 10:32pm
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        }
                        {
                            task?.subtasks?.length > 0 &&
                            <div className='ml-[10px]'>
                                <NewSubtaskList tasks={task?.subtasks} onClickCheck={() => { }} onCompleted={() => { }} />
                            </div>
                        }
                    </>
                )
            }
            {/* <div className='flex items-center justify-between w-full mt-[10px]'>

                <h3 className='text-base not-italic font-[16px] font-Inter text-white'>
                    Completed
                </h3>
                <div className='flex items-center'>
                    {
                        progress == 100 &&
                        <h3 className='text-base not-italic text-[16px] font-Inter text-primary-base cursor-pointer font-semibold mr-[10px] ' onClick={() => { onCompleted() }}>
                            All Done
                        </h3>
                    }

                    <CircularProgressForCheckbox innerText={progress} percentage={progress} />
                </div>
            </div> */}
        </div>
    )
}

export default NewChecklistDisplay

function NewSubtaskList({ tasks, onClickCheck, onCompleted }) {
    const [checked, setChecked] = useState(0)
    useEffect(() => {

    }, [tasks])

    return (
        <div className='bg-transparent w-full pl-[15px]'>
            {
                tasks.map((task, i) =>
                    <>  {
                        (task.isChecked == false && task?.isFlagged != true) &&
                        <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-white hover:border-primary-base transition-all'

                            onClick={() => { onClickCheck(i, true) }}>
                            <div className='flex items-center my-[12px]'>

                                <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-white bg-transparent'>

                                </div>
                                <h3 className='h-full w-full ml-[15px] bg-transparent'>
                                    {task.task}
                                </h3>
                            </div>
                            <div className='flex bg-transparent'>
                                {/* <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                    <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                        Ritwik K. (08/10/23) 10:32pm
                                    </h3>
                                </div> */}
                                <div className='flex items-center mx-[2px]' onClick={(e) => { e.stopPropagation() }}>
                                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99178 18.6773L2.16602 22.1179V3.93223C2.16602 3.38933 2.65105 2.94922 3.24935 2.94922H22.7493C23.3477 2.94922 23.8327 3.38933 23.8327 3.93223V17.6943C23.8327 18.2373 23.3477 18.6773 22.7493 18.6773H6.99178ZM7.58268 9.83027V11.7963H9.74935V9.83027H7.58268ZM11.916 9.83027V11.7963H14.0827V9.83027H11.916ZM16.2493 9.83027V11.7963H18.416V9.83027H16.2493Z" className='fill-primary-base' />
                                    </svg>
                                </div>
                                <div className='flex items-center ml-[15px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true) }}>
                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H9.382C9.7607 0 10.107 0.236526 10.2764 0.610978L11 2.21053H17C17.5523 2.21053 18 2.70537 18 3.31579V15.4737C18 16.0841 17.5523 16.5789 17 16.5789H10.618C10.2393 16.5789 9.893 16.3424 9.7236 15.968L9 14.3684H2V21H0V0Z"
                                            className='fill-white'
                                        />
                                    </svg>

                                </div>
                            </div>

                        </div>
                    }{
                            (task.isChecked == false && task?.isFlagged == true) &&
                            <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-[#191919] cursor-pointer duration-200 border border-white transition-all'

                                onClick={() => {
                                    //  onClickCheck(i, true)
                                }}>
                                <div className='flex items-center my-[12px] bg-transparent'>

                                    <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-white bg-transparent'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent'>
                                        {task.task}
                                    </h3>
                                </div>
                                <div className='flex bg-transparent'>
                                    <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                        <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                            Ritwik K. (08/10/23) 10:32pm
                                        </h3>
                                    </div>
                                    <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => { e.stopPropagation() }}>
                                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                                            <path d="M6.99178 18.6773L2.16602 22.1179V3.93223C2.16602 3.38933 2.65105 2.94922 3.24935 2.94922H22.7493C23.3477 2.94922 23.8327 3.38933 23.8327 3.93223V17.6943C23.8327 18.2373 23.3477 18.6773 22.7493 18.6773H6.99178ZM7.58268 9.83027V11.7963H9.74935V9.83027H7.58268ZM11.916 9.83027V11.7963H14.0827V9.83027H11.916ZM16.2493 9.83027V11.7963H18.416V9.83027H16.2493Z" className='fill-primary-base' />
                                        </svg>
                                    </div>
                                    <div className='flex items-center ml-[15px] bg-transparent' onClick={(e) => { e.stopPropagation(); onflagged(i, false) }}>
                                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                                            <path d="M0 0H9.382C9.7607 0 10.107 0.236526 10.2764 0.610978L11 2.21053H17C17.5523 2.21053 18 2.70537 18 3.31579V15.4737C18 16.0841 17.5523 16.5789 17 16.5789H10.618C10.2393 16.5789 9.893 16.3424 9.7236 15.968L9 14.3684H2V21H0V0Z"
                                                className={`${task?.isFlagged == true ? 'fill-yellow-200' : ' fill-white'}`}
                                            />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                        }
                        {
                            task.isChecked == true &&
                            // <div className='rounded-[10px] flex items-center w-full h-full my-[10px] p-[12px] bg-[#191919]  border border-white  cursor-pointer'
                            <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black  border border-white  cursor-pointer'
                                onClick={() => { onClickCheck(i, false) }}>
                                <div className='flex items-center my-[12px]'>

                                    <div className='checkboxcircle h-[18px] w-[18px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-[#7B7B7B]'>
                                        {task.task}
                                    </h3>
                                </div>
                                <div className='flex bg-transparent'>
                                    <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                        <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                            Ritwik K. (08/10/23) 10:32pm
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        }
                        {
                            task?.subtasks?.length > 0 &&
                            <div className='ml-[10px]'>
                                <NewSubtaskList tasks={task?.subtasks} onClickCheck={() => { }} onCompleted={() => { }} />
                            </div>
                        }
                    </>
                )
            }

        </div>
    )
}