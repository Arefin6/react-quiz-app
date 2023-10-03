/* eslint-disable array-callback-return */
import { React, useState } from 'react';

const TableComp = ({data}) => {
    const [searchTerm, setSearchTerm] = useState('');
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
            <form  className="form-inline">
                <div className="form-group ml-4" style={{ width: '243px' }}>
                    <input
                        type="search"
                        id="form1"
                        className="form-control ml-1 w-50 "
                        placeholder="Type query"
                        aria-label="Search"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                </div>
            </form>
             <table  className="table-sm">
                 <thead>
                 {columns.filter(val =>{
                        if(searchTerm === ""){
                            return val;
                        } 
                        else if(val.includes(searchTerm)){
                           return val;
                        }
                     }).map(c => (

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