import { FaSearch } from "react-icons/fa";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useContext, useEffect, useState } from "react";
import { DATA } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { BASKET } from "../../context/BasketContext";

function BestSellers() {
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
    <div className="bg-gray-100 h-full">
      <div className="max-w-[1200px] w-[95%] mx-auto py-4">
        <div className="flex items-center justify-between py-4">
          <h3 className="font-semibold">Ən çox satılanlar</h3>
          <p className="text-[#ff8230] cursor-pointer">Hamsına bax</p>
        </div>
        <Swiper
          className="h-[400px] mb-6 lgx:mr-2 lgx:mb-0 w-full"
          style={{
            "--swiper-navigation-color": "#ff8300",
            "--swiper-navigation-size": "12px",
          }}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          breakpoints={{
            400: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            880: { slidesPerView: 4 },
            1180: { slidesPerView: 5 },
            1230: { slidesPerView: 6 },
          }}
          spaceBetween={18}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          navigation={{
            nextEl: '.swiper-button-next.swiper-button-2',
            prevEl: '.swiper-button-prev.swiper-button-2',
          }}
        >
          <div className="flex">
            {products && products.map((item) => (
              <SwiperSlide key={item.id} className="relative">
                <Link to={`${item.id}`} className="bg-white border-[1px] h-[350px] rounded-md flex flex-col items-center justify-center  w-full lgx:w-[190px]">
                  <div className="flex w-[80%] mt-4 justify-end">
                    <div className="w-[21.6px] h-[22px]">
                      <svg
                        className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-5 0 156.69 110.07"
                      >
                        <path
                          data-name="neptun_heart"
                          className="cls-1"
                          d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                          transform="translate(-1191.655 -217.465)"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-[100px] h-[140px]">
                    <img className="object-cover" src={item.img} alt={item.name} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 translate-y-[-50px] hover:translate-y-[-10px] transition-all duration-500">
                      <div className="bg-[#ff8230] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                        <FaSearch className="text-white text-[.9rem]" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">{item.name}</h3>
                  <h2 className="text-[1.3rem] font-bold">{item.price}</h2>
                  <div className="flex justify-between items-center w-[110px]">
                    <button onClick={(e)=>{
                      e.preventDefault()
                      updateCount(item.id, -1)
                    }} className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                    <span>{item.count}</span>
                    <button onClick={(e)=>{
                      e.preventDefault()
                    updateCount(item.id, 1)
                      
                    }} className="text-[#ff8230] text-[2.2rem] font-bold">+</button>
                  </div>
                  <button
                  onClick={(e)=>{
                    e.preventDefault()
                    addToBasket(item.id, item.img, item.name, item.price, item.discount, item.count, item.totalPrice)
                  }   
                  }
                  className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[100px] h-[35px] mb-10">Sebete at</button>
                </Link>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-prev swiper-button-2" />
          <div className="swiper-button-next swiper-button-2" />
        </Swiper>
      </div>
    </div>
  );
}

export default BestSellers;
