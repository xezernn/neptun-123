import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Footer() {
  const [visible, setVisible] = useState(false);

  const showMore = () => {
    setVisible(prev => !prev);
  };
  return (
    <footer className="bg-[#ff8300] overflow-hidden min-h-min">
      <div className="max-w-[1500px] mx-auto pt-[24px] pb-[32px] px-[30px]">
        <div className="row block-infos flex gap-[20px] lgx:gap-[30px] w-full md:w-[77%] text-[11px] text-[#fff] font-noto font-semibold mb-[40px]">
          <div className="info group flex flex-col items-center lgx:flex-row w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="/assets/delivery.svg"
              alt="delivery"
            />
            <p className="text-center lgx:text-start inline-block">
              Pulsuz çatdırılma
              <br />
              50 azn-dən yuxarı
            </p>
          </div>
          <div className="info group flex flex-col items-center lgx:flex-row w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="/assets/cash.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Nağd və ya
              <br />
              kartla ödəniş
            </p>
          </div>
          <div className="info group flex flex-col items-center lgx:flex-row w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="/assets/gift.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Hədiyyə
              <br />
              kuponları
            </p>
          </div>
          <div className="info group hidden md:flex  flex-col lgx:flex-row items-center w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="/assets/online.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Onlayn
              <br />
              müştəri xidmətləri
            </p>
          </div>
          <div className="info group hidden md:flex flex-col lgx:flex-row items-center w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="/assets/mobile.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Sürətli
              <br />
              mobil mağaza
            </p>
          </div>
        </div>

        <div className="row  relative">
          <div className="flex flex-col space-y-4">

            <div className="flex flex-col mdl:flex-row mdl:items-center">
              <p className="text-[11px] w-[153px] font-bold text-white py-[15px]">
                Bizə abunə olun
              </p>
              <form className="w-full mdl:w-auto">
                <div className="relative w-full md:w-[50vw] mdl:w-[22vw]">
                  <input
                    type="email"
                    className="block h-[42px] w-full px-5 text-[.85rem] text-gray-900 border border-[#ff8230] rounded-full bg-white"
                    placeholder="e-poçt ünvanınız..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-[1px] bottom-[0.1rem] bg-[#ff8230] hover:bg-[#dd7128] font-medium rounded-full text-[14px] px-4 py-[9px]"
                  >
                    Abunə ol
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col mdl:flex-row mdl:items-center">
              <p className="text-[11px] w-[153px] font-bold text-white py-[15px]">
                Sms xəbərdarlıq üçün
              </p>
              <form className="flex w-full mdl:w-auto space-x-4">
                <select className="h-[42px] px-[15px] text-[12px] text-[#999] bg-white border border-[#ff8230] rounded-full">
                  <option disabled>
                    ---
                  </option>
                  <option value="050">050</option>
                  <option value="051">051</option>
                  <option value="055">055</option>
                  <option value="070">070</option>
                  <option value="077">077</option>
                </select>
                <div className="relative w-full md:w-[40vw] mdl:w-[16vw]">
                  <input
                    type="text"
                    className="block h-[42px]  w-full px-5 text-[.85rem] text-gray-900 border border-[#ff8230] rounded-full bg-white"
                    placeholder="XXX YY ZZ"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-[1px] bottom-[0.1rem] bg-[#ff8230] hover:bg-[#dd7128] font-medium rounded-full text-[14px] px-4 py-[9px]"
                  >
                    Abunə ol
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col mdl:flex-row mdl:items-center">
              <p className="text-[11px] w-[153px] font-bold text-white py-[15px]">
                Bizi izleyin
              </p>
              <ul className="text-2xl flex gap-2">
                <li className="bg-white hover:bg-[#c26425] hover:text-white transition duration-300 p-2 rounded-full inline-block text-[#ff8230]">
                  <a href="#"><FaFacebookF /></a>
                </li>
                <li className="bg-white hover:bg-[#c26425] hover:text-white transition duration-300 p-2 rounded-full inline-block text-[#ff8230]">
                  <a href="#"><TiSocialInstagram /></a>
                </li>
                <li className="bg-white hover:bg-[#c26425] hover:text-white transition duration-300 p-2 rounded-full inline-block text-[#ff8230]">
                  <a href="#"><TfiYoutube /></a>
                </li>
                <li className="bg-white hover:bg-[#c26425] hover:text-white transition duration-300 p-2 rounded-full inline-block text-[#ff8230]">
                  <a href="#"><FaLinkedinIn /></a>
                </li>
              </ul>
            </div>
            <ul className={`lg:flex gap-2 font-semibold overflow-hidden md:max-h-[500px] transition-max-height duration-300 ease-in-out ${visible ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className='pb-3 gap-3 flex flex-col'>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Haqqımızda</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Siyasətimiz</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Yeniliklər</a></li>
              </ul>
              <ul className='pb-3 gap-3 flex flex-col'>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Aksiyalar</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Kampaniyalar</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Neptun bonus kart</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Elektron kataloq</a></li>
              </ul>
              <ul className='pb-3 gap-3 flex flex-col'>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Mağazalarımız</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">İrad və təkliflər</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Alıcıların nəzərinə</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Partnyorluq</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Supermarketdə reklam</a></li>
              </ul>
              <ul className='pb-3 gap-3 flex flex-col'>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Karyera</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">İşə qəbul proseduru</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">Vakansiyalar</a></li>
                <li className="flex items-center text-white text-[.8rem]"><FaAngleRight /><a href="">CV yerləşdirin</a></li>
              </ul>
            </ul>
            <a onClick={showMore} className="md:hidden underline text-white text-[.8rem] font-bold decoration-dotted cursor-pointer">
              {visible ? 'Bagla' : 'Daha çox'}
            </a>
            <p className='text-white pt-5 text-[.8rem]'>© 2003 - {new Date().getFullYear()} Neptun Supermarket. All rights reserved</p>
            <p className='text-white pt-5 text-[.8rem]'>Created by: <span className='text-[.9rem] underline decoration-dotted'>Guney & Sabina</span></p>
          </div>
          <div className="hidden md:block symmbol absolute top-0 right-0 translate-x-1/3 hover:translate-x-1/4 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="442.03" height="565" viewBox="0 0 442.03 565">
              <defs>
              </defs>
              <path id="symbol" className="cls-1 fill-white" d="M1220.94,3035.86a168.127,168.127,0,0,0-101.87,34.66c-25.9-22.53-59.57-35.53-98.41-35.53h-11.23A60.72,60.72,0,0,0,949,3095.65c0,32.93,26.763,60.66,60.429,60.66h11.23c21.58,0,31.94,18.19,31.94,37.26v172.44a60.907,60.907,0,0,0,61.29,60.66c33.67,0,60.44-27.73,60.44-60.66V3206.57c0-26,21.58-47.66,47.48-47.66s47.48,21.66,47.48,47.66v159.44c0,32.93,26.76,60.66,60.43,60.66a60.916,60.916,0,0,0,61.3-60.66V3206.57C1390.15,3111.25,1314.18,3035.86,1220.94,3035.86Zm-107.91,442.81a60.655,60.655,0,1,1-60.43,60.66A60.536,60.536,0,0,1,1113.03,3478.67Zm215.83,0a60.655,60.655,0,1,1-60.43,60.66A60.543,60.543,0,0,1,1328.86,3478.67Z" transform="translate(-949 -3035)"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className='bg-white flex justify-center items-center h-[80px]'>
        <img src='https://neptun.az/image/catalog/footer/visalogo.svg' alt="visa" className='h-[60px] w-[90px] md:w-[150px]' />
      </div>
    </footer>
  );
}

export default Footer
