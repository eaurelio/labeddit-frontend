import {styled} from 'styled-components'

export const Post = styled.div`
  box-sizing: border-box;
  width: 100%;
  /* height: 150px; */
  border-radius: 15px;
  border: 1px solid gray;
  background-color: white;
  margin: 20px 0;
  padding: 8px;
`

export const PostHeader = styled.div`
  color: gray;
  font-size: 0.8em;
`

export const PostContent = styled.div`
  margin: 15px 0;
`

export const PostFooter = styled.div`
  color: gray;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const LikesContainer = styled.div`
  min-width: 80px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const LikesDislikes = styled.span`
  font-weight: bold;
`