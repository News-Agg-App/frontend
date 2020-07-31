import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getStories } from "../../Store/Actions"
import Post from "./Post"


const PostList = _ => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(getStories())
    }, [])

    return (
        <div>
            {state.stories.length > 0 && state.stories.map(story => (
                <Post key={story.id} story={story} />

            ))}

        </div>
    )
}

export default PostList