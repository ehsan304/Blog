import React, { useState, useEffect } from 'react'
import { Container, PostCards } from '../components'
import appwriteServices from '../appwrite/config'


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    appwriteServices.getPost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCards post={post} />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default AllPosts