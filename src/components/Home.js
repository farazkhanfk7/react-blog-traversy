import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setblogs] = useState([
        { title : "New Website", body:"LOrem ipsum..", author:"faraz", id:1},
        { title : "Sports", body:"manchester vs..", author:"hasan", id:2},
        { title : "Cars ", body:"LOrem ipsum..", author:"faraz", id:3},
    ])

    // we can also pass function as props
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setblogs(newBlogs);
    }

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <Bloglist blogs={blogs.filter((blog)=>blog.author==="faraz")} title="Faraz's Blogs" handleDelete={handleDelete}/>
        </div>
        );
}
 
export default Home;