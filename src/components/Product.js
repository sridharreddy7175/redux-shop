import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';


const Product = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        setLoading(true)
        try {

            var resProducts = await fetch(`https://fakestoreapi.com/products/${id}`);
            var response = await resProducts.json();
            console.log("response123", response);
            setProduct(response)
            // setData(response);
            // setFilter(response)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <div>
                Loading.......
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.image} width="400px" height="400px" />
                    </div>
                    <div className="col-md-6">

                        <h4 className="text-uppercase text-black-50">{product.category}</h4>
                        <h1 className="display-5">{product.title}</h1>
                        <h3><b> Rating :- {product.rating && product.rating.rate}</b></h3>
                        <h3>{product.description}</h3>
                        <h3> Price:-{product.price}</h3>
                        <button className="btn btn-dark">Add To Cart</button>


                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-5 mb-5 container">
            {/* <div className="row"> */}
            {
                loading ? <Loading /> : <ShowProduct />
            }

        </div>
    )
}

export default Product
