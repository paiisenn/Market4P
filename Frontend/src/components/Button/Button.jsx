import { ShoppingCart } from "lucide-react"

const Button = () => {
    return (
        <div className="mx-auto mt-2 flex flex-col items-center gap-3">
            <button className="flex items-center gap-x-2 bg-amber-600 text-white py-2 px-4 rounded-full">
                <ShoppingCart />
                Add to cart
            </button>

            <button className="flex items-center gap-x-2 bg-amber-600 text-white py-2 px-4 rounded-full hover:cursor-pointer hover:opacity-90">
                <ShoppingCart />
                Thêm vào giỏ hàng
            </button>
        </div>
    )
}

export default Button
