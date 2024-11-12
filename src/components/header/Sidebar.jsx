import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useContext, useEffect, useState } from 'react';
import { DATA } from "../../context/DataContext"
import { Link } from "react-router-dom";

const Sidebar = ({ visible }) => {
    const { category } = useContext(DATA)
    const [open, setOpen] = useState(true)
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 750) {
                setOpen(false);
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const arrIcon = ["https://neptun.az/image/catalog/icon-menu/Meyvə-və-tərəvəz.svg", "https://neptun.az/image/catalog/icon-menu/ət-və-toyuq məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Qastronom.svg", "https://neptun.az/image/catalog/icon-menu/ərzaq məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Şirniyyat-çay-və qəhvə.svg", "https://neptun.az/image/catalog/icon-menu/İçkilər.svg", "https://neptun.az/image/catalog/icon-menu/Süd-məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Uşaq-məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Kosmetik-və-gigiyenik.svg", "https://neptun.az/image/catalog/icon-menu/Yuyucu-vasitələr.svg", "https://neptun.az/image/catalog/icon-menu/Məişət-mətbəx-və-tekstil.svg", "https://neptun.az/image/catalog/icon-menu/Konselyariya.svg", "https://neptun.az/image/catalog/icon-menu/Heyvan-yemləri.svg", "https://neptun.az/image/catalog/icon-menu/neptun-icon.svg", "https://neptun.az/image/catalog/icon-menu/elektronika-və-mebel.svg", "https://neptun.az/image/catalog/icon-menu/Aksiyalar.svg"]
    return (
        <div
            className={`absolute shadow-md top-[118px] custom:top-[148px] lg:top-[-6px] text-black left-0 z-[999] bg-white min-h-full transition-all lg:border-t-[6px] lg:rounded-md lg:border-[#ff8300] duration-500 ease-in-out 
            ${visible ? "translate-x-0" : "-translate-x-full lg:translate-x-0 "}`}>
            <div
                onClick={() => setOpen(prev => !prev)} 
                className={`hidden w-[220px] ${visible ? 'border-y-[6px] border-[#ff8300]' : ''}  ${isFixed ? "lg:border-b-[6px] lg:rounded-md lg:border-[#ff8300]" : ""} h-[52px] text-[0.9rem] mx-auto lg:flex lg:items-center px-3 lg:px-0 text-[#ff8300] font-bold`}>
                <GiHamburgerMenu className="text-xl mx-3" />
                <h3>Kategoriyalar</h3>
            </div>
            {
                open && <ul
                    className="p-5 lg:p-0">
                    {category && category.map((item, index) => {
                        return (
                            <li key={item.id} className="group border-b-2 lg:relative">
                                <a href="#" className={`py-1 lg:px-3 lg:py-2 flex items-center ${index === category.length - 1 ? 'bg-[#ff8300] text-white' : 'hover:bg-[#ff84003f]'}`}>
                                    <div className="w-[20px]">
                                        <img src={arrIcon[index]} alt="" className="fill-[#ff8300] object-fill w-[22px] h-[24px]" />
                                    </div>
                                    <span className="uppercase text-[.8rem] text-[#000] lg:text-[.65rem] flex-1 lg:capitalize lg:font-bold pl-3 flex items-center ">{item.categoryName}</span>
                                    <RiArrowDropRightLine className="hidden lg:block text-xl ml-3 text-gray-500" />
                                </a>
                                <div>
                                    <ul className="overflow-hidden opacity-0 h-0 group-hover:opacity-100 group-hover:h-full lg:group-hover:transition-all lg:group-hover:duration-400 lg:ease-in-out lg:group-hover:h-auto lg:group-hover:my-0 group-hover:my-4 border-x-2 uppercase lg:capitalize text-[.8rem] border-l-[#fdae4b] px-2 lg:absolute lg:top-0 lg:left-[230px] lg:my-0 lg:bg-white lg:min-w-[200px] lg:text-[.7rem] lg:shadow-md">
                                        {
                                            item.subcategory.map(sub => {
                                                return (
                                                    <li to={sub.slug} key={sub.id} className="py-3 pl-2 hover:text-[#ff8300] hover:underline"><Link    onClick={() => setOpen(prev => !prev)}   to={`${sub.slug}/${sub.id}`}>{sub.categoryName}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}
export default Sidebar