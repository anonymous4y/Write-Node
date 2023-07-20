import { useEffect, useRef, useState } from 'react'
import { useTitle } from '../hooks/useTitle'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { PostCard, SkeletonCard } from '../components'

export const HomePage = () => {
    const [posts, setPosts] = useState([false, false])
    const [toggle, setToggle] = useState(false)
    const postRef = useRef(collection(db, "posts"))
    useTitle("Home")


    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postRef.current)
            setPosts(data.docs.map((document) => (
                { ...document.data(), id: document.id })
            ))
        }
        getPosts()
    }, [postRef, toggle])


    return (
        <section>
            {posts.map((post, index) => (
                post ? (
                    <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
                ) : (
                    <SkeletonCard key={index} />
                )
            ))}
        </section>
    )
}
