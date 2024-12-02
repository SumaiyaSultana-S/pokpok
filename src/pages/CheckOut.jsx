import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { productDecrement, productIncrement, productRemoveCart, } from '../componant/slice/productSlice';
import Container from '../componant/Container';
import { IoIosArrowForward } from "react-icons/io";
const CheckOut = () => {
    let [check,setCheck] = useState({
        bank1:false,
        bank2:false
    })
    let cartInfo = useSelector((state) => state.product.cartItem)    
    let { totalPrice } = cartInfo.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        return acc;
    }, { totalPrice: 0 });


    let handleCheck = (e) => {

    if(e.target.name == "bank1"){
 
        setCheck({bank1:true,bank2:false})

    }else{

        setCheck({bank1:false,bank2:true})
    }
    }
    return (
        <>
            <Container>
                <div className="w-full">
                    <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Checkout</h2>
                    <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                        <Link to="/">Home</Link>
                        <li><IoIosArrowForward /></li>
                        <Link to="/shop">Shop</Link>
                    </ul>
                </div>
                <div className="w-full pt-10">
                    <div className="flex ">
                        <h4 className='text-[16px] text-[#767676] font-DMs font-normal '>Have a coupon? </h4>
                        <h5 className='text-[16px] text-[#262626] font-DMs font-normal'>Click here to enter your code</h5>
                    </div>
                </div>

                <div className="">
                    <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Billing Details</h2>
                </div>
                <div className="flex gap-10">
                    <div className="w-[30%] pt-10">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>First Name *</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='First Name' />
                    </div>
                    <div className="w-[30%] pt-10">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Last Name*</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Last Name ' />
                    </div>

                </div>
                <div className="w-[63%] pt-8">
                    <div className="">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Companye Name (optional)</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Companye Name ' />
                    </div>
                </div>
                <div className="w-[63%] pt-8">
                    <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Country</h4>
                    <select className='border-b w-full py-2 focus:outline-none  '>
                        <option value="" disabled className="text-gray-400">Please select</option>
                        <option value="USA">Please select</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="w-[63%] pt-8">
                    <div className="">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Street Address *</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='House number and street name ' />
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Apartment, suite, unit etc. (optional)' />
                    </div>
                </div>
                <div className="w-[63%] pt-8">
                    <div className="">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Town/City *</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Town/City  ' />
                    </div>
                </div>
                <div className="w-[63%] pt-8">
                    <div className="">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>County (optional)</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='County  ' />
                    </div>
                </div>
                <div className="w-[63%] pt-8">
                    <div className="">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Post Code *</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Post Code  ' />
                    </div>
                </div>
                <div className="w-[63%] pt-8">
                    <div className="">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Phone *</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Phone ' />
                    </div>
                </div>
                <div className="w-[63%] pt-8">
                    <div className="">
                        <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Email Address *</h4>
                        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Email Address ' />
                    </div>
                </div>

                <div className="pt-10">
                    <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Additional Information</h2>
                    <p className='text-[16px] text-[#262626] font-DMs font-normal'>Other Notes (optional)</p>
                    <p className='text-[14px] text-[#767676] font-DMs font-normal'>Notes about your order, e.g. special notes for delivery.</p>
                </div>
                <div className="pt-[50px]">
                    <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Your Order</h2>
                    <div className=" pt-[24px]">
                        <table>
                            <tr>
                                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                                Product name x 1
                                </td>
                                <td className="w-[220px] h-[50px] border px-3 font-sans font-normal text-[16px] text-[#262626]">
                                {(totalPrice).toFixed(0)} $
                                </td>
                            </tr>
                            <tr>
                                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                                    Subtotal
                                </td>
                                <td className="w-[220px] h-[50px] border px-3 font-sans font-normal text-[16px] text-[#767676]">
                                    {(totalPrice).toFixed(2)} $
                                </td>
                            </tr>

                            <tr>
                                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                                    Total
                                </td>
                                <td className="w-[220px] h-[50px] border px-3 font-sans font-normal text-[16px] text-[#767676]">
                                    {(totalPrice).toFixed(3)} $
                                </td>
                            </tr>
                        </table>

                    </div>
                    <div className=" mt-[30px]">
                        <button type="submit" className=" h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300">
                            Checkout
                        </button>
                    </div>
                </div>
                <div className="w-[63%] p-10 border-2 mt-10 ">
                    <div className=" flex gap-2 ">

                        <input onChange={handleCheck} type="checkbox" name="bank1" checked={check.bank1} className="" id="" placeholder='' />
                        <h2 className='text-[16px] text-[#262626] font-DMs font-bold'>Bank</h2>

                    </div>
                    <p className='bg-[#F7F8F9] p-5 mt-5 text-[14px] text-[#767676] font-DMs font-normal'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>

                    <div className=" flex gap-2 mt-5">

                        <input onChange={handleCheck} name="bank2" type="checkbox" placeholder='' checked={check.bank2} />
                        <h2 className='text-[16px] text-[#262626] font-DMs font-bold'>Bank-2</h2>

                    </div>
                    <p className='bg-[#F7F8F9] p-5 mt-5 text-[14px] text-[#767676] font-DMs font-normal'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>

                    <div className="">
                        <button className='py-3 px-16 bg-black border-[2px] border-[#262626] text-white mt-10 text-[18px] font-bold font-DMs hover:bg-white hover:text-black ease-in-out duration-300'>Proceed to Bank</button>
                    </div>

                </div>
                <div>

                </div>

            </Container>
        </>
    )
}

export default CheckOut
