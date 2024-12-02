import "react-loading-skeleton/dist/skeleton.css";
import Container from '../componant/Container'
import { MdArrowForwardIos } from "react-icons/md";
import React, { useState, useEffect, useContext } from "react";

import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Post from '../componant/Post';
import { ApiData } from '../componant/ContextApi';
import Pagination from '../componant/Pagination';

const Shop = (item) => {
  let [activeGrid, setActiveGride] = useState("");
  let [low, setLow] = useState("");
  let [high, setHigh] = useState("");
  let [priceShow, setPriceShow] = useState([]);
  let { info } = useContext(ApiData);
  let [show, setShow] = useState(false);
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(6);
  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage
  let [category, setCategory] = useState([]);
  let [categoryFilter, setCategoryFilter] = useState([]);
  let allPage = info.slice(firstPage, lastPage);
  let [showPrice, setShowPrice] = useState()
  let pageNumber = []
  for (let i = 0; i < Math.ceil(
    categoryFilter.length > 0 ? categoryFilter : info.length / perPage
  ); i++) {
    pageNumber.push(i)
  }

  let Paginate = (Paginate) => {
    setCurrentPage(Paginate + 1)
  };
  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1)
    }
  };
  let Prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1)
    }
  }
  let handleMulti = () => {
    setActiveGride("active")
  }
  let handleCategory = (citem) => {
    let filterItem = info.filter((item) => item.category == citem);
    setCategoryFilter(filterItem);

  };

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
  }, [info])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  let handlechange = (e) => {
    setPerPage(e.target.value);

  }

  let handleAll = () => {
    setCategoryFilter("")
  }
  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let priceRenge = info.filter((item) => item.price >
      value.low
      && item.price < value.high);

    if (priceRenge.length > 0) {
      setCategoryFilter(priceRenge);
    } else {
      setCategoryFilter("")
    }
  }

  return (
    <>
      <section>
        <Container className="">
          <div className="">
            <h1 className='font-sans text-[49px] font-bold'>Products</h1>
            <h2 className='flex font-sans text-[12px] font-normal'>Home&nbsp; <MdArrowForwardIos className='text-[12px] mt-[3px]' />&nbsp;Products</h2>
          </div>
          <div className="flex">
            <div className="w-[20%]">
              <div className="pr-6 pt-8">
                <div className=" flex justify-between items-center mt-[26px] ">
                  <h2 onClick={() => setShow(!show)} className='font-dm font-bold text-[20px] cursor-pointer '>  Shop by Category</h2>
                  {show ? "-" : "+"}
                </div>
                {show && (
                  <ul>
                    <li
                      onClick={handleAll}
                      className='cursor-pointer font-dm text-[16px] text-[#767676] py-1'>
                      All Product
                    </li>
                    {category.map((item) => (
                      <li onClick={() => handleCategory(item)}
                        className='cursor-pointer font-dm text-[16px] text-[#767676] py-1'>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="">
                <h2 onClick={() => setShowPrice(!showPrice)} className='font-dm font-bold text-[20px] cursor-pointer mt-10'>Show Price</h2>
                {showPrice &&
                  <ul>
                    <li onClick={() => handlePrice({ low: 0, high: 10 })} className='font-dm cursor-pointer text-[16px] text-[#767676] py-1'>$0-$0.9</li>
                    <li onClick={() => handlePrice({ low: 10, high: 19 })} className='font-dm cursor-pointer text-[16px] text-[#767676] py-1'>$10-$0.19</li>
                  </ul>
                }
              </div>
            </div>
            <div className="w-[80%] ">
              <div className="pt-8 ">
                <div className="flex justify-end">
                  <div className="">
                    <label>Short by&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select className='outline-none w-[80px]  border-2 border-[#0000000f]'>
                      <option value="">Featured one</option>
                      <option value="">Featured two</option>
                      <option value="">Featured three </option>
                      <option value="">Featured four </option>
                    </select>
                  </div>
                  <div className=" ml-[40px]">
                    <label>Show&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select onChange={handlechange}
                      className='outline-none w-[140px] border-2 border-[#0000000f]'>
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className=" flex items-center gap-x-4">
                    <div
                      onClick={() => setActiveGride("")}
                      className={`${activeGrid === "active"
                        ? "p-3 hover:bg-[black] hover:text-[#fff] text-[#262626]"
                        : "p-3 hover:bg-[black] hover:text-[#fff] text-[#fff] bg-[black]"
                        }`}
                    >
                      <MdWindow />
                    </div>
                    <div
                      onClick={handleMulti}
                      className={`${activeGrid != "active"
                        ? "p-3 hover:bg-[black] hover:text-[#fff] text-[#262626]"
                        : "p-3 hover:bg-[black] hover:text-[#fff] text-[#fff] bg-[black]"
                        }`}
                    >
                      <TfiMenuAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-1 mt-[50px]">
                <Post
                  allPage={allPage}
                  activeGrid={activeGrid}
                  categoryFilter={categoryFilter}
                  priceShow={priceShow}
                />
                <div className="py-10 flex justify-center w-full">
                  <Pagination
                    pageNumber={pageNumber}
                    Paginate={Paginate}
                    next={next}
                    Prev={Prev}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
export default Shop
