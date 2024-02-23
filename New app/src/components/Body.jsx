import { useEffect, useState } from "react"
import AnimeCard from "./AnimeCard"

const Body=()=>{
    
    let [animeList,setanimeList]=useState([])
    let [animeListtobeprinted,setanimeListtobeprinted]=useState([])

    let [searchtext,setsearchtext]=useState("")

    
    const fetchdata= async()=>{
        const resp = await fetch("https://api-aniwatch.onrender.com/anime/home")
        const data = await resp.json()
        console.log(data)
        setanimeListtobeprinted(data?.spotlightAnimes)
        setanimeList(data?.spotlightAnimes)
        // console.log(animeList)
    }
    
    useEffect(()=>{
        fetchdata()
        },[])

    return (
        
        <>
            <div className="button">
                
                <button className="top-anime-list"
                onClick={()=>{
                    const filterdData=animeList.filter((anime)=> anime.rank<=5)
                    setanimeListtobeprinted(filterdData)
                }}>
                    Top Anime List
                </button>

                <button className="bottom-anime-list" 
                onClick={()=>{    
                    const filterdData=animeList.filter((anime)=> anime.rank>=8)
                    setanimeListtobeprinted(filterdData)
                }}>
                    Bottom Anime List
                </button>
                <div className="search">
                    <input type="text" placeholder="Enter the anime name" className="search-text"  value={searchtext} onChange={(e)=>(setsearchtext(e.target.value))}/>
                    <button className="search-btn" onClick={()=>{
                        const filteredvaluefrombox=animeList.filter((anime)=>(anime.name.toLowerCase().includes(searchtext.toLowerCase())))
                        setanimeListtobeprinted(filteredvaluefrombox)
                    }
                    }>Search</button>
                </div>
            </div>

            <div className="anime-container">
                {
                 animeListtobeprinted.map(anime=><AnimeCard key={anime.id} AnimeData={anime} />)
                }
            </div>
        </>
    )
}


export default Body

