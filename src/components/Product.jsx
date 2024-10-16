import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getproduct, postproduct } from "../redux/api/api";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.product.data);

    useEffect(() => {
        dispatch(getproduct());
    }, []);

    const postdata = (val) => {
        dispatch(postproduct(val));
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <Link to={"/cart"}><FaShoppingCart /></Link>
            </div>
            <div className="container pt-5">
                <div className="row">
                    {data.map((val, index) => {
                        return (
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <div className="overflow-hidden">
                                    <img
                                        src={val.img}
                                        alt="Image"
                                        style={{
                                            height: "250px",
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                        className="img-fluid rounded scale-on-hover"
                                    />
                                    <div className="relative pt-3 bg-white">
                                        <h4 className="text-lg  font-weight-bold">
                                            {val.rname}
                                        </h4>
                                        <p
                                            className="text-md mt-2  font-weight-normal"
                                            style={{ color: "#445069" }}>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Saepe
                                            exercitationem
                                        </p>
                                        <p className="mt-2">
                                            <span className="tracking-wider fw-semibold">
                                                Regular Price:
                                                <span className="fw-bold">
                                                    {val.price}
                                                </span>
                                            </span>
                                        </p>
                                        <div className="text-center">
                                            <Link
                                                to={`/${val.id}`}
                                                type="button"
                                                className="btn btn-outline-dark btn-md w-100 mb-2">
                                                View
                                            </Link>
                                            <button
                                                onClick={() => postdata(val)}
                                                type="button"
                                                className="w-100 btn btn-outline-dark btn-md mb-2">
                                                Buy now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Product;
