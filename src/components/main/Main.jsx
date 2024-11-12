import BestSellers from "./BestSellers"
import SelectedProducts from "./SelectedProducts"
import SpecialOffers from "./SpecialOffers"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (
    <main className="bg-[#f2f2f2] ">
        <div className="max-w-[1550px] h-full mx-auto" >
        <Swiper className="max-w-[800px] mx-auto mdl:mr-[10px] lgx:max-w-[980px] lgx:pt-[10px] lgx:mr-[30px] 2xl:mr-[140px] pt-[10px] px-1 md:px-[20px]"
        style={{
          "--swiper-navigation-color": "#ff8300",
          "--swiper-navigation-size": "12px",
        }}
          modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
          effect="fade" 
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation=
          {{
            nextEl: '.swiper-button-next.swiper-button-1',
            prevEl: '.swiper-button-prev.swiper-button-1',
          }}
          pagination={{ clickable: true,
           }}
          onSlideChange={() => "swiper changed"}
          onSwiper={(swiper) => swiper}
        >
          <SwiperSlide>
            <img className="w-full object-cover" src="/assets/swiper1.webp" alt="" />
            </SwiperSlide>
          <SwiperSlide> 
            <img className="w-full object-cover" src="/assets/swiper2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
             <img className="w-full object-cover" src="/assets/swiper3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="w-full object-cover" src="/assets/swiper4.webp" alt="" />
          </SwiperSlide>

          <div className="swiper-button-prev swiper-button-1" />
          <div className="swiper-button-next swiper-button-1" />

        </Swiper>

        <div className="max-w-[800px] mx-auto medias flex justify-around mdl:mr-[10px] lgx:max-w-[940px] lgx:justify-between mt-6 lgx:mr-[50px] 2xl:mr-[160px] pb-[40px]">
            <div className="media w-full">
              <img className="w-full object-cover" src="/assets/media1.png" alt="" />
              <div className="flex justify-between items-center bg-white">
                <h4 className="py-1 font-semibold text-[12px]">50 AZN 50 Bonus</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="media w-full mx-4">
              <img className="w-full object-cover" src="/assets/media2.jpg" alt="" />
              <div className="flex justify-between items-center bg-white">
                <h4 className="font-semibold text-[12px] py-1">Neptunda dadli endirimler</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="media w-full hidden mdl:block">
              <img className="w-full object-cover" src="/assets/media3.jpg" alt="" />
              <div className="flex justify-between items-center bg-white">
                <h4 className="whitespace-nowrap font-semibold text-[12px] p-1"> Heftesonu endirimler Neptunda</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
        </div>
        </div>
        <SelectedProducts />
        <SpecialOffers />
        <BestSellers />
        <div className="md:max-w-[1300px] mx-auto max-w-[600px] px-5 pb-10">
           <div className="grid justify-center items-center gap-6 sm:grid-cols-2 md:px-20 lg:grid-cols-4 ">
           <img className="w-full object-cover" src="/assets/freshmaker.png" alt="" />
           <img className="w-full object-cover" src="/assets/payman.png" alt="" />
           <img className="w-full object-cover" src="/assets/joyful.png" alt="" />
           <img className="w-full object-cover" src="/assets/pfanner.png" alt="" />
           </div>
        </div>
    </main>
  )
}

export default Main