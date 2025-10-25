import React, { use, useState } from 'react';
import { DataContext } from '../../Contexts/DataContext';
import "./Banner.css"
import { Link } from 'react-router';
import { motion } from "motion/react"


const PopularGames = () => {
    const { dataGot } = use(DataContext);

    
    const highToLow = dataGot.slice().sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
    const LowToHigh = dataGot.slice().sort((a, b) => parseFloat(a.ratings) - parseFloat(b.ratings));
    
    const [data, setData] = useState(highToLow)

    const sortChanger = (e) => {
        // e.preventDefault();
        const targetValue = e.target.value;
        if(targetValue === "High to Low"){
            setData(highToLow)
        }else{
            setData(LowToHigh)

        }
    }

    return (
        <div className='mt-10 px-2 xl:px-0'>
            <div className="flex flex-col gap-3 md:flex-row justify-between items-center mb-5 mt-16">

                <h2 className='text-3xl font-bold '>Popular <span className='text-primary'>Games</span></h2>
                
                <select onChange={sortChanger} defaultValue="Sort by Rating" className="select w-[170px]">
                    <option disabled={true}>Sort by Rating</option>
                    <option>High to Low</option>
                    <option>Low to High</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-center place-items-center items-center">

                {
                    data.map((item, index) => <SingleGame key={index} item={item}></SingleGame>)
                }

            </div>
        </div>
    );
};

function SingleGame({ item }) {
    return (
        <Link to={`/Post/${item.id}`}>

            <motion.div
            initial={{ scale: 1.0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}

            className="card SinglePopularGame image-full col-span-1 w-80 l:w-96 shadow-sm">
                <figure className=''>
                    <img className='h-[220px] w-full'
                        src={item.coverPhoto}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-transparent text-left">
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
            </motion.div>
        </Link>
    )
}

export default PopularGames;