import axios from 'axios';

import React,{useEffect, useState} from 'react';
import Console from './Console'
import './Console.css';


export default function Consoles(){
    const [consoles,setConsoles] = useState([]);
    const [selectedConsole,setSelectedConsole] = useState(null);
    function getConsoles () {
        axios.get('http://csc225.mockable.io/consoles').then(response=> {
            setConsoles(response.data);
            console.log(response.data)
        })
    }
    useEffect(()=>getConsoles(),[]);

    if(selectedConsole) {
        return (
        <div>
            <Console selectedConsole={selectedConsole}/>
            <button onClick={()=>setSelectedConsole(null)}>Go Back</button>
        </div>
        )
    }
    if(!consoles.length) {
        return <p>Loading...</p>
    }

    return (
        <div className='container'>
     
         {consoles.map((console,i)=>{
            return (
                <div key={i} className="card">
                <img src={console.image} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{console.name}</h5>
                    <button onClick={()=>setSelectedConsole(console.id)} className = 'btn btn-primary'>View More</button>
                    </div>
                </div>
                
            )
         })}
        </div>
    )
}
