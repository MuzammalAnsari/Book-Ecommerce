import bookSlides from "Contexts/BooksContext";
import { useContext, useState } from "react";
import { CartContext } from "Contexts/CartContext";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BooksCarousel() {
    const [slides] = useState(bookSlides);
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 group">
                {slides.map((slide) => (
                    <div key={slide.id} className="relative p-4 border">
                        <img src={slide.src} alt={slide.title} className="w-full h-auto rounded-md" />
                        <h2 className="mt-2 text-xl font-semibold">{slide.title}</h2>
                        <p className="text-gray-600">{slide.info}</p>
                        <div>$:{slide.price}</div>
                        <div className="flex ">
                            <button className="bg-blue-500 rounded p-2" onClick={() => addToCart(slide, slide.id)}>
                                Add to Cart
                            </button>
                            <Link to={`/Books/${slide.id}`} className="flex items-center bg-red-400 p-4">
                                <BsEyeFill className="hover:text-white" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
