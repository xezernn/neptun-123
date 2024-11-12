import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useContext, useEffect, useState } from "react";
import { DATA } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { BASKET } from "../../context/BasketContext";

function SelectedProducts() {
  const {data} = useContext(DATA)
  const {addToBasket} = useContext(BASKET)
  const [products, setProducts] = useState(null)
  useEffect(()=>{
    setProducts(data?.products?.map(item =>{
      return {
        ...item,
        count: 1
      }
    }))
},[data])

function updateCount(id, increment){
  setProducts((prevProducts) =>
    prevProducts.map((item) =>
      item.id === id
        ? { ...item, count: Math.max(1, item.count + increment) }
        : item
    )
  );
};

  return (
    <div className="bg-gray-100 h-full md:pt-[40px]">
      <div className="max-w-[1200px] w-[95%] mx-auto py-4 ">
        <div className=" flex justify-end py-3 ">
          <p className="text-[#ff8230] cursor-pointer">Hamsına bax</p>
        </div>
        <div className="md:flex md:flex-col lgx:flex-row">
          <div className="relative custom-select custom:hidden">
            <select className="w-full outline-none border-[1px] text-black border-gray-300 py-1 px-2 text-[12px] uppercase">
              <option value="neptun" className="text-black">Yalnız Neptunda</option>
              <option value="fruit" className="text-black">Meyve</option>
              <option value="dried-fruits" className="text-black">Quru Meyveler</option>
              <option value="breakfast" className="text-black">Seher Yemekleri</option>
              <option value="nescafe" className="text-black">Nescake</option>
            </select>
          </div>
          <ul className="hidden custom:flex md:hidden justify-center p-3 uppercase gap-6 text-[.8rem]">
            <li><a href="#">Yalnız Neptunda</a></li>
            <li><a href="#">Meyve</a></li>
            <li><a href="#">Quru Meyveler</a></li>
            <li><a href="#">Seher Yemekleri</a></li>
            <li><a href="#">Nescake</a></li>
          </ul>
          <div className="hidden md:block">
            <Swiper
              className="w-full h-[400px]  mx-auto lgx:w-[400px] mb-6 lgx:mr-2 lgx:mb-0"
              style={{
                "--swiper-navigation-color": "#ff8300",
                "--swiper-navigation-size": "12px",
              }}
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 1
                }
              }}
              spaceBetween={10}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              speed={1000}
              navigation={{
                nextEl: '.swiper-button-next.swiper-button-2',
                prevEl: '.swiper-button-prev.swiper-button-2',
              }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide className="relative">
                <img className="w-full h-full object-cover rounded-r-md  rounded-b-md" src="/assets/meyv.png" alt="meyv" />
                <div className="pl-6 pt-3 text-[1.1rem] text-white absolute top-0 left-0 bg-[#0000006a] w-[180px] h-[80px] rounded-br-3xl">
                  Kategoriyalar: <span className="block">Meyve</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-full object-cover rounded-r-md  rounded-b-md" src="/assets/seher.jpg" alt="seher" />
                <div className="pl-6 pt-3 text-[1.1rem] text-white absolute top-0 left-0 bg-[#0000006a] w-[180px] h-[80px] rounded-br-3xl">
                  Kategoriyalar: <span className="block">Meyve</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-full object-cover rounded-r-md  rounded-b-md" src="/assets/siyniyyat.jpg" alt="siyniyyat" />
                <div className="pl-6 pt-3 text-[1.1rem] text-white absolute top-0 left-0 bg-[#0000006a] w-[180px] h-[80px] rounded-br-3xl">
                  Kategoriyalar: <span className="block">Meyve</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-full object-cover rounded-r-md  rounded-b-md" src="/assets/yalniz.jpg" alt="yalniz" />
                <div className="pl-6 pt-3 text-[1.1rem] text-white absolute top-0 left-0 bg-[#0000006a] w-[180px] h-[80px] rounded-br-3xl">
                  Kategoriyalar: <span className="block">Meyve</span>
                </div>
              </SwiperSlide>

              <div className="swiper-button-prev swiper-button-2" />
              <div className="swiper-button-next swiper-button-2" />
            </Swiper>
          </div>
          <Swiper
            className=" h-[400px] mb-6 lgx:mr-2 lgx:mb-0 w-full"
            style={{
              "--swiper-navigation-color": "#ff8300",
              "--swiper-navigation-size": "12px",
            }}
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              }
            }}
            spaceBetween={18}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            navigation={{
              nextEl: '.swiper-button-next.swiper-button-2',
              prevEl: '.swiper-button-prev.swiper-button-2',
            }}
          >
            <div className="flex justify-center">
              {
                products && products.map((item) =>
                  <SwiperSlide key={item.id} className="relative">
                    <Link to={`${item.id}`} className="bg-white border-[1px] h-full rounded-md flex flex-col items-center justify-center  w-full lgx:w-[190px]">
                      <div className="flex w-[80%] mt-4 justify-end">
                        <div className="w-[21.6px] h-[22px]">
                          <svg
                            className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                            xmlns="http://www.w3.org/2000svg"
                            viewBox="-5 0 156.69 110.07">
                            <defs></defs>
                            <path
                              data-name="neptun_heart"
                              className="cls-1"
                              d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                              transform="translate(-1191.655 -217.465)"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="w-[150px] min-h-[150px] relative">
                        <img className="object-cover" src={item.img} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 translate-y-[-50px] hover:translate-y-[-10px] transition-all duration-500">
                          <div className="bg-[#ff8230] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                            <FaSearch className="text-white text-[.9rem]" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">{item.name}</h3>
                      <h2 className="text-[1.3rem] font-bold">{item.price} ₼</h2>
                      <div className="flex justify-between items-center w-[110px]">
                        <button onClick={(e)=>
                        {
                          e.preventDefault()
                          updateCount(item.id, -1)
                        }
                      } className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                        <span>{item.count}</span>
                        <button
                        onClick={(e)=>{
                          e.preventDefault()
                          updateCount(item.id, 1)
                        }
                        }
                        className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
                      </div>
                      <button
                      onClick={(e)=>
                        {
                          e.preventDefault()
                          addToBasket(item.id, item.img, item.name, item.price, item.discount, item.count,item.totalPrice)
                        }
                      }
                      className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[100px] h-[35px] mb-10">Sebete at</button>
                    </Link>
                  </SwiperSlide>
                )
              }
            </div>
            <div className="swiper-button-prev swiper-button-2" />
            <div className="swiper-button-next swiper-button-2" />
          </Swiper>
        </div>
      </div>
    </div >
  )
}
export default SelectedProducts