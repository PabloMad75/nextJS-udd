"use client"

const PostCard = ({ post }) => {
    return (
        <>
            <div key={post.id}>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => {alert('Me gusta este Post')}}>Like</button>
            </div>
        </>
    )

}

export default PostCard