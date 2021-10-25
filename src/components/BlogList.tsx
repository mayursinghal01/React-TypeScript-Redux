import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


type Blog = {
    title:string,
    body:string,
    author:string,
    id:string
}



const BlogList = () => {

    const blogs = useSelector((state:Blog[]) => state )
    return (
      <div className="blog-list">
        {blogs.length === 0 ? <h1>Empty</h1> : <h1>All Blogs!</h1>}
        {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
    )
}

export default BlogList
