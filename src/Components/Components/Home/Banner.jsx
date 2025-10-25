import React, { use } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from '../../Contexts/DataContext';
import "./Banner.css";
import { Link } from 'react-router';

const Banner = () => {
    const { dataGot } = use(DataContext);

    const threeDetails = dataGot.slice(0, 4);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <Slider {...settings} className='rounded-2xl mt-5 mx-4'>
            {
                threeDetails.map((item, index) => <SingleSlider key={index} item={item} />)
            }
        </Slider>
    );
};

function SingleSlider({ item }) {
    return (
        <Link to={`/Post/${item.id}`}>
            <div className='relative h-[250px] md:h-[500px]  lg:h-[700px] w-full flex flex-col items-center justify-center gap-5'>
                <img src={item.coverPhoto} alt={item.title} className=" h-[800px] rounded-2xl w-[1200px] object-cover" />
                <h2 className='absolute left-2 bottom-2 w-fit text-[12px] md:left-5 md:bottom-5 lg:bottom-5 lg:left-10 py-1 px-2 lg:py-2 lg:px-7  rounded-lg font-semibold bg-white text-black z-50'>{item.title}</h2>
            </div>
        </Link>
    );
}

export default Banner;
