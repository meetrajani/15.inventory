import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login-final">
            <div>
                <button
                    className="btn btn-outline-success mx-auto "
                    onClick={() => loginWithRedirect()}>
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Login;
