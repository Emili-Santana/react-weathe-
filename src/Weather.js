import React from "react";
import './Weather.css';

export default function Weather(){
    return( <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input 
            type="search"
            placeholder="enter a city.."
            className="form-search w-100"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input type="submit" value="search" required className="btn btn-primary  w-100" />
            </div>
            </div>
        </form>
      <h1>New York </h1>
      <ul>
<li>
Sunday 07:30
</li>
<li>
   Mostly Cloudy 
</li>
<div className="row mt-3">
<div className="col-6">
    <div className="clearfix">

<img src= "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"alt="Mostly Cloudy"/>


<span className="temperature ">
6
</span>
<span className="unit">°C </span>
</div>
</div>


<div className="col-6">
    <ul>
<li>
    Precipitation: 15%
</li>
<li>
    Humidity: 75%
</li>
<li>
    Wind: 13 km/h
</li>

    </ul>
</div>
</div>



      </ul>
        </div>);
}  