import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Bat Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <a href="/login" style={{
                    color : "white",
                    backgroundColor : "#f1356d",
                    borderRadius : "8px"
                }}>Login</a>
            </div>
        </nav>
    );
}
 
export default Navbar;