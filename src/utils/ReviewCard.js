import React from 'react'

function ReviewCard({ tasks }) {
    return (
        <div>
            <TasksAndSubtask tasks={tasks} />
        </div>
    )
}

export default ReviewCard
function TasksAndSubtask({ tasks }) {
    return (
        <div>
            {
                tasks.map((task, i) =>
                    <>  {
                        (task.isChecked == false && task?.isFlagged != true) &&
                        <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-[#363636] hover:border-white transition-all'

                            onClick={() => { }}>
                            <div className='flex items-center my-[12px]'>

                                <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

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
                                <div className='flex items-center mx-[2px] ' onClick={(e) => { }}>
                                    <div className='relative'>

                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5068 0H4.50225C2.01701 0 0 2.008 0 4.48424V9.86893V10.7694C0 13.2456 2.01701 15.2536 4.50225 15.2536H5.85293C6.09605 15.2536 6.42021 15.4157 6.57329 15.6138L7.92396 17.4057C8.51826 18.1981 9.49075 18.1981 10.085 17.4057L11.4357 15.6138C11.6068 15.3887 11.8769 15.2536 12.1561 15.2536H13.5068C15.992 15.2536 18.009 13.2456 18.009 10.7694V4.48424C18.009 2.008 15.992 0 13.5068 0ZM5.4027 9.0045C4.89845 9.0045 4.50225 8.5993 4.50225 8.10405C4.50225 7.6088 4.90745 7.2036 5.4027 7.2036C5.89795 7.2036 6.30315 7.6088 6.30315 8.10405C6.30315 8.5993 5.90695 9.0045 5.4027 9.0045ZM9.0045 9.0045C8.50025 9.0045 8.10405 8.5993 8.10405 8.10405C8.10405 7.6088 8.50926 7.2036 9.0045 7.2036C9.49975 7.2036 9.90495 7.6088 9.90495 8.10405C9.90495 8.5993 9.50876 9.0045 9.0045 9.0045ZM12.6063 9.0045C12.1021 9.0045 11.7059 8.5993 11.7059 8.10405C11.7059 7.6088 12.1111 7.2036 12.6063 7.2036C13.1016 7.2036 13.5068 7.6088 13.5068 8.10405C13.5068 8.5993 13.1106 9.0045 12.6063 9.0045Z"
                                                className='fill-primary-base bg-transparent'
                                            />
                                        </svg>
                                        <div className='w-[10px] h-[10px] border-black animate-bounce  bg-[#959595] border-[2px]  absolute right-[-2px] top-[-3px] rounded-full '>

                                        </div>
                                    </div>

                                </div>
                                {/* <div className='flex items-center mx-[2px]' onClick={(e) => { e.stopPropagation() }}>
                                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99178 18.6773L2.16602 22.1179V3.93223C2.16602 3.38933 2.65105 2.94922 3.24935 2.94922H22.7493C23.3477 2.94922 23.8327 3.38933 23.8327 3.93223V17.6943C23.8327 18.2373 23.3477 18.6773 22.7493 18.6773H6.99178ZM7.58268 9.83027V11.7963H9.74935V9.83027H7.58268ZM11.916 9.83027V11.7963H14.0827V9.83027H11.916ZM16.2493 9.83027V11.7963H18.416V9.83027H16.2493Z" className='fill-primary-base' />
                                    </svg>
                                </div> */}
                                <div className='flex items-center ml-[15px]' onClick={(e) => { }}>
                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.258 9.297L11.16 8.199C10.899 7.974 10.746 7.641 10.737 7.272C10.719 6.867 10.881 6.462 11.178 6.165L12.258 5.085C13.194 4.149 13.545 3.249 13.248 2.538C12.96 1.836 12.069 1.449 10.755 1.449H1.35V0.675C1.35 0.306 1.044 0 0.675 0C0.306 0 0 0.306 0 0.675V17.325C0 17.694 0.306 18 0.675 18C1.044 18 1.35 17.694 1.35 17.325V12.933H10.755C12.051 12.933 12.924 12.537 13.221 11.826C13.518 11.115 13.176 10.224 12.258 9.297Z"
                                            className='fill-white' />
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

                                    <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent text-white'>
                                        {task.task}
                                    </h3>
                                </div>
                                <div className='flex bg-transparent'>
                                    <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                        <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                            Ritwik K. (08/10/23) 10:32pm
                                        </h3>
                                    </div>
                                    <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => { }}>
                                        <div className='relative'>

                                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5068 0H4.50225C2.01701 0 0 2.008 0 4.48424V9.86893V10.7694C0 13.2456 2.01701 15.2536 4.50225 15.2536H5.85293C6.09605 15.2536 6.42021 15.4157 6.57329 15.6138L7.92396 17.4057C8.51826 18.1981 9.49075 18.1981 10.085 17.4057L11.4357 15.6138C11.6068 15.3887 11.8769 15.2536 12.1561 15.2536H13.5068C15.992 15.2536 18.009 13.2456 18.009 10.7694V4.48424C18.009 2.008 15.992 0 13.5068 0ZM5.4027 9.0045C4.89845 9.0045 4.50225 8.5993 4.50225 8.10405C4.50225 7.6088 4.90745 7.2036 5.4027 7.2036C5.89795 7.2036 6.30315 7.6088 6.30315 8.10405C6.30315 8.5993 5.90695 9.0045 5.4027 9.0045ZM9.0045 9.0045C8.50025 9.0045 8.10405 8.5993 8.10405 8.10405C8.10405 7.6088 8.50926 7.2036 9.0045 7.2036C9.49975 7.2036 9.90495 7.6088 9.90495 8.10405C9.90495 8.5993 9.50876 9.0045 9.0045 9.0045ZM12.6063 9.0045C12.1021 9.0045 11.7059 8.5993 11.7059 8.10405C11.7059 7.6088 12.1111 7.2036 12.6063 7.2036C13.1016 7.2036 13.5068 7.6088 13.5068 8.10405C13.5068 8.5993 13.1106 9.0045 12.6063 9.0045Z"
                                                    className='fill-primary-base bg-transparent'
                                                />
                                            </svg>
                                            <div className='w-[10px] h-[10px] border-black animate-bounce  bg-[#959595] border-[2px]  absolute right-[-2px] top-[-3px] rounded-full '>

                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex items-center ml-[15px] bg-transparent' onClick={(e) => { }}>
                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                                            <path d="M12.258 9.297L11.16 8.199C10.899 7.974 10.746 7.641 10.737 7.272C10.719 6.867 10.881 6.462 11.178 6.165L12.258 5.085C13.194 4.149 13.545 3.249 13.248 2.538C12.96 1.836 12.069 1.449 10.755 1.449H1.35V0.675C1.35 0.306 1.044 0 0.675 0C0.306 0 0 0.306 0 0.675V17.325C0 17.694 0.306 18 0.675 18C1.044 18 1.35 17.694 1.35 17.325V12.933H10.755C12.051 12.933 12.924 12.537 13.221 11.826C13.518 11.115 13.176 10.224 12.258 9.297Z"
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
                                onClick={() => {

                                }}>
                                <div className='flex items-center my-[12px]'>

                                    <div className='checkboxcircle h-[18px] w-[18px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-white'>
                                        {/* <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-[#7B7B7B]'> */}
                                        {task.task}
                                    </h3>
                                </div>
                                <div className='flex bg-transparent'>
                                    <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                        <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                            Ritwik K. (08/10/23) 10:32pm
                                        </h3>
                                    </div>
                                    <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => {

                                    }}>
                                        <div className='relative'>

                                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5068 0H4.50225C2.01701 0 0 2.008 0 4.48424V9.86893V10.7694C0 13.2456 2.01701 15.2536 4.50225 15.2536H5.85293C6.09605 15.2536 6.42021 15.4157 6.57329 15.6138L7.92396 17.4057C8.51826 18.1981 9.49075 18.1981 10.085 17.4057L11.4357 15.6138C11.6068 15.3887 11.8769 15.2536 12.1561 15.2536H13.5068C15.992 15.2536 18.009 13.2456 18.009 10.7694V4.48424C18.009 2.008 15.992 0 13.5068 0ZM5.4027 9.0045C4.89845 9.0045 4.50225 8.5993 4.50225 8.10405C4.50225 7.6088 4.90745 7.2036 5.4027 7.2036C5.89795 7.2036 6.30315 7.6088 6.30315 8.10405C6.30315 8.5993 5.90695 9.0045 5.4027 9.0045ZM9.0045 9.0045C8.50025 9.0045 8.10405 8.5993 8.10405 8.10405C8.10405 7.6088 8.50926 7.2036 9.0045 7.2036C9.49975 7.2036 9.90495 7.6088 9.90495 8.10405C9.90495 8.5993 9.50876 9.0045 9.0045 9.0045ZM12.6063 9.0045C12.1021 9.0045 11.7059 8.5993 11.7059 8.10405C11.7059 7.6088 12.1111 7.2036 12.6063 7.2036C13.1016 7.2036 13.5068 7.6088 13.5068 8.10405C13.5068 8.5993 13.1106 9.0045 12.6063 9.0045Z"
                                                    className='fill-primary-base bg-transparent'
                                                />
                                            </svg>
                                            <div className='w-[10px] h-[10px] border-black animate-bounce  bg-[#959595] border-[2px]  absolute right-[-2px] top-[-3px] rounded-full '>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center ml-[15px] bg-transparent' onClick={(e) => {

                                    }}>
                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                                            <path d="M12.258 9.297L11.16 8.199C10.899 7.974 10.746 7.641 10.737 7.272C10.719 6.867 10.881 6.462 11.178 6.165L12.258 5.085C13.194 4.149 13.545 3.249 13.248 2.538C12.96 1.836 12.069 1.449 10.755 1.449H1.35V0.675C1.35 0.306 1.044 0 0.675 0C0.306 0 0 0.306 0 0.675V17.325C0 17.694 0.306 18 0.675 18C1.044 18 1.35 17.694 1.35 17.325V12.933H10.755C12.051 12.933 12.924 12.537 13.221 11.826C13.518 11.115 13.176 10.224 12.258 9.297Z"
                                                className={`fill-[#262323]`}
                                            />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                        }
                        {
                            task?.subtasks?.length > 0 &&
                            <div className='ml-[20px]'>
                                <TasksAndSubtask tasks={task?.subtasks} onClickCheck={() => { }} onCompleted={() => { }} />
                            </div>
                        }
                    </>
                )
            }

        </div>
    )
}