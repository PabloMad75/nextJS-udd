import PostCard from "@/components/PostCard"


const loadPost = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    return(data)
}

const PostPage = async() => {

    const posts = await loadPost()


    return (
        <>
            <h2>Publicaciones</h2>
            <div>
                {
                    posts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))
                }
            </div>

        </>
    )
}

export default PostPage