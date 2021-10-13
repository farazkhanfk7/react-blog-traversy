import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setblogs] = useState([
        { title : "New Website", body:"LOrem ipsum..", author:"faraz", id:1},
        { title : "Sports", body:"manchester vs..", author:"hasan", id:2},
        { title : "Cars ", body:"LOrem ipsum..", author:"faraz", id:3},
    ])

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" />
            <Bloglist blogs={blogs.filter((blogs)=>blogs.author==="faraz")} title="Faraz's Blogs" />
        </div>
        );
}
 
export default Home;