import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setblogs] = useState(null)
    const [pending, setpending] = useState(true)
    const [error, seterror] = useState(false)
 
    useEffect(()=>{
        // using settimeout here just to demonstrate the time server takes to fetch
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then((res) => {
                if (!res.ok){
                    throw Error("Couldn't get data for this resource.")
                }
                return res.json()
            }).then(data => {
                setblogs(data)
                setpending(false)
            }).catch(err => {
                setpending(false)
                seterror(err.message)
                console.log(err.message)
            })
        }, 1000);
    })

    // useEffect(()=>{
    //     console.log("Use effect ran")
    // },[name]) -> extra parameter name
    // This will run only when "name" will change
 
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { pending && <div>Loading...</div> }
            {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
        </div>
        );
}
 
export default Home;