import React, {useEffect, useState} from "react";
interface ProductProps{
    product : {
        id: number;
        title: string;
        description: string;
        price:  number

    }
}

const Product: React.FC = ({product})=>{

    

    return(
      
        
        <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
        <div className="relative">
                <img src="img/product/cp-1.png" className="w-full" />

          <div className="absolute inset-0 flex items-center justify-center text-xl
                text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                </a>

                <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                    <i className="fa-solid fa-heart fa-xl"></i>

                </a>
            </div>
          </div>

          <div className="pt-4 pb-3 px-4">

            <a href="view.html">
                <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">{product.title}</h4> 
                
            </a>


            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-roboto font-semibold"> ${product.price}</p>
                <p className="text-sm text-gray-500 font-roboto line-through"> ${product.discount}</p>


            </div>

            <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-500">
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>


                </div>
                <div className="text-xs text-gray-500 ml-3">(120)</div>



            </div>
           
        
           </div>
           <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
           border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


         </div>
             
    )


}

export default Product;