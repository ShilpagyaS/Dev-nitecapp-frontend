import { getTasksBasedonIds } from '@/store/slices/checklist'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function NewAdminTaskDisplay({ id }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTasksBasedonIds(id))
    }, [])

    return (
        <div className='text-white'>NewAdminTaskDisplay</div>
    )
}

export default NewAdminTaskDisplay