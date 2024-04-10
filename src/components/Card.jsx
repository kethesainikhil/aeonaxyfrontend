import React, { useDebugValue } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch } from 'react-redux'
const Card = (props) => {
  const dispatch = useDispatch();
    const {src,title,description,name,handleRadio,radioClicked} = props;
  return (
    <div className={radioClicked ? "max-w-fit h-80 w-80 border-pink-500 rounded-xl  text-center border-4  px-10 hover:border-pink-500" : " max-w-fit w-80 h-80 rounded-xl border-4   text-center  px-10 "}>
        <div  className={radioClicked ? '-mt-32 bg-black  ' :""} >
        <img src={src} width="600px" height={600} className='' alt="dribblecover" />
        </div>
        <h3 className={radioClicked ? "pt-10 font-bold mb-2" : "pt-2 font-bold mb-2" } >{title}</h3>
        {
            radioClicked && <p className='text-sm opacity-65 mb-8 w-full' >{description}</p>
        }
        {radioClicked && <div onClick={(e)=>handleRadio(e,title)} className='text-pink-500 max-w-fit flex mx-auto border-pink-500 bg-pink-500 border-2 rounded-full py-2 px-2'>
        <svg className='text-white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"  viewBox="0 0 50 50">
<path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
</svg>
          </div>}
        {
          !radioClicked && 
          <input   className='border-2 outline-none customInput  size-8' type="radio" name={name} id={name } checked={radioClicked} readOnly onClick={(e)=>handleRadio(e,title)} />
        }

    </div>
  )
}

export default Card