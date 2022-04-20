import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import {
  BigTitle,
  ButtonContainer,
  ContactBtn,
  HeadSection,
  SubText,
  TitleContainer,
  TopContentContainer,
  TopSection,
  RecordingSection,
  CeoContainer,
  CeoImageContainer,
  SeoMessageContainer,
  SeoMessageWrapper,
  SeoMessage,
  IntroducingCeo,
  IntroducingCeoItem,
  IntroducingCeoTitle,
  IntroducingCeoContent,
  WhySection,
  WhyTitleContainer,
  WhyTitle,
  AnswerContainer,
  AnswerItem,
  AnswerTitleContainer,
  AnswerTitle,
  AnswerImageContainer,
  AnswerContentContainer,
  AnswerContent,
  GallerySection,
  GalleryTitleContainer,
  GalleryTitle,
  GalleryContentContainer,
  GalleryContents,
  GalleyItem,
  SystemIntroduceContainer,
  SystemIntroduceItem,
  SystemIntroduceNumberTag,
  SystemIntroduceTitle,
  SystemIntroduceTitleSpan,
  SystemIntroduceContent,
  CurriculumSection,
  CurriculumnTitle,
  CurriculumContainer,
} from '@components/styled';
import Link from 'next/link';
import { useState } from 'react';
import CurriculumnItem from '@components/CurriculumnItem';
import { CurriculumnContents } from '@libs/options';
import { galleryImgs } from '@libs/gallery';

const Home: NextPage = () => {
  const [nowIndex, setNowIndex] = useState(0);
  return (
    <>
      <TopSection>
        <TopContentContainer>
          <HeadSection>
            <TitleContainer>
              <BigTitle>
                <h1>우리 아이를 코딩 영재로 만들어 드리겠습니다.</h1>
              </BigTitle>
              <SubText>
                카이스트, 부산대 출신들이 만들어낸 NEW 코딩 학습법! <br />
                <br />
                불만족스럽다면, 100% 환불 도와드립니다.
              </SubText>
              <ButtonContainer>
                <Link href='https://pf.kakao.com/_KZGNb'>
                  <a target='_blank'>
                    <ContactBtn>무료 상담 신청</ContactBtn>
                  </a>
                </Link>
                <Link href='https://blog.naver.com/rlaworlawo321'>
                  <a target='_blank'>
                    <ContactBtn>부산코딩스쿨 블로그</ContactBtn>
                  </a>
                </Link>
              </ButtonContainer>
            </TitleContainer>
          </HeadSection>
          <SystemIntroduceContainer>
            <SystemIntroduceItem>
              <SystemIntroduceNumberTag>POINT 01</SystemIntroduceNumberTag>

              <SystemIntroduceTitle>
                <SystemIntroduceTitleSpan>플립러닝</SystemIntroduceTitleSpan>
                <br />
                교육 시스템
              </SystemIntroduceTitle>
              <SystemIntroduceContent>
                학생들의 집중도UP!
                <br />
                자기주도학습 효과
                <br />
                최대화
              </SystemIntroduceContent>
            </SystemIntroduceItem>
            <SystemIntroduceItem>
              <SystemIntroduceNumberTag>POINT 01</SystemIntroduceNumberTag>

              <SystemIntroduceTitle>
                <SystemIntroduceTitleSpan>카이스트</SystemIntroduceTitleSpan>
                연구진 교육 시스템
              </SystemIntroduceTitle>
              <SystemIntroduceContent>
                카이스트, 부산대 출신
                <br />
                연구진들이 직접 개발한
                <br />
                교육시스템
              </SystemIntroduceContent>
            </SystemIntroduceItem>
            <SystemIntroduceItem>
              <SystemIntroduceNumberTag>POINT 02</SystemIntroduceNumberTag>

              <SystemIntroduceTitle>
                학부모 <br />
                <SystemIntroduceTitleSpan>피드백</SystemIntroduceTitleSpan>
                시스템
              </SystemIntroduceTitle>
              <SystemIntroduceContent>
                학습 후 즉각적인
                <br />
                학습 성취도에 따른
                <br />
                피드백 제공
              </SystemIntroduceContent>
            </SystemIntroduceItem>
          </SystemIntroduceContainer>
        </TopContentContainer>
      </TopSection>
      <RecordingSection>
        <CeoContainer>
          <CeoImageContainer>
            <Image
              src='/teaching.jpeg'
              width={1300}
              height={900}
              alt='ceo사진'
              objectFit='contain'
            />
          </CeoImageContainer>
        </CeoContainer>
        <SeoMessageContainer>
          <SeoMessageWrapper>
            <SeoMessage>
              "주니어코딩교육부터
              <br />
              바뀌어야 합니다."
            </SeoMessage>
          </SeoMessageWrapper>
        </SeoMessageContainer>
        <IntroducingCeo>
          <IntroducingCeoItem>
            <IntroducingCeoTitle>원장 약력</IntroducingCeoTitle>
            <IntroducingCeoContent>
              <ul>
                <li>- 부산대학교 공과대학 학사</li>
                <li>- 부산코딩스쿨 대표이사</li>
                <li>- (주)크리플레이 CTO</li>
                <li>- 블루닷라운지 CTO</li>
                <li>- 무인공간통합센터 CTO</li>
                <li>- ENSTUDY 좌석 시스템 개발</li>
                <li>- 송스빌 방 대여 SYS 개발</li>
                <li>- 독서실 키오스크 결제 시스템 개발</li>
                <li>- 스터디카페 좌석 결제 특허 출원 준비</li>
                <li>- 온라인 주니어코딩스쿨 개설</li>
                <li>- 해양대학교 미래전략 코딩 강의 출강</li>
                <li>- 부산초중고 코딩 강의 출강</li>
              </ul>
            </IntroducingCeoContent>
          </IntroducingCeoItem>
        </IntroducingCeo>
      </RecordingSection>
      <WhySection id='introduce'>
        <WhyTitleContainer>
          <WhyTitle>
            왜 <span className='text-4xl text-blue-400'>부산코딩스쿨</span>여야
            할까요?
          </WhyTitle>
        </WhyTitleContainer>
        <AnswerContainer>
          <AnswerItem>
            <div>
              <AnswerImageContainer>
                <Image
                  src='/coding_kid1.jpeg'
                  width={700}
                  height={500}
                  objectFit={'contain'}
                  alt={'왜 코딩을 학습해야할까? 1번답'}
                />
              </AnswerImageContainer>
            </div>
            <div className='max-w-xs sm:flex sm:flex-col sm:justify-center'>
              <AnswerTitleContainer>
                <AnswerTitle>코딩을 배운다는 것은,</AnswerTitle>
              </AnswerTitleContainer>
              <AnswerContentContainer>
                <AnswerContent>
                  컴퓨터를 배운다는 뜻이 아닙니다. 이것은 단순 컴퓨터 언어를
                  활용하여, 알고리즘 교육방식에서 창의력, 문제해결, 논리적 사고,
                  논술 그리고 발표와 같은 능력까지도 함께 키워나간 다는
                  의미입니다.
                </AnswerContent>
              </AnswerContentContainer>
            </div>
          </AnswerItem>
          <AnswerItem>
            <div>
              <AnswerImageContainer>
                <Image
                  src='/coding_kid2.jpeg'
                  width={700}
                  height={500}
                  objectFit={'contain'}
                  alt={'왜 코딩을 학습해야할까? 1번답'}
                />
              </AnswerImageContainer>
            </div>
            <div className='max-w-xs sm:flex sm:flex-col sm:justify-center'>
              <AnswerTitleContainer>
                <AnswerTitle>
                  부산코딩스쿨은 가장 선진적인 교육을 추구합니다.
                </AnswerTitle>
              </AnswerTitleContainer>
              <AnswerContentContainer>
                <AnswerContent>
                  미국식 창의력 교육과 한국식 문제해결 교육을 결합하여, 새로운
                  형태의 코딩 교육을 만들어 나갑니다.
                </AnswerContent>
              </AnswerContentContainer>
            </div>
          </AnswerItem>
          <AnswerItem>
            <div>
              <AnswerImageContainer>
                <Image
                  src='/coding_kid3.jpeg'
                  width={700}
                  height={500}
                  objectFit={'contain'}
                  alt={'왜 코딩을 학습해야할까? 1번답'}
                />
              </AnswerImageContainer>
            </div>
            <div className='max-w-xs sm:flex sm:flex-col sm:justify-center'>
              <AnswerTitleContainer>
                <AnswerTitle>믿을 수 있는 코딩 교육</AnswerTitle>
              </AnswerTitleContainer>
              <AnswerContentContainer>
                <AnswerContent>
                  카이스트, 부산대 출신 강사진의 교육에 대한 열정과 자신감을
                  직접 경험해 보시기 바랍니다.
                </AnswerContent>
              </AnswerContentContainer>
            </div>
          </AnswerItem>
        </AnswerContainer>
      </WhySection>

      <CurriculumSection id='curriculum'>
        <CurriculumnTitle>초급 커리큘럼</CurriculumnTitle>

        <CurriculumContainer>
          {CurriculumnContents.junior.map(
            ({ title, week, contentTitle, contentLists, isLast, index }) => (
              <CurriculumnItem
                key={index}
                nowIndex={nowIndex}
                setNowIndex={setNowIndex}
                index={index + 1}
                title={title}
                week={week}
                contentTitle={contentTitle}
                contentLists={contentLists}
                isLast={isLast}
              />
            )
          )}
        </CurriculumContainer>
        <CurriculumnTitle>중급 커리큘럼</CurriculumnTitle>

        <CurriculumContainer>
          {CurriculumnContents.intermediate.map(
            ({ title, week, contentTitle, contentLists, isLast, index }) => (
              <CurriculumnItem
                key={index}
                nowIndex={nowIndex}
                setNowIndex={setNowIndex}
                index={index + 1}
                title={title}
                week={week}
                contentTitle={contentTitle}
                contentLists={contentLists}
                isLast={isLast}
              />
            )
          )}
        </CurriculumContainer>
        <CurriculumnTitle>웹 제작 과정</CurriculumnTitle>
        <CurriculumContainer>
          {CurriculumnContents.web.map(
            ({ title, week, contentTitle, contentLists, isLast, index }) => (
              <CurriculumnItem
                key={index}
                nowIndex={nowIndex}
                setNowIndex={setNowIndex}
                index={index + 1}
                title={title}
                week={week}
                contentTitle={contentTitle}
                contentLists={contentLists}
                isLast={isLast}
              />
            )
          )}
        </CurriculumContainer>
        <CurriculumnTitle>웹 인터랙티브 과정</CurriculumnTitle>
        <CurriculumContainer>
          {CurriculumnContents.interactive.map(
            ({ title, week, contentTitle, contentLists, isLast, index }) => (
              <CurriculumnItem
                key={index}
                nowIndex={nowIndex}
                setNowIndex={setNowIndex}
                index={index + 1}
                title={title}
                week={week}
                contentTitle={contentTitle}
                contentLists={contentLists}
                isLast={isLast}
              />
            )
          )}
        </CurriculumContainer>
      </CurriculumSection>

      <GallerySection id='gallery'>
        <GalleryTitleContainer>
          <GalleryTitle>부산코딩스쿨 갤러리</GalleryTitle>
        </GalleryTitleContainer>
        <GalleryContentContainer>
          <GalleryContents>
            {galleryImgs.map((img) => (
              <GalleyItem key={img}>
                <Image
                  alt={img}
                  src={img}
                  width={1000}
                  height={700}
                  objectFit={'contain'}
                />
              </GalleyItem>
            ))}
          </GalleryContents>
        </GalleryContentContainer>
      </GallerySection>
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
};

export default Home;
