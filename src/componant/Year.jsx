import React from 'react'
import { TbBus } from "react-icons/tb";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import Container from './Container';

const Year = () => {
    return (
        <>
            <section className='hidden lg:block h-[55px] w-full  border-b-2 border-[#a19f9f1d]'>
                <Container >
                    <div className=" flex ">
                        <div className="lg:flex lg:px-[150px] ml-[15px]">
                            <h3 className="text-[#6D6D6D] lg:px-2 lg:py-2 py-[-4px] lg:text-[#262626] font-bold ">2</h3>
                            <h4 className="lg:py-2 text-[#6D6D6D] text-[10px] lg:text-[16px] ">Two years warranty</h4>
                        </div>
                        <div className="flex lg:px-[150px] ml-[15px]">
                            <h3 className=" lg:px-3 lg:py-3 text-[#6D6D6D] lg:text-[#262626] font-bold"><TbBus /></h3>
                            <h4 className="lg:py-2 text-[#6D6D6D] text-[10px] lg:text-[16px]">Free shipping</h4>
                        </div>
                        <div className="flex lg:px-[150px]  ml-[15px]">
                            <h3 className="lg:px-3 lg:py-3 text-[#6D6D6D] lg:text-[#262626] font-bold"><GiAnticlockwiseRotation /></h3>
                            <h4 className="lg:py-2 text-[#6D6D6D] text-[10px] lg:text-[16px]">Return policy in 30 days</h4>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Year
