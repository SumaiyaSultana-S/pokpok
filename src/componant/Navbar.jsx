import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaCaretUp } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import Container from './Container';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { productRemoveCart } from './slice/productSlice';
import { useNavigate } from 'react-router-dom';
import { ApiData } from './ContextApi';
const Navbar = () => {
  const data = useSelector((state) => state.product.cartItem);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [one, setOne] = useState(false);
  const categoryDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const showCartRef = useRef(null);
  const disPatch = useDispatch()
  const navigate = useNavigate()
  const [Search, setSearch] = useState("")
  const [searchFilter, setSearchFilter] = useState([])
  const { loading, info } = useContext(ApiData)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setShow(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (showCartRef.current && !showCartRef.current.contains(event.target)) {
        setOne(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {

      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleCategoryClick = () => {
    setShow((prevShow) => !prevShow);
  };
  const handleCartPage = () => {
    navigate("/cart")
    setOne(false)
  }
  const handleCheckoutPage = () => {
    navigate("/checkOut")
    setOne(false)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value == "") {
      setSearchFilter([])
    } else {

      let SearchOnebyOne = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchFilter(SearchOnebyOne);
    }
  }
  const handleSearchId = (id) => {
    navigate(`/shop/${id}`)
    setSearchFilter([])
    setSearch("")
  }
  return (
    <section className="bg-[#F5F5F3] lg:py-[25px] py-[10px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="lg:w-1/4 flex items-center relative">
            <div onClick={handleCategoryClick} ref={categoryDropdownRef} className="flex items-center cursor-pointer">
              {show ? <BiMenuAltLeft className='text-[16px]' /> : <FiMenu className='text-[16px]' />}
              <h3 className="px-3 hidden lg:block">Shop by Category</h3>
            </div>
            {show && (
              <ul className="absolute top-[30px] left-0 mt-2 bg-[#262626] shadow-lg py-2 w-48 z-10">
                <li className="duration-300 ease-in-out hover:ml-[10px] px-4 py-2 text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Accessories
                </li>
                <li className="duration-300 ease-in-out hover:ml-[10px] px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Furniture
                </li>
                <li className="duration-300 ease-in-out hover:ml-[10px] px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Electronics
                </li>
                <li className="duration-300 ease-in-out hover:ml-[10px] px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Clothing
                </li>
                <li className="duration-300 ease-in-out hover:ml-[10px] px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white">Bags</li>
              </ul>
            )}
          </div>
          <div className="lg:w-2/4">
            <div className="relative">
              <input onChange={handleSearch}
                type="text"
                placeholder="Search Products"
                className="w-full lg:py-[16px] py-[10px] px-[20px] outline-none border-none lg:text-[16px] md:text-[16px] text-[12px] font-normal font-sans"
                value={Search}
              />
              <FaSearch className=" absolute top-[50%] right-[16px] translate-y-[-50%] lg:text-[16px] md:text-[16px] text-[12px]" />
              {searchFilter.length > 0 &&
                <div className="bg-transparent absolute left-0 top-[47px] mt-2 w-[460px] h-[400px] overflow-y-scroll z-[1]">
                  {searchFilter.map((item, i) => (
                    <div onClick={() => handleSearchId(item.id)}>
                      <div className="flex items-center bg-white py-4 px-5">
                        <div>
                          <img
                            className="cursor-pointer w-[80px] md:w-[150px]"
                            src={item.thumbnail}
                            alt="Cart item"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="cursor-pointer font-DM font-bold text-[14px] ml-3">
                            <h3>{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              }
            </div>

          </div>
          <div className="lg:w-1/4">
            <div className="flex justify-end gap-x-6">
              <div className="flex items-center">
                <FaUser />
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  ref={userDropdownRef}
                  className="relative cursor-pointer"
                >
                  {isOpen ? <FaCaretUp /> : <FaCaretDown />}
                  {isOpen && (
                    <ul className="absolute top-[30px] lg:left-[-91px] sm:left-[-40px] mt-2 w-[98px] sm:w-[103px] md:w-[102px] bg-[#fff] shadow-lg z-10">
                      <li className="px-3 sm:px-4 py-2 hover:bg-[gray] hover:text-[#fff] text-[gray] cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                        My Account
                      </li>
                      <li className="px-3 sm:px-4 py-2 hover:bg-[gray] hover:text-[#fff] text-[gray] cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                        Log Out
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex items-center relative" ref={showCartRef}>
                {data.length > 0 && (
                  <div className="absolute left-[14px] top-[-13px] h-[15px] w-[15px] bg-[red] rounded-full text-[#fff] text-center text-[10px]">
                    {data.length}
                  </div>
                )}
                <div onClick={() => setOne(!one)}>
                  <FaShoppingCart />
                </div>
                {one && (
                  <div className="w-[360px] bg-white absolute z-[1] top-[20px] right-[5px]">
                    {data.map((item, i) => (
                      <div key={item.id} className="flex justify-between items-center p-[20px] gap-1 border-2 border-[#F5F5F3] bg-[#fff]">
                        <div className="w-[25%] h-[80px]">
                          <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="w-[68%] pl-4">
                          <h2 className='font-sans text-[14px] text-[#262626] font-bold'>{item.title}</h2>
                          <h2 className='font-sans text-[14px] text-[#262626] font-bold'>${item.price}</h2>
                        </div>
                        <div onClick={() => disPatch(productRemoveCart(i))} className="w-[5%]">
                          <ImCross />
                        </div>
                      </div>
                    ))}
                    <div className="p-[20px]">
                      <div className="flex flex-wrap md:flex-nowrap my-5">
                        <button onClick={handleCartPage} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                          View Cart
                        </button>
                        <button onClick={handleCheckoutPage} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                          Check Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar; 