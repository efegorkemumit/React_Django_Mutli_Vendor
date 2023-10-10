import React from 'react'

function Shop() {
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
    <div className="col-span-1 bg-gray-100 px-4 pb-6 shadow-xl rounded-md overflow-hidden w-96 md:absolute lg:static left-4 top-7 z-10 lg:w-full lg:block">

        <div className="divide-gray-500 divide-y space-y-5 relative">
          
            <div className="relative">
                <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

                <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Categories</h3>
                <div className="space-y-2">


                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Shoes</label>
                        <div className="ml-auto text-gray-600 text-sm">(10)</div>

                    </div>
                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Watch</label>
                        <div className="ml-auto text-gray-600 text-sm">(50)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Sport</label>
                        <div className="ml-auto text-gray-600 text-sm">(3)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Dress</label>
                        <div className="ml-auto text-gray-600 text-sm">(100)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Computer</label>
                        <div className="ml-auto text-gray-600 text-sm">(2)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Mobile Phone</label>
                        <div className="ml-auto text-gray-600 text-sm">(2)</div>

                    </div>



                    

                </div>


            </div>
        
            <div className="relative">
                <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

                <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Brand</h3>
                <div className="space-y-2">


                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Apple</label>
                        <div className="ml-auto text-gray-600 text-sm">(10)</div>

                    </div>
                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Zara</label>
                        <div className="ml-auto text-gray-600 text-sm">(50)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Dym</label>
                        <div className="ml-auto text-gray-600 text-sm">(3)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Success</label>
                        <div className="ml-auto text-gray-600 text-sm">(100)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950">Danger</label>
                        <div className="ml-auto text-gray-600 text-sm">(2)</div>

                    </div>

                    <div className="flex items-center mt-1">
                        <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                        <label className="ml-3 text-gray-950"> Phone</label>
                        <div className="ml-auto text-gray-600 text-sm">(2)</div>

                    </div>



                    

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
                <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Color</h3>
                <div className="flex flex-wrap items-center gap-2 ">


                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-black"/>
                        <label for="color-black"   className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-yellow"/>
                        <label for="color-yellow"   className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-white"/>
                        <label for="color-white"  className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-blue"/>
                        <label for="color-blue"   className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-green"/>
                        <label for="color-green"   className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-pink"/>
                        <label for="color-pink"   className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-orange"/>
                        <label for="color-orange"   className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-red"/>
                        <label for="color-red"  className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>

                    <div className="color-selector">

                        <input type="radio" name="size" className="hidden" id="color-purple"/>
                        <label for="color-purple"   className="text-xs border border-gray-200  rounded-full h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" ></label>
    
                    </div>
            
               
               

                  </div>




               


             </div>



        </div>

        
        

    </div>
    <div className="col-span-3">

<div className="mb-4 flex items-center">


<select className="w-60 text-sm text-gray-700 px-4 py-3 border border-gray-950 shadow-lg rounded-md focus:ring-primary focus:border-primary focus:border">
   <option>Default Shorting</option>
   <option>Price Low-Shorting</option>
   <option>Price High-Shorting</option>

</select>

<div className="flex gap-2 ml-auto">
<div className="border border-primary w-10 h-9 flex bg-white rounded-lg cursor-pointer items-center justify-center text-primary">
   <i className="fa-solid fa-list"></i>
</div>


<div className="border border-primary w-10 h-9 flex bg-primary rounded-lg cursor-pointer items-center justify-center text-white">
<i className="fa-solid fa-rectangle-list"></i>
</div>


</div>



</div>

<div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">

   








   
   
   
    </div></div>
    </div>
    </div>

    

  )
}

export default Shop