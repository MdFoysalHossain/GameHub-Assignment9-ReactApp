import React, { use } from 'react';
import { DataContext } from './DataContext';

const promiseData = fetch("./GameDetails.js").then(res => res.json())

const DataProvidor = ({ children }) => {

    const dataGot = use(promiseData)

    // console.log("Promised Data:", dataGot)

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




