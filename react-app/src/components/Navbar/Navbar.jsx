
import "./Navbar.css"

export const Navbar = () => {
    
    return (
        <nav>
            <div className="logo">
                <a href="#">Support Desk</a>
            </div>
            <div className="search-box">
                <input className="search" type="text" placeholder="Search" />
                <img src="./../../public/icon-search.svg" alt="search-icon" className="nav-icon" />
            </div>
        </nav>
    )
}