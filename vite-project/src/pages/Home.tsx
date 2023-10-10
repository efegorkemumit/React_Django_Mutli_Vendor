import Slider from "../components/Slider"
import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'
import Product from "../components/Product";

const Home = () => {

    const[data, setData] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/category/select/').then((response)=>{
        
        setData(response.data);

      })
    }, [] )


    const[products, setProducts] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/product/select/?is_top=True').then((response)=>{
        
        setProducts(response.data);

      })
    }, [] )

    const[newproducts, newsetProducts] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/product/select/?is_new=True').then((response)=>{
        
        newsetProducts(response.data);

      })
    }, [] )

  return (
    <>
<Slider></Slider>
     
<div className="container">

<div className="justify-center mx-auto grid md:grid-cols-3 lg:w-10/12 lg:gap-6 mt-3 ">

    <div className="border border-primary rounded-xl px-8 flex justify-center
     items-center transition lg:px-3 lg:py-6 gap-5 mb-2 ml-1 ">

        <i className="fa-solid fa-truck fa-2xl"></i>

        <div className="px-3 py-2 space-y-1">
        <h4 className="font-medium capitalize text-lg" >Free Shipping</h4>
        <p className="text-gray-500 text-xs lg:text-sm">Order over $50</p>
    </div>
    </div>

    <div className="border border-primary rounded-xl px-8 flex justify-center
     items-center transition lg:px-3 lg:py-6 gap-5 mb-2 ml-1 ">

        <i className="fa-regular fa-envelope fa-2xl"></i>
        <div className="px-3 py-2 space-y-1">
        <h4 className="font-medium capitalize text-lg" >7/24 Support</h4>
        <p className="text-gray-500 text-xs lg:text-sm">Customer Support</p>
    </div>
    </div>

    <div className="border border-primary rounded-xl px-8 flex justify-center
     items-center transition lg:px-3 lg:py-6 gap-5 mb-2 ml-1">

     <i className="fa-solid fa-money-bill fa-2xl"></i>

        <div className="px-3 py-2 space-y-1">
        <h4 className="font-medium capitalize text-lg" >Money Returns</h4>
        <p className="text-gray-500 text-xs lg:text-sm">7 Days Money Returns</p>
    </div>
    </div>


</div>



</div>


<div className="container pb-16 pt-8">
                <h2 className="text-2xl md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800" >Shop by Category</h2>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">


{data.map((category)=>

    <div className="overflow-hidden relative group rounded-xl">
    <img src={`${MEDIA_URL}${category.photo}`} className="w-full"/>
    <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
    text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">{category.title}</a>


    </div>

)}
                  
                   

                </div>

              </div>


              <div className="container pb-16">
                    <h2 className="text-2xl md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800" >Top Product</h2>

                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">


            {products.map((product)=>
                <Product key={product.id}  product={product} />
                )}
                        
                      
              

                        </div>

                            
              
              
              
              </div>
                 

                       <div className="container pb-16  hidden lg:block">
                        <a href="#">

                            <img src="src/img/offer.jpg" className="w-full" />
                        </a>



                       </div>

                       <div className="container pb-16   lg:hidden">
                        <a href="#">

                            <img src="src/img/offer-mobile.jpg" className="w-full" />
                        </a>



                       </div>



                         

                <div className="container pb-16">
                    <h2 className="text-2xl md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800" >Recommed For You</h2>

                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">


                    {newproducts.map((product)=>
                <Product key={product.id}  product={product} />
                )}
              

                        </div>

                            
              
              
              
              </div>

    </>
  )
}

export default Home
