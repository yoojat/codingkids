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
  
`;
const InfoContents = tw.div`
`;
const InfoItem = tw.div`
  flex
  justify-center
  py-1
`;
const InfoTitle = tw.div`
w-20`;
const InfoContent = tw.div``;

const Footer = tw.footer`
  text-slate-100
  w-full
  py-5
  bg-[#0F2235]
  text-center
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
                <InfoContent>동래구 연안로41 서정빌딩 6층</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>문의처</InfoTitle>
                <InfoContent>rlaworlawo321@naver.com</InfoContent>
              </InfoItem>
            </InfoContents>
          </InfoCard>
          <div className='py-10'>코딩키즈</div>
        </Footer>
      </ContentLayout>
    </>
  );
}
