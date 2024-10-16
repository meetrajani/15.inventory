import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Checkout = () => {
    const [formdata, setformdata] = useState({});

    const changedata = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const submitform = () => {
       Cookies.set('user',JSON.stringify(formdata))
    };

    return (
        <>
            <section>
                <div className="container pt-5">
                    <div className="card shadow-lg border-0">
                        <div className="p-4">
                            <h5 className="card-title mb-4 fw-bold fs-3">
                                Guest checkout
                            </h5>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <p className="mb-2 fw-semibold">
                                        First name
                                    </p>
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="typeText"
                                            placeholder="Type here"
                                            className="form-control"
                                            name="firstname"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <p className="mb-2 fw-semibold">
                                        Last name
                                    </p>
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="typeText"
                                            placeholder="Type here"
                                            className="form-control"
                                            name="lastname"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <p className="mb-2 fw-semibold">Phone</p>
                                    <div className="form-outline input-group">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1">
                                            +91
                                        </span>
                                        <input
                                            type="tel"
                                            id="typePhone"
                                            className="form-control"
                                            name="mobile"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <p className="mb-2 fw-semibold">Email</p>
                                    <div className="form-outline">
                                        <input
                                            type="email"
                                            id="typeEmail"
                                            placeholder="example@gmail.com"
                                            className="form-control"
                                            name="email"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <h5 className="card-title mb-3">Shipping info</h5>
                            <div className="row">
                                <div className="col-sm-8 mb-3">
                                    <p className="mb-2 fw-semibold">Address</p>
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="typeText"
                                            placeholder="Type here"
                                            className="form-control"
                                            name="address"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <p className="mb-2 fw-semibold">City</p>
                                    <input
                                        type="text"
                                        id="typeText"
                                        placeholder="Type here"
                                        className="form-control"
                                        name="city"
                                        onChange={changedata}
                                    />
                                </div>
                                <div className="col-sm-4 col-6 mb-3">
                                    <p className="mb-2 fw-semibold">LandMark</p>
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="typeText"
                                            className="form-control"
                                            name="landmark"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <p className="mb-2 fw-semibold">
                                        House No.
                                    </p>
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="typeText"
                                            placeholder="Type here"
                                            className="form-control"
                                            name="house"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4 col-6 mb-3">
                                    <p className="mb-2 fw-semibold">
                                        Postal code
                                    </p>
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="typeText"
                                            className="form-control"
                                            name="postalcode"
                                            onChange={changedata}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <p className="mb-2">Message to seller</p>
                                <div className="form-outline">
                                    <textarea
                                        className="form-control"
                                        id="textAreaExample1"
                                        rows={2}
                                        defaultValue={""}
                                        name="message"
                                        onChange={changedata}
                                    />
                                </div>
                            </div>
                            <div className="float-end">
                                <Link to="/" className="btn btn-light border">
                                    Cancel
                                </Link>
                                <Link
                                    to="/invoice"
                                    onClick={submitform}
                                    className="btn btn-success shadow-0 border ms-3">
                                    Continue to Payment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;
