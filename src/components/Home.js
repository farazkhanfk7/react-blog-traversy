import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setblogs] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
            .then((res) => {
                return res.json()
            }).then(data => {
                setblogs(data)
            })
    })

    // useEffect(()=>{
    //     console.log("Use effect ran")
    // },[name]) -> extra parameter name
    // This will run only when "name" will change
 
    return (
        <div className="home">
            {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
        </div>
        );
}
 
export default Home;