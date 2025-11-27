import { ShoppingCart } from "lucide-react"
const Button = () => {


    return (
        <button className="mx-auto mt-2 flex items-center gap-x-2 bg-amber-600 text-white py-2 px-4 rounded-full hover:cursor-pointer hover:opacity-90">
            <ShoppingCart></ShoppingCart>
            Thêm vào giỏ hàng
        </button>
    )
}

export default Button