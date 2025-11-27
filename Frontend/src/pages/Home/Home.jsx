import PromoCountdown from '../../components/PromoCountdown/PromoCountdown'
<<<<<<< HEAD
import Navbar from "../../components/navbar"
=======
import Navbar from "../../components/Navbar"
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
import Button from '../../components/Button/Button'
import trangchu from "../../assets/images/trangchu.jpg"
import { Truck, PhoneCall, RefreshCcw, ShoppingCart } from "lucide-react"
import berry from "../../assets/images/berry.jpg"
import strawberry from "../../assets/images/strawberry.jpg"
import lemon from "../../assets/images/lemon.jpg"
import HIKANstrawberry from "../../assets/images/HIKANstrawberry.jpg"
import Footer from '../../components/Footer'

function Home() {
    return (
        <main>
            <header>
                <Navbar></Navbar>
                <div className="relative">
                    <img src={trangchu} alt="" loading="" className="w-full h-screen object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold">
                        <p className="text-amber-600 text-xl">
<<<<<<< HEAD
                            Fresh & Organic
                        </p>
                        <p className="text-5xl text-white my-2">
                            Delicous Seasonal Fruits
                        </p>
                        <div className="flex items-center justify-center font-semibold gap-x-3 text-white mt-4">
                            <div className="bg-amber-600 py-3 p-5 rounded-full hover:cursor-pointer hover:brightness-90">
                                <a href="">Fruits Collection</a>
                            </div>
                            <div className="bg-amber-600 py-3 p-5 rounded-full hover:cursor-pointer hover:brightness-90">
                                <a href="">Contact Us</a>
=======
                            Tươi & Sạch
                        </p>
                        <p className="text-5xl text-white my-1">
                            Trái cây ngon theo mùa
                        </p>
                        <div className="flex items-center justify-center font-semibold gap-x-3 text-white mt-6">
                            <div className="bg-amber-600 py-3 p-5 rounded-full hover:cursor-pointer hover:brightness-90">
                                <a href="">Đi đến cửa hàng</a>
                            </div>
                            <div className="bg-amber-600 py-3 p-5 rounded-full hover:cursor-pointer hover:brightness-90">
                                <a href="">Liên hệ với chúng tôi</a>
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="">

                {/* Dịch vụ */}
                <div className="p-20 bg-gray-100 flex items-center justify-around">
                    <div className="flex item-center gap-x-2">
                        <div className="p-3 rounded-full border border-amber-600 border-dotted text-amber-600">
                            <Truck size={40}></Truck>
                        </div>
                        <div>
                            <p className="font-bold text-lg">
                                Miễn phí ship
                            </p>
                            <p className="text-sm text-[#5d5c5c]">
                                Khi đặt hàng trên 1.000.000
                            </p>
                        </div>
                    </div>
                    <div className="flex item-center gap-x-2">
                        <div className="p-3 rounded-full border border-amber-600 border-dotted text-amber-600">
                            <PhoneCall size={35}></PhoneCall>
                        </div>
                        <div>
                            <p className="font-bold text-lg">
                                Hỗ trợ 24/7
                            </p>
                            <p className="text-sm text-[#5d5c5c]">
                                Hỗ trợ bất cứ lúc nào
                            </p>
                        </div>
                    </div>
                    <div className="flex item-center gap-x-2">
                        <div className="p-3 rounded-full border border-amber-600 border-dotted text-amber-600">
                            <RefreshCcw size={35}></RefreshCcw>
                        </div>
                        <div>
                            <p className="font-bold text-lg">
                                Hoàn trả
                            </p>
                            <p className="text-sm text-[#5d5c5c]">
                                Hoàn trả trong vòng 3 ngày!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sản phẩm nổi bật */}
                <div className="p-20">
                    <div className="text-center mb-10">
                        <p className="font-bold text-3xl"><span className="text-amber-600">Sản phẩm</span> nổi bật</p>
                        <div className="w-[8vh] h-[0.2rem] bg-amber-600 mx-auto mt-2 mb-4 rounded"></div>
                        <p className="text-[#5d5c5c]">Tận hưởng sự tươi mát trong từng miếng trái cây được chọn lọc kỹ lưỡng từ những nông trại uy tín.
                            <br />
                            Chúng tôi cam kết mang đến cho bạn nguồn trái cây sạch, ngon và giàu dinh dưỡng nhất.</p>
                    </div>
                    <div className="flex items-center justify-evenly">
<<<<<<< HEAD
                        <div className="shadow-lg p-10 hover:cursor-pointer hover:opacity-90">
=======
                        <div className="shadow-lg p-10">
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
                            <img src={strawberry} alt="" className="object-cover w-70" />
                            <div className="text-center">
                                <p className="text-xl font-bold">Dâu tây</p>
                                <p className="my-3">Per Kg</p>
                                <p className="text-2xl font-bold">165.000 vnđ</p>
                            </div>
                            <Button></Button>
                        </div>
<<<<<<< HEAD
                        <div className="shadow-lg p-10 hover:cursor-pointer hover:opacity-90">
=======
                        <div className="shadow-lg p-10">
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
                            <img src={berry} alt="" className="object-cover w-70" />
                            <div className="text-center">
                                <p className="text-xl font-bold">Nho</p>
                                <p className="my-3">Per Kg</p>
                                <p className="text-2xl font-bold">125.000 vnđ</p>
                            </div>
                            <Button></Button>
                        </div>
<<<<<<< HEAD
                        <div className="shadow-lg p-10 hover:cursor-pointer hover:opacity-90">
=======
                        <div className="shadow-lg p-10">
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
                            <img src={lemon} alt="" className="object-cover w-70" />
                            <div className="text-center">
                                <p className="text-xl font-bold">Chanh</p>
                                <p className="my-3">Per Kg</p>
                                <p className="text-2xl font-bold">45.000 vnđ</p>
                            </div>
                            <Button></Button>
                        </div>
                    </div>
                </div>

                {/* Giảm giá */}
                <div className="p-20 flex items-center gap-x-4 pl-52 bg-gray-100">
                    <div className="relative ">
                        <img src={HIKANstrawberry} alt="" className="object-cover min-w-130" />
                        <div className="absolute top-4 left-4 p-6 bg-amber-600 rounded-full border-4 border-orange-300">
                            <p className="text-center">
                                <span className="text-xl font-bold">27%</span>
                                <br />
                                <span className="">per kg</span>
                            </p>
                        </div>
                    </div>
                    <div className='text-start'>
                        <p className='text-4xl font-bold flex gap-x-2'>
                            <span className='text-amber-600'>
                                Siêu
                            </span>
                            giảm giá
                        </p>
                        <div className='mb-4'>
                            <p className='py-2 mb-5 font-semibold text-xl'>DÂU TÂY HIKAN</p>
                            <p>
                                Dâu tây 🍓 là loại trái cây đỏ mọng, có vị ngọt xen lẫn chua nhẹ, hương thơm đặc trưng và được nhiều người yêu thích.
                                Không chỉ ngon miệng, dâu tây còn giàu vitamin C, chất xơ và chất chống oxy hóa, giúp tăng cường sức khỏe,
                                làm đẹp da và hỗ trợ hệ miễn dịch.
                            </p>
                        </div>
                        <PromoCountdown></PromoCountdown>
<<<<<<< HEAD
                        <button className=" mt-5 flex items-center gap-x-2 bg-amber-600 text-white py-2 px-4 rounded-full">
                            <ShoppingCart></ShoppingCart>
                            Add to card
=======
                        <button className=" mt-5 flex items-center gap-x-2 bg-amber-600 text-white py-2 px-4 rounded-full hover:cursor-pointer hover:opacity-90">
                            <ShoppingCart></ShoppingCart>
                            Thêm vào giỏ hàng
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default Home