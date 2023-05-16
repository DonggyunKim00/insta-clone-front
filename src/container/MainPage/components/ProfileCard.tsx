import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import styled from 'styled-components';
import StoryCard from './StoryCardImage';
import RecomendBox from './RecomendBox';
const ProfileCardLayout=styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
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

function ProfileCard() {
    return (
        <ProfileCardLayout>
            <RecomendBox title={'lif2delet3n'} text={'정지훈'} image={''} isButton={false} />
            <ChangeButton>전환</ChangeButton>
        </ProfileCardLayout>
    );
}

export default ProfileCard;