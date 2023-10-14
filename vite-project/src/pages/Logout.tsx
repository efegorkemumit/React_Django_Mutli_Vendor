import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'
import {useNavigate, useLocation} from 'react-router-dom'

function Logout() {

    const location = useLocation()
    const redirect = location.search? location.search.split('=')[1]: '/'

    useEffect(()=>{
        document.cookie = `id=; expires=Tue, 19 Jan 1970 03:14:07 GMT path=/`;
        document.cookie = `access_token=; expires=Tue, 19 Jan 1970 03:14:07 GMT path=/`;
        localStorage.removeItem("access_token");
        localStorage.removeItem("id");
        window.location.href= redirect



    })


  return (
    <div>


    </div>
  )
}

export default Logout