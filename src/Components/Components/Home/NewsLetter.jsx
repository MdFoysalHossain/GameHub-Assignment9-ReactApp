import React from 'react';
import Background from "../../../assets/NewsLetter.jpg"

const NewsLetter = () => {
    return (
        <div className='mt-20 mx-2 py-2 md:py-0 max-w-[1000px]  lg:mx-auto rounded-xl border border-gray-300 overflow-hidden'>
            <div className="max-h-[500px] overflow-hidden md:gap-5 lg:gap-0 flex">
                <div className="w-4/10 hidden md:inline overflow-hidden">
                    <img className='max-w-[1000px] h-[500px]' src={Background} alt="" />
                </div>
                <div className="text-center md:text-left w-full lg:w-6/10 lg:pl-10 flex flex-col justify-center items-center md:items-start  gap-5 p-2">
                    <h2 className='text-3xl lg:text-5xl flex-1 md:flex-0 uppercase font-bold'>Stay Tuned</h2>
                    <p className='md:pr-50'>Subscibe to out newsletter and never miss a update, latest news, etc...</p>
                    <div className="scale-80 md:scale-100 flex justify-center md:justify-start">
                        <div className="flex justify-center items-center">
                            <label className='flex items-center border border-gray-200'>
                                <svg className="h-[1em] scale-125 opacity-50 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required className="p-[7px] w-[280px] border-transparent border focus:outline-none focus:ring-0 focus:border-transparent"/>
                            </label>
                            <button className="btn h-[41px] w-20 shadow-none btn-primary text-white -ml-2">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;