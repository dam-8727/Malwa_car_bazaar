
import { Buy_used_car } from './Buy_used_car';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Contact_us } from './Contact_us'
import { Mcb_index } from './Mcb_index'
import { Display_Car } from './Display_car'
//  import './App.css'
// import './style.css'


export function App() {
  
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark text-primary">
      
        <div className="container-fluid">
          <a className="navbar-brand navbar-light fs-1 rs_test" href='/'>
              <img className="pt-n2 mt-n5 rounded float-start"  src="/Images/logo_2.png" alt="" width="80" height="50" />
               <span className='ms-3 text-info'>New Malwa Car Bazaar </span>
            </a>
          <button className="navbar-toggler navbar-light navbar_corner_btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-light ms-3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mt-2">
                {/* <a className="nav-link active" aria-current="page" href='/'>Home</a> */}
                <button className="btn btn-sm btn-secondary" >
                <Link to="/" className="nav-link active">Home </Link>
                </button>
              </li>
              <li className="nav-item mt-2">
                {/* <a className="nav-link active" aria-current="page" href='/'>Home</a> */}
                <button className="btn btn-sm btn-secondary" >
                <Link to="/buy_used_cars" className="nav-link active">Buy Used Car </Link>
                </button>
              </li>
              <li className="nav-item mt-2">
                {/* <a className="nav-link active" aria-current="page" href='/'>Home</a> */}
                <button className="btn btn-sm btn-secondary text-info" >
                <Link to="/contact_us" className="nav-link active">Sell Car </Link>
                </button>
              </li>
              <li className="nav-item mt-2">
                {/* <a className="nav-link active" aria-current="page" href='/'>Home</a> */}
                <button className="btn btn-sm btn-secondary" >
                <Link to="/contact_us" className="nav-link active"> Insurance & Finance </Link>
                </button>
              </li>
              </ul>
              {/* <i className="fa-brands fa-facebook"></i> */}
              <button className="btn btn-sm btn-secondary text-white" >
            <Link to="/contact_us" className="nav-link active text-white p-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16 " fill="currentColor" className="bi bi-telephone ms-2" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg> Contact Us </Link>
                </button>
          </div>
        </div>
      </nav>
      <Routes>
      <Route path='/' element={<Mcb_index/>} /> 
    <Route path='/buy_used_cars' element={<Buy_used_car />} />
    <Route path='/contact_us' element={<Contact_us />} />
    <Route path="/buy_used_cars/:carId" element={<Display_Car />} />

    {/* if the link .../but_used_cars/<something...>, Display_Car component will be displayed */}
  </Routes>
</header>
      </>
  )
}

export default App
