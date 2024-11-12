import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Headertop() {
    return (
        <div className="flex custom:gap-6 justify-center md:justify-start items-center w-[96%] lg:w-11/12 lgx:max-w-[1200px] mx-auto">
            <div className="h-[70px] custom:h-[100px]">
                <Link to={"/"}>
                <img className="h-[70px] custom:h-[100px] w-[130px] custom:w-[200px] lg:w-[250px] object-cover" src="/assets/logo.png" alt="logo image" />
                </Link>
            </div>
            <div className="lg:flex lg:items-center lg:justify-between custom:flex-1 md:flex-none lg:flex-1">
                <form className="lg:w-1/2">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FaSearch className="w-4 h-4 text-[#ff8230]" />
                        </div>
                        <input type="search" id="search" className="block min-w-[180px] w-full p-1 ps-10 text-[.85rem] text-gray-900 border border-[#ff8230] rounded-full bg-white custom:p-3 custom:min-w-[300px] custom:ps-10" placeholder="Məhsulu atarın" required />
                        <button type="submit" className="text-white absolute end-0 bottom-[0.05rem] bg-[#ff8230] hover:bg-[#dd7128]  font-medium rounded-full text-[0.85rem] px-4 py-1 custom:py-3 custom:px-6">Axtar</button>
                    </div>
                </form>
                <div className="hidden lg:flex gap-4">
                    <div className="flex gap-2 items-center">
                        <img className="w-[20px] h-[20px]" src="/assets/aze.png" alt="AZE" />
                        <span className="text-[.8rem]">AZE</span>
                    </div>
                    <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAArCAYAAABoxeapAAAH10lEQVR4nO2bC4xcVRnHf7NUBKlBUTC08rCLBFHIwBaMAXmEKSHxBTEFjKA8d9H4CKhtITDq8HAXwiuamF2lgoBCCyRYVEjHB0FAoauj4itNaowx+GoW2yqVR8d8y3/w7Dnnzj135m5JH79ksnfO+e65d893z/d95/vuVNqNKj0wAJwAnAK8E3gr8HpgF+AZ4I/Az4EfAg8Az/ZykWmu+EXQtL0xp+D/82rgIuBi4ICg9yX21udoyf4L+BowBvwzkN7J9BOdyvHAU8BNXRQQY0/gs8Ba4PxI/w5P6kr4HPAlmZsOzwMPAaulnL8BLwBvBN4mc/VeKcF4HfB14CTgHOC54Co7KCkr4SrgWkcBNnnXAfsB7wO+rb6jgGNlih4HPgLMlwKfccb7ELAK2DW40g5K3kr4MHCZ8/1XwJnAn4CPAucBQ0AlOBP+AdwBTAB36nOi+k4GbgHODs7aAemmhIXAcmeCm8BpwKnAj4F9gjNmsrcc+CeBLyiS+iZwhqTOAh6RkpKoVGbqut2o2gOwWB9jpFJvNXtRo8Zaoa+nV+qtyUAobZwFwLAezpqa7Z5svIlKvbXOPycrRDUz9SRwpL5PyjGbGfpYIJ2GRUgfB76rlYAip0OAv2aO4ISopgTnn7SJX+BJr6vUW4PBGDm0G1ULr9c4401W6q2F3c+aicYY1b11wx66ZZV6a6ojk+UTFjsK2KTvV/ShAONCu7hM0Hq1mdNeGkhmIAWs0Tm+AshoS2G4j3M797U6QQFIZrWUNk2WEi52jq8G3gIsCaSK83lgnsxThwuAuYkj1bQpLA1NoP8gJJtITeYKmZ9UhlxFxJQwqF2wsQH4ijZaMedblDlasrc4q2Gu/EwKPdn7HEY9xTYr9VayEnS+r4Cm/ErFPnYcufehjvJjSqg5x/cAB8pJu2wIzkrH/MG+GrvDKSlny6ktlFkbAfYKhArQblRrjlPvMJY6guOfXMz5LqrUWyud+15pbZEVttTGiEVHRznHZueOCCRectQnBq1pVLSJ+4EmkoxrRFHU8nLkkhFYpDLqyU0UjK58BdgqGgmkhPVJce6DPhxbCa6D+rXi+294MhZ+fis4M513Ab9xpA/qY6yeaDeqSz0zMlVkFQjfDKWYMV9myFXCwYpgDnHaLBWxRe1X6th4h2L+tcEl0ligsTvY7nmPHscqjByi74zHYjF8DjWvO2UV+TI1U8JumtDfS0v7OgLP6++LQF1piqfVZs7mg4r1izJPeSaXP2hzeFifc5zCUs8Z2/6i6CoIcGP/LGIyA3rCz06Mfr6nFWM3/B7VDWwX/Z9AsjuxMNPyTOcCTwDvDnpLQjtjfxUs63H0sYzjTNz9gZgaUA6oCJt005Yp3R34EfCBgoroZnp20858tvCdcdONZIpQqbeWySIs0nEKfjQ2OUdOthfcZdVUWuM+ZVfz2JLTf2TQUgLtRnVxxI7X2o1qWxFXJ7+TnDcqosAMX9SMRUe9skb2/MaEVbExaJnJq4KWPnFyO1kMKeRc025UV0TMRhmMe9GnPcgTZSoBOelLgP2VPb3fnF7kye/FmfdLkfzQYqUViqQiutJuVEcjpsgisqmyldBhvdIdpyoNYqmJw4H3q8T5qeCMWSQjP5SHKWC8jBXRblSHI9df2YnIiirhYNUD5gc9cfZSha2mEugqhaH3R6VnDz8kpUB+p5sJy0WradyTm3SyBYWUYFW23wF3aU+RF8/vo0rcbcB3VF/e6mgS+snvDGslFcZJcbtMqfiUW0+IcYkjb+blExEZl3O8FXOeNmlbG98O5+Z33NyU8MfIxUlx+yswqNoVUYIf8eS9LeG/8PVCZIytQRn5HT+sTWE8cu1lsQRhESVc7uwN1ibYyuUKWw2Lw7/ovXWxteglv+PH/oWUkBEJTWSlRgac4koeDyv0rMof/CVH/t/Klh6jLOlVgUQ2fl6pNGK5G58UmSwyIqHJbqkRU8LtQWs2lrL4JfDfTImZ2GQ+pr1CEVq9TkIeKSFnr2FpRiQ0pbRGpmIHpLUbgM1B7yuDVe0+XeKVg9RxIBESOPNAwiMjEiJPAajmaw72M8A1usE9nf7e36bO502OxCatlu8DNzvp8jJo+pWsiM33CfI7gYRDl0hoJCUP5ZY3zTfcHUikY6vqNZrQFDp16/tUl5gtVnpBhCXsxrPCVOuLpDfylBaLhCZSXxjoN23xZr2Nt16Fn40yJ8sDyZDT1HJ90FMiqpb5UYltwFYrqzqNHVtbZGPXteKWEQl13Yv4xAr9RRhSCtvltUoBjDiVOZ9BVensNcjHgt7yGZNJcp/WmlZFt4tNRhT4MhmREE56PA/zFaf3uxJWKRn3W034ZlXfTuqiAFS0sbrypUHPLCDHuCiyE+7GZIJT7SuvJB+yol8lWIr6y8DbNam7q+z5s0Dy/yyRKTKT9WjQWxzXVGSaDUcRqTvm3KjGK2z1yqylsmPsoh+ajEpJZaWzRzQZ69zMZAybVNnqQZkZN+ppqm3QZBI3bCPdFJ/AuulcUo5NLMKusvO2Gh70fp92KPBV4Di9x3RRchS184eDycxVWqNTG14vh71FexCrKfxdb1PcOsv/0zZHWUo41yvOvwH4qZTzpN7yXj7Lm79tlrKUEKu0/VlRUpm73+2SshzzA0pXu9y7UwFplKWEn6iA/7Qc8s16s28neQD/A4RAOEl96q5rAAAAAElFTkSuQmCC" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Headertop