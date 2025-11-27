<<<<<<< HEAD
import Navbar from "../../components/navbar"

function Contact() {
        return (
=======
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Clock, Map, MapPin, ReceiptText } from "lucide-react"

function Contact() {
    return (
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
        <main>
            <header>
                <Navbar></Navbar>
            </header>
<<<<<<< HEAD
=======


            <div className="pt-19">
                {/* Question */}
                <div className="p-20 px-35 grid grid-cols-[70%_30%] gap-x-8">
                    <div>
                        <div>
                            <h1 className="font-bold text-3xl">Gửi câu hỏi về cho chúng tôi</h1>
                            <p className="my-3 ">
                                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
                                Nếu bạn có bất kỳ câu hỏi nào về sản phẩm,
                                dịch vụ hoặc đơn hàng,
                                hãy liên hệ với chúng tôi — đội ngũ Market4P sẽ nhanh chóng phản hồi
                                và giúp bạn có được câu trả lời hài lòng nhất.
                            </p>
                        </div>
                        <div className="mt-4">
                            <div className="flex gap-x-1">
                                <input type="text" placeholder="Họ tên" className="p-3 w-1/2 outline-none border border-[#ccc]" />
                                <input type="text" placeholder="Email" className="p-3 w-1/2 outline-none border border-[#ccc]" />
                            </div>
                            <div className="flex gap-x-1 my-3">
                                <input type="text" placeholder="Số điện thoại" className="p-3 w-1/2 outline-none border border-[#ccc]" />
                                <input type="text" placeholder="Vấn đề" className="p-3 w-1/2 outline-none border border-[#ccc]" />
                            </div>
                            <div>
                                <textarea type="text" placeholder="Nội dung" className="resize-none h-40 p-3 w-full outline-none border border-[#ccc]" />
                            </div>
                            <button className="py-1.5 px-8 mt-4 rounded-full text-lg font-medium bg-amber-600 hover:cursor-pointer hover:bg-black hover:text-amber-600">Gửi</button>
                        </div>
                    </div>

                    <div className=" p-2">
                        <div className="flex gap-x-2">
                            <div className="">
                                <div className="text-amber-600">
                                    <Map size={29}></Map>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-bold">Địa chỉ cửa hàng</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    25 Vo Oanh, Binh Thanh,
                                    <br /> Ho Chi Minh City
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-2 my-8">
                            <div className="">
                                <div className="text-amber-600">
                                    <Clock size={29}></Clock>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-bold">Giờ mở cửa</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Thứ 2 - Thứ 6: 7h đến 20h
                                    <br />
                                    Thứ 7 - Chủ nhật: 7h đến 22h
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-2">
                            <div className="">
                                <div className="text-amber-600">
                                    <ReceiptText size={29}></ReceiptText>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-bold">Liên hệ</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Điện thoại: +84 123 456 789
                                    <br />
                                    Email: abc@market4p.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div>
                    <div className="flex items-center justify-center gap-x-2 bg-[#162133] p-20">
                        <div className="text-amber-600">
                            <MapPin size={50}></MapPin>
                        </div>
                        <p className="text-white text-2xl font-bold">
                            Vị trí của chúng tôi
                        </p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.6077291571794!2d106.71664602663205!3d10.804381533060173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293dceb22197%3A0x755bb0f39a48d4a6!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaSBUaMOgbmggUGjhu5EgSOG7kyBDaMOtIE1pbmggLSBDxqEgc-G7nyAx!5e0!3m2!1svi!2s!4v1763556334774!5m2!1svi!2s"
                            className="w-full h-145"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer></Footer>
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
        </main>
    )
}

export default Contact