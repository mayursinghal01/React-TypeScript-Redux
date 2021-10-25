import { useHistory, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {deleteBlog} from "../actions/taskAction" 

type IdType = {
    id:string
}
type Blog = {
    title:string,
    body:string,
    author:string,
    id:string
}


const BlogDetails =() => {

    
    const {id} = useParams<IdType>();
    const dispatch = useDispatch()
    const blogs = useSelector((state:Blog[]) => state )
    const blog = blogs.find(blog => {return blog.id === id})
    const history = useHistory();
    const handleClick =() => {
        dispatch(deleteBlog(id))
        history.push('/')
    }

    return (
        <div className="blog-details">
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick}>delete</button>
            </article>  }
        </div>
    )
}

export default BlogDetails
