import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { postproduct } from "../redux/api/api";

const ViewProduct = () => {
    const { id } = useParams();
    const dispatch=useDispatch()
    const [data, setdata] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4000/product/${id}`).then((res) => {
            setdata(res.data || []);
        });
    }, []);

  const addproduct = () =>{
    dispatch(postproduct(data))
  }

    return (
        <div className="viewsection-main">
            <section className="overflow-hidden shadow-lg p-4 rounded-4">
                <div className="container mx-auto">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                alt="Nike Air Max 21A"
                                className="img-fluid rounded-4"
                                src={data.img}
                            />
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="container">
                                <h2 className="text-sm font-weight-bold text-gray-500">
                                    {data.address}
                                </h2>
                                <h1 className="my-4 text-3xl font-weight-bold text-black">
                                    {data.name}
                                </h1>
                                <p className="mb-4">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Tenetur rem amet
                                    repudiandae neque adipisci eum enim, natus
                                    illo inventore totam?
                                </p>
                                <span
                                    className="text-xl font-weight-bold text-dark d-block"
                                    style={{ fontWeight: 700 }}>
                                    ₹ {data.price}
                                </span>
                                <div className="mt-4">
                                    <Link
                                        onClick={()=>addproduct(data)}
                                        type="button"
                                        className="w-100  m-2  btn btn-outline-dark">
                                        Add to Cart
                                    </Link>
                                    <Link to="/" className="w-100 m-2 btn btn-outline-dark">
                                        Back to Shop
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewProduct;
