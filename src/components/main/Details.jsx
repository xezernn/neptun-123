import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailById } from "../../services/api";
import { Rate } from "antd";
import { BASKET } from "../../context/BasketContext";

function Details() {
  const [prodDetails, setProdDetails] = useState(null);
  const { prodId } = useParams();
  const [count, setCount] = useState(1);
  const { addToBasket } = useContext(BASKET);

  useEffect(() => {
    getDetailById(prodId).then((res) =>
      setProdDetails({
        ...res,
        count: 1,
      })
    );
  }, [prodId]);


  function updateCount(increment) {
    setProdDetails((prevProdDetails) => ({
      ...prevProdDetails,
      count: Math.max(1, prevProdDetails.count + increment),
    }));
  }

  return (
    <div className="bg-gray-100 ">
      <div className="max-w-[1400px] mx-auto">
        <nav aria-label="breadcrumb" className="w-full p-4 max-w-[1100px] mx-auto">
          <ol className="flex h-8 space-x-2 text-[.8rem]">
            <li className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Back to homepage"
                className="flex items-center hover:underline"
              >
                Home
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-gray-600">/</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 capitalize hover:underline"
              >
                Parent
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-gray-600">/</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 capitalize hover:underline"
              >
                Parent
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-gray-600">/</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 capitalize hover:no-underline cursor-default"
              >
                Current
              </a>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg">
          {prodDetails ? (
            <div
              key={prodDetails.id}
              className="mx-auto w-full flex flex-col md:flex-row md:gap-6"
            >
              <img
                src={prodDetails.img[0]}
                alt={prodDetails.name}
                className="object-cover custom:object-contain w-full mb-4 h-full sm:h-96"
              />
              <div>
                <h2 className="mb-1 text-xl font-semibold">{prodDetails.name}</h2>
                <Rate />
                <p className="text-sm dark:text-gray-600">
                  {prodDetails.description}
                </p>
                {prodDetails.discount ? (
                  <div className="flex gap-2">
                    <p className="text-3xl font-semibold py-2 text-[#ff8300]">
                      {(prodDetails.price - prodDetails.totalPrice).toFixed(2)}{" "}
                      AZN
                    </p>
                    <p className="text-sm font-semibold py-2 text-gray-400 line-through">
                      {prodDetails.price} AZN
                    </p>
                  </div>
                ) : (
                  <p className="text-3xl font-semibold py-2 text-[#ff8300]">
                    {prodDetails.price} AZN
                  </p>
                )}
                <div className="flex py-6 justify-between mx-auto md:mx-0 items-center w-[110px]">
                  <button
                    onClick={() => {
                      updateCount(-1)
                    }}
                    className="text-[#ff8230] text-[2.3rem] font-bold"
                  >
                    -
                  </button>
                  <span>{prodDetails.count}</span>
                  <button
                    onClick={() => {
                      updateCount(1)
                    }}
                    className="text-[#ff8230] text-[2.2rem]  font-bold"
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={(e) => {
                      const totall = prodDetails.discount ? (prodDetails.price - prodDetails.totalPrice) : prodDetails.price;
                      e.preventDefault();
                      addToBasket(
                        prodDetails.id,
                        prodDetails.img,
                        prodDetails.name,
                        totall,
                        prodDetails.discount,
                        prodDetails.count,
                      );
                      setCount(1);
                    }}
                    className="bg-[#ff8230] hover:bg-[#e8772b] transition-all duration-300 w-[110px] h-[30px] rounded-full text-white"
                  >
                    Sebete at
                  </button>
                  <div className="flex items-center w-[21.6px] h-[22px]">
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
                  <div className="rotating text-[13px] w-[16.29px] h-[20.912px]">
                    <svg
                      className="svg-cubic object-cover fill-transparent stroke-[#ff8230] transition-transform duration-400 ease-[cubic-bezier(0.18, 0.89, 0.32, 1.28)] hover:rotate-180"
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
                </div>
              </div>
            </div>
          ) : (
            <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-[#ff8230]"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
