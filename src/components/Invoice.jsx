import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getcart } from "../redux/api/api";

const Invoice = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [val, setval] = useState({});
    const cart = useSelector((state) => state.product.cart);

    useEffect(() => {
        dispatch(getcart());
        const userCookie = Cookies.get("user");
        if (userCookie) {
            const userData = JSON.parse(userCookie);
            setval(userData);
        }
    }, []);

    const currentDate = new Date();

    let total = 0;
    cart.map((val) => {
        total += val.qnty * val.price;
    });

    const removedata = () => {
        window.print();
        Cookies.remove("user");
        navigate("/");
    };

    return (
        <div>
            <div>
                <section className="wrapper-invoice">
                    {/* switch mode rtl by adding class rtl on invoice class */}
                    <div className="invoice">
                        <div className="invoice-information">
                            <p>
                                <b>Invoice #</b>
                                {Math.floor(Math.random() * 100000)}
                            </p>
                            <p>
                                <b>Created Date </b>:{" "}
                                {currentDate.toLocaleDateString()}
                            </p>
                        </div>
                        {/* logo brand invoice */}
                        <div className="invoice-logo-brand">
                            <h2>Shopeasy</h2>
                            <img src="./assets/image/tampsh.png" alt="" />
                        </div>
                        {/* invoice head */}
                        <div className="invoice-head">
                            <div className="head client-info">
                                <p>
                                    {val.firstname} {val.lastname}
                                </p>
                                <p>{val.address}</p>
                                <p>
                                    {val.city}-{val.postalcode}
                                </p>
                                <p>+91-{val.mobile}</p>
                            </div>
                        </div>
                        <div className="invoice-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item Description</th>
                                        <th>Qnty</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>

                                {cart.map((val, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>{val.name}</td>
                                                <td>{val.qnty}</td>
                                                <td>{val.price}</td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                            </table>
                            <div className="flex-table">
                                <div className="flex-column" />
                                <div className="flex-column">
                                    <table className="table-subtotal">
                                        <tbody>
                                            <tr>
                                                <td>Subtotal</td>
                                                <td>{total}</td>
                                            </tr>
                                            <tr>
                                                <td>Credit</td>
                                                <td>Rp.0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="invoice-total-amount">
                                <p>Total : {total}</p>
                            </div>
                        </div>
                        <div className="d-flex invoice-footer justify-content-between align-items-center">
                            <p>Thankyou, happy shopping again</p>
                            <button
                                onClick={removedata}
                                className="btn btn-success btn-sm">
                                Download
                            </button>
                        </div>
                    </div>
                </section>
                <div className="copyright">
                    <p>Created by ❤ Jeel Vaghani</p>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
