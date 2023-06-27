import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import styled from 'styled-components';
import StoryCard from './StoryCardImage';
import RecomendBox from './RecomendBox';
import ContentsBox from './ContentsBox';
const ProfileCardLayout=styled.div`
    align-items: center;
    display: block;
    height: 66px;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 16px;
`;

const ChangeButton=styled.button<{shape?:string}>`
    font-weight:600;
    padding:0px;
    font-size:12px;
    flex-shrink:0;
    flex-grow:0;
    margin-left:12px;
    border: 0px;
    position: relative;
    width: 36px;
    margin-top: -2px;
    margin-bottom: -3px;
    color:rgb(0,149,246);
        background-color:transparent;
        :hover{
            color:rgb(0, 55, 107);
        }
`;
interface UserData{
    id: string,
    name:string,
    image:any
}
type Props={
   userData:UserData
}
//회원님을 위한 추천영역 위의 프로필 영역
function ProfileCard({userData}:Props) {
    return (
        <ProfileCardLayout>
            <ContentsBox title={userData.id} text={userData.name} image={ userData.image||'/MainPage/free-icon-instagram-174855.png'}>
                <Link href={'/'}>
                    <ChangeButton>{'전환'}</ChangeButton>
                </Link>
            </ContentsBox>
        </ProfileCardLayout>
    );
}

export default ProfileCard;