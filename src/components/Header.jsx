import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Header = () => {
  return (
    <header className='header w-[50rem] h-[80vh] mx-auto flex flex-col justify-center items-center text-center'>
      <div className="title-border w-16 h-[1px] bg-white"></div>
      <h2 className='header-title text-white py-14 leading-[5.250rem] text-[4.750rem] font-["DM_Serif_Display",_serif]'>Start Your Journey with Tim & Be Inspired.</h2>
      <a href="" className='bg-white flex items-center gap-x-3  py-3 text-[.825rem] px-7 tracking-[.150em] font-["Open_Sans",_sans-serif]'>BOOK TIM TO SPEAK <BsArrowRight/></a>
    </header>
  )
}

export default Header
