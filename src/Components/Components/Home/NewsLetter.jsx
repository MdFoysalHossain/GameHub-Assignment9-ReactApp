import React from 'react';
import Background from "../../../assets/NewsLetter.jpg"

const NewsLetter = () => {
    return (
        <div className='mt-20 max-w-[1000px]  mx-auto rounded-xl border border-gray-300 overflow-hidden'>
            <div className="max-h-[500px] overflow-hidden flex">
                <div className="w-4/10 overflow-hidden">
                    <img className='max-w-[1000px] h-[500px]' src={Background} alt="" />
                </div>
                <div className="text-left w-6/10 pl-10 flex flex-col justify-center gap-5 p-2">
                    <h2 className='text-5xl uppercase font-bold'>Stay Tuned</h2>
                    <p className='pr-50'>Subscibe to out newsletter and never miss a update, latest news, etc...</p>
                    <div className="">
                        <div className="flex">
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
                            <button className="btn h-[50px] w-[100px] shadow-none btn-primary text-white -ml-1">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;