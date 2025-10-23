import React, { use } from 'react';
import { DataContext } from '../../Contexts/DataContext';
import "./Banner.css"
import { Link } from 'react-router';

const PopularGames = () => {
    const { dataGot } = use(DataContext);

    const sortedGames = dataGot.slice().sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));


    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold mb-5 mt-16'>Popular <span className='text-primary'>Games</span></h2>

            <div className="grid grid-cols-3 gap-5 justify-center items-center">

                {
                    sortedGames.map((item, index) => <SingleGame key={index} item={item}></SingleGame>)
                }

            </div>
        </div>
    );
};

function SingleGame({ item }) {
    return (
        <Link to={`/Post/${item.id}`}>

            <div className="card SinglePopularGame bg-base-100 image-full w-96 shadow-sm">
                <figure>
                    <img className='h-[220px] w-full'
                        src={item.coverPhoto}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end items-center ">
                        <div className="flex justify-between items-center gap-3 w-full text-black">
                            <span className='text-md bg-white py-1 px-1.5 rounded-sm'>{item.developer}</span>
                            <span className='text-md bg-white py-1 px-1.5 rounded-sm'>{item.ratings}</span>
                            {/* <button className="btn btn-primary">Visit</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PopularGames;