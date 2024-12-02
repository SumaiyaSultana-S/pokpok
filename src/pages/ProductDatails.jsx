import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '../componant/Container'
import { MdArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Rate } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux"
import { addToCart } from '../componant/slice/productSlice';
const ProductDatails = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate();
  let productId = useParams();
  let [show, setShow] = useState(false);
  let [singleProduct, setSingleProduct] = useState([]);
  let getsingleProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };
  useEffect(() => {
    getsingleProduct();
  }, []);
  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return singleProduct.rating > index + 1 ? <FaStar /> : <FaStarHalfAlt />
  })
  let discount = singleProduct.price * singleProduct.discountPercentage / 100
  let discountedPrice = singleProduct.price - discount


let handleCart = (item)=>{
    dispatch(addToCart({ ...item, qun: 1 }));
    toast("Welcome to cart page!");
    setTimeout(()=>{
      navigate("/cart")
    }, 2000);
  };

  return (
    <>
      <Container>
        <h2 className='flex text-[#262626] font-sans text-[20px] font-normal mt-3 items-center gap-1'>
          <Link to='/home'>Home</Link>
          <MdArrowForwardIos className='text-[20px] font-normal ' />
          <Link to='/shop'>Products</Link>
        </h2>

        <div className="flex justify-between pt-8">
          {singleProduct?.images?.map((item) => (
            <div className=" w-[48%]">
              <img src={item} alt="" className='w-full' />
            </div>
          ))}
        </div>
        <h4 className='text-[#262626] font-sans text-[26px] font-bold mt-3'>
          Product
        </h4>
        <div className="flex gap-x-2 items-center text-[#f57224]">
          {clientRating}
        </div>
        <div className="font-bold">
          <h2>Price :
            <del> ${singleProduct.price}</del>
          </h2>
          <span> New Price : {discountedPrice.toFixed(2)}</span>
        </div>
        <h4>STATUS : {singleProduct.stock}</h4>
        <div className="flex gap-x-2 mt-8">
          <h6 className='duration-300 ease-in-out hover:text-[#fff] cursor-pointer hover:bg-[#262626] h-[50px] w-[200px] border-2 font-dm border-[#262626] pl-[34px] py-[10px] font-bold  '>
            Add to Wish List
          </h6>
          <h5
            onClick={() => handleCart(singleProduct)}
            className='duration-300 ease-in-out hover:text-[#262626] cursor-pointer hover:bg-[#fff] text-[#fff] bg-[#262626] h-[50px] w-[200px] border-2 font-dm border-[#262626] pl-[58px] py-[10px] font-bold  '>
            Add to Cart
          </h5>
        </div>
        <div className="w-[50%] py-10">
          <div onClick={() => setShow(!show)} className="cursor-pointer flex items-center justify-between">
            <h3>FEATURES & DETAILS</h3>

            {show ? <FaMinus /> : <FaPlus />}
          </div>
          {show && (
            <p className='font-[500] text-[20px]'>
              {singleProduct.description}
            </p>
        
        )}
        </div>
        {singleProduct &&
          <Rate disabled value={singleProduct.rating} />
        }
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </Container>
    </>
  )
}

export default ProductDatails
