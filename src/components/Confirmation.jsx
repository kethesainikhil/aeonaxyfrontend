import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import {useSelector} from "react-redux"
const Confirmation = () => {

    const [navbar,setNavbar] = useState(false);
const user = useSelector((state) => state.user.userDetails?.data)
const location = useSelector((state)=>state.user.location)
console.log(location)
  return (
    <div className=''>

       <div   className={navbar ? 'h-96' : 'h-0'}>
       <Header navbar={navbar} setNavbar={setNavbar} />
       </div>
        <div className='h-full text-gray-600 sm:mt-32 mt-20   text-md text-center  text-opacity-75 my-10 flex flex-col sm:justify-center sm:items-center  '>
            <h1 className='text-center text-black  text-3xl font-bold'>Please Verify your email....</h1>
            <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='gray' opacity={0.7} width={400} height={200} viewBox="0 0 512 512"> <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            </div>
            <h1 className='py-4'>please verify your email we&apos;ve sent you an confirmation email to :</h1>
            <h3 className='h-10 font-bold text-black text-xl'>{user?.email}</h3>
            <p className=''>click the confirmation link in the email to begin using dribble</p>
            <p className='py-4'>Did&apos;t receive the email? check your spam folder if  <br /> you still didn&apos;t see it you can <span className='text-pink-500'>resend the confirmation email</span></p>
            <p>Wrong email? <span className='text-pink-500'>change your email</span></p>
        </div>
        <Footer />
    </div>
  )
}

export default Confirmation