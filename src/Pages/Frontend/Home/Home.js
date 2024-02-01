import React from 'react'
import Carousel from './Carousel';
import BooksCarousel from './BooksCarousel';
import Featured from './Featured';
import LatestItems from './LatestItems';
import Information from './Information';

// import Nun from "Assets/Pics/desktop-wallpaper-the-nun-background-page-1-valak-painting.jpg"
// import Skull from "Assets/Pics/wp1998786.jpg"
// import Girl from "Assets/Pics/depositphotos_171347662-stock-photo-illustration-scary-ghost-dark-horror.jpg"
// import ColorChangingButton from './Button';


export default function Home() {

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];


    return (
        <main>
            <div className='bg-pink-100'>

                <div className="w-[80%] m-auto pt-11">
                    <Carousel slides={slides} />
                </div>
                <div className=' w-[80%] m-auto mt-9'>
                    <h1 className='m-auto flex justify-center font-bold text-3xl mb-3'>Best Selling Books</h1>
                    <BooksCarousel />
                </div>
            </div>
            <Featured />
            <LatestItems />
            <Information />
        </main>
    )
}
