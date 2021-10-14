import useFetch from './useFetch'
import Bloglist from './Bloglist';

const Home = () => {

    const { data:blogs, pending, error } = useFetch("http://localhost:8000/blogs")

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