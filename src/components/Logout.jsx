import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const Logout = () => {
    const { logout } = useAuth0();
    return (
        <button className='btn btn-danger' style={{width:"100%"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      );
}

export default Logout
