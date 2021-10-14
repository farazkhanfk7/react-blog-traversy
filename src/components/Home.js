import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setblogs] = useState(null)
    const [pending, setpending] = useState(true)
 
    useEffect(()=>{
        // using settimeout here just to demonstrate the time server takes to fetch
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then((res) => {
                return res.json()
            }).then(data => {
                setblogs(data)
                setpending(false)
            })
        }, 1000);
    })

    // useEffect(()=>{
    //     console.log("Use effect ran")
    // },[name]) -> extra parameter name
    // This will run only when "name" will change
 
    return (
        <div className="home">
            { pending && <div>Loading...</div> }
            {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
        </div>
        );
}
 
export default Home;