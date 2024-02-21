import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"

const Body=()=>{

    let [listOfRestaurant,setlistOfRestaurant]=useState([])
    let [searchText,setsearchText]=useState("")
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData= async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json)
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


  

    return listOfRestaurant.length===0 ? <Shimmer/> : (
        <div className='body'> 
            <div className='button'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button onClick={()=>{
                        const filteredData = listOfRestaurant.filter(
                            (res)=>{res.info.name.includes(searchText)
                            })
                        setlistOfRestaurant(filteredData)
                        
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredOfRestaurant=listOfRestaurant.filter((res)=> res.info.avgRating>4.2)
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


