import { Logo_url } from "../utils/constant";

const Header=()=>{
    return  (
        <div className="header">
            <div className='logo-container'>
                <img 
                className="logo" src={Logo_url}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;