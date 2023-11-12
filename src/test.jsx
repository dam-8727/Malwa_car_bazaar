import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useState} from 'react';
import { getCars } from './utilities';

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
    <div className='text-white container col-4'>
  {/*     "title": "Swift Vdi",
          "purchase_year": "2019",
          "type": "Petrol",
          "price": "Rs 6,80,000",
          "rto_location": "Ludhiana",
          "ownership_status": "First Owner" */}
  <p>{carItems.find(car => (car.carId === carId))?.title} </p>
  <p>{carItems.find(car => (car.carId === carId))?.purchase_year} </p>
  <p>{carItems.find(car => (car.carId === carId))?.type} </p>
  <p>{carItems.find(car => (car.carId === carId))?.price} </p>
  <p>{carItems.find(car => (car.carId === carId))?.rto_location} </p>
  <p>{carItems.find(car => (car.carId === carId))?.ownership_status} </p>
    </div>
    </div>
  </div>
  </>
  
  )
} 