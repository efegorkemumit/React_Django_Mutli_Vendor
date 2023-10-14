import React, {useEffect, useState} from "react";
import axios from "axios"
import {MEDIA_URL, BASE_URL, CloudURL} from '../configUrl'
import {Link} from 'react-router-dom'

const Usersidebar: React.FC = ()=>{


    return(
        <div className="col-span-3">
    
         
    
    
        <div className=" bg-gray-100 shadow-lg rounded-sm divide-y divide-gray-200 space-y-4 text-gray-600">
    
            <div className="space-y-1 pl-8">
                <span className="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                    <i className="fa-solid fa-receipt"></i> Manage Account
                </span>
                <Link to="/change-password">     
                <span  className="hover:text-primary transition block" >Change Password</span>
                </Link>  
            </div>
    
            <div className="space-y-1 pl-8">
                <a href="#" className="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                    <i className="fa-solid fa-basket-shopping"></i> Manage Shipping
                </a>
    
                <a href="#" className="hover:text-primary transition block" >History Shipping</a>
                <a href="#" className="hover:text-primary transition block">Cancelled Shipping</a>
    
            </div>
    
         
            <Link to="/card">     
            <div className="space-y-1 pl-8 pt-2 pb-0 mt-6">
                <span className="hover:text-primary transition block text-xl" >     <i className="fa-solid fa-basket-shopping"></i> Card</span>
            </div>
            </Link>  
            <Link to="/whislist">     
            <div className="space-y-1 pl-8 pt-2 pb-0">
                <span className="hover:text-primary transition block text-xl items-center justify-center" ><i className="fa-solid fa-heart"></i> Whislist</span>
            </div>
            </Link>  
            <Link to="/logout">     
            <div className="space-y-1 pl-8 pt-2 pb-2">
                <span className="hover:text-primary transition block text-xl"> <i className="fa-solid fa-right-from-bracket"></i> Logout</span>
            </div>
            </Link>  
    
    
    
        </div>
    
    
    
    
        
    
    
            </div>
     
    
             
    )


}

export default Usersidebar;