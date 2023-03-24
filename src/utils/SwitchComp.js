import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function SwitchComp({ showHideStatus, onChangeHandler }) {
    const [enabled, setEnabled] = useState(showHideStatus)

    return (
        <div className="">
            <Switch
                checked={enabled}
                onChange={(e) => { onChangeHandler(e); setEnabled(e) }}
                className={`${enabled ? 'bg-[#3EAF3F]' : 'bg-[#C8C8C8]'}
          relative inline-flex h-[32px] w-[59px] shrink-0 cursor-pointer rounded-full border-2 items-center border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-[30px]' : 'translate-x-0'}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}
