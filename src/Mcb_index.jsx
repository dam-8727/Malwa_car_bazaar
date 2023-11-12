import './style.css'
export const Mcb_index = () => {
    return (
        <>
        <div>
 
        <div id="car_sale_photos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#car_sale_photos" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#car_sale_photos" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#car_sale_photos" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active div-img" data-bs-interval="12000">
          <video className="d-block w-100 c-img video" 
                playsInline
                autoPlay
                loop
                muted
                controls
                alt="... autoPlay muted">
            <source src="/Images/intro.mp4" type="video/mp4" /> 
            Your browser does not support HTML video.
          </video>
      
            {/* <img src="/Images/car_sale2.png" className="d-block w-100 c-img" alt="..."/> */}
          </div>
          <div className="carousel-item div-img" data-bs-interval="3000">
            <img src="/Images/car_sale6.jpeg" className="d-block  d-img w-100" alt="..."/>
          </div>
          <div className="carousel-item div-img" data-bs-interval="3000">
            <img src="/Images/car_sale5.jpeg" className="d-block  d-img w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#car_sale_photos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#car_sale_photos" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </>

        //   <img style={{ width: 250, height: 250 }} src={logo} alt="log"/>

    )
}