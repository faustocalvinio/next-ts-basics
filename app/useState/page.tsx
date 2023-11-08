"use client"
import { ReturnHome } from '@/components/ReturnHome'
import { useState } from 'react';
import { useFormState } from 'react-dom';

interface User {
    name: string;
    date: Date;
    email: string;
    session_id: string;
};


function UserDataComponent  ({name,date}:User) {
    return (
        <h1>User : {name}</h1>
    )
}


const UseStatePage = () => {

    const [username, setUsername] = useState<string>("")
    const [userData, setuserData] = useState<User>()
    useFormState
    function handleChange (e:any) {
        e.preventDefault();
        console.log('clicked');
        setuserData({
            name: username,
            date: new Date(),
            email:  'test@test.com',
            session_id: crypto.randomUUID()
        })
    }

  return (
    <>
        <div>UseStatePage</div>
        <ReturnHome />
        <form className='flex flex-col gap-2 bg-gray-600 py-2 px-4 border border-white rounded-lg' action="" onSubmit={(e)=>handleChange(e)}>
            <input className='text-black py-2 px-4' type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
            <button className='bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-900' type="submit">Set User Data</button>
        </form>
        {
           username!=="" && <UserDataComponent name={username} date={userData?.date!} email={userData?.email!} session_id={userData?.session_id!}/>
        }
    </>
  )
}

export default UseStatePage