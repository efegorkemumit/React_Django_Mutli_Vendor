import React, {useEffect, useState} from "react";
import axios from "axios"
import {MEDIA_URL, BASE_URL} from '../configUrl'
import {Link} from 'react-router-dom'
import SearchComponent from "./SearchComponent";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasAccessToken =document.cookie.includes("access_token")


  const toggleMobileMenu = () =>{
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () =>{
    setMobileMenuOpen(false);
  };


  
  const[data, setData] =useState([])

  useEffect(()=>{
    axios.get(BASE_URL+'/category/select/').then((response)=>{
      
      setData(response.data);

    })
  }, [] )


    return (
      <>
  
  <header className="py-4 shadow-xl bg-white lg:bg-white">

<div className="container flex items-center justify-between">
        <a href="">
            <img src="src/img/logo.png" className="h-14" />
        </a>

         
       <SearchComponent></SearchComponent>

           <div className="space-x-4 flex items-center">
            <a href="#" className="block text-center text-gray-700 hover:text-primary transition relative">
                    
                <span className="absolute -right-2 -top-1 w-5 h-5 rounded-lg flex items-center justify-center bg-primary text-white text-xs font-bold"> 2</span>
                <div className="text-2xl">
                    <i className="fa-solid fa-heart"></i>
                </div>
            </a>

            <a href="#" className="block text-center text-gray-700 hover:text-primary transition relative">
                    
                <span className="absolute -right-2 -top-1 w-5 h-5 rounded-lg flex items-center justify-center bg-primary text-white text-xs font-bold"> 3</span>
                <div className="text-2xl">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </a>

            <a href="#" className="block text-center text-gray-700 hover:text-primary transition relative">
                    
                <div className="text-2xl">
                    <i className="fa-solid fa-user"></i>
                </div>
            </a>
           </div>
                    
   

</div>

</header>

 <nav className="bg-second hidden lg:block">
    <div className="container">
        <div className="flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>

                </span>
                <span className="ml-2 text-white">All Categories</span>

                         <div className="absolute left-0 top-full w-full bg-white shadow-xl py-3 opacity-0 
                         invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50
                         divide-y divide-gray-500 divide-dashed">

            {data.map((category)=>
                         <a className="px-6 py-3 flex items-center hover:bg-gray-200 transition" href="#">
                            <i className={`${category.menuicon}`}></i>
                           <span className="ml-6 text-gray-500 text-sm font-semibold">{category.title}</span> 
                         </a>
                         )}

                         


                         </div>


            </div>

            <div className="flex items-center flex-grow pl-16 justify-between">
                <div className="flex items-center space-x-7 text-base">
               <Link to="/">   <a className="text-white font-semibold hover:text-gray-200 transition"> <i className="fa-solid fa-house"></i> Home</a></Link>   
               <Link to="/shop">    <a className="text-white font-semibold hover:text-gray-200 transition"> <i className="fa-solid fa-bag-shopping"></i> Shop</a> </Link>  
               <Link to="/about">     <a className="text-white font-semibold hover:text-gray-200 transition"> <i className="fa-solid fa-address-card"></i> About</a></Link>  
               <Link to="/contact">    <a className="text-white font-semibold hover:text-gray-200 transition"> <i className="fa-solid fa-phone"></i> Contact</a></Link>  
                </div>
                <div className="space-x-4">
                    {!hasAccessToken ? (
                            <>
                        <Link to="/login">     
                          <a className="text-white font-semibold hover:text-gray-200 transition"> <i className="fa-solid fa-user"></i> Login</a>
                          </Link>  
                        <Link to="/register">   
                          <a className="text-white font-semibold hover:text-gray-200 transition"> <i className="fa-solid fa-user-plus"></i>  Register</a> 
                          </Link>  
                          </>
                     ): 
                     (
                            <Link to="/logout">   
                          <a className="text-white font-semibold hover:text-gray-200 transition"> <i className="fa-solid fa-sign-out"></i>  Logout</a> 
                          </Link>  

                     )
                     
                     
                     }
                </div>
            </div>



        </div>
    </div>

 </nav>


     <div className="lg:hidden flex z-40 fixed w-full border-t border-gray-900 shadow-xl bg-white py-3 bottom-0 justify-around items-start px-6">

        <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
            <div className="text-2xl" id="menuBar" onClick={toggleMobileMenu}>
                <i className="fa-solid fa-bars"></i> 
            </div>

            <div className="text-xs leading-3">Menu</div>
        </a>

        <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
            <div className="text-2xl">
                <i className="fa-solid fa-magnifying-glass"></i>
             </div>

            <div className="text-xs leading-3">Search</div>
        </a>

        <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
            <div className="text-2xl">
                <i className="fa-solid fa-bars-progress"></i>
            </div>

            <div className="text-xs leading-3">Category</div>
        </a>

        <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-lg flex items-center justify-center bg-primary text-white text-xs font-bold"> 3</span>
            <div className="text-2xl">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <div className="text-xs leading-3">Cart</div>
        </a>

        

     </div>



                <div className={`fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30  shadow  ${isMobileMenuOpen ? '' :'hidden' }`} id="mobileMenu">
                    <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow-md">
                        <div className="text-gray-600 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer" onClick={closeMobileMenu}  id="closeMenu">

                            <i className="fa-solid fa-xmark"></i>

                        </div>

                        <h3 className="text-xl pt-6 pl-4 font-roboto text-gray-700 font-semibold"> Menu</h3>
                        <div>

                            <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-home"></i> Home</a>
                            <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-cart-shopping"></i> Shop</a>

                            <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-address-card"></i> About</a>

                            <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-phone"></i> Contact</a>
                            <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-user"></i> Login</a>
                            <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-user-plus"></i> Register</a>
                        </div>

                    </div>
                </div>
     
       
      </>
    )
  }
  
  export default Header
  