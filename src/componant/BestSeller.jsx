import React from 'react'
import Container from './Container'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import { Link } from 'react-router-dom'

const BestSeller = () => {
    return (
        <>
            <section className=' h-[500px]'>
                <Container className="">
                    <div className="">
                        <h2 className='font-dm text-[20px] lg:text-[39px] font-bold mb-[48px]'>Our Bestsellers</h2>
                    </div>
                    <div className="flex relative mt-4 ">
                        <div className="w-1/4 ml-[10px]">
                            <Link to="/shop">
                                <img src={img6} alt="" className=' duration-300 ease-in-out blur-none hover:blur-sm' />
                            </Link>
                            <h2 className='text-center text-white blur-none px-[35px] py-[10px]  
                            bg-[#000000] font-[600] text-[18px] relative top-[-350px] left-[3%] inline-block  '>New</h2>
                            <div className="lg:flex lg:justify-between">
                                <div>
                                    <h2 className='font-dm lg:text-[20px] text-[4px] font-bold mt-[-2px]'>
                                        Basic Crew Neck Tee
                                    </h2>
                                    <h3 className='font-dm lg:text-[16px] text-[4px] text-[#767676]'>
                                        Black
                                    </h3>
                                </div>
                                <p className='text-[#767676] font-dm lg:text-[16px] text-[4px]'>
                                    $44.00
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 ml-[10px]">
                            <Link to="/shop">
                                <img src={img7} alt="" className=' duration-300 ease-in-out blur-none hover:blur-sm' />
                            </Link>
                            <h2 className='text-center text-white blur-none px-[35px] py-[10px]  
                            bg-[#000000] font-[600] text-[18px] relative top-[-350px] left-[3%] inline-block  '>New</h2>
                            <div className="lg:flex lg:justify-between">
                                <div>
                                    <h2 className='font-dm lg:text-[20px] text-[4px] font-bold mt-[-2px]'>
                                        Basic Crew Neck Tee
                                    </h2>
                                    <h3 className='font-dm lg:text-[16px] text-[4px] text-[#767676]'>
                                        Black
                                    </h3>
                                </div>
                                <p className='text-[#767676] font-dm lg:text-[16px] text-[4px]'>
                                    $44.00
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 ml-[10px]">
                            <Link to="/shop">
                                <img src={img8} alt="" className=' duration-300 ease-in-out blur-none hover:blur-sm' />
                            </Link>
                            <h2 className='text-center text-white blur-none px-[35px] py-[10px]  
                            bg-[#000000] font-[600] text-[18px] relative top-[-350px] left-[3%] inline-block  '>New</h2>                            <div className="lg:flex lg:justify-between">
                                <div>
                                    <h2 className='font-dm lg:text-[20px] text-[4px] font-bold mt-[-2px]'>
                                        Basic Crew Neck Tee
                                    </h2>
                                    <h3 className='font-dm lg:text-[16px] text-[4px] text-[#767676]'>
                                        Black
                                    </h3>
                                </div>
                                <p className='text-[#767676] font-dm lg:text-[16px] text-[4px]'>
                                    $44.00
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 ml-[10px]">
                            <Link to="/shop">
                                <img src={img9} alt="" className='duration-300 ease-in-out blur-none hover:blur-sm' />
                            </Link>
                            <h2 className='text-center text-white blur-none px-[35px] py-[10px]  
                            bg-[#000000] font-[600] text-[18px] relative top-[-350px] left-[3%] inline-block  '>New</h2>                            <div className="lg:flex lg:justify-between">
                                <div>
                                    <h2 className='font-dm lg:text-[20px] text-[4px] font-bold mt-[-2px]'>
                                        Basic Crew Neck Tee
                                    </h2>
                                    <h3 className='font-dm lg:text-[16px] text-[4px] text-[#767676]'>
                                        Black
                                    </h3>
                                </div>
                                <p className='text-[#767676] font-dm lg:text-[16px] text-[4px]'>
                                    $44.00
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default BestSeller
