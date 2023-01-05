import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const Stories = () => {
  return (
    <StoriesWrapper>
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
        profileSrc=""
        title=""
      />
      <Story
        image="https://image.thanhnien.vn/w1024/Uploaded/2023/oqivotiw/2022_12_29/mbappe-messi-3379.jpeg"
        profileSrc=""
        title=""
      />
      <Story
        image="https://media-cdn-v2.laodong.vn/storage/newsportal/2022/10/12/1104086/307530596_5096996239.jpg"
        profileSrc=""
        title=""
      />
    </StoriesWrapper>
  )
}

const StoriesWrapper = styled.div`
  display: flex;
`

export default Stories