/* eslint-disable array-callback-return */
import React from 'react';

const TableComp = ({data}) => {
    let header = data[0];
    const columns = [];
    let rows = [];
    
    Object.keys(header).map((key) => {
        columns.push(key);
    });
    data.map((d) =>{
        Object.values(d).map((value) => {
            rows.push(value);
        });
    })
    

    
    return (
        <div>
             <table  className="table-sm">
                 <thead>
                 {columns.map(c => (

                    <tr key ={c.id}>
                      <th>{c}</th>
                      
                    </tr>
                    ))}
                 </thead>
                 <tbody>
                     {rows.map(d => (

                         <tr key ={d.id}>
                            <td>{d}</td>
                         </tr>
                     ))}
                 </tbody>

             </table>
        </div>
    );
};

export default TableComp;