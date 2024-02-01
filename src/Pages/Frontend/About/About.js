import React from 'react'
import hero from "Assets/Pics/h2_hero2.jpg"
import Information from '../Home/Information'
export default function About() {
    return (
        <main>
            <div className=' w-auto'>
                <div className='text-center mx-[70px] relative'>
                    <img src={hero} alt="hero" className='w-[100%] ' />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <h1 className='lg:text-5xl'>About</h1>
                    </div>
                </div>
            </div>

            <div className="container lg:px-[150px] mt-[50px] ">
                <div className='text-3xl font-semibold'>Our Story</div>
                <p className='text-1xl font-thin mt-2'>
                    Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s
                    pictures feature women of all shapes and sizes enjoying themselves .Born
                    between the two world wars, Beryl Cook eventually left Kendrick School in
                    Reading at the age of 15, where she went to secretarial school and then
                    into an insurance office. After moving to London and then Hampton,
                    she eventually married her next door neihbour from Reading, John Cook.
                    He was an officer in the Merchant Navy and after he left the sea in 1956,
                    they bought a pub for a year before John took a job in Southern Rhodesia
                    with a motor company. Beryl bought their young son a box of water colors,
                    and when showing him how to use it, she decided that she herself quite
                    enjoyed painting. John subsequently bought her a child’s painting set for
                    her birthday and it was with this that she produced her first significant work,
                    a half-length portrait of a dark-skinned lady with a vacant expression and large
                    drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and <br /><br />
                    It is often frustrating to attempt to plan meals that are designed for one.
                    Despite this fact, we are seeing more and more recipe books and Internet websites
                    that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons
                    that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into
                    a streamlined plan of cooking that is more efficient for one person creating less</p>

                <div className='text-3xl font-semibold mt-5'>Our Goal</div>
                <p className='text-1xl font-thin mt-2'>
                    Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s
                    pictures feature women of all shapes and sizes enjoying themselves .Born
                    between the two world wars, Beryl Cook eventually left Kendrick School in
                    Reading at the age of 15, where she went to secretarial school and then
                    into an insurance office. After moving to London and then Hampton,
                    she eventually married her next door neighbour from Reading, John Cook.
                    He was an officer in the Merchant Navy and after he left the sea in 1956,
                    they bought a pub for a year before John took a job in Southern Rhodesia
                    with a motor company. Beryl bought their young son a box of water colors,
                    and when showing him how to use it, she decided that she herself quite
                    enjoyed painting. John subsequently bought her a child’s painting set for
                    her birthday and it was with this that she produced her first significant work,
                    a half-length portrait of a dark-skinned lady with a vacant expression and large
                    drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and <br /><br />
                    It is often frustrating to attempt to plan meals that are designed for one.
                    Despite this fact, we are seeing more and more recipe books and Internet websites
                    that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons
                    that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into
                    a streamlined plan of cooking that is more efficient for one person creating less</p>
            </div>

            <Information />
        </main>
    )
}
