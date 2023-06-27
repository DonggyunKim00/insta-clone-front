import Image from 'next/image';
import { title } from 'process';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FeedData } from './HomeFeed';
const IconButton=styled.button`
    padding:4px;
    background-color:transparent;
    border-style:none;
`;
const LikeSection=styled.div`
    font-weight:600;
    
`;

const IconButtonSection= styled.section`
    margin-top:4px;
    padding-bottom:6px;
    display:flex;
    align-items:center;
    width:100%;
    
    .save{
        margin-left:auto;
    }
    cursor:pointer{
        color:rgb(115,115,115)
    }
`;
const LIKEVALUE={
   man:10000,
   t:1000,
}
//피드 게시글의 피드컨텐츠 하단 컴포넌트
function FeedPresentation({like,comments}:any) {
    useEffect(()=>{

    },[like])
    return (
        <div>
            {/* 좋아요, 댓글, 공유, 스크랩 아이콘버튼 */}
                <IconButtonSection>
                    <IconButton>
                        <Image src={'/MainPage/free-icon-like-535285.png'} width={24} height={24}  title='좋아요' alt='좋아요'/>
                    </IconButton>
                    <IconButton>
                        <Image src={'/MainPage/free-icon-speech-bubble-2043.png'} width={24} height={24} title='댓글' alt='댓글'/>
                    </IconButton>
                    <IconButton>
                        <Image src={'/MainPage/free-icon-direct-instagram-5883507.png'} width={24} height={24} title='게시글 공유' alt='게시글 공유'/>
                    </IconButton>
                    <IconButton className='save'>
                        <Image src={'/MainPage/free-icon-save-instagram-5662990.png'} width={24} height={24} title='저장하기' alt='저장하기'/>
                    </IconButton>
                </IconButtonSection>
                <LikeSection>
                    {`좋아요 ${like}개`}
                </LikeSection>
                <div>
                    댓글
                </div>
        </div>
    );
}

export default FeedPresentation