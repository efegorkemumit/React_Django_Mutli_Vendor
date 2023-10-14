import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'
import {Link} from 'react-router-dom'
import {useNavigate, useLocation} from 'react-router-dom'
import Usersidebar from "../components/Usersidebar";

function UserDetail() {

    



  return (
  
<div>
    <div className="container py-4 flex justify-between">
        <div className="flex gap-3 items-center">
            <a className="text-primary text-base" href="index.html"> <i className="fa fa-home"></i></a>
            <span className="text-sm text-gray-600"> <i className="fa-solid fa-angle-right fa-lg"></i></span>
            <p className="text-gray-900 font-medium">Account</p>
    
        </div>
    </div>
    
    
    
    
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    
      
 <Usersidebar></Usersidebar>
    
    
          <div className="col-span-9 grid bg-gray-100 p-5 gap-4 mt-6 lg:mt-1">
                <h3 className="text-lg font-medium mb-10">User Details Form</h3>
    
            
    
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="text-gray-600 mb-3 block"> E-mail <span className="text-primary" > * </span></label>
                        <input type="email" className="input-box" placeholder="example@example.com"/>
                    </div>
                    <div>
                        <label className="text-gray-600 mb-3 block"> Phone <span className="text-primary" > * </span></label>
                        <input type="text" className="input-box" placeholder="phone"/>
                    </div>
    
                </div>

                <div className="space-y-5 mt-4">
                    <div>
                        <label className="text-gray-600 mb-3 block"> Address <span className="text-primary" > * </span></label>
                        <input type="text" className="input-box" placeholder="example@example.com"/>
                    </div>
                
                </div>

             
    
                <div className="space-y-5 mt-4">
                    <div>
                        <label className="text-gray-600 mb-3 block"> Full Name <span className="text-primary" > * </span></label>
                        <input type="text" className="input-box" placeholder="Fullname"/>
                    </div>
                
                </div>
                <div className="space-y-5">
                     
                <div className="mt-6">
                    <button type="submit" className="block w-full py-2 text-center text-white bg-primary border
                    border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition"> Save</button>
                </div>
             
                </div>
    
    
          </div>
        
    
    
    
    </div>
    
    
        
    
    </div>

  )
}

export default UserDetail