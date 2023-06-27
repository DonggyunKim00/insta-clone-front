import React from 'react';
import styled from 'styled-components';
import StorySide from './StorySide';
import FeedContent from './FeedContent';
import FeedPresentation from './FeedPresentation';



const Testdiv=styled.div`
    width:630px;
    height:200vh;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    @media screen and (min-width:1160px) {
        float: left;
        margin-right:64px;
    }
    
`;
const FeedWrapper=styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width:630px;
    flex-grow: 0;
    flex-shrink: 0;
    overflow-x: visible;
    overflow-y: visible;
    align-items:center;
`;

const FeedBox= styled.div`
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    justify-content:center;
    align-content:center;
    max-width:470px;
    width:100%;
`;



const dummy:FeedData[]=[
    {
    author:"유저",
    uploadedTime:"2023-05-29T23:00:09.000Z",
    like:30,
    comments:[{
        user:"S",
        content:"S"
    },
    {
        user:"Q",
        content:"O"
    },
    {
        user:"Q",
        content:"S"
    },
    {
        user:"Q",
        content:"~"
    },
],
    content:'/MainPage/FeedTestImage.jpg'

    },

]


export interface FeedData{
    author:string,
    uploadedTime?:string,
    contentStream?:any,
    content:string,
    like?:number,
    comments?:any
}
type Props={
    feedData:FeedData
}
//홈 중앙에 보이는 피드게시글 리스트 컴포넌트
function HomeFeed({feedData=dummy}) {
    return (
        <Testdiv>
            <StorySide/>{/* 화면상단 스토리영역 */}
            <FeedWrapper>{/* 피드영역 */}
                {feedData.map((data)=>
                    <FeedBox key={data.author}>{/* 피드게시글 키값으로 작성자가 아닌 게시글번호를 넣는게 좋음  */}
                        <FeedContent author={data.author} content={data.content} uploadedTime={data.uploadedTime}/>
                        <FeedPresentation like={data.like} comments={data.comments}/>
                    </FeedBox>
                )}
                
            </FeedWrapper>
        </Testdiv>
    );
}

export default HomeFeed;

