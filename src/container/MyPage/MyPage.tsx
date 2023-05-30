import React from "react";
import styled from "styled-components";
import Profile from "./components/Profile";
const MyPage = () => {
  return (
    <Container>
      <PageSet>
        <Profile />
        <SelectOption></SelectOption>
        <Content></Content>
        <Footer></Footer>
      </PageSet>
    </Container>
  );
};

export default MyPage;
const Container = styled.div`
  width: auto;
  margin: 0px auto;
`;
const PageSet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 0px;
  width: 975px;
  height: 2000px;
`;

const SelectOption = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
const Content = styled.div``;
const Footer = styled.footer``;
