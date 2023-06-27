import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import RecomendBox from './RecomendBox';
import ProfileCard from './ProfileCard';
import Link from 'next/link';
const RecomendSectionWrapper=styled.div`
    display: block;
    flex-shrink: 0;
    height: 100vh;
    margin-bottom: 30px;
    max-width: 319px;
    padding-top: 30px;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 100% ;
    @media screen and (max-width: 1160px) {
        display:none;
  }
`;

const RecomendListLayout=styled.div`
    display:block;
    font-size:14px;
    font-weight:400;
    line-height:18px;
    width:calc(100% + 32px);
`;
const RecomendListWraper= styled.div`
    color:black;
    display:block;
    flex-direction:column;
    font-size:14px;
    line-height:18px;
    margin-top:12px;
    margin-bottom:-16px;
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
const userDummy ={
    id:"ewijefiojefw",
    name:"홍길동",
    image:"/MainPage/StoryTestImage.png"
} 
//오른쪽에 나타나는 팔로우 추천유저 목록 컴포넌트
const RecomendSection=({userData=userDummy,recomendData}:any)=> {
    return (
        <RecomendSectionWrapper>
           
            <RecomendListLayout>
                {/* 자기 프로필 */}
            <ProfileCard userData={userData}/>
                <RecomendListWraper>
                    {/* 추천유저 리스트 상단 */}
                    <RecomendListTopWrapper>
                    <RecomendListTop>회원님을 위한 추천</RecomendListTop>
                    <Link href={'/RecomendList'}>
                        <a>
                            모두보기
                        </a> 
                    </Link>
                    </RecomendListTopWrapper>
                    {/* 추천유저 리스트박스 */}
                    <RecomendList>
                        {recomendData.map((data:any)=>
                            // eslint-disable-next-line react/jsx-key
                            <RecomendBox title={data.title} text={data.text} image={data.image} isFollowing={false}/>
                        )
                        }
                    </RecomendList>
                </RecomendListWraper>
            </RecomendListLayout>
        </RecomendSectionWrapper>
    );
}

export default RecomendSection;