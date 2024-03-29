import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, } from "react-icons/bs";
import Button from "./Button";

export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);



    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => {
                    return <img src={s} key={index} />;
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => setCurrent(i)}
                            key={"circle" + i}
                            className={`rounded-full w-3 h-3 cursor-pointer  ${i === current ? "bg-white" : "bg-gray-500"
                                }`}
                        >
                        </div>
                    );
                })}
            </div>
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500">
                <Button text="Browse Store" />
            </div> */}
        </div>
    );
}