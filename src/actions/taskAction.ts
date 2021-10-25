type blog= {
    title:string
    body:string
    author:string
    id:string
}
export const addBlog = (data:blog) => {
    return{
        type: 'ADD_BLOG',
        data
    }
}

export const deleteBlog = (id:string) => {
    return {
        type: 'DELETE_BLOG',
        id
    }
}
 