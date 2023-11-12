import { useEffect, useState } from 'react';
import { getCars } from './utilities';
import { useNavigate } from 'react-router-dom';
// import '../src/style.css';
export const Buy_used_car = () => {
const navigate = useNavigate();
const [carItems, setCarItems] = useState([]);
  // useeffect go and fetch all car items but only once
useEffect(() => {
    // it will take cars from database.json and will store it state var i.e carItems
    getCars()
      .then(mi => setCarItems(mi))
}, []);
console.log({ carItems });

  

  return (
    <div className="p-3 mb-2 bg-dark">
    <h1>Buy Used Cars</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {carItems.map(car => 
       <div className="col" key={car.carId}>
        <div className="card h-100 bg-dark text-white border border-1 rounded" onClick={() => navigate(`/buy_used_cars/${car.carId}`)}>
         <img src={"/Images/"+`${car.carId}`+"/pic1.jpeg"} className="card-img-top" alt="..."/>
          <div className='border border-1'>
          <div className="card-body">
            <h5 className="card-title">{car.title}</h5>  
            <p className="card-text">{car.purchase_year}, {car.type}, {car.rto_location}</p>
            <p className="card-text">{car.ownership_status}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{car.price}/-</small>
          </div>
          </div>
        </div>
     </div>
   )
  }
</div>
</div>

)}

      