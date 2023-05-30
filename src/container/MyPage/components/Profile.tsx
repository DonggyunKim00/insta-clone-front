import React from "react";
import styled from "styled-components";
import { SvgIcon } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
  return (
    <Container>
      <ImgDiv>
        <ImageComponent></ImageComponent>
      </ImgDiv>
      <InfoList>
        <FirstLine>
          <Name>donggyunalalalalalalalala</Name>
          <EditBtn>프로필 편집</EditBtn>
          <SettingBtn>
            <SvgIcon component={SettingsIcon} />
          </SettingBtn>
        </FirstLine>
        <SecondLine>
          <ListSpan>
            게시물 <NumSpan>6</NumSpan>
          </ListSpan>
          <ListSpan>
            팔로워 <NumSpan>500M</NumSpan>
          </ListSpan>
          <ListSpan>
            팔로우 <NumSpan>1</NumSpan>
          </ListSpan>
        </SecondLine>
        <ThridLine>
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          안녕하세요안녕하세요안녕하세요
        </ThridLine>
      </InfoList>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  margin-bottom: 44px;
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 292px;
  height: 150px;
  margin-right: 30px;
`;
const ImageComponent = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 100px;
  background-color: black;
`;
const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 643px;
`;
const FirstLine = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
`;
const Name = styled.h2`
  display: inline;
  font-size: 20px;
`;
const EditBtn = styled.button`
  margin-left: 20px;
  background-color: 239, 239, 239;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
`;
const SettingBtn = styled.button`
  border: none;
  background-color: #fafafa;
`;
const SecondLine = styled.ul`
  display: flex;
  align-items: center;
  height: 18px;
  gap: 40px;
  margin-bottom: 20px;
`;
const ListSpan = styled.li`
  font-size: 16px;
`;
const NumSpan = styled.span`
  font-weight: bold;
`;
const ThridLine = styled.div`
  display: flex;
`;
