import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import img0 from '../assets/Logo1.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
const Footer = () => {
  return (
   <>
    <footer className='h-[380px] bg-[#F5F5F3]  lg:mt-[140px]'>
                <Container>
                    <div className="flex justify-between pt-[60px]">
                        <div className="w-[15%]">
                            <ul className='flex flex-col '>
                                <Link className='font-dm text-[16px] font-bold text-[#262626]'>MENU</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Home</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Shop</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>About</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Contact</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Journal</Link>
                            </ul>
                        </div>
                        <div className="w-[15%]">
                            <ul className='flex flex-col '>
                                <Link className='font-dm text-[16px] font-bold text-[#262626]'>SHOP</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Category 1</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Category 2</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Category 3</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Category 4</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Category 5</Link>
                            </ul>
                        </div>
                        <div className="w-[15%] ">
                            <ul className='flex flex-col '>
                                <Link className='font-dm text-[16px] font-bold text-[#262626]'>HELP</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Privacy Policy</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Terms & Conditions</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Special E-shop</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Shipping</Link>
                                <Link className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>Secure Payments</Link>
                            </ul>
                        </div>
                        <div className="w-[30%]">
                            <h1 className='font-dm text-[16px] font-bold text-[#262626]'>(052) 611-5711</h1>
                            <h2 className='font-dm text-[16px] font-bold text-[#262626]'>company@domain.com</h2>
                            <h3 className='font-dm text-[14px] text-[#6D6D6D] mt-[6px] duration-300 ease-in-out hover:text-[#000] '>575 Crescent Ave. Quakertown, PA 18951</h3>
                        </div>
                        <div className="w-[25%]">
                            <img src={img0} alt="" className=' ' />
                        </div>
                    </div>
                    <div className="flex mt-[80px] justify-between border-t-2 border-t-[#8080801f]">
                        <div className="w-2/4 flex mt-[30px]">
                            <FaFacebookF className=' hover:text-[#000] duration-300 ease-in-out text-[#262626] ' />
                            <FaLinkedinIn className='ml-[25px] hover:text-[#000] duration-300 ease-in-out text-[#262626] ' />
                            <FaInstagram className='ml-[25px] hover:text-[#000] duration-300 ease-in-out text-[#262626] ' />

                        </div>
                        <div className="w-2/4 ml-[469px]">
                            <h2 className='font-dm text-[14px] pt-[20px] text-[#6D6D6D] mt-[6px] ml-[100px] text-center duration-300 ease-in-out hover:text-[#000] '>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
                        </div>
                    </div>
                </Container>
            </footer>
   </>
  )
}

export default Footer
