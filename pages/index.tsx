import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import BodyItem from '@components/BodyItem';
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
  RecordingTitleContainer,
  RecordingTitle,
  RecordingSubtitle,
  RecordingListContainer,
  RecordingList,
  CeoContainer,
  CeoImageContainer,
  CeoImageTitle,
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
  IntroducingSystemContainer,
  IntroducingSystemTitleContainer,
  IntroducingSystemTitle,
  IntroducingSystemItem,
  IntroducingSystemImgContainer,
  IntroducingSystemItemTitleContainer,
  IntroducingSystemItemTitle,
  IntroducingSystemItemDescriptionContainer,
  IntroducingSystemItemDescription,
  CourseWorkSection,
  CourseWorkTitleContainer,
  CourseTitle,
  CourseContentContainer,
  CourseItem,
  CourseItemImgContainer,
  CourseItemTitleContainer,
  CourseItemTitle,
  CourseItemContentContainer,
  CourseItemCotent,
  GallerySection,
  GalleryTitleContainer,
  GalleryTitle,
  GalleryContentContainer,
  GalleryContents,
  GalleyItem,
} from '@components/styled';
import Link from 'next/link';

const Home: NextPage = () => {
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
                <Link href='http://pf.kakao.com/_ixikWb'>
                  <a target='_blank'>
                    <ContactBtn>무료 상담 신청</ContactBtn>
                  </a>
                </Link>
                <Link href='https://blog.naver.com/rlaworlawo321'>
                  <a target='_blank'>
                    <ContactBtn>코딩 키즈 블로그</ContactBtn>
                  </a>
                </Link>
              </ButtonContainer>
            </TitleContainer>
          </HeadSection>
        </TopContentContainer>
      </TopSection>
      <RecordingSection>
        {/* <RecordingTitleContainer>
          <RecordingTitle>합격 및 수상</RecordingTitle>
          <RecordingSubtitle>
            영재원 학생들의 합격 및 수상을 축하드립니다.
          </RecordingSubtitle>
        </RecordingTitleContainer>
        <RecordingListContainer>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
          <RecordingList>2018 정보올림피아드 전국대회 은상 - O환</RecordingList>
        </RecordingListContainer> */}
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
                <li>- 코딩키즈 대표이사</li>
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
            왜 <span className='text-4xl text-blue-400'>코딩키즈</span>여야
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
                  코딩키즈는 가장 선진적인 교육을 추구합니다.
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
      <CourseWorkSection id='coursework'>
        <CourseWorkTitleContainer>
          <CourseTitle>코스웍</CourseTitle>
        </CourseWorkTitleContainer>
        <CourseItem className='border-t-sky-500'>
          <CourseItemTitleContainer>
            <CourseItemImgContainer>
              <Image
                src='/coding_kids_logo.png'
                width={150}
                height={160}
                objectFit={'contain'}
              />
            </CourseItemImgContainer>
            <CourseItemTitle className='text-sky-500'>
              초급 코딩(3개월) - 월 10만원
            </CourseItemTitle>
          </CourseItemTitleContainer>
          <CourseItemContentContainer>
            <CourseItemCotent>
              온라인 2시간+오프라인 1시간
              <br />
              코딩키즈가 되기위한 기본과정.
              <br />
              정보올림피아드 기초 과정
            </CourseItemCotent>
          </CourseItemContentContainer>
        </CourseItem>
        <CourseItem className='border-t-green-500'>
          <CourseItemTitleContainer>
            <CourseItemImgContainer>
              <Image
                src='/coding_kids_logo.png'
                width={150}
                height={160}
                objectFit={'contain'}
              />
            </CourseItemImgContainer>
            <CourseItemTitle className='text-green-500'>
              중급 코딩(6개월) - 월 25만원
            </CourseItemTitle>
          </CourseItemTitleContainer>
          <CourseItemContentContainer>
            <CourseItemCotent>
              온라인 1시간 + 오프라인 2시간
              <br />
              자료구조 및 알고리즘 기초
              <br />
              정보올림피아드 실력키우기 과정
            </CourseItemCotent>
          </CourseItemContentContainer>
        </CourseItem>
        <CourseItem className='border-t-orange-400'>
          <CourseItemTitleContainer>
            <CourseItemImgContainer>
              <Image
                src='/coding_kids_logo.png'
                width={150}
                height={160}
                objectFit={'contain'}
              />
            </CourseItemImgContainer>
            <CourseItemTitle className='text-orange-400'>
              고급 코딩(12개월) - 월 35만원
            </CourseItemTitle>
          </CourseItemTitleContainer>
          <CourseItemContentContainer>
            <CourseItemCotent>
              온라인 2 + 오프라인 2시간
              <br />
              코딩영재로 완성되어 가는 과정
              <br />
              자료구조 및 알고리즘 심화
              <br />
              정보올림피아드 기출문제반
            </CourseItemCotent>
          </CourseItemContentContainer>
        </CourseItem>
        <CourseItem className='border-t-orange-400'>
          <CourseItemTitleContainer>
            <CourseItemImgContainer>
              <Image
                src='/coding_kids_logo.png'
                width={150}
                height={160}
                objectFit={'contain'}
              />
            </CourseItemImgContainer>
            <CourseItemTitle className='text-orange-400'>
              미래형반(6개월) - 월 35만원
            </CourseItemTitle>
          </CourseItemTitleContainer>
          <CourseItemContentContainer>
            <CourseItemCotent>
              온라인 2 + 오프라인 2시간
              <br />
              초급, 중급을 듣고 난 수강생
              <br />
              프로젝트 진행 - 사고형
            </CourseItemCotent>
          </CourseItemContentContainer>
        </CourseItem>
      </CourseWorkSection>
      <GallerySection id='gallery'>
        <GalleryTitleContainer>
          <GalleryTitle>코딩키즈 갤러리</GalleryTitle>
        </GalleryTitleContainer>
        <GalleryContentContainer>
          <GalleryContents>
            <GalleyItem>
              <Image
                alt='줌 강의 사진'
                src='/gallery1.png'
                width={800}
                height={600}
                objectFit={'contain'}
              />
            </GalleyItem>
            <GalleyItem>
              <Image
                alt='현장 강의 사진'
                src='/teaching.jpeg'
                width={1000}
                height={700}
                objectFit={'contain'}
              />
            </GalleyItem>
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
