import React, {useState} from 'react'
import arrowback from "../../assets/arrowback.png";
import arrowforward from "../../assets/arrowforwardwhite.png";



export default function AboutComponent() {
    const [aboutMe, setAboutMe] = useState(false)
    const extendAboutMe = () =>{
        setAboutMe(true)
    }
    const hideAboutMe = () =>{
        setAboutMe(false)
    }
  return (
    <>
    {!aboutMe && <div className="absolute right-0 text-black m-6 flex" onClick={extendAboutMe}>
        <img src={arrowback} alt="" className="mr-0 h-8 clickable"/>
          <div className="rotate-[270deg] clickable" id="about">
            ABOUT ME
          </div>
        </div>}
        {aboutMe && <div className="absolute right-0 text-white flex bg-gray-600 flex items-center" onClick={hideAboutMe}>
        <img src={arrowforward} alt="" className="ml-4 h-8 clickable"/>
          <div className=' text-center flex justify-center ml-10 mr-10 h-screen items-center text-white flex-col'>
            <h1 className='text-xl mb-4'>ABOUT ME</h1>
            <img src='https://live.staticflickr.com/65535/52659848824_38e17a0a81_h.jpg' className='h-14 w-14 object-cover rounded-full mb-2 border'/>
            <p className='text-xs'>My name is German I am a web developer, photographer, musician </p>
            <p className='text-xs'>artist and adventurer from Madrid, Spain. I tend to dedicate all</p>
        </div>
        </div>
        }
        </>
  )
}
