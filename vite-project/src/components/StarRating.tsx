import React from 'react'

const StarRating =({rating})=> {
    const stars = []

    for(let i = 0; i<rating; i++){
        stars.push(<span key={i}><i className="fa-solid fa-star"></i></span>)
    }



  return (
    <div className="flex gap-1 text-sm text-yellow-500">
        {stars}
         
           


        </div>
  )
}


export default StarRating
