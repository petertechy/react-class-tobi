
import React, { useEffect, useState } from 'react'

const BlogPage = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    const posts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=20'
        )

        const data = await response.json()

        console.log(data)
        setPost(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }

    posts()
  }, [])

  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <div>
      <h1>Blog Page</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        post.map((blog) => (
          <div key={blog.id}>
            <i>{blog.id}</i>
            <h4>Title: {blog.title}</h4>
            <p>Body: {blog.body}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default BlogPage
