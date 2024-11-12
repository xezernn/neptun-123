import "@fontsource/noto-sans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faChevronDown,
  faHeart as faRegularHeart,
  faBars,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BASKET } from "../../context/BasketContext";
import { Link } from "react-router-dom";

function HeaderBottom() {
  const [openIndex, setopenIndex] = useState(null);
  const [sidebar, setSideBar] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const { cart, setCart } = useContext(BASKET)
  const [amount, setAmount] = useState(0)

  function toggleLists(index) {
    setopenIndex((prevIndex) => (prevIndex === index ? null : index)
    )
  }
  function handleSidebar() {
    setSideBar(!sidebar);
  }

  const [visible, setVisible] = useState(false);

  const showMore = () => {
    setVisible(!visible);
    
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 750) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  function calculateTotal() {
    const total = cart.reduce((acc, item) => {
      const itemPrice = (item.totalPrice ? item.totalPrice : item.price) * item.count;
      return acc + itemPrice;
    }, 0);
    setAmount(total.toFixed(2));
  }

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  function deleteProd(id) {
    setCart((prev) => {
      return prev.filter(item => item.id !== id);
    })
  }

  return (
    <>
      <div
        className={`header-bottom shadow-md bg-[#ff8300] transition-all duration-300 ${isFixed ? "fixed top-0 w-full z-50" : "top-[-50px]"
          }`}
      >
        <div className="container lgx:max-w-[1200px] mx-auto px-[15px]">
          <div className="header-bottom-inner flex items-center justify-between lg:relative text-white">
            <Sidebar onClose={showMore} visible={visible} />
            <div className="header-bottom-left lg:hidden" onClick={showMore}>
              <FontAwesomeIcon className="text-xl" icon={faBars} />
            </div>
            <div>
              <ul className="hidden lgx:flex lgx:justify-end w-[800px] pt-[3px] pl-[18px]">
                <li>
                  <a
                    className="font-bold text-[11px] text-white py-[5px] pr-[18px] pl-[10px] leading-[28px] font-noto hover:text-[#eee]"
                    href="/"
                  >
                    Ana səhifə
                  </a>
                </li>
                <li className="relative group">
                  <a
                    className="font-bold text-[11px] text-white py-[5px] pr-[18px] pl-[10px] leading-[28px] font-noto hover:text-[#eee]"
                    href=""
                  >
                    Haqqımızda
                    <FontAwesomeIcon className="px-2" icon={faSortDown} />
                  </a>
                  <ul className="lists absolute w-full left-0 min-w-[244px] border rounded-lg max-h-0 overflow-hidden group-hover:max-h-[300px] hidden group-hover:block bg-clip-pading z-10 bg-white text-black transition-all duration-500 text-[12px] pt-[5px]">
                    <li className="p-2 cursor-pointer">
                      <a href="">Siyasətimiz</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Yeniliklər</a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <a
                    className="font-bold text-[11px] text-white py-[5px] pr-[18px] pl-[10px] leading-[28px] font-noto hover:text-[#eee]"
                    href=""
                  >
                    Aksiyalar
                    <FontAwesomeIcon className="px-2" icon={faSortDown} />
                  </a>
                  <ul className="lists absolute w-full left-0 min-w-[244px] z-10 border rounded-lg max-h-0 overflow-hidden group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 bg-white text-black transition-all duration-500 ease-out text-[12px] pt-[5px]">
                    <li className="p-2 cursor-pointer">
                      <a href="">Kampaniyalar</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Neptun Bonus Kart</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Elektron Kataloq</a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <a
                    className="font-bold text-[11px] text-white py-[5px] pr-[18px] pl-[10px] leading-[28px] font-noto hover:text-[#eee]"
                    href=""
                  >
                    Supermarketlər
                    <FontAwesomeIcon className="px-2" icon={faSortDown} />
                  </a>
                  <ul className="lists absolute w-full left-0 min-w-[244px] z-10 border rounded-lg max-h-0 overflow-hidden group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 bg-white text-black transition-all duration-500 ease-out text-[12px] pt-[5px]">
                    <li className="p-2 cursor-pointer">
                      <a href="">Mağazalarımız</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">İrad və Təkliflər</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Alıcıların Nəzərinə</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Partnyorluq</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Tərəfdaşlar</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Supermarketde Reklam</a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <a
                    className="font-bold text-[11px] text-white py-[5px] pr-[18px] pl-[10px] leading-[28px] font-noto hover:text-[#eee]"
                    href=""
                  >
                    Karyera
                    <FontAwesomeIcon className="px-2" icon={faSortDown} />
                  </a>
                  <ul className="lists absolute w-full left-0 min-w-[244px] z-10 border rounded-lg max-h-0 overflow-hidden group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 bg-white text-black transition-all duration-500 ease-out text-[12px] pt-[5px]">
                    <li className="p-2 cursor-pointer">
                      <a href="">İşə qəbul Proseduru</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">Vakansiyalar</a>
                    </li>
                    <li className="p-2 cursor-pointer">
                      <a href="">CV Yerləşdirin</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="font-bold text-[11px] text-white py-[5px] pr-[18px] pl-[10px] leading-[28px] font-noto hover:text-[#eee]"
                    href=""
                  >
                    Əlaqə
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-bottom-right justify-center flex items-center">
              <div className="header-top-btns justify-center flex items-center mr-[15px] md:mr-0">
                <div className="header-top-left flex items-center">
                  <div className="tabBlock flex">
                    <ul className="items-center whitespace-nowrap leading-[44px] flex">
                      <li>
                        <a className="text-[12px] px-[8px] text-white" href="">
                          <FontAwesomeIcon icon={faLock} className="px-1" />{" "}
                          Giriş
                        </a>
                      </li>
                      <li className="relative group border-[#ddd]">
                        <a
                          className="text-[12px] px-[8px] text-white border-l hover:text-[#eee] "
                          href=""
                        >
                          <span href="" className="px-2 hidden md:inline-block">
                            Hesabım
                          </span>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                        <ul className="dropdown-menu text-[12px] absolute top-[29px] group-hover:block hidden transition-all duration-300 mt-[10px] min-w-[144px] p-0 border border-[#00000026] left-0 right-0 bg-clip-padding bg-white z-10">
                          <li>
                            <a
                              className="px-[15px] py-[5px] text-[#555] block leading-[1.42857143] hover:text-[#ff8300] hover:bg-[#f7f7f7]"
                              href=""
                            >
                              Hesabım
                            </a>
                          </li>
                          <li>
                            <a
                              className="px-[15px] py-[5px] text-[#555] block leading-[1.42857143] hover:text-[#ff8300] hover:bg-[#f7f7f7]"
                              href=""
                            >
                              Sifariş tarixçəsi
                            </a>
                          </li>
                          <li>
                            <a
                              className="px-[15px] py-[5px] text-[#555] block leading-[1.42857143] hover:text-[#ff8300] hover:bg-[#f7f7f7]"
                              href=""
                            >
                              Əməliyyatlar
                            </a>
                          </li>
                          <li>
                            <a
                              className="px-[15px] py-[5px] text-[#555] block leading-[1.42857143] hover:text-[#ff8300] hover:bg-[#f7f7f7]"
                              href=""
                            >
                              Yükləmələr
                            </a>
                          </li>
                          <li>
                            <a
                              className="px-[15px] py-[5px] text-[#555] block leading-[1.42857143] hover:text-[#ff8300] hover:bg-[#f7f7f7]"
                              href=""
                            >
                              Sifarişi rəsmiləşdir
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative header-top-right text-center flex items-center">
                  <div className="header-custom-link flex items-center">
                    <ul className="flex mr-[5px] items-center">
                      <li className="wishlist inline-block w-[23px] mt-0 sm:ml-[15px] mr-[1px]">
                        <a
                          className="text-white text-[9px] text-center"
                          href=""
                        >
                          <div className="flex items-center w-[21.6px] h-[22px]">
                            <svg
                              className="fill-transparent object-cover stroke-[#fff] stroke-[8.07px] hover:fill-white duration-200"
                              xmlns="http://www.w3.org/2000svg"
                              viewBox="-5 0 156.69 110.07"
                            >
                              <defs></defs>
                              <path
                                data-name="neptun_heart"
                                className="cls-1"
                                d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                                transform="translate(-1191.655 -217.465)"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                      <li className="compare inline-block w-[23px] ml-[15px] mr-[1px]">
                        <a href="">
                          <div className="rotating text-[13px] w-[16.29px] h-[20.912px]">
                            <svg
                              className="svg-cubic object-cover fill-transparent stroke-white transition-transform duration-400 ease-[cubic-bezier(0.18, 0.89, 0.32, 1.28)] hover:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16.29 20.912"
                            >
                              <path
                                id="vs"
                                className="cls-1"
                                d="M1330.59,145a8.161,8.161,0,0,1-2.32,5.744c-0.09.085-.17,0.171-0.26,0.252a0.256,0.256,0,0,0-.03.028c-0.06.059-.13,0.116-0.19,0.173-0.03.026-.06,0.052-0.09,0.076a0.226,0.226,0,0,1-.02.013,7.592,7.592,0,0,1-1.08.764c-0.09.056-.19,0.111-0.29,0.164a7.073,7.073,0,0,1-.67.319l-0.25.1a0.484,0.484,0,0,1-.06.022c-0.1.035-.19,0.068-0.29,0.1s-0.19.059-.29,0.085c-0.04.013-.09,0.026-0.14,0.037s-0.13.035-.2,0.05c-0.04.009-.07,0.018-0.11,0.025-0.09.019-.18,0.037-0.27,0.052a0.068,0.068,0,0,1-.02,0c-0.11.022-.23,0.04-0.34,0.053s-0.23.028-.35,0.037l1.69,1.6a0.336,0.336,0,0,1,.01.466,0.31,0.31,0,0,1-.45.017l-2.18-2.057-0.08-.077a0.331,0.331,0,0,1-.1-0.229,0.384,0.384,0,0,1,.08-0.236l0.11-.116,1.98-2.2a0.31,0.31,0,0,1,.24-0.107,0.35,0.35,0,0,1,.22.088,0.335,0.335,0,0,1,.01.465l-1.55,1.726c0.03,0,.07-0.007.1-0.011,0.08-.009.16-0.018,0.24-0.029,0.12-.015.23-0.035,0.35-0.057,0.1-.019.21-0.041,0.31-0.067a0.025,0.025,0,0,0,.02,0c0.11-.026.22-0.054,0.33-0.087s0.19-.057.29-0.09a0.661,0.661,0,0,0,.07-0.026c0.1-.031.19-0.068,0.28-0.1,0.07-.026.14-0.055,0.2-0.083,0.15-.061.29-0.129,0.43-0.2l0.21-.114c0.03-.018.06-0.035,0.09-0.055,0.08-.039.15-0.081,0.22-0.124a0.027,0.027,0,0,1,.01-0.009,1.131,1.131,0,0,0,.13-0.088c0.16-.1.31-0.207,0.46-0.321,0.07-.055.14-0.109,0.21-0.168a7.492,7.492,0,0,0,.92-0.914c0.04-.046.07-0.092,0.11-0.138,0.02-.028.05-0.055,0.07-0.083a1.315,1.315,0,0,1,.1-0.127,0.313,0.313,0,0,1,.05-0.072c0.03-.048.07-0.1,0.1-0.145a1.266,1.266,0,0,0,.1-0.146c0.03-.05.07-0.1,0.1-0.151a7.541,7.541,0,0,0,.7-1.456,1.185,1.185,0,0,0,.06-0.173c0.02-.057.04-0.116,0.06-0.175s0.03-.111.05-0.168c0.05-.18.09-0.361,0.13-0.547,0.01-.046.02-0.092,0.03-0.14,0.02-.1.03-0.2,0.05-0.31,0-.051.01-0.1,0.01-0.153,0.02-.121.03-0.243,0.04-0.366,0-.056.01-0.114,0.01-0.17,0.01-.12.01-0.241,0.01-0.363a7.537,7.537,0,0,0-2.14-5.277l0.46-.468A8.164,8.164,0,0,1,1330.59,145Zm-13.54,5.744a8.272,8.272,0,0,1,0-11.489c0.08-.085.17-0.17,0.26-0.251,0.01-.009.02-0.02,0.03-0.028a2.46,2.46,0,0,1,.19-0.173c0.03-.031.07-0.061,0.1-0.09,0.16-.135.33-0.262,0.5-0.382,0.09-.07.19-0.136,0.29-0.2,0.06-.037.12-0.074,0.17-0.111s0.11-.066.16-0.1c0.07-.04.14-0.077,0.2-0.112s0.1-.05.15-0.074,0.12-.061.18-0.092,0.11-.053.16-0.077,0.12-.054.18-0.078c0.04-.018.08-0.033,0.12-0.051s0.08-.032.13-0.048a1,1,0,0,1,.11-0.044c0.03-.008.05-0.017,0.08-0.026,0.07-.026.14-0.052,0.21-0.074,0.1-.031.2-0.061,0.3-0.088,0.04-.013.09-0.026,0.13-0.037,0.07-.017.14-0.035,0.21-0.05,0.04-.011.08-0.02,0.12-0.028s0.1-.02.15-0.029c0.08-.015.16-0.028,0.24-0.041,0.04-.007.09-0.016,0.14-0.02s0.08-.013.12-0.017c0.07-.009.14-0.018,0.21-0.025,0.04,0,.07-0.008.11-0.01l-1.69-1.6a0.336,0.336,0,0,1-.02-0.465,0.321,0.321,0,0,1,.46-0.018l2.17,2.058,0.08,0.076a0.338,0.338,0,0,1,.11.23V137.2a0.32,0.32,0,0,1-.09.227l-0.1.116-1.98,2.2a0.333,0.333,0,0,1-.24.107,0.32,0.32,0,0,1-.22-0.087,0.337,0.337,0,0,1-.02-0.466l1.56-1.723c-0.02,0-.04,0-0.06,0s-0.03,0-.05.005c-0.08.009-.16,0.017-0.24,0.028-0.11.016-.23,0.035-0.34,0.057s-0.21.042-.31,0.068a0.076,0.076,0,0,0-.04.011c-0.11.024-.21,0.05-0.31,0.081s-0.2.057-.29,0.089c-0.02.009-.05,0.016-0.07,0.027-0.1.033-.19,0.068-0.28,0.1-0.07.026-.14,0.054-0.21,0.083a6.852,6.852,0,0,0-.63.315c-0.05.024-.09,0.048-0.13,0.072-0.16.094-.32,0.194-0.47,0.3-0.05.031-.09,0.064-0.14,0.095s-0.11.085-.17,0.128-0.14.112-.21,0.169a7.353,7.353,0,0,0-.92.914,1.146,1.146,0,0,0-.11.138c-0.02.026-.05,0.054-0.07,0.083a1.308,1.308,0,0,1-.1.126,0.3,0.3,0,0,1-.05.073c-0.03.046-.07,0.1-0.1,0.144a1.194,1.194,0,0,0-.1.147c-0.03.05-.07,0.1-0.1,0.15a7.55,7.55,0,0,0-.7,1.457,0.621,0.621,0,0,0-.06.172c-0.02.06-.04,0.117-0.06,0.176s-0.03.111-.05,0.168c-0.05.179-.09,0.361-0.13,0.547-0.01.045-.02,0.091-0.03,0.14-0.02.1-.03,0.2-0.05,0.31a0.823,0.823,0,0,1-.02.153c-0.01.12-.02,0.243-0.03,0.365,0,0.057-.01.114-0.01,0.171-0.01.12-.01,0.24-0.01,0.363a7.528,7.528,0,0,0,2.14,5.274Z"
                                transform="translate(-1314.51 -134.544)"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="block-cart relative cursor-pointer"
                    onClick={() => {
                      setIsToggled((prev) => !prev);
                    }}
                  >
                    <div className="shopping-cart w-[20.88px] h-[17.944px] text-[13px]">
                      <svg
                        className="fill-transparent stroke-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20.88 17.944"
                      >
                        <defs></defs>
                        <path
                          id="basket"
                          className="cls-1"
                          d="M1369.03,146.19l2.2-5.734a0.887,0.887,0,0,0-.1-0.834,0.913,0.913,0,0,0-.75-0.39h-14.17l-1.11-2.886a0.92,0.92,0,0,0-.86-0.587h-3.11a0.319,0.319,0,1,0,0,.637h3.11a0.283,0.283,0,0,1,.26.175l1.16,3.028a0.158,0.158,0,0,0,.02.065l2.65,6.9c0.01,0.022.02,0.044,0.03,0.063l1.15,3a1.846,1.846,0,1,0,2.13,1.826,1.8,1.8,0,0,0-.46-1.208h5.78a1.8,1.8,0,0,0-.46,1.208,1.865,1.865,0,1,0,1.96-1.842l-0.04,0h-8.04a0.27,0.27,0,0,1-.25-0.171l-1.03-2.665h9.07A0.93,0.93,0,0,0,1369.03,146.19Zm1.57-6.206a0.269,0.269,0,0,1,.03.246l-2.2,5.734a0.275,0.275,0,0,1-.26.172h-9.31l-2.41-6.267h13.93A0.262,0.262,0,0,1,1370.6,139.984Zm-10.82,12.677a1.208,1.208,0,1,1,1.22-1.208A1.219,1.219,0,0,1,1359.78,152.661Zm9.81-1.208a1.225,1.225,0,1,1-1.23-1.208A1.219,1.219,0,0,1,1369.59,151.453Z"
                          transform="translate(-1350.61 -135.544)"
                        ></path>
                      </svg>
                      <div className="absolute top-[-10px] right-[-13px] bg-[#00ff00] text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {cart.length}
                      </div>
                    </div>
                  </div>
                  {isToggled && (
                    // Sebet
                    <div className="cart-dropdown shadow-xl absolute top-[37px] right-[-30px] md:right-0 border-t-2 text-gray-800 border-t-[#ff8300] bg-white min-h-[100px] z-[999] min-w-[200px] custom:w-[320px]">

                      {cart && cart.map(item => {

                        return (
                          <div key={item.id} className="bg-gray-50 border flex gap-3 pr-2  items-center text-gray-600 text-[.7rem]">
                            <div className="w-[60px] h-[60px]"><img src={item.img} alt={item.name} className="object-cover" /></div>
                            <div className="flex-1">
                              <h3 className="uppercase  text-[.6rem] w-[70px]">{item.name}</h3>
                            </div>
                            <div className="flex gap-3 items-center">
                              <h3>x {item.count}</h3>
                              <p>{((item.price || item.totalPrice) * item.count).toFixed(2)}azn</p>
                              <RiDeleteBin5Line onClick={() => deleteProd(item.id)} className="cursor-pointer hover:text-red-500" />
                            </div>
                          </div>
                        )
                      })}

                      <p className="text-[.8rem] py-3 text-right pr-6"><span className="font-bold">Ümumi məbləğ:</span> {amount} azn</p>
                      <div className="flex justify-between p-3">
                        <Link to='cartItems'>
                          <button onClick={() => setIsToggled(false)} className="w-[70px] h-[30px] text-[.7rem] bg-neutral-600 hover:bg-[#ff8300] rounded-full text-white">
                            Səbət
                          </button>
                        </Link>

                        <button className="w-[120px] h-[30px] text-[.7rem] bg-[#ff8300] hover:bg-[#e37602]  rounded-full text-white"> Sifarişi rəsmiləşdir</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              onClick={handleSidebar}
              className="dropdown-menu md:right-16 cursor-pointer md:absolute md:top-[30px] mdl:opacity-0"
            >
              <FontAwesomeIcon
                className=" bg-white  text-[#ff8300] md:bg-[#ff8300] md:text-white  text-[25px] px-3 py-1 rounded-md"
                icon={faBars}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 z-[999] h-[100vh] bg-white duration-700 w-[280px] ${sidebar ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-[20px] text-black">
          <span
            onClick={handleSidebar}
            className={`block cursor-pointer pb-[10px] font-bold text-right ${sidebar ? "" : "hidden"
              }`}
          >
            X
          </span>
          <ul>
            <li className="border-b hover:text-[#ff8300] font-normal text-[13px] font-noto text-[#222]  leading-[29px] pb-2">
              <a href="#">Ana səhifə</a>
            </li>
            <li className="border-b font-normal text-[13px] font-noto text-[#222]  leading-[29px] py-1">
              <div className="flex items-center justify-between">
                <a className="hover:text-[#ff8300] w-full" href="#">
                  Haqqımızda
                </a>
                <button
                  onClick={() => toggleLists(0)}
                  className={`${openIndex === 0
                      ? "bg-[#ff8300] opacity-60"
                      : "bg-[#ff8300] opacity-100"
                    } w-[22px] h-[22px] flex items-center justify-center text-white my-1 cursor-pointer transition-opacity duration-300`}
                >
                  <span className="text-center font-bold">
                    {openIndex === 0 ? "-" : "+"}
                  </span>
                </button>
              </div>
              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 0
                    ? "max-h-40 opacity-100 border-t-2 border-[#ff8300]"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 py-[10px]"
                    href="#"
                  >
                    Siyasətimiz
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    Yeniliklər
                  </a>
                </li>
              </ul>
            </li>
            <li className="border-b font-normal text-[13px] font-noto text-[#222]  leading-[29px] py-1">
              <div className="flex items-center justify-between">
                <a className="hover:text-[#ff8300] w-full" href="#">
                  Aksiyalar
                </a>
                <button
                  onClick={() => toggleLists(1)}
                  className={`${openIndex === 1
                      ? "bg-[#ff8300] opacity-60"
                      : "bg-[#ff8300] opacity-100"
                    } w-[22px] h-[22px] flex items-center justify-center text-white my-1 cursor-pointer transition-opacity duration-300`}
                >
                  <span className="text-center font-bold">
                    {openIndex === 1 ? "-" : "+"}
                  </span>
                </button>
              </div>
              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 1
                    ? "max-h-40 opacity-100 border-t-2 border-[#ff8300]"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 py-[10px]"
                    href="#"
                  >
                    Kampaniyalar
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    Neptun bonus kart
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    Elektron kataloq
                  </a>
                </li>
              </ul>
            </li>
            <li className="border-b font-normal text-[13px] font-noto text-[#222]  leading-[29px] py-1">
              <div className="flex items-center justify-between">
                <a className="hover:text-[#ff8300] w-full" href="#">
                  Supermarketlər
                </a>
                <button
                  onClick={() => toggleLists(2)}
                  className={`${openIndex === 2
                      ? "bg-[#ff8300] opacity-60"
                      : "bg-[#ff8300] opacity-100"
                    } w-[22px] h-[22px] flex items-center justify-center text-white my-1 cursor-pointer transition-opacity duration-300`}
                >
                  <span className="text-center font-bold">
                    {openIndex === 2 ? "-" : "+"}
                  </span>
                </button>
              </div>
              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 2
                    ? "min-h-40 opacity-100 border-t-2 border-[#ff8300]"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 py-[10px]"
                    href="#"
                  >
                    Mağazalarmız
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    İrad və təkliflər
                  </a>
                </li>
                <li>
                  <a className="text-[10px] block w-full pb-[20px]" href="#">
                    Alıcıların nəzərinə
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    Partnyorluq
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    Tərəfdaşlar
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    Supermarketdə reklam
                  </a>
                </li>
              </ul>
            </li>
            <li className="border-b font-normal text-[13px] font-noto text-[#222]  leading-[29px] py-1">
              <div className="flex items-center justify-between">
                <a className="hover:text-[#ff8300] w-full" href="#">
                  Karyera
                </a>
                <button
                  onClick={() => toggleLists(3)}
                  className={`${openIndex === 3
                      ? "bg-[#ff8300] opacity-60"
                      : "bg-[#ff8300] opacity-100"
                    } w-[22px] h-[22px] flex items-center justify-center text-white my-1 cursor-pointer transition-opacity duration-300`}
                >
                  <span className="text-center font-bold">
                    {openIndex === 3 ? "-" : "+"}
                  </span>
                </button>
              </div>
              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 3
                    ? "max-h-40 opacity-100 border-t-2 border-[#ff8300]"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 py-[10px]"
                    href="#"
                  >
                    İşə Qəbul Proseduru
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    Vakansiyalar
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] block w-full leading-6 pb-[20px]"
                    href="#"
                  >
                    CV yerləşdirin
                  </a>
                </li>
              </ul>
            </li>
            <li className="border-b hover:text-[#ff8300] font-normal text-[13px] font-noto text-[#222]  leading-[29px] py-2">
              <a href="#">Əlaqə</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderBottom;
