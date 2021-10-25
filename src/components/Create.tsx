import React, { useState } from "react"
import { useDispatch } from "react-redux";
import  {addBlog}  from "../actions/taskAction";
import { v4 } from 'uuid';
import { useHistory } from "react-router";

const Create = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mayur');
    const history = useHistory()

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        const id = v4()
        const blog = {
            title,
            body,
            author,
            id
        }
        setTitle('');
        setBody('')
        dispatch(addBlog(blog))
        history.push('/')
    }

   

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Blog title:</label>
                <input 
                    value={title}
                    type="text"
                    required
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    value={body}
                    required
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}    
                    onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option value="Mayur">Mayur</option>
                    <option value="Teja">Teja</option>
                    <option value="Sivan">Sivan</option>
                    <option value="Aditya">Aditya</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create
