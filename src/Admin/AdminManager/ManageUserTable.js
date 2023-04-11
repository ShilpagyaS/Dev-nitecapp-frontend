import { AddUsersAndAdmins, EditUsersAndAdmins } from '@/components/modal/NewDminFlowModals'
import { createUserAndUpdateList, emptyAllUsers, getAllUsersandAdmins, putUserandUpdatetheList } from '@/store/slices/manageusers'
import { DeleteCircularButton, EditCircularButton } from '@/utils/CircularButton'
import { enUrl } from '@/utils/encoderfunc'
import SwitchComp from '@/utils/SwitchComp'
import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ManageUserTable() {
  // const router = useRouter();
  const { adminsList, userList } = useSelector((state) => state.manageusers)
  const [newList, setList] = useState([])
  const [adminList, setAdminList] = useState([])
  const [AddModal, setAdd] = useState(false)
  const [EditModal, setEdit] = useState(false)
  const [globalData, setGlobal] = useState({})
  const dispatch = useDispatch()


  // useEffect(() => {

  //   dispatch(getAllUsersandAdmins())

  //   return () => {
  //     dispatch(emptyAllUsers())
  //   }
  // }, [])


  useEffect(() => {
    let dummy = userList?.map(
      (element) => {
        return {
          id: element.id,
          itemImage: element.image,
          itemName: element.full_name,
          email: element.email,
          data: element,
        }

      }
    ) || []
    console.log(dummy);
    setList([...dummy])

  }, [userList])
  useEffect(() => {
    let dummy = adminsList?.map(
      (element) => {
        return {
          id: element.id,
          itemImage: element.image,
          itemName: element.full_name,
          email: element.email,
          data: element,
        }

      }
    ) || []
    console.log(dummy);
    setAdminList([...dummy])

  }, [adminsList])

  const mockData = [
    {
      id: 1,
      itemImage: '',
      itemName: 'Old Fashioned',
      showHideStatus: true,
      popularity: 'New',

    },
    {
      id: 2,
      itemImage: '',
      itemName: 'Darusi',
      showHideStatus: true,
      popularity: 'New',

    },
    {
      id: 3,
      itemImage: '',
      itemName: 'SouthSide',
      showHideStatus: false,
      popularity: 'None',

    },
    {
      id: 4,
      itemImage: '',
      itemName: 'Old Monk',
      showHideStatus: false,
      popularity: 'None',

    },
    {
      id: 5,
      itemImage: '',
      itemName: 'Old Fashioned2',
      showHideStatus: true,
      popularity: 'None',

    },
  ]
  const HeaderArray = ["Profile Image", "Name", "Email", "Action"]
  function OuterRows({ element }) {

    return (
      <>
        <td className='flex flex-row items-center justify-center p-[12px]'>
          <div className='relative flex flex-row items-center justify-center p-1 bg-[#0C0C0C] border border-[#3C3C3C] h-[106px] w-[106px] rounded-full'
          >
            {/* <Image src={element.itemImage} */}
            {/* public\asset\User avatar default.png */}
            {element.itemImage ?
              <Image src={element.itemImage}
                alt="image"
                className='rounded-full'
                fill
                style={{ objectFit: 'cover' }} />
              :
              <Image src={'/asset/User avatar default.png'}
                alt="image"
                className='rounded-full'
                fill
                style={{ objectFit: 'cover' }} />
            }
          </div>
        </td>
        <td >
          <div className='flex flex-row items-center justify-center p-1'>
            <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px] text-white'>
              {element.itemName ? element.itemName : <span className='italic text-[#959595]'>

                Not Onboarded Yet
              </span>
              }
            </p>
          </div>
        </td>
        <td >
          <div className='flex flex-row items-center justify-center p-1'>
            <p className='not-italic font-semibold text-base leading-7 tracking-[-0.624px] text-white'>
              {element.email}
            </p>
          </div>
        </td>
        <td >
          <div className='flex flex-row items-center justify-center p-1'>

            <EditCircularButton onClickHandler={() => {
              // router.push(`/specs/spirit/${element.itemName}?id=${element.id}`);
              setGlobal({ ...element.data })
              setEdit(true)
            }}
            />
            <div className='ml-[15px]'>

              <DeleteCircularButton />
            </div>
          </div>
        </td>
      </>
    )
  }
  function onSave(name, logo) {
    console.log(name);
    let data = {
      drink_category_name: name,
      type: 'spirit'
    }
    // dispatch(createCategory('spirit', data))

  }
  function onEdit(name, logo, id) {
    console.log(name, logo, id);
    let data = { ...globalData }
    data =
    {
      ...data,
      drink_category_name: name,
      image: logo,
    }
    console.log(data);

    // dispatch(putCategory('spirit', id, data))

  }
  return (
    <>
      {AddModal &&
        <AddUsersAndAdmins
          isModalOpen={AddModal}
          onClickCancel={() => { setAdd(false) }}
          onSave={(data) => {
            return dispatch(createUserAndUpdateList(data))

          }}
        />
      }

      {EditModal &&
        <EditUsersAndAdmins
          isModalOpen={EditModal}
          onClickCancel={() => { setEdit(false) }}
          data={globalData}
          onSave={(data) => {
            return dispatch(putUserandUpdatetheList(data))
          }}
        />
      }

      <div className='admincomponents mt-[23px]'>
        <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
          <p>
            Users
          </p>
        </div>
        <TableContainerWithButtons label={'ADD USER'} buttonFunction={() => { setAdd(true); }} OuterRows={OuterRows} mockData={newList} HeaderArray={HeaderArray} pageSize={5} />
      </div>
      <div className='admincomponents mt-[23px]'>
        <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
          <p>
            Admins
          </p>
        </div>
        <TableContainerWithButtons label={'ADD ADMIN'} buttonFunction={() => { setAdd(true); }} OuterRows={OuterRows} mockData={adminList} HeaderArray={HeaderArray} pageSize={5} />
      </div>
    </>
  )
}

export default ManageUserTable