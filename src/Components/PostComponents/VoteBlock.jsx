import React from "react"
import {useSelector, useDispatch} from "react-redux"
// import {action} from "../../actions"
import { VoteBlockDiv, VoteButtonDiv } from './PostStyles'

const VoteBlock = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <VoteBlockDiv>
            <VoteButtonDiv>
                <p>{props.left}</p>
                <button>{'<-'}</button>
            </VoteButtonDiv>
            <VoteButtonDiv>
                <p>{props.neutral}</p>
                <button>{'||'}</button>
            </VoteButtonDiv>
            <VoteButtonDiv>
                <p>{props.right}</p>
                <button>{'->'}</button>
            </VoteButtonDiv>
        </VoteBlockDiv>
    )
}

export default VoteBlock