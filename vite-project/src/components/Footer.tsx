import axios from "axios"
import React, {useEffect, useState} from "react";
import {MEDIA_URL, BASE_URL} from '../configUrl'
import Product from "../components/Product";

const Footer = () => {

    const[footerone, setData] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/sitesettings/footer/select/?footercolumuns=one').then((response)=>{
        
        setData(response.data);

      })
    }, [] )


    const[footertwo, setDatatwo] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/sitesettings/footer/select/?footercolumuns=two').then((response)=>{
        
        setDatatwo(response.data);

      })
    }, [] )

    const[footerth, setDatathree] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/sitesettings/footer/select/?footercolumuns=there').then((response)=>{
        
        setDatathree(response.data);

      })
    }, [] )

    const[footerfour, setDatafour] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/sitesettings/footer/select/?footercolumuns=four').then((response)=>{
        
        setDatafour(response.data);

      })
    }, [] )

    const[about, setabout] =useState([])

    useEffect(()=>{
      axios.get(BASE_URL+'/sitesettings/about/select').then((response)=>{
        
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
      <>
  
  <footer className="bg-second pt-16 pb-12 border-t border-primary">
                     <div className="container">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-8 xl:col-span-1">
                                <img src="src/img/logo.png" className="w-64 h-auto" alt="Youtube Efe Görkem Ümit" />

                                {about.map((aboutus)=>

<p className="text-gray-400 text-sm font-poppins" > {aboutus.smalldesc} </p>


)}


                                <div className="flex space-x-5">


                                  
                                    {socialmedia.map((links)=>

<a href={links.urllink} className="text-gray-400 text-sm font-poppins hover:text-gray-100">
<i className={links.icon}></i>

</a>


)}


                                 


                                </div>
                            </div>

                         <div className="mt-2 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0"> Support</h3>
                                    <div className="mt-4 space-y-4">
                                        
                                        
{footerone.map((footerone)=>

<a href={footerone.urllink} className="text-gray-300 hover:text-white font-semibold block">{footerone.title}</a>


)}
                                        
                                   

                                    </div>


                                </div>

                                <div>
                                    <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0"> Community</h3>
                                    <div className="mt-4 space-y-4">
                                    {footertwo.map((footertwos)=>

<a href={footertwos.urllink} className="text-gray-300 hover:text-white font-semibold block">{footertwos.title}</a>


)}

                                    </div>


                                </div>


                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0"> Project</h3>
                                    <div className="mt-4 space-y-4">
                                    {footerth.map((footerthere)=>

                <a href={footerthere.urllink} className="text-gray-300 hover:text-white font-semibold block">{footerthere.title}</a>


                            )}

                                    </div>


                                </div>

                                <div>
                                    <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0">  Started</h3>
                                    <div className="mt-4 space-y-4">
                                    {footerfour.map((footerfourc)=>

<a href={footerfourc.urllink} className="text-gray-300 hover:text-white font-semibold block">{footerfourc.title}</a>


            )}

                                    </div>


                                </div>


                            </div>




                         </div>

                           
                             

                        </div>
                        
                     </div>
                   </footer>


                             <div className="bg-primary py-5 mb-16 lg:mb-0">
                                <div className="container flex items-center justify-between">
                                    <p className="text-white font-semibold">© Youtube Efe Görkem Ümit</p>

                                    <div>
                                        <img src="src/img/pay.png" className="w-96" />
                                    </div>



                                </div>
                             </div>
                
                
                
     
       
      </>
    )
  }
  
  export default Footer
  