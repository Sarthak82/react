import { AnimeLogo } from "../utils/Constant"

const Header=()=>{
    return(
        <div className="top-of-the-page">
            <div className="logo-top">
                <img src={AnimeLogo} alt="Anime logo" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Most Popular</li>
                    <li>Top Airing</li>
                </ul>
            </div>
        </div>
    )
}

export default Header