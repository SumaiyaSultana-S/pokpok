import React from 'react'
import Container from '../componant/Container'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux'
import { productDecrement, productIncrement, productRemoveCart, } from '../componant/slice/productSlice';
import { useContext } from 'react';
import { ApiData } from '../componant/ContextApi';
const Cart = () => {
  let { info } = useContext(ApiData); 
  let cartInfo = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()
  let handleIcrement = (i) =>{
      dispatch(productIncrement(i))
  }
  
  let handleDecrement =(i)=>{
    dispatch(productDecrement(i))
  }
  let handleRemove=(i)=>{
    dispatch(productRemoveCart(i))
  }

  let {totalPrice,totalQuantity} = cartInfo.reduce((acc,item)=>{
     
     acc.totalPrice+=item.price*item.qun
     acc.totalQuantity+=item.qun

     return acc;

  },{totalPrice:0, totalQuantity:0});
  
  console.log(totalPrice);


  return (
    <>
      <section className="py-[55px]">
        <Container>
          <div className="">
            <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
              Cart
            </h3>
            <div className="flex items-center py-4">
              <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                <Link to="/">Home</Link>
              </h2>
              <IoIosArrowForward />
              <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                <Link to="/shop">Shop</Link>
              </h2>
              <IoIosArrowForward />
              <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                <Link to="/myaccount">Cart</Link>
              </h2>
            </div>
          </div>
          <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Product
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Price
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Quantity
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Total
              </h4>
            </div>
          </div>
          {cartInfo.length ?(
            cartInfo.map((item, i) => (
              <div className=" my-1">
                <div className="flex items-center py-[32px] pl-3 border">
                  <div className="w-1/4">
                    <div className="">
                      <div className="flex justify-between items-center">
                        <div className="w-[10%]">
                          <button
                            className=""
                           onClick={()=>handleRemove(i)}
                          >
                            <ImCross />
                          </button>
                        </div>
                        <div className="w-[25%]">
                          <img src={item.thumbnail} alt="" className="w-full" />
                        </div>
                        <div className="w-[50%]">
                          <h3 className="font-sans font-bold text-[16px] text-[#262626] ">
  
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                      ${item.price}
                    </h4>
                  </div>
                  <div className="w-1/4">
                    <div className="inline-block border">
                      <button
                         onClick={()=>handleDecrement(i)}
                        className="px-5 py-1 border-none"
                         >
                           -
                      </button>
                      <span className="px-4">{item.qun}</span>
                      <button
                      onClick={()=>handleIcrement(i)}
                        className="px-5 py-1 border-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                     ${(item.price * item.qun).toFixed (2) }               
                         </h4>
                  </div>
                </div>
              </div>
            ))
          )
          :(
            <div className="text-center min-h-[100px]">
            <h2 className="font-sans font-bold text-[44px] text-[#262626]">
              Your Cart Is Empty
            </h2>
          </div>
          )}
          <div className="pt-[50px]">
          <h3 className="text-right font-sans font-bold text-[20px] text-[#262626] px-3">
            Cart totals
          </h3>
          <div className="flex justify-end pt-[24px]">
            <table>
                <tr>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                Quantity
                </td>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-normal text-[16px] text-[#262626]">
                  {totalQuantity}
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
            <div className="flex justify-end mt-[30px]">
              <Link to="/checkout">
                <button type="submit" className=" h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300">
                  Procced  To Checkout
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Cart
