import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'
import Product from "../components/Product";

function Shop() {

    const[products, setProducts] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/product/select/').then((response)=>{
        
        setProducts(response.data);

      })
    }, [] )

    const[categories, setCategories] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/category/select/').then((response)=>{
        
        setCategories(response.data);

      })
    }, [] )

    

    const[brandies, setbrandies] =useState([])
    useEffect(()=>{
        axios.get(BASE_URL+'/brand/select/').then((response)=>{
          
            setbrandies(response.data);
  
        })
      }, [] )


  return (
      
      <div>

<div className="container py-4 flex justify-between">
    <div className="flex gap-3 items-center">
        <a className="text-primary text-base" href="index.html"> <i className="fa fa-home"></i></a>
        <span className="text-sm text-gray-600"> <i className="fa-solid fa-angle-right fa-lg"></i></span>
        <p className="text-gray-900 font-medium">Shop</p>
    </div>
</div>








<div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start">
<form action="" method="">
    <div className="col-span-1 bg-gray-100 px-4 pb-6 shadow-xl rounded-md overflow-hidden w-96 md:absolute lg:static left-4 top-7 z-10 lg:w-full lg:block">

        <div className="divide-gray-500 divide-y space-y-5 relative">
          
            <div className="relative">
                <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

                <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Categories</h3>
                <div className="space-y-2">


                {categories.map((category)=>(
                    <div key={category.id}  className="flex items-center mt-1">
                        <input 
                        type="radio" 
                        name="category"
                        className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">{category.title}</label>
                        <div className="ml-auto text-gray-600 text-sm">({category.product_count})</div>

                    </div>

                    ))}

                 


                    

                </div>


            </div>
        
            <div className="relative">
                <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

                <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Brand</h3>
                <div className="space-y-2">


                {brandies.map((brand)=>(
                    <div key={brand.id}  className="flex items-center mt-1">
                        <input 
                        type="radio" 
                        name="category"
                        className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">{brand.title}</label>
                        <div className="ml-auto text-gray-600 text-sm">({brand.product_count})</div>

                    </div>

                    ))}

                  



                    

                </div>


            </div>
            
             <div className="pt-4 relative">
                <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Price</h3>

                <div className="mt-4 flex items-center">
                    <input className="w-full border-gray-500 py-1 px-3 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />
                   <span className="mx-3 text-gray-600"> - </span>
                    <input className="w-full border-gray-500 py-1 px-3 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />


                </div>


             </div>
            
              <div className="pt-4 relative">
                <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Size</h3>
                <div className="flex items-center gap-2">
            
               
                <div className="size-selector">

                    <input type="radio" name="size" className="hidden" id="size-xs"/>
                    <label for="size-xs" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                    items-center justify-center cursor-pointer shadow-sm text-gray-900" >XS</label>

                </div>

                <div className="size-selector">

                    <input type="radio" name="size" className="hidden" id="size-s"/>
                    <label for="size-s" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                    items-center justify-center cursor-pointer shadow-sm text-gray-900" >S</label>

                </div>

                <div className="size-selector">

                    <input type="radio" name="size" className="hidden" id="size-m"/>
                    <label for="size-m" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                    items-center justify-center cursor-pointer shadow-sm text-gray-900" >M</label>

                </div>

                <div className="size-selector">

                    <input type="radio" name="size" className="hidden" id="size-l"/>
                    <label for="size-l" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                    items-center justify-center cursor-pointer shadow-sm text-gray-900" >L</label>

                </div>


                <div className="size-selector">

                    <input type="radio" name="size" className="hidden" id="size-xl"/>
                    <label for="size-xl" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                    items-center justify-center cursor-pointer shadow-sm text-gray-900" >XL</label>

                </div>

            </div>




               


             </div>


            
               <div className="pt-4 relative">


             </div>



        </div>

        
        

    </div>

    </form>
    <div className="col-span-3">

<div className="mb-4 flex items-center">






</div>

<div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">

   
{products.map((product)=>
                <Product key={product.id}  product={product} />
                )}







   
   
   
    </div></div>
    </div>
    </div>

    

  )
}

export default Shop