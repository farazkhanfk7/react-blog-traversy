const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Bat Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
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