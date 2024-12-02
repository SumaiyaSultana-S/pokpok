import { FaHeart } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ApiData } from "./ContextApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArrivalComponant = ({ item }) => {
    let data = useContext(ApiData)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className="!w-[97%] !h-[375px]">
                <div className="relative group overflow-hidden">
                    {loading ? (
                        <Skeleton height={300} width={"100%"} />
                    ) : (
                        <img src={item.thumbnail} alt="Product" />
                    )}
                    <ul className='text-end duration-300 ease-in-out bg-[#fff] py-1 absolute left-0 bottom-[-120px]
                         w-full h-[110px] group-hover:bottom-[0]'>
                        <li className='py-[5px] '>Add to Wish List <FaHeart className='inline-block ml-4' /></li>
                        <li className='py-[5px] '>Compare <FaArrowsRotate className='inline-block ml-4' /></li>
                        <li className='py-[5px] '>Add to Cart <FaShoppingCart className='inline-block ml-4' /></li>
                    </ul>
                </div>
                <div className="lg:flex lg:justify-between">
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
        </>
    )
}
export default ArrivalComponant
