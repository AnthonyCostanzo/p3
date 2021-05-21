import axios from 'axios';
import React,{useEffect,useState} from 'react';
import './Console.css';
export default function Console(props) {
    const [consoleData,setConsoleData] = useState(null);
    const {selectedConsole} = props;
    useEffect(function(){
        axios.get(`http://csc225.mockable.io/consoles/${selectedConsole}`).then(response=> {
            setConsoleData(response.data);
        })
    },[selectedConsole]);

    if(!consoleData) {
        return <p>Loading...</p>
    }
    return (
        <div className="card c mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={consoleData.image} alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{consoleData.name}</h5>
              <p className="card-text">Price: ${consoleData.price}</p>
              <p className="card-text">Release Year: {consoleData.releaseYear}</p>
              <p className="card-text">Country: {consoleData.country}</p>
            </div>
          </div>
        </div>
      </div>
  
    
    )
}