import React from 'react'
import Product from './Product'
import {useLocation } from 'react-router-dom'
import  {useEffect, useState} from "react";
import axios from "axios"
import {MEDIA_URL, BASE_URL} from '../configUrl'

function SearchResults() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const searchTerm = searchParams.get('title')
    const [products, setProducts] =useState([])

    useEffect(()=>{
        axios.get(BASE_URL+`/product/select/?title=${searchTerm}`).then((response)=>{
          
            setProducts(response.data);
  
        })
      }, [searchTerm] )



  return (
<div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start">

        <div className="col-span-4">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
        {products.map((product)=>
                <Product key={product.id}  product={product} />
                )}

        </div>
        </div>



</div>
  )
}

export default SearchResults