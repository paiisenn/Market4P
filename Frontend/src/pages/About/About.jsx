import Footer from "../../components/Footer"
import Navbar
    from "../../components/navbar"
import { Banknote, BriefcaseBusiness, RefreshCw, Truck } from "lucide-react"
import featureBg from "../../assets/images/feature-bg.jpg"
import VanTai from "../../assets/images/VanTai.png"

function About() {
    return (
        <div>
            <header className="">
                <Navbar></Navbar>
            </header>
            <div className="pt-19 ">
                {/* why */}
                <div className="flex items-center p-20 pl-40">
                    {/* --- Text Section --- */}
                    <div className="flex flex-col gap-10 w-1/2">
                        <h2 className="text-4xl font-bold">
                            <span className="text-amber-600">Tại sao </span>
                            chọn Market4P
                        </h2>

                        {/* --- Hàng 1 --- */}
                        <div className="flex justify-between gap-8">
                            {/* Giao hàng */}
                            <div className="flex items-start gap-4 w-1/2">
                                <div className="p-4 rounded-full text-amber-600 border border-dashed border-amber-600 shrink-0">
                                    <Truck size={35} />
                                </div>
                                <div>
                                    <p className="text-xl font-bold">Giao hàng tận nơi</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Giao hàng tận nơi nhanh chóng, giúp bạn nhận sản phẩm ngay tại nhà mà không cần di chuyển.
                                    </p>
                                </div>
                            </div>

                            {/* Giá tốt nhất */}
                            <div className="flex items-start gap-4 w-1/2">
                                <div className="p-4 rounded-full text-amber-600 border border-dashed border-amber-600 shrink-0">
                                    <Banknote size={35} />
                                </div>
                                <div>
                                    <p className="text-xl font-bold">Giá tốt nhất</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Mang đến mức giá tốt nhất cùng nhiều ưu đãi hấp dẫn để bạn luôn mua sắm tiết kiệm.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* --- Hàng 2 --- */}
                        <div className="flex justify-between gap-8">
                            {/* Đóng gói */}
                            <div className="flex items-start gap-4 w-1/2">
                                <div className="p-4 rounded-full text-amber-600 border border-dashed border-amber-600 shrink-0">
                                    <BriefcaseBusiness size={35} />
                                </div>
                                <div>
                                    <p className="text-xl font-bold">Đóng gói</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Đóng gói sản phẩm theo yêu cầu, đảm bảo tính thẩm mỹ và phù hợp với từng nhu cầu riêng.
                                    </p>
                                </div>
                            </div>

                            {/* Hoàn tiền */}
                            <div className="flex items-start gap-4 w-1/2">
                                <div className="p-4 rounded-full text-amber-600 border border-dashed border-amber-600 shrink-0">
                                    <RefreshCw size={35} />
                                </div>
                                <div>
                                    <p className="text-xl font-bold">Hoàn tiền</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Chính sách hoàn tiền nhanh chóng, đơn giản và minh bạch để bạn yên tâm khi mua sắm.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Image Section --- */}
                    <div className="w-1/2 flex justify-center">
                        <img
                            src={featureBg}
                            alt="Feature Background"
                            className="object-cover rounded-xl w-140"
                        />
                    </div>
                </div>
                {/* <Footer></Footer> */}
                {/* team */}
                <div className="p-20 bg-gray-100">
                    <div className="text-center w-210 mx-auto">
                        <h1 className="text-3xl font-bold">
                            Đội ngũ
                            <span className="text-amber-600 ml-1">
                                chúng tôi
                            </span>
                        </h1>
                        <p className="leading-relaxed mt-4">
                            Chúng tôi là một tập thể trẻ trung,
                            sáng tạo và đầy nhiệt huyết. Với tinh thần hợp tác và trách nhiệm,
                            Market4P luôn nỗ lực mang đến trải nghiệm mua sắm tiện lợi,
                            đáng tin cậy và thân thiện nhất cho khách hàng.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-x-15 mt-8">
                        <div className="text-center">
                            <img src={VanTai} alt="" className="w-50 h-60 object-cover rounded" />
                            <p className="font-semibold mt-2">Huỳnh Văn Tài</p>
                        </div>
                        <div className="text-center">
                            <img src={VanTai} alt="" className="w-50 h-60 object-cover rounded" />
                            <p className="font-semibold mt-2">Lê Nguyễn Thành Phát</p>
                        </div>
                        <div className="text-center">
                            <img src={VanTai} alt="" className="w-50 h-60 object-cover rounded" />
                            <p className="font-semibold mt-2">Phạm Xuân Hòa</p>
                        </div>
                        <div className="text-center">
                            <img src={VanTai} alt="" className="w-50 h-60 object-cover rounded" />
                            <p className="font-semibold mt-2">Đoàn Lưu Gia Bảo</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    )
}

export default About