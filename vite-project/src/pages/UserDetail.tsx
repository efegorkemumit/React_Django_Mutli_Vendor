import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'
import {Link} from 'react-router-dom'
import {useNavigate, useLocation} from 'react-router-dom'

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
    
        <div className="col-span-3">
    
         
    
    
            <div className=" bg-gray-100 shadow-lg rounded-sm divide-y divide-gray-200 space-y-4 text-gray-600">
    
                <div className="space-y-1 pl-8">
                    <a href="#" className="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                        <i className="fa-solid fa-receipt"></i> Manage Account
                    </a>
    
                    <a href="#" className="hover:text-primary transition block" >Change Password</a>
                    <a href="#" className="hover:text-primary transition block">Manage Address</a>
                    <a href="#" className="hover:text-primary transition block">Profile Status</a>
    
                </div>
    
                <div className="space-y-1 pl-8">
                    <a href="#" className="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                        <i className="fa-solid fa-basket-shopping"></i> Manage Shipping
                    </a>
    
                    <a href="#" className="hover:text-primary transition block" >History Shipping</a>
                    <a href="#" className="hover:text-primary transition block">Cancelled Shipping</a>
    
                </div>
    
                <div className="space-y-1 pl-8">
                    <a href="#" className="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                        <i className="fa-solid fa-location-pin"></i> Address
                    </a>
    
                    <a href="#" className="hover:text-primary transition block" >Change Address</a>
                    <a href="#" className="hover:text-primary transition block">Update Address</a>
    
                </div>
    
                <div className="space-y-1 pl-8 pt-2 pb-0">
                    <a href="#" className="hover:text-primary transition block text-xl" >     <i className="fa-solid fa-basket-shopping"></i> Card</a>
                </div>
                <div className="space-y-1 pl-8 pt-2 pb-0">
                    <a href="#" className="hover:text-primary transition block text-xl items-center justify-center" ><i className="fa-solid fa-heart"></i> Whislist</a>
                </div>
    
                <div className="space-y-1 pl-8 pt-2 pb-2">
                    <a href="#" className="hover:text-primary transition block text-xl"> <i className="fa-solid fa-right-from-bracket"></i> Logout</a>
                </div>
    
    
    
            </div>
    
        
    
    
            
    
    
        </div>
    
    
    
          <div className="col-span-9 grid bg-gray-100 p-5 gap-4 mt-6 lg:mt-1">
            <form method="" action="">
                <h3 className="text-lg font-medium mb-10">User Details Form</h3>
    
                <div className="space-y-5">
                    <div>
                        <label className="text-gray-600 mb-3 block"> Email Adress <span className="text-primary" > * </span></label>
                        <input type="email" className="input-box" placeholder="example@example.com"/>
                    </div>
                
                </div>
    
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="text-gray-600 mb-3 block"> Name <span className="text-primary" > * </span></label>
                        <input type="email" className="input-box" placeholder="example@example.com"/>
                    </div>
                    <div>
                        <label className="text-gray-600 mb-3 block"> Surname <span className="text-primary" > * </span></label>
                        <input type="email" className="input-box" placeholder="example@example.com"/>
                    </div>
    
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="text-gray-600 mb-3 block"> Color <span className="text-primary" > * </span></label>
                        <select className="input-box">
                            <option>Red</option>
                            <option>Yellow</option>
                            <option>Black</option>
                        </select>
    
                    </div>
                    <div>
                        <label className="text-gray-600 mb-3 block"> Age <span className="text-primary" > * </span></label>
                      
                        <select className="input-box">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
    
                   
    
                </div>
    
                <div className="space-y-5">
                    <div>
                        <label className="text-gray-600 mb-3 block"> Email Adress <span className="text-primary" > * </span></label>
                        <textarea className="input-box"></textarea>
                    </div>
                
                </div>
                <div className="space-y-5">
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                <input type="checkbox" className="text-primary focus:ring-0 rounded-xl cursor-pointer"/>
                                <label className="text-gray-800 ml-3">Remember me</label>
            
            
                        </div>
                  </div>
    
                <div className="mt-6">
                    <button type="submit" className="block w-full py-2 text-center text-white bg-primary border
                    border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition"> Save</button>
                </div>
             
                </div>
    
    
            </form>
          </div>
        
    
    
    
    </div>
    
    
        
    
    </div>

  )
}

export default UserDetail