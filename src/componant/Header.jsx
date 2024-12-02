import React, { useState } from 'react'
import Container from "../componant/Container"
import pic1 from '../assets/Logo.png'
import { CgMenu } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <section className='py-[25px]'>
        <Container className="flex ">
          <div className="w-1/4 justify-start">
            <img src={pic1} alt="pic1" />
          </div>
          <div className="w-1/2">
            <ul className={`lg:flex z-[1] bg-[#fff] lg:justify-center absolute lg:static  ${show ? ' text-center top-[50px] right-0 duration-200 ease-in-out w-full' : ' right-[0] top-[-300px] w-full text-center'} `} >
              <li className='cursor-pointer lg:px-4 py-[2px] hover:font-[600] duration-200 ease-in font-[300] font-DM  text-[16px] '>
                <Link to="/">Home</Link>
              </li>
              <li className='cursor-pointer lg:px-4 py-[2px] hover:font-[600] duration-200 ease-in font-[300] font-DM  text-[16px] '>
                <Link to="/about">About</Link>
              </li>
              <li className='cursor-pointer lg:px-4 py-[2px] hover:font-[600] duration-200 ease-in font-[300] font-DM  text-[16px] '>
                <Link to="/shop">Shop</Link>
              </li>
              <li className='cursor-pointer lg:px-4 py-[2px] hover:font-[600] duration-200 ease-in font-[300] font-DM  text-[16px] '>
                <Link to="/contact">Contacts</Link>
              </li>
              <li className='cursor-pointer lg:px-4 py-[2px] hover:font-[600] duration-200 ease-in font-[300] font-DM  text-[16px] '>
                <Link to="/journal">Journal</Link>
              </li>
            </ul>
          </div>
          <div onClick={() => setShow(!show)} className='lg:hidden relative top-0 left-[53px]'>
            {show ? <RxCross1 className='text-[24px]' /> : <CgMenu className='text-[24px]' />}
          </div>
        </Container>
      </section>
    </>
  )
}
export default Header
