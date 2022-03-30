import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(data);

    const getProducts = async () => {
        setLoading(true)
        try {

            var resProducts = await fetch("https://fakestoreapi.com/products");
            var response = await resProducts.json();
            // console.log("response123", response);
            setData(response);
            setFilter(response)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProducts();
    }, []);


    const filterProducts = (category) => {
        console.log("cate", category)
        const updateProduct = data.filter((product) => {
            return category === product.category
        })
        setFilter(updateProduct)
    }


    function Loading() {
        return (
            <h3>Loading...</h3>
        )
    }


    const ShowProducts = () => {
        return (
            <div className="mt-5">
                <div className="d-flex justify-content-center pb-5">
                    <button type="button" className="btn btn-outline-primary mr-2"
                        onClick={() => setFilter(data)}
                    >
                        All
                    </button>
                    <button type="button" className="btn btn-outline-secondary mr-2"
                        onClick={() => filterProducts("men's clothing")}
                    >
                        Men's Clothes
                    </button>
                    <button type="button" className="btn btn-outline-success mr-2"
                        onClick={() => filterProducts("women's clothing")}
                    >
                        Women's Clothes
                    </button>
                    <button type="button" className="btn btn-outline-dark mr-2"
                        onClick={() => filterProducts("jewelery")}
                    >
                        Jewelery
                    </button>
                    <button type="button" className="btn btn-outline-info mr-2"
                        onClick={() => filterProducts("electronics")}

                    >
                        Electronics
                    </button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-4 mb-5" key={product.id} style={{ display: "inline-block" }}>
                            <div className="card h-100 text-center p-4">
                                <img
                                    className="card-img-top"
                                    src={product.image}
                                    alt={product.title} height="250px"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.substring(0, 12)}...</h5>

                                    <Link to={`/product/${product.id}`} className="btn btn-dark w-100">Buy Now</Link>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Latest Products</h1>
            <hr />
            <div className="row justify-content-center">

                {
                    loading ? <Loading /> : <ShowProducts />

                }

            </div>
        </div>
    );
};

export default Products;
