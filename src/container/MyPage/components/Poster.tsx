import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";

const Poster = () => {
  return (
    <Container>
      <PostItemList>
        <PostItem images={"/PosterImages/spaceship.jpg"} />
        <PostItem images={"/PosterImages/startrails.jpg"} />
        <PostItem images={"/PosterImages/sunrise.jpg"} />
        <PostItem images={"/PosterImages/earth.jpg"} />
        <PostItem images={"/PosterImages/football.jpg"} />
        <PostItem images={"/PosterImages/soccer.jpg"} />
      </PostItemList>
    </Container>
  );
};

export default Poster;

const Container = styled.div``;
const PostItemList = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;
