import React, { useEffect, useId, useRef, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch ,useSelector} from 'react-redux';
import { addUserAsync } from '../features/AddUserSlice';
const Signup = () => {
  const [error, setError] = useState({});
  const dispatch  = useDispatch();
  const nameRef = useRef(null); // Initialize with null
  const userNameRef = useRef(null); // Initialize with null
  const emailRef = useRef(null); // Initialize with null
  const passwordRef = useRef(null); // Initialize with null
  const tandcRef = useRef(false); // Initialize with null
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.userDetails)

  const onSubmit = (e) => {
    console.log(error)
    e.preventDefault()
    const data = {
      name: nameRef.current.value,
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      "t&c": tandcRef.current.checked
    }
    switch (true) {
        
      case !data.name:
        nameRef?.current.classList.add("bg-red-100");
        setError({field:"name",message:"Name is required"});
        return;
      case data.username.length === 0:
        userNameRef?.current.classList.add("bg-red-100");
        setError({field:"userName",message:"Username is required"});
        return;
      case data.email.length === 0:
        emailRef?.current.classList.add("bg-red-100");
        setError({field:"email",message:"Email is required"});
        return;
      case data.password.length === 0:
        passwordRef?.current.classList.add("bg-red-100");
        setError({field:"password",message:"Password is required"});
        return;
      case data.password.length < 6:
        passwordRef?.current.classList.add("bg-red-100");
        setError({field:"password",message:"Password must be at least 6 characters"});
        return;
      case !data["t&c"]:
        setError({field:"t&c",message:"Please accept the terms and conditions"});
        return;
      default:
        break;
        
    }
    dispatch(addUserAsync(data))

  };
  const handleInputChange = (ref) => {
    ref.current.classList.remove("bg-red-100");
    setError("");
  };
  useEffect(()=>{
    if(user?.data){
      navigate("/profile")
    }
    if(user?.msg){
      if(user?.msg.code === "P2002"){
        if(user?.msg.meta.target.includes("userName")){
          userNameRef.current.className =" border-none focus:outline-none p-2 rounded-md bg-red-100"
        }
        if(user?.msg.meta.target.includes("email")){
          emailRef.current.className =" border-none focus:outline-none p-2 rounded-md bg-red-100"
        }
        setError({field:user?.msg.meta.target,message:`${user?.msg.meta.target} already exists`})
      }
    }
  },[user,navigate])


  

  return (
    <main className='py-8'>
      <div className='sm:flex sm:justify-end hidden  sm:px-16 gap-2 font-semibold'>
        Already a member?<Link to="/login"><span className='text-blue-700'>Sign In</span></Link>
      </div>
      <section className='flex justify-center'>
        <form onSubmit={onSubmit}>
          <div className='pt-4 h-20 mb-10'>
            <h1 className='font-bold text-3xl text-center'>Sign up to Dribble</h1>
            {(error.field && error.message) && <p className='text-red-600 mt-4 text-center'>{error.message}</p>}
          </div>
          <div className='flex mx-auto sm:mx-0 sm:gap-4 flex-col sm:flex-row w-3/4'>
            <div className='flex flex-col mb-8 sm:mr-4'>
              <label className='flex items-center gap-2 font-bold' htmlFor="name">{(error.field == "name" )&& <svg className='' fill='#FF0000' height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.5 440C588 472 564.8 512 527.9 512H48.1c-36.9 0-60-40.1-41.6-72L246.4 24c18.5-32 64.7-32 83.2 0l239.9 416zM288 354c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46zm-43.7-165.3l7.4 136c.3 6.4 5.6 11.3 12 11.3h48.5c6.4 0 11.6-5 12-11.3l7.4-136c.4-6.9-5.1-12.7-12-12.7h-63.4c-6.9 0-12.4 5.8-12 12.7z"/></svg>}Name</label>
              <input className = {(error.field == "name" ) ? "border-none focus:outline-none p-2 rounded-md bg-red-100" : "border-none focus:outline-none p-2 rounded-md bg-slate-200"}  id="name" ref={userNameRef}   type="text" placeholder='Name' ref={nameRef} onChange={() => handleInputChange(nameRef)} />
            </div>
            <div className='flex flex-col mb-8'>
              <label className='flex items-center gap-2 font-bold' htmlFor="username">{(error.field == "userName" )&& <svg className='' fill='#FF0000' height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.5 440C588 472 564.8 512 527.9 512H48.1c-36.9 0-60-40.1-41.6-72L246.4 24c18.5-32 64.7-32 83.2 0l239.9 416zM288 354c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46zm-43.7-165.3l7.4 136c.3 6.4 5.6 11.3 12 11.3h48.5c6.4 0 11.6-5 12-11.3l7.4-136c.4-6.9-5.1-12.7-12-12.7h-63.4c-6.9 0-12.4 5.8-12 12.7z"/></svg>}Username</label>
              <input className = {(error.field == "userName" ) ? "border-none focus:outline-none p-2 rounded-md bg-red-100" : "border-none focus:outline-none p-2 rounded-md bg-slate-200"} type="text" ref={userNameRef}  placeholder='Username' onChange={() => handleInputChange(userNameRef)} />
            </div>
          </div>
          <div className='flex flex-col mb-8 w-3/4 mx-auto sm:mx-0 sm:w-full '>
            <label className='flex items-center gap-2 font-bold' htmlFor="email">{(error.field == "email" )&& <svg className='' fill='#FF0000' height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.5 440C588 472 564.8 512 527.9 512H48.1c-36.9 0-60-40.1-41.6-72L246.4 24c18.5-32 64.7-32 83.2 0l239.9 416zM288 354c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46zm-43.7-165.3l7.4 136c.3 6.4 5.6 11.3 12 11.3h48.5c6.4 0 11.6-5 12-11.3l7.4-136c.4-6.9-5.1-12.7-12-12.7h-63.4c-6.9 0-12.4 5.8-12 12.7z"/></svg>}Email</label>
            <input className = {(error.field == "email" ) ? "border-none focus:outline-none p-2 rounded-md bg-red-100" : "border-none focus:outline-none p-2 rounded-md bg-slate-200"} type="email" ref={emailRef} placeholder='Email' onChange={() => handleInputChange(emailRef)}  />
          </div>
          <div className='flex flex-col mb-8 w-3/4 mx-auto sm:mx-0 sm:w-full'>
            <label className='flex items-center gap-2 font-bold' htmlFor="password">{(error.field == "password" )&& <svg className='' fill='#FF0000' height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.5 440C588 472 564.8 512 527.9 512H48.1c-36.9 0-60-40.1-41.6-72L246.4 24c18.5-32 64.7-32 83.2 0l239.9 416zM288 354c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46zm-43.7-165.3l7.4 136c.3 6.4 5.6 11.3 12 11.3h48.5c6.4 0 11.6-5 12-11.3l7.4-136c.4-6.9-5.1-12.7-12-12.7h-63.4c-6.9 0-12.4 5.8-12 12.7z"/></svg>}Password</label>
            <input className = {(error.field == "password" ) ? "border-none focus:outline-none p-2 rounded-md bg-red-100" : "border-none focus:outline-none p-2 rounded-md bg-slate-200"} type="password" ref={passwordRef} placeholder='6+ characters' onChange={() => handleInputChange(passwordRef)}  />
          </div>
          <div className='flex gap-1 px-4  sm:px-0 pr-8 sm:pr-0'>
            <input className='sm:h-4 mt-0 sm:w-6 sm:mt-2 h-8 w-8 ml-7 sm:ml-0'  type="checkbox" name="t&c" id="t&c" ref={tandcRef} />
            <label htmlFor="t&c" className='opacity-80'>
              Creating an account means you&apos;re okay with our <span className='text-blue-700 font-semibold'>Terms of <br className='hidden sm:flex' />Service,Privacy Policy, </span>and our default <span className='text-blue-700 font-semibold'>Notification <br className='hidden sm:flex' />Settings.</span>
            </label>
          </div>
          <button type='submit' className='sm:mx-0 bg-pink-600 flex mx-auto py-3 px-12 text-white font-bold rounded-lg mt-8'>Create Account</button>
          <div className='flex justify-center py-2 sm:hidden  sm:px-16 gap-2 font-semibold'>
        Already a member?<Link to="/login"><span className='text-blue-700'>Sign In</span></Link>
      </div>
          <div className='px-12 sm:px-0' >
            <p className='text-sm opacity-65 pt-6'>This site is protected by reCAPTCHA and the Google <br />
            <span className='text-blue-700 font-semibold'>Privacy Policy</span> and <span className='text-blue-700 font-semibold'>Terms of Service</span> apply.</p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Signup;
