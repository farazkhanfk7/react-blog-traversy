import { useState } from 'react';

const Home = () => {

    const [blogs, setblogs] = useState([
        { title : "New Website", body:"LOrem ipsum..", author:"faraz", id:1},
        { title : "Sports", body:"manchester vs..", author:"hasan", id:2},
        { title : "Cars ", body:"LOrem ipsum..", author:"batcypher", id:3},
    ])

    return (
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                </div>
            ))}
        </div>
        );
}
 
export default Home;