import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'
import {useNavigate, useLocation} from 'react-router-dom'

function Login() {

    const history = useNavigate()
    const location = useLocation()
    const redirect = location.search? location.search.split('=')[1]: '/'

    useEffect(()=>{
        const hasAccessToken =document.cookie.includes("access_token")
        if(hasAccessToken){
            history(redirect)
        }

    }, [history, redirect])






    const [formData, setFormData] =useState({
        email:'',
        password:''
    });

    const [error, setError] = useState(null);

    const handeChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

   const handleLogin = async () =>{
    try{

        const response = await axios.post('http://127.0.0.1:8000/api/customers/login/', formData)
        console.log('Login Success', response.data);
        const userData= response.data;
        const access_token = userData.access

        document.cookie = `id=${userData.id}; path=/`;
        document.cookie = `access_token=${access_token}; path=/`;


        window.location.href= redirect



    }
    catch(error){
        console.error('Login Failed', error)
        if (error.response)
        {
            setError(error.response.data.error);
        }
      
    }


   }



  return (
    <div>

    <div className="container py-16">

    <div className="max-w-lg mx-auto px-7 py-7 shadow-xl rounded-xl overflow-hidden">
        <h2 className="text-3xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">Lorem ipsum dolor sit amet.</p>

      

            <div className="space-y-5">
                <div>
                    <label className="text-gray-600 mb-3 block"> Email Adress <span className="text-primary"> * </span></label>
                    <input type="email" name="email" onChange={handeChange} value={formData.email} className="input-box" placeholder="example@example.com"/>
                </div>
                <div>
                    <label className="text-gray-600 mb-3 block"> Password <span className="text-primary"> * </span></label>
                    <input type="password" name="password" onChange={handeChange}  value={formData.password}  className="input-box" placeholder="Enter Password"/>
                </div>


            </div>

           
            <div className="mt-4">
                <button onClick={handleLogin} className="block w-full py-2 text-center text-white bg-primary border
                 border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition ">Login</button>


            </div>

            <div className="mt-4">

{error &&(
                <div className="mt-4 p-3 bg-red-200 text-red-700 border border-red-400 rounded-xl">
                    {error}
                </div>
)}
            </div>


            <div className="mt-6 flex justify-center relative">
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-500"></div>
                <div className="text-gray-600 px-3 relative bg-white">
                    OR LOGIN IN WITH
                </div>


            </div>

            <div className="mt-4 flex gap-4">
                <a href="#" className="block w-1/2 py-2 text-center text-white bg-blue-700  hover:bg-blue-800 rounded-xl uppercase font-roboto">
                    Facebook
                </a>
                <a href="#" className="block w-1/2 py-2 text-center text-white bg-red-600 hover:bg-red-700 rounded-xl uppercase font-roboto">
                    Google
                </a>


            </div>

            <p className="mt-4 text-gray-700 text-center">Don't have a account <a className="text-primary font-semibold" href="register.html">Register Now</a></p>


      



    </div>


    </div>

    </div>
   
  )
}

export default Login