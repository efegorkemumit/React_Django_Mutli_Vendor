import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'

function Register() {

    const [formData, setFormData] =useState({
        email:'',
        password:'',
        full_name:'',
    });

    const handeChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleLogin = async(e) =>{
        e.preventDefault();

        try{

            const response = await axios.post('http://127.0.0.1:8000/api/customers/register/', formData,{
                headers:{
                    'Content-Type': 'application/json',
                },
            })




            if(response.status === 201)
            {
                console.log("Success Register");

            }
            else
            {
                console.error('Registeration failed', response.data);
            }
        

        }
        catch(error){
            console.error('Registeration error', error)
        }


    }



  return (
    

    <div class="container py-16">

    <div class="max-w-lg mx-auto px-7 py-7 shadow-xl rounded-xl overflow-hidden">
        <h2 class="text-3xl uppercase font-medium mb-1">Register</h2>
        <p class="text-gray-600 mb-6 text-sm">Lorem ipsum dolor sit amet.</p>

        <form method="" action="">

            <div class="space-y-5">
                <div>
                    <label class="text-gray-600 mb-3 block"> Full Name <span class="text-primary" > * </span></label>
                    <input type="text" class="input-box" name="full_name" onChange={handeChange} value={formData.full_name}   placeholder="example@example.com"/>
                </div>
                <div>
                    <label class="text-gray-600 mb-3 block"> Email Adress <span class="text-primary" > * </span></label>
                    <input type="email" class="input-box" name="email" onChange={handeChange} value={formData.email}  placeholder="example@example.com"/>
                </div>
                <div>
                    <label class="text-gray-600 mb-3 block"> Password <span class="text-primary" > * </span></label>
                    <input type="password" class="input-box" name="password" onChange={handeChange} value={formData.password}  placeholder="Enter Password"/>
                </div>
               

            </div>

            <div class="flex items-center justify-between mt-6">
                <div class="flex items-center">
                    <input type="checkbox" class="text-primary focus:ring-0 rounded-xl cursor-pointer"/>
                    <label class="text-gray-800 ml-3">
                       <a href="#" class="text-primary"> term & conditions </a>
                    </label>


                </div>


            </div>
            <div class="mt-4">
                <button onClick={handleLogin}  class="block w-full py-2 text-center text-white bg-primary border
                 border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition ">Register</button>


            </div>


            <div class="mt-6 flex justify-center relative">
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-500"></div>
                <div class="text-gray-600 px-3 relative bg-white">
                    OR LOGIN IN WITH
                </div>


            </div>

            <div class="mt-4 flex gap-4">
                <a href="#" class="block w-1/2 py-2 text-center text-white bg-blue-700  hover:bg-blue-800 rounded-xl uppercase font-roboto">
                    Facebook
                </a>
                <a href="#" class="block w-1/2 py-2 text-center text-white bg-red-600 hover:bg-red-700 rounded-xl uppercase font-roboto">
                    Google
                </a>


            </div>

            <p class="mt-4 text-gray-700 text-center">Don't have a account <a class="text-primary font-semibold" href="register.html">Register Now</a></p>


        </form>



    </div>


 </div>


  )
}

export default Register