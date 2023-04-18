import Breadcrumb from '@/components/Breadcrumb'
import GuestCard from '@/utils/Cards/GuestCard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton';
import Search from '@/utils/Search';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { enUrl } from '@/utils/encoderfunc'
const guests = [
    { name: 'Aaron' },
    { name: 'Seth' },
    { name: 'Roman' },
    { name: 'Jake' },
    { name: 'Snake' },
    { name: 'Harry' },
    { name: 'Uno' },
    { name: 'Aaron' },
    { name: 'Aasta' },
    { name: 'AronStoneColdasasdasdasdasdasdasd' },
    { name: 'Smith' },
];
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function GuestsList() {
    const [users, setUsers] = useState(guests);
    const [filteredusers, setfilterUSers] = useState(guests);
    const [selectedAlphabet, setSelectedAlphabet] = useState('');
    const [searchTerm, setSearch] = useState("")
    const router = useRouter();


    function filterData(value) {
        let filterDummy = []
        filterDummy = users.filter((item) =>

            item.name.toLowerCase().includes(value.toLowerCase())
        );
        console.log(filterDummy);
        setfilterUSers(filterDummy)
    }
    function OnAlphabetClick(alphabet) {
        if (selectedAlphabet == alphabet) {
            setSelectedAlphabet('')
            setUsers(guests)
            setfilterUSers(guests)
        }
        else {

            setSelectedAlphabet(alphabet)
            let dummy = guests.filter(e => e.name[0].toUpperCase() == alphabet)
            console.log(dummy);
            setUsers(dummy)
            setfilterUSers(dummy)
        }
    }
    return (
        <div>
            {/* <Breadcrumb /> */}
            <h2 className="text-white text-[24px] leading-9 font-bold ">
                Guests
            </h2>
            <div className='buttonRow flex pt-[18px] pb-[12.5px] px-[18px] items-center justify-between mb-[15px]'>
                <h2 className="text-white text-[24px] leading-9 font-bold ">
                    Guests
                </h2>
                <Search search={searchTerm} setSearch={(e) => {
                    setSearch(e);
                    filterData(e)
                }} />
            </div>
            <div className='alphabetscroll overflow-x-auto flex items-center justify-between'>
                {alphabets.map((e) =>
                    <h2 className={`${selectedAlphabet == e ? 'text-primary-base' : 'text-white'} cursor-pointer text-[20px] leading-9 font-bold m-[5px] `} onClick={() => { OnAlphabetClick(e) }} >
                        {e}
                    </h2>
                )}
            </div>
            <h2 className="text-white text-[18px] leading-9 font-bold ">
                {selectedAlphabet != '' ? selectedAlphabet : 'All'}
            </h2>
            <div className='grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4'>
                {filteredusers.map((e) =>
                    <GuestCard name={e.name} onClickHandler={() => {
                        router.push(`/guests/${enUrl(e.name)}?id=${1}`);

                    }} />
                )}
            </div>
        </div>
    )
}

export default GuestsList