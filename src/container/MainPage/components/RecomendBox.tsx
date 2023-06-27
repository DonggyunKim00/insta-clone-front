import React from 'react';
import styled, { css } from 'styled-components';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import ContentsBox from './ContentsBox';

const FollowButton=styled.button<{shape?:string}>`
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

    ${(props=>props.shape==='button'?
    css`
        color:rgb(255,255,255);
        border-radius:8px;
        background-color:rgb(0,149,246);
        box-sizing:border-box;
        padding-left:16px;
        padding-right:16px;
        padding-top:7px;
        padding-bottom:7px;
        `
    :
    css`
        color:rgb(0,149,246);
        background-color:transparent;
        :hover{
            color:rgb(0, 55, 107);
        }
    `
    )};
`;

interface Props{
    title:string,
    text?:string,
    image:StaticImageData | string,
    isFollowing:boolean,
}
//오른쪽에 나타나는 팔로우 추천 및 팔로잉 유저를 보여주는 컴포넌트, 추천유저만 보여주는게 아니라 이후 이름바꿀필요있음 
const RecomendBox = ({...props}:Props) => {
    return ( 
        <ContentsBox title={props.title} text={props.text} image={props.image} isFollowing={false}>
            {/* 추천유저를 누를시 이동할 링크(팔로우 요청을 보내는 리디렉션 링크 혹은 이후 이벤트 핸들러로 변경), 마우스만 올리면 나타나는 세부정보 미구현 */}
            <Link href={(props.isFollowing?
                '/'
                :
                '/')}>
                <FollowButton>{props.isFollowing?"팔로잉":"팔로우"}</FollowButton>
            </Link>
        </ContentsBox>
        
    );
}
    
export default RecomendBox;