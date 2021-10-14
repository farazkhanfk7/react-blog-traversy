const Bloglist = ({blogs,title}) => {

    // Or we use (props) => {} and then, but here is used destructuring
    // const blogs = props.blogs
    // const title = props.title

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist
;