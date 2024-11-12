import { useContext } from "react"
import { BASKET } from "../../context/BasketContext"
import { RiDeleteBin5Line } from "react-icons/ri"
import { Helmet } from "react-helmet"

function TotalProd() {
    const { cart, setCart } = useContext(BASKET)
    function delFromBasket(id) {
        setCart(cart.filter(item => item.id !== id));
    }
    return (
       <>
       <Helmet>
        <meta key="alma armud" />
        <title>Səbət</title>
       </Helmet>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-4xl font-semibold leading-tight">Səbət</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-300 ">
                        <tr className="text-left ">
                            <th className="p-3 border-x border-gray-400">Şəkil</th>
                            <th className="p-3 border-x border-gray-400">Məhsulun adı</th>
                            <th className="p-3 border-x border-gray-400">Model</th>
                            <th className="p-3 border-x border-gray-400">Sayı</th>
                            <th className="p-3  border-x border-gray-400 text-right">Qiyməti</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        cart.length > 0 ?
                        cart.map((item) =>{
                            return (
                                <tr className="border-b border-opacity-20 dark:border-gray-400 dark:bg-gray-100">
                                <td className="p-3 border-x w-[80px] border-gray-300">
                                    <img src={item.img} alt="image" />
                                </td>
                                <td className="p-3 border-x border-gray-300">
                                    <p>{item.name}</p>
                                </td>
                                <td className="p-3 border-x border-gray-300">
                                    <p>14 Jan 2022</p>
                                </td>
                                <td className="p-3 flex gap-3 border-x border-gray-300">
                                    <input className="h-10 w-16 text-center rounded-md" type="text" defaultValue={item.count} />
                                    <button className="h-10 w-16 bg-[#ff8300] hover:bg-[#cd6b02] rounded-full text-white text-lg">Reset</button>
                                    <button onClick={()=>delFromBasket(item.id)} className="h-10 w-16 bg-red-500 hover:bg-red-600 rounded-full text-lg flex justify-center items-center"><RiDeleteBin5Line className=" text-white"/></button>
                                </td>
                                <td className="p-3 text-right border-x border-gray-300">
                                    <p>{item.price.toFixed(2)} man</p>
                                </td>
                            </tr>
                            )
                        })
                        :
                        <tr className="border-b border-opacity-20 dark:border-gray-400 dark:bg-gray-100">
                        <td className="p-3 border-x border-gray-300">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-[#ff8300]"></div>
                        </td>
                        <td className="p-3 border-x border-gray-300">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-[#ff8300]"></div>
                        </td>
                        <td className="p-3 border-x border-gray-300">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-[#ff8300]"></div>
                        </td>
                        <td className="p-3 flex gap-3 border-x border-gray-300">
                            <input className="h-10 w-16 rounded-md" type="text" />
                            <button className="h-10 w-16 bg-[#ff8300] hover:bg-[#cd6b02] rounded-full text-white text-lg">Reset</button>
                            <button className="h-10 w-16 bg-red-500 hover:bg-red-600 rounded-full text-lg flex justify-center items-center"><RiDeleteBin5Line className=" text-white"/></button>
                        </td>
                        <td className="p-3 text-right border-x border-gray-300">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-[#ff8300]"></div>
                        </td>
                    </tr>
                       }
                    </tbody>
                </table>
            </div>
        </div>
       </>
    )
}
export default TotalProd