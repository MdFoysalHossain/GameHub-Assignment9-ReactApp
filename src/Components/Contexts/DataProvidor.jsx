import React, { use } from 'react';
import { DataContext } from './DataContext';

const promiseData = fetch("/GameDetails.js").then(res => res.json())

const DataProvidor = ({ children }) => {

    const dataGot = use(promiseData)

    const data ={
        dataGot
    }

    return (
        <DataContext value={data}>
            {children}
        </DataContext>
    );
};

export default DataProvidor;




