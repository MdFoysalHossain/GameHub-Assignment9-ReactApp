import React from 'react';

const AboutUs = () => {
    const webTitle = <><span className='inline font-semibold'>Game<span className='text-primary'>Hub</span></span></>
    return (
        <div className='max-w-[800px] px-3 mx-auto'>
            <h2 className='text-3xl font-semibold text-left mt-10'>About  {webTitle}</h2>

            <div className="text-left text-lg flex flex-col gap-5 mt-5">
                <p className=''>At {webTitle}, we bring together the best MMORPG, RPG, and FPS titles — all in one place. Whether you’re a competitive gamer hunting for the next big eSport or a casual player looking for story-driven adventures, GameHub helps you find, explore, and download the games you love.</p>
                <p>Our platform lists popular and trending games based on player ratings, genres, and reviews. Each game page includes essential details like release dates, descriptions, and direct links to official download sources — so you can jump straight into action without the hassle.</p>
                <p>From legendary FPS titles like Valorant and Counter-Strike to immersive worlds like Elden Ring and Final Fantasy, GameHub celebrates every corner of the gaming universe.</p>

                <ul className='list-disc ml-10'>
                    <b className='-ml-10'>Features</b>
                    <li>Browse the top-rated games across multiple genres</li>
                    <li>Stay updated with the latest releases and trending titles</li>
                    <li>Visit official download pages directly from GameHub</li>
                    <li>Discover game details, ratings, and visuals in one seamless experience</li>
                </ul>
                <div className="">

                <b className=''>Built By</b>
                <p>{webTitle} is a student-driven React project developed to showcase modern UI design, routing, and API integration skills. It’s not just a list — it’s a living hub for game lovers.</p>
                </div>

            </div>



        </div>
    );
};

export default AboutUs;