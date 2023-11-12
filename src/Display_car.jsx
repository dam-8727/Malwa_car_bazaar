import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useState} from 'react';
import { getCars } from './utilities';
import { Link } from 'react-router-dom';

import '../src/style.css'
export const Display_Car = () => {
  const { carId } = useParams();
  const [carItems, setCarItems] = useState([]);
   
  // useeffect go and fetch all car items but only once
useEffect(() => {
    // it will take cars from database.json and will store it state var i.e carItems
    getCars()
      .then(mi => setCarItems(mi))
}, []);
  return (
  <>

  <h1 className="display-3 text-white text-center">{carItems.find(car => (car.carId === carId))?.title}</h1>

  <div className='container-fluid' >
    <div className='row'>
      <div className='col-1'>
        <p>test</p>
      </div>
      <div className='col-7'>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={"/Images/"+`${carId}`+"/pic1.jpeg"} className="d-block center w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={"/Images/"+`${carId}`+"/pic2.jpeg"} className="d-block center w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={"/Images/"+`${carId}`+"/pic3.jpeg"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={"/Images/"+`${carId}`+"/pic4.jpeg"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
  {/*     "title": "Swift Vdi",
          "purchase_year": "2019",
          "type": "Petrol",
          "price": "Rs 6,80,000",
          "rto_location": "Ludhiana",
          "ownership_status": "First Owner" */}
  <div className="card  col-3 bg-dark text-white border border-1">
  <div className="card-header fw-bolder fs-4">
      Car Details
  </div>  
  <div className="card-body mt-2">
    <p><span className="card-title text-info fw-bolder">Model: </span>{carItems.find(car => (car.carId === carId))?.title} </p>

    <p><span className="card-title text-info fw-bolder">Purchase Year: </span>{carItems.find(car => (car.carId === carId))?.purchase_year} </p>
    <p><span className="card-title text-info fw-bolder">Type: </span>{carItems.find(car => (car.carId === carId))?.type} </p>
    <p><span className="card-title text-info fw-bolder">RTO Location: </span>{carItems.find(car => (car.carId === carId))?.rto_location} </p>
    <p><span className="card-title text-info fw-bolder">Ownership Status: </span>{carItems.find(car => (car.carId === carId))?.ownership_status} </p>
    <button className="btn btn-primary text-white mt-5"><Link to="/contact_us" className="text-white">Know More</Link></button>
  </div>
  <div className="card-footer text-white text-bolder fs-4 border border-1 m-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-info bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>
  <span >{carItems.find(car => (car.carId === carId))?.price}/-</span>
  </div>
 
    </div>
    </div>
  </div>
  </>
  
  )
} 