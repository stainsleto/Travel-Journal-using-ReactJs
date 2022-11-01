import React from 'react';
import LocIcon from '../images/location.png'

export default function ProductCard (props) {
    return(

        <div className="card-main">
            <div className="card-image">
                <img src = {`../images/${props.item.coverImg}`}  />
            </div>

            <div className="card-content">
                <img src = {LocIcon}  />
                <span className="card-location">{props.item.location}</span>
                <span><a className="card-map-link" href="">View on Google Maps</a></span>
                <h1 className = "title">{props.item.title}</h1>
                <p className="card-date">
                    <span>{props.item.stats.start}</span> -&nbsp;
                    <span>{props.item.stats.end}</span>
                </p>
                <p className ="description">
                    {props.item.description}
                </p>
            </div>
            
        </div>
   
    )

  
}