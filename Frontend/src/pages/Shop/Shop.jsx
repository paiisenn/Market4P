import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"
import Button from "../../components/Button/Button"
import Cate_Fruits from "../../assets/images/cate_fruits.avif"
import Cate_Eggs from "../../assets/images/cate_eggs.avif"
import Cate_Veget from "../../assets/images/cate_veget.avif"
import Cate_Meat from "../../assets/images/cate_meat.avif"
import Cate_Bread from "../../assets/images/cate_bread.avif"
import BongCaiXanh from "../../assets/images/bongcaixanh.png"
import Carrot from "../../assets/images/carrot.avif"
import BanhMiLuaMach from "../../assets/images/banhmiluamach.avif"
import SuonCotLet from "../../assets/images/suoncotlet.avif"
import BoWagyu from "../../assets/images/bowagyu.avif"
import BanhMiSandwich from "../../assets/images/banhmisandwich.png"

function Shop() {
    return (
        <main>
            <header>
                <Navbar></Navbar>
            </header>

            <div className="pt-19">
                {/* Category */}
                <div className="px-30 py-12">
                    <div className="text-3xl font-bold">
                        Danh mục sản phẩm
                    </div>
                    <div className="mt-7 flex items-center gap-x-7">
                        <div className="hover:cursor-pointer hover:opacity-90">
                            <div className="">
                                <img src={Cate_Fruits}
                                    alt=""
                                    className="w-35 h-35 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-center text-[#212529] text-lg mt-3">Trái cây</p>
                        </div>
                        <div className="hover:cursor-pointer hover:opacity-90">
                            <div className="">
                                <img src={Cate_Eggs}
                                    alt=""
                                    className="w-35 h-35 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-center text-[#212529] text-lg mt-3">Trứng</p>
                        </div>
                        <div className="hover:cursor-pointer hover:opacity-90">
                            <div className="">
                                <img src={Cate_Meat}
                                    alt=""
                                    className="w-35 h-35 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-center text-[#212529] text-lg mt-3">Thịt</p>
                        </div>
                        <div className="hover:cursor-pointer hover:opacity-90">
                            <div className="">
                                <img src={Cate_Veget}
                                    alt=""
                                    className="w-35 h-35 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-center text-[#212529] text-lg mt-3">Rau xanh</p>
                        </div>
                        <div className="hover:cursor-pointer hover:opacity-90">
                            <div className="">
                                <img src={Cate_Bread}
                                    alt=""
                                    className="w-35 h-35 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-center text-[#212529] text-lg mt-3">Bánh mì</p>
                        </div>
                    </div>
                </div>

                {/* Best selling */}
                <div className="px-30 py-12 bg-gray-100">
                    <div className="text-3xl font-bold">
                        Sản phẩm bán chạy
                    </div>
                    <div className="mt-7 grid grid-cols-5 items-center gap-8">
                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BongCaiXanh}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bông cải xanh</p>
                                <p className="text-black font-semibold">85.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BoWagyu}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Thịt bò Wagyu</p>
                                <p className="text-black font-semibold">985.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={SuonCotLet}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Sườn cốt lết</p>
                                <p className="text-black font-semibold">185.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={Carrot}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Cà rốt</p>
                                <p className="text-black font-semibold">55.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BanhMiLuaMach}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bánh mì lúa mạch</p>
                                <p className="text-black font-semibold">45.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BanhMiLuaMach}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bánh mì lúa mạch</p>
                                <p className="text-black font-semibold">45.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={Carrot}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Cà rốt</p>
                                <p className="text-black font-semibold">985.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BongCaiXanh}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bông cải xanh</p>
                                <p className="text-black font-semibold">85.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BoWagyu}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Thịt bò Wagyu</p>
                                <p className="text-black font-semibold">985.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={SuonCotLet}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Sườn cốt lết</p>
                                <p className="text-black font-semibold">185.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Just arrived */}
                <div className="px-30 py-12 pb-20 bg-gray-100">
                    <div className="text-3xl font-bold">
                        Hàng vừa mới đến
                    </div>
                    <div className="mt-7 grid grid-cols-5 items-center gap-8">
                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BanhMiSandwich}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bánh mì sandwich</p>
                                <p className="text-black font-semibold">85.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BanhMiSandwich}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bánh mì sandwich</p>
                                <p className="text-black font-semibold">85.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BanhMiSandwich}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bánh mì sandwich</p>
                                <p className="text-black font-semibold">85.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BanhMiSandwich}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bánh mì sandwich</p>
                                <p className="text-black font-semibold">85.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                        <div className="shadow-md p-3 py-4">
                            <div className="flex justify-center">
                                <img src={BanhMiSandwich}
                                    alt=""
                                    className="w-50 h-50 object-contain"
                                />
                            </div>
                            <div className="text-center text-[#212529]">
                                <p className=" text-lg mt-3">Bánh mì sandwich</p>
                                <p className="text-black font-semibold">85.000<span className="text-sm">đ</span>
                                    <span className="text-gray-600 ml-2 text-sm border px-1 border-[#ccc]">Giảm 8%</span>
                                </p>
                            </div>
                            <div>
                                <Button></Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </main>
    )
}

export default Shop