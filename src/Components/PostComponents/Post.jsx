import React from "react"
import {useSelector, useDispatch} from "react-redux"
// import {action} from "../../actions"
import { PostDiv, PostA } from './PostStyles'
import VoteBlock from './VoteBlock'

const Post = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <PostDiv>
            <PostA href={props.address}>{props.title}</PostA>
            <VoteBlock />
        </PostDiv>
    )
}

export default Post