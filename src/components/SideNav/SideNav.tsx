import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
const SideNav = () => {
  return (
    <Container>
      <Logo />
      <NavList>
        <Link href="/">
          <ListDiv>
            <Image
              src="/SideNavImages/home.png"
              width="24"
              height="24"
              alt="home"
            />
            <ListSpan>홈</ListSpan>
          </ListDiv>
        </Link>
        <Link href="/">
          <ListDiv>
            <Image
              src="/SideNavImages/search.png"
              width="24"
              height="24"
              alt="search"
            />
            <ListSpan>탐색 탭</ListSpan>
          </ListDiv>
        </Link>
        <Link href="/">
          <ListDiv>
            <Image
              src="/SideNavImages/video.png"
              width="24"
              height="24"
              alt="video"
            />
            <ListSpan>릴스</ListSpan>
          </ListDiv>
        </Link>
        <Link href="/">
          <ListDiv>
            <Image
              src="/SideNavImages/direct.png"
              width="24"
              height="24"
              alt="direct"
            />
            <ListSpan>메시지</ListSpan>
          </ListDiv>
        </Link>
        <Link href="/">
          <ListDiv>
            <Image
              src="/SideNavImages/love.png"
              width="24"
              height="24"
              alt="love"
            />
            <ListSpan>알림</ListSpan>
          </ListDiv>
        </Link>
        <Link href="/">
          <ListDiv>
            <Image
              src="/SideNavImages/post.png"
              width="24"
              height="24"
              alt="post"
            />
            <ListSpan>만들기</ListSpan>
          </ListDiv>
        </Link>
        <Link href="/">
          <ListDiv>
            <Image
              src="/SideNavImages/profile.png"
              width="24"
              height="24"
              alt="profile"
            />
            <ListSpan>프로필</ListSpan>
          </ListDiv>
        </Link>
      </NavList>
      <MoreInfo>
        <ListDiv>
          <Image
            src="/SideNavImages/menu.png"
            width="24"
            height="24"
            alt="menu"
          />
          <ListSpan>더 보기</ListSpan>
        </ListDiv>
      </MoreInfo>
    </Container>
  );
};

export default SideNav;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 220px;
  padding: 8px 12px 20px;
  border-right: 1px solid #dbdbdb;
  height: 100vh;
  background-color: white;
  @media screen and (max-width: 1263px) {
    width: 72px;
  }
`;

const NavList = styled.div`
  margin-bottom: auto;
`;
const ListDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  margin: 4px 0;
  border-radius: 24px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media screen and (max-width: 1263px) {
    width: 48px;
  }
`;
const ListSpan = styled.span`
  @media screen and (max-width: 1263px) {
    display: none;
  }
`;
const MoreInfo = styled.div``;
