import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcart } from "../redux/api/api";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.product);
    useEffect(() => {
            dispatch(getcart());
    }, [])


    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <header>
            {isAuthenticated && (
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <h1 style={{ fontSize: "30px" }}>Shopeasy</h1>
                            </a>
                            <div className="d-flex align-items-center">
                                <Link
                                    to="/cart"
                                    className="nav-icon position-relative text-decoration-none"
                                    href="/">
                                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1 fs-4"></i>
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                        {data.cart.length}
                                    </span>
                                </Link>
                                <div className="dropdown">
                                    <Link
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        className="dropdown-toggle nav-icon position-relative text-decoration-none ms-3"
                                        href="/">
                                        <img
                                            className="profile"
                                            src={user.picture}
                                            alt=""
                                        />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <Logout />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </>
            ) 
}
        </header>
    );
};

export default Navbar;
