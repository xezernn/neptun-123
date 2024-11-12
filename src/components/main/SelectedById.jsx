import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsBySubId } from "../../services/api";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";
import { Pagination } from "antd";
import { BASKET } from "../../context/BasketContext";

function SelectedById() {
  const [productData, setProductData] = useState(null);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const { catname, subId } = useParams()
  const { addToBasket } = useContext(BASKET)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    getProductsBySubId(subId, page, limit).then((res) => {
      setProductData(
        res.products.map((item) => ({
          ...item,
          count: 1,
        }))
      );
      setTotalPages(res.totalPages); 
    });
  }, [subId, page, limit]);
  console.log(totalPages);
  
  useEffect(() => {
    setPage(1);
  }, [catname]);

  function updateCount(id, increment) {
    setProductData((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, item.count + increment) }
          : item
      )
    );
  }


  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-[1150px] mx-auto md:px-[15px]">
        <ul className="pt-[36px] pb-[31px] px-2 flex flex-wrap text-[#6c6c6c] text-[13px] font-bold">
          <li className="px-1">
            <a className="whitespace-nowrap" href="#">
              Ana Səhifə
            </a>
            <FontAwesomeIcon
              className="px-[8px] text-[#666] text-[12px]"
              icon={faChevronRight}
            />
          </li>
          <li>
            <a className="whitespace-nowrap" href="#">
              Meyvə, tərəvəz, quru meyvə
            </a>
            <FontAwesomeIcon
              className="px-[8px] text-[#666] text-[12px]"
              icon={faChevronRight}
            />
          </li>
          <li className="px-1">
            <a className="whitespace-nowrap" href="#">
              Meyvə
            </a>
          </li>
        </ul>

        <div className="px-2 mdl:flex gap-2 w-full">
          <aside className="mb-[40px] max-h-[200px] overflow-hidden w-full hidden mdl:block mdl:w-[30%] md:w-[33%] bg-white border rounded-[7px]">
            <h3 className="leading-[100%] py-[3px] pl-[10px] pr-[3px]">
              <span className="font-bold text-[11px] text-[#222] inline-block">
                Filtr
              </span>
            </h3>

            <ul className="">
              <li className="text-[11px] flex items-center justify-between border-b px-[11px] text-[#444] font-bold py-[10px]">
                <span>Alt Kategoriya</span>
                <FontAwesomeIcon
                  className="px-[8px] text-[9px] font-bold text-black"
                  icon={faChevronRight}
                />
              </li>

              <li className="text-[11px] flex items-center justify-between border-b px-[11px] text-[#444] font-bold py-[10px]">
                <span>Markası</span>
                <FontAwesomeIcon
                  className="px-[8px] text-[9px] font-bold text-black"
                  icon={faChevronRight}
                />
              </li>

              <li className="text-[11px] flex items-center justify-between border-b px-[11px] text-[#444] font-bold py-[10px]">
                <span>Qiymət</span>
                <FontAwesomeIcon
                  className="px-[8px] text-[9px] font-bold text-black"
                  icon={faChevronRight}
                />
              </li>
            </ul>
            <div className="p-[20px] text-center">
              <button className="bg-[#ff8300] py-[3px] px-[21px] text-[11px] font-bold text-white rounded-[15px]">
                Hamısını Sıfırla
              </button>
            </div>
          </aside>

          <div className="content">
            <div className="dropdown-menu mb-[15px] mdl:hidden ">
              <FontAwesomeIcon
                className="cursor-pointer bg-[#ff8300] text-white md:bg-[#ff8300] md:text-white  text-[25px] px-4 py-[2px]"
                icon={faBars}
              />
            </div>

            <div className="products-category ">
              <div className="product-filter md:flex mdl:justify-end md:gap-3 items-center">
                <div className="mb-[15px]">
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <form className="flex items-center mb-[15px]">
                  <label
                    className="font-normal text-[11px] mr-[18px] leading-10"
                    htmlFor="sort"
                  >
                    Sirala:
                  </label>
                  <select
                    className="font-bold h-[38px] text-[13px] px-[10px] rounded-[24px] bg-white text-black w-full outline-none "
                    id="sort"
                  >
                    <option value="">Əsas</option>
                    <option value="">Ad (A - Z)</option>
                    <option value="">Ad (Z - A)</option>
                    <option value="">Qiymət (Aşağıdan - Yuxarıya)</option>
                    <option value="">Qiymət (Yuxarıdan - Aşağıya)</option>
                    <option value="">Reytinq (Yuxarı)</option>
                    <option value="">Reytinq (Aşağı)</option>
                    <option value="">Model (A - Z)</option>
                    <option value="">Model (Z - A)</option>
                  </select>
                </form>
                <form className="flex items-center mb-[15px]">
                  <label
                    className="font-normal text-[11px] mr-[18px] leading-10"
                    htmlFor="sort"
                  >
                    Göstər:
                  </label>
                  <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}
                    className="font-bold h-[38px] text-[13px] px-[10px] rounded-[24px] bg-white text-black w-full outline-none "
                    id="sort"
                  >
                    <option value="12">12</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                  </select>
                </form>

                <div className="compare flex items-center text-white justify-center rounded-[27px] px-[15px] py-[5px] bg-[#ff8300] mb-[15px]">
                  <a className="inline-block w-[23px] mr-[1px]" href="#">
                    <div className="rotating text-[13px] w-[16.29px]">
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
                  Müqayisə et
                </div>
              </div>
              <div className="products-lists grid place-content-center mdl:place-content-end gap-11 custom:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
                {productData
                  ? productData.map((item) => {
                      return (
                        <Link key={item.id}
                          to={`${item.id}`}
                          className="bg-white border-[1px] h-full rounded-md flex flex-col items-center justify-center w-full lgx:w-[200px]"
                        >
                          <div className="flex w-[80%] mt-4 justify-end">
                            <div className="w-[21.6px] h-[22px]">
                              <svg
                                className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
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
                          </div>
                          <div className="w-full min-h-[150px] relative">
                            <img
                              className="object-cover w-full"
                              src={item.img}
                              alt=""
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 translate-y-[-50px] hover:translate-y-[-10px] transition-all duration-500">
                              <div className="bg-[#ff8230] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                                <FaSearch className="text-white text-[.9rem]" />
                              </div>
                            </div>
                          </div>
                          <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">
                            {item.name}
                          </h3>
                          <h2 className="text-[1.3rem] font-bold">
                            {item.price.toFixed(2)} ₼
                          </h2>
                          <div className="flex justify-between items-center w-[110px]">
                            <button
                              onClick={(e) => {
                                updateCount(item.id, -1);
                                e.preventDefault();
                              }}
                              className="text-[#ff8230] text-[2.3rem] font-bold"
                            >
                              -
                            </button>
                            <span>{item.count}</span>
                            <button
                              onClick={(e) => {
                                updateCount(item.id, 1)
                                e.preventDefault()
                              }}
                              className="text-[#ff8230] text-[2.2rem]  font-bold"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addToBasket(
                                item.id,
                                item.img,
                                item.name,
                                item.price,
                                item.discount,
                                item.count
                              );
                            }}
                            className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[100px] h-[35px] mb-10"
                          >
                            Sebete at
                          </button>
                        </Link>
                      );
                    })
                  : new Array(8).fill("").map((item,i) => <Loading key={i} />)}
              </div>
              <div className="flex gap-3 justify-start py-6 max-w-[800px]">
                <Pagination
                  current={page || 1}
                  total={totalPages * 10}
                  onChange={(page) => setPage(page)}
                  className="custom-pagination"
                />
                {/* {
                  Array(productData && productData.totalPages).fill("").map((_, i) => (
                    <button onClick={() => setPage(i + 1)} type="button" title={`Page ${i + 1}`} className=" w-8 h-8 text-sm font-semibold border rounded shadow-md text-[#ff8230] hover:text-white bg-white hover:bg-[#ff8230] border-[#ff8230]">{i + 1}</button>
                  ))
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedById;
