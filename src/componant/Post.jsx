import React, { useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../componant/slice/productSlice';

const Post = ({ allPage, activeGrid, categoryFilter, priceShow }) => {
 const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const { info } = useContext(ApiData);
  const [filterShow, setFilterShow] = useState([])
  const [count, setCount] = useState(true)
  const data = useSelector((state)=>state.product.cartItem)
  console.log(data);
  
  useEffect(() => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter)
  }, [categoryFilter]);
  let handleSee = () => {
    setFilterShow(categoryFilter)
    setCount(false)
  }
  let handleSeeLess = () => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
    setCount(true)
  }
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  let handleCartProduct = (item) =>{
    dispatch(addToCart({...item,qun:1}))
  }
  return (
    <>
      {  filterShow.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-y-1 ">
              {filterShow.map((item) => (
                <div>
                  <div className="relative top-0 left-[0] group overflow-hidden">
                    <Link to={`/shop/${item.id}`}>
                      {loading ? (
                        <Skeleton height={300} width={"100%"} />
                      ) : (
                        <img src={item.thumbnail} alt="Product" />
                      )}
                    </Link>
                    <ul className='text-end bg-[#fff] absolute left-0 w-[100%] h-[25px] lg:h-[130px] duration-300 
                    ease-in-out bottom-[-120px] group-hover:bottom-[0px]'>
                      <li className='cursor-pointer mt-3 lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                        Add to Wish List
                        <FaHeart className='inline-block lg:m-2 text-[#000] text-[4px] m-[2px] lg:text-[16px]' />
                      </li>
                      <li className='cursor-pointer lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                        Compare
                        <PiArrowsCounterClockwiseBold className='inline-block lg:m-2 text-[#000] m-[2px] text-[4px] lg:text-[16px]' />
                      </li>
                      <li className='cursor-pointer lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                        Add to Cart
                        <FaShoppingCart className='inline-block lg:m-2 text-[#000] text-[4px] m-[2px] lg:text-[16px]' />
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="lg:flex lg:justify-between mb-4">
                      <div>
                        <h2 className='text-[#262626] font-bold text-[16px] font-sans'>
                          {loading ? <Skeleton width={100} /> : item.title}
                        </h2>
                        <h3 className='text-[#262626] font-normal text-[16px] font-sans'>
                          {loading ? <Skeleton width={80} /> : item.brand}
                        </h3>
                      </div>
                      <p className='text-[#262626] font-bold text-[16px] font-sans'>
                        {loading ? <Skeleton width={50} /> : item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {count
                ? categoryFilter.length > 5 && (
                  <div onClick={handleSee} className="">
                    <h2>See More</h2>
                  </div>
                )
                : categoryFilter.length > 5 && (
                  <div onClick={handleSeeLess} className="">
                    <h3>See Less</h3>
                  </div>)
              }
            </div>
          </>
        ) : (
          <div
            className={`${activeGrid == "active" ? "w-[35%]" : "flex flex-wrap justify-between "}`}>
            {allPage.map((item) => (
              <div>
                <div className="relative top-0 left-0 w-[100%] group overflow-hidden">
                  <Link to={`/shop/${item.id}`}>
                    {loading ? (
                      <Skeleton height={300} width={"100%"} />
                    ) : (
                      <img src={item.thumbnail} alt="Product" />
                    )}
                  </Link>

                  <ul className='text-end bg-[#fff] absolute left-0 w-[100%] h-[25px] lg:h-[130px] duration-300 
                      ease-in-out bottom-[-120px] group-hover:bottom-[0px]'>
                   
                    <li className='cursor-pointer mt-3 lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                      Add to Wish List
                      <FaHeart className='inline-block lg:m-2 text-[#000] text-[4px] m-[2px] lg:text-[16px]' />
                    </li>
                    <li className='cursor-pointer lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                      Compare
                      <PiArrowsCounterClockwiseBold className='inline-block lg:m-2 text-[#000] m-[2px] text-[4px] lg:text-[16px]' />
                    </li>
                    <li onClick={()=>handleCartProduct(item)} className='cursor-pointer lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                      Add to Cart
                      <FaShoppingCart className='inline-block lg:m-2 text-[#000] text-[4px] m-[2px] lg:text-[16px]' />
                    </li>
                  </ul>
                </div>
                <div className="">
                  <div className="lg:flex lg:justify-between mb-4">
                    <div>
                      <h2 className='text-[#262626] font-bold text-[16px] font-sans'>
                        {loading ? <Skeleton width={100} /> : item.title}
                      </h2>
                      <h3 className='text-[#262626] font-normal text-[16px] font-sans'>
                        {loading ? <Skeleton width={80} /> : item.brand}
                      </h3>
                    </div>
                    <p className='text-[#262626] font-bold text-[16px] font-sans'>
                      {loading ? <Skeleton width={50} /> : item.price}
                    </p>
                  </div>
                </div> 
              </div>
            ))}
          </div>
        )}
    </>
  )
}

export default Post
