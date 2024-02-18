import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockdata"
import { useState } from "react"

const Body=()=>{

    let [listOfRestaurant,setlistOfRestaurant]=useState(resList)

    return (
        <div className='body'> 
            <div className='button'>
                <button className="filter-btn" onClick={()=>{
                    const filteredOfRestaurant=listOfRestaurant.filter((res)=> res.info.avgRating>4)
                    setlistOfRestaurant(filteredOfRestaurant)
                }}>
                    Top rated restaurant
                </button>
            </div>
            <div className="res-container">
            {
                listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }
            </div>
        </div>
    )
}

export default Body


