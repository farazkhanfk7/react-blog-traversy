import { useParams } from "react-router";

const BlogDetail = () => {
    
    const {id} = useParams();
    
    return (
        <div>
            <h2>Blog Detail {id}</h2>
        </div>
        
     );
}
 
export default BlogDetail;