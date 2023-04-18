import Breadcrumb from '@/components/Breadcrumb'
import GuestCard from '@/utils/Cards/GuestCard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton';
import Search from '@/utils/Search';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { enUrl } from '@/utils/encoderfunc'
import { AddGuest } from '@/components/modal/NewDminFlowModals';

const guests = [
    { image: '/asset/Kulbir.jpeg', name: 'Aaron' },
    { image: '/asset/Vanessa.jpeg', name: 'Seth' },
    { image: '/asset/Byron.jpeg', name: 'Roman' },
    { image: '/asset/Emily.jpeg', name: 'Jake' },
    { image: '/asset/Monique.jpeg', name: 'Snake' },
    { image: '/asset/Jonathon.jpeg', name: 'Harry' },
    { image: '/asset/Cafe Negroni.png', name: 'Uno' },
    { image: '/asset/Cafe Negroni (2).png', name: 'Aaron' },
    { image: '/asset/Cafe Negroni (3).png', name: 'Aasta' },
    { image: '/asset/Cafe Negroni (4).png', name: 'Steve' },
    { image: '/asset/Cafe Negroni (5).png', name: 'Smith' },
    { image: '', name: 'Smith' },
];
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
function AllGuests() {
    const [users, setUsers] = useState(guests);
    const [filteredusers, setfilterUSers] = useState(guests);
    const [selectedAlphabet, setSelectedAlphabet] = useState('');
    const [searchTerm, setSearch] = useState("")
    const router = useRouter();
    const [isAdd, setAddModal] = useState(false)

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
        <>
            {isAdd && <AddGuest
                isModalOpen={isAdd}
                onClickCancel={() => { setAddModal(false) }}
            />}

            <div>
                {/* <Breadcrumb /> */}

                <div className='buttonRow flex pt-[18px] pb-[12.5px] px-[18px] items-center justify-between mb-[15px]'>
                    <div className='flex items-center'>

                        <h1 className="heading text-white text-[32px] leading-[48px] font-bold mr-[15px]">
                            Guests
                        </h1>
                        <ChipWithLeftButton condition={true} label={'Add Guest'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => {
                            setAddModal(true)
                        }} />
                    </div>
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
                        <GuestCard image={e.image} name={e.name} onClickHandler={() => {
                            router.push(`/guests/${enUrl(e.name)}?id=${1}`);

                        }} />
                    )}
                </div>
            </div>
        </>
    )
}

export default AllGuests