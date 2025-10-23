import React from 'react';
import Banner from './Banner';
import PopularGames from './PopularGames';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <title>GameHub - Home</title>
            <Banner></Banner>
            <PopularGames></PopularGames>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;