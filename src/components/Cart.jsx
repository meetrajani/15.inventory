import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletecart, getcart, updatecart } from "../redux/api/api";

const Cart = () => {
    
    const dispatch=useDispatch()

    const data=useSelector((state)=>state.product.cart)

    useEffect(()=>{
        dispatch(getcart())
    },[])

    const deletedata=(id)=>{
        dispatch(deletecart(id))
    }

    const changeqty=(val,newqnty)=>{
        dispatch(updatecart({...val,qnty:newqnty}))
    }

    const plus=(val)=>{
        dispatch(updatecart({...val,qnty:val.qnty+1}))
    } 
    
    const minus=(val)=>{ 
        dispatch(updatecart({...val,qnty:Math.max(1,val.qnty-1)}))
    }

    let total=0
    data.map((v) => {
        total += v.qnty * v.price;
    });

    return (
        <>
            <div className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-lg mb-5 pb-1">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="border-0 bg-light">
                                                <div className="p-2 px-3 text-uppercase">
                                                    Product
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">
                                                    Price
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">
                                                    Quantity
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">
                                                    Total
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">
                                                    Remove
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((val,index)=>{
                                                return(
                                                    <tr key={index}>
                                            <th
                                                scope="row"
                                                className="border-0">
                                                <div className="p-2">
                                                    <img
                                                        src={val.img}
                                                        alt="img"
                                                        style={{height:"80px",width:"80px"}}
                                                        className="img-fluid rounded shadow-sm mr-5"
                                                    />
                                                    <div
                                                        className="pl-3 d-inline-block align-middle"
                                                        style={{
                                                            marginLeft: "20px",
                                                        }}>
                                                        <h5 className="ml-5">
                                                            <a
                                                                href="/"
                                                                className="text-dark d-inline-block align-middle">
                                                                {val.name}
                                                            </a>
                                                        </h5>
                                                        <span className="text-muted font-weight-normal font-italic d-block">
                                                            {val.address}
                                                        </span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-0 align-middle">
                                                <strong>{val.price}</strong>
                                            </td>
                                            <td className="border-0 align-middle">
                                                <button className="counter-btn" onClick={()=>minus(val)}>
                                                <i className="fa-solid fa-minus"></i>
                                                </button>
                                                <input
                                                    className="counter-box"
                                                    name=""
                                                    id=""
                                                    value={val.qnty}
                                                    onChange={(e)=>changeqty(val,e.target.value)}
                                                    disabled
                                                />
                                                <button className="counter-btn" onClick={()=>plus(val)}>
                                                <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </td>
                                            <td className="border-0 align-middle">
                                                <h6
                                                    href="#"
                                                    className="text-dark">
                                                    {val.price*val.qnty}
                                                </h6>
                                            </td>
                                            <td className="border-0 align-middle">
                                                <button
                                                    onClick={()=>deletedata(val.id)}
                                                    className="text-dark btn">
                                                    <i className="fa fa-trash text-danger" />
                                                </button>
                                            </td>
                                        </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot className="border-top">
                                        <tr className="text-end">
                                            <td colSpan="5" className="fw-bold">
                                                Grand Total: {total}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="d-flex justify-content-between mb-3 border-top border-bottom py-2">
                                <Link to="/" className="d-inline-block">
                                    <i className="fa-solid fa-arrow-left me-2"></i>
                                    Continue to Shopping
                                </Link>
                                <div className="text-end">
                                    <Link to="/checkout">Process to Buy <i className="ms-2 fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
