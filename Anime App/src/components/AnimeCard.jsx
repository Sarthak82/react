
const AnimeCard=(props)=>{
    
    const { rank, name, poster,id, otherInfo,episodes} = props.AnimeData
    
    return(

        <div className="card">
            <div className="image-of-anime"> 
                <img src={poster} alt={id}  className="image-of-anime"/>
            </div>
            <div className="other-anime-info">
                <h3>Rank: {rank}</h3>
                <h3>{name}</h3>
                <h3>Episode Number: {episodes.sub}</h3>
                <h3>Timing: {otherInfo[1]}</h3>
                <h3>Release Date: {otherInfo[2]}</h3>
            </div>
        </div>
    )
}

export default AnimeCard