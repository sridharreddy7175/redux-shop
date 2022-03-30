import React from 'react'
import img1 from '../images/banner.png'
import Products from './Products'

const Header = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-8 d-flex justify-content-center flex-column">
                        <h1><b>New Season Arrivals</b></h1>
                        <h3 className="card-text lead fs-2">Checkout Products!

                        </h3>
                    </div>
                    <div className="col-md-4">
                        <img src={img1} className="card-img img-fluid" alt="img" />
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Header
