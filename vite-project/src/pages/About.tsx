import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'

function About() {

  const[about, setabout] =useState([])

  useEffect(()=>{
    axios.get(BASE_URL+'/sitesettings/about/select/').then((response)=>{
      
      setabout(response.data);

    })
  }, [] )

  const[socialmedia, setsocial] =useState([])


  useEffect(()=>{
      axios.get(BASE_URL+'/sitesettings/social/select').then((response)=>{
        
          setsocial(response.data);

      })
    }, [] )


  return (
    <div>

<div className="container py-4 flex justify-between">
    <div className="flex gap-3 items-center">
        <a className="text-primary text-base" href="index.html"> <i className="fa fa-home"></i></a>
        <span className="text-sm text-gray-600"> <i className="fa-solid fa-angle-right fa-lg"></i></span>
        <p className="text-gray-900 font-medium">About</p>

    </div>
</div>





<div className="max-w-3xl mx-auto px-4 pt-16 pb-16 text-center">

   

    <h1 className="text-primary font-semibold text-3xl mb-3"> ABOUT US</h1>
   

    {about.map((aboutus)=>(
                    <p> {aboutus.description}  </p>

                    ))}


<div className="flex items-center justify-center mt-10 space-x-5">

{socialmedia.map((links)=>

<a href={links.urllink} className="text-gray-400 text-sm font-poppins hover:text-gray-100">
<i className={links.icon}></i>

</a>


)}

  </div>


    
    


</div>

    </div>
  )
}

export default About