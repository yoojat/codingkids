import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import tw from 'tailwind-styled-components';
import { bgColor, menus } from '@libs/options';
import { mediaSize } from '@libs/media';
import { Router } from 'next/router';

const ContentLayout = tw.div<{ $isSideMenuShow: boolean }>`
${(_) => bgColor}
absolute
w-full
-z-50
`;

const InfoCard = tw.div`
  bg-white
  text-black
  font-normal
  mx-5
  sm:mx-auto
  py-5
  drop-shadow-2xl
  rounded-md
  max-w-xl
  -mt-28
  border-2
  flex
  justify-center
  
`;
const InfoContents = tw.div`
flex
flex-col
`;
const InfoItem = tw.div`
  py-1
`;
const InfoTitle = tw.div`
  w-40
  inline-block
`;
const InfoContent = tw.div`
inline-block
`;
const Footer = tw.footer`
  text-slate-100
  w-full
  py-5
  bg-[#0F2235]
  font-semibold 
`;

interface IProps {
  children: React.ReactNode;
}
export default function Layout({ children }: IProps) {
  const [isSideMenuShow, setIsSideMenuShow] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > mediaSize.tablet) {
      setIsSideMenuShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => setIsSideMenuShow(false));
    return () => {
      Router.events.off('routeChangeComplete', () => setIsSideMenuShow(false));
    };
  }, []);

  return (
    <>
      <NavBar
        isSideMenuShow={isSideMenuShow}
        setIsSideMenuShow={setIsSideMenuShow}
        menuItems={[...menus]}
      />
      <ContentLayout $isSideMenuShow={isSideMenuShow}>
        <>{children}</>
        <Footer>
          <InfoCard>
            <InfoContents>
              <InfoItem>
                <InfoTitle>전화번호</InfoTitle>
                <InfoContent>010-2315-2572</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>주소</InfoTitle>
                <InfoContent>북구 학사로 17번길 19 중도빌딩 4층</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>문의처</InfoTitle>
                <InfoContent>rlaworlawo321@naver.com</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>대표</InfoTitle>
                <InfoContent>송병근</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Copyright 2021.</InfoTitle>
                <InfoContent>(주)크리플레이</InfoContent>
              </InfoItem>
            </InfoContents>
          </InfoCard>
          <div className='py-10 text-center'>부산코딩스쿨</div>
        </Footer>
      </ContentLayout>
    </>
  );
}
