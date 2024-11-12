import { createContext, useState } from "react"
import { Cookies } from "react-cookie";
export const BASKET = createContext(null)

function BasketContext({ children }) {
    const cookie = new Cookies()
    const [cart, setCart] = useState(cookie.get("cart") ||[])
    function addToBasket(id, img, name, price, discount,count, totalPrice){
        const existingItem = cart.find(item => item.id === id);
        const finalPrice = totalPrice || price;
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === id ? { ...item, count: item.count + count } : item
            ));
        } else {
            setCart([...cart, { id, img, name, price: finalPrice, discount, count, totalPrice }]);
        }
        cookie.set("cart", cart)

    }

    return (
        <BASKET.Provider value={{ cart, setCart, addToBasket}}>
            {children}
        </BASKET.Provider>
    )
}
export default BasketContext