import MainPageView from '@/container/MainPage/MainPageView';
import React from 'react';
const dummy =[
    {
        title: "Instagram",
        text: "글내용",
        image: '/MainPage/free-icon-instagram-174855.png'
    },
    {
        title: "김",
        text: "사사사",
        image: '/MainPage/free-icon-instagram-174855.png'
    },
    {
        title: "다섯 번째 제목",
        text: "세 번째 글 내용입니다.",
        image: '/MainPage/free-icon-instagram-174855.png'
    },
    {
        title: "다섯 번째 제목",
        text: "세 번째 글 내용입니다.",
        image: '/MainPage/free-icon-instagram-174855.png'
    },
    {
        title: "다섯 번째 제목",
        text: "세 번째 글 내용입니다.",
        image: '/MainPage/free-icon-instagram-174855.png'
    },
]
type Props={
    data:{title:string, text:string, image:string}
}
//더미데이터를 집어넣은 인스타그램 홈
function home({data}:Props) {
    return (
        <MainPageView followData={data} />
    );
}

export default home;

export async function getStaticProps() {
    //const res
    //res=
    return { props: { data:dummy } };
  }