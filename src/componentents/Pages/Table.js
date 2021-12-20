import React, { useEffect, useState } from 'react';
import TableComp from './TableComp';

const Table = () => {
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => setData(json))
    },[])
    return (
        <div>
           {data.length>0 && <TableComp data={data}/>}
        </div>
    );
};

export default Table;