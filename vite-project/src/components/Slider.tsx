import React, {useEffect, useState} from "react";
import axios from "axios"
import {MEDIA_URL, BASE_URL, CloudURL} from '../configUrl'

const Slider: React.FC = ()=>{

   
    const [slides, Setslides] = useState([]);
    const  [currentSlide, setCurrentSlide]= useState<number>(0);

    useEffect(()=>
    {

        axios.get(BASE_URL+'/sitesettings/slider/select/').then((response)=>{
      
            Setslides(response.data);
      
          })


        const interval = setInterval(()=>{
            setCurrentSlide((prevSlide)=> (prevSlide+1) % slides.length);


        },5000);
        return() => clearInterval(interval) 
    
    },[slides.length]);

    return(
        <div className="slider">

            {slides.map((slide, index)=>(

                <div 
                key={index} 
                className={`slide w-full h-full bg-repeat-round object-cover ${currentSlide === index ? 'block': 'hidden'} `}
                style={{ backgroundImage:`url(${CloudURL}${slide.image})`}}
                >
                    <div className="container pt-28 pb-24 md:pb-36 lg:pb-54 xl:pb-70">
                    <h1 className="text-4xl xl:text-6xl md:text-5xl text-gray-900 font-semibold mb-4"> {slide.textone} </h1>
                    <p className="text-base text-gray-700 leading-7">{slide.texttwo}</p>
                    <div className="mt-12">
                        <a className="bg-primary border border-primary
                        text-white px-8 py-3 font-medium rounded-xl uppercase hover:bg-red-950 transition " href="shop.html">Shop now
                
                        </a>
                
                    </div>
                    
                    </div>
                
                </div>

            ))}
                
            
        </div>
             
    )


}

export default Slider;