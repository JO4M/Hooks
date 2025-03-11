import React, {useState} from "react";

function Filter() {
    const [title, setTitle] = useState(""); 
    const [rate, setRate] = useState(""); 
    

    return (
        <div className="filter">
            <h3>My filter</h3>
            <input type="text"
            placeholder="Type a movie title"
            value={title} 
            onChange={ 
                (e)=> setTitle(e
                    .target 
                    .value 
                )} />

                <input type="number"
                placeholder="Rechercher par note" 
                value={rate} 
                onChange={(e)=> setRate(e.target.value)} />

                <p>Titre : {title}</p>
                <p>Rate : {rate}</p>
        </div>
    );
}
export default Filter;