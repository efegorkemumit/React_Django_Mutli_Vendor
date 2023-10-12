import React from 'react'

import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'



function SearchComponent() {

    const[searchTerm, setSearchTerm] = useState('');
    const history = useNavigate();

    const handleSearch =() => {
        history(`/search-results?title=${searchTerm}`)
    }



  return (
    <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
    <span className="absolute left-4 top-3 text-lg text-gray-700">
        <i className="fa-solid fa-magnifying-glass"></i>
    </span>
    <input type="text" 
    className="w-full pl-12 border border-r-0 border-primary py-3 px-3 rounded-xl shadow-sm focus:ring-primary" 
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) =>setSearchTerm(e.target.value)}/>
    <button type="submit"
    onClick={handleSearch}
     className="bg-primary text-white border border-primary px-8 font-medium rounded-xl hover:bg-transparent hover:text-primary transition">
    Search</button>


</div>
    )
}

export default SearchComponent