import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import RecomendBox from './RecomendBox';
import ProfileCard from './ProfileCard';
import testImage from 'public/MainPage/free-icon-instagram-174855.png'
import Link from 'next/link';
const RecomendSectionWrapper=styled.div`
    display: block;
    flex-shrink: 0;
    height: 100%    ;
    left: 815.9px;
    margin-bottom: 30px;
    max-width: 347px;
    padding-top: 30px;
    position: sticky;
    right: 0px;
    top: 0px;
    width: 100% ;
`;

const RecomendListLayout=styled.div`
    display:block;
    font-size:14px;
    font-weight:400;
    line-height:18px;
    width:20rem;
`;
const RecomendListWraper= styled.div`
    box-sizing:border-box;
    color:black;
    display:block;
    flex-direction:column;
    font-size:14px;
    line-height:18px;
    margin-top:16px;
`;

const RecomendListTop = styled.span`
    color:rgb(115,115,115);
    overflow-wrap:break-word;
    white-space:pre-line;
    line-height:20px;
    margin:0px;
    flex-grow:1;
    font-weight:600;
`;

const RecomendList = styled.div`
    background-color:white;
    border-color:rgb(219,219,219);
    border:0.8px;
    box-sizing:border-box;
    font-weight:400;
    margin-top:16px;
    line-height:18px;
    flex-direction:column;
`
const RecomendListTopWrapper=styled.div`
    display:flex;
    flex-direction:row;
    flex-shrink:0;
    padding-left:16px;
    padding-right:16px;
    padding-top:4px;
    padding-bottom:4px;
    align-items:center;
    & a{
        color:black;
        font-weight:600;
        font-size:12px;
        word-break:break-word;
        flex-grow:0;
        :hover{
            color:rgb(115,115,115);
        }
    }
`
const dummy =[
    {
        title: "Instagram",
        text: "글내용",
        image: testImage
    },
    {
        title: "김",
        text: "사사사",
        image: testImage
    },
    {
        title: "다섯 번째 제목",
        text: "세 번째 글 내용입니다.",
        image: testImage
    },
]

const dummy2 =[
    {
        title: "다섯 번째 제목",
        text: "첫 번째 글 내용입니다.",
        image: testImage
    },
    {
        title: "다섯 번째 제목",
        text: "다섯 번째 글 내용입니다.",
        image: testImage
    },
    {
        title: "다섯 번째 제목",
        text: "세 번째 글 내용입니다.",
        image: testImage
    }
]
const RecomendSection=()=> {
    return (
        <RecomendSectionWrapper>
            <ProfileCard/>
            <RecomendListLayout>
                <RecomendListWraper>
                    <RecomendListTopWrapper>
                    <RecomendListTop>회원님을 위한 추천</RecomendListTop>
                    <Link href={'/RecomendList'}>
                        <a>
                            모두보기
                        </a> 
                    </Link>
                    </RecomendListTopWrapper>
                    <RecomendList>
                        {dummy.map((data)=>
                            // eslint-disable-next-line react/jsx-key
                            <RecomendBox title={data.title} text={data.text} image={data.image}/>
                        )
                        }
                    </RecomendList>
                </RecomendListWraper>
            </RecomendListLayout>
        </RecomendSectionWrapper>
    );
}

export default RecomendSection;