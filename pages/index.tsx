import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import BodyItem from '@components/BodyItem';

const TopSection = tw.div`
  pt-60
  px-10
  pb-60
  bg-main-background
  bg-cover
  after:content-[''] inset-0 bg-black
  text-right
`;

const TopContentContainer = tw.div`
  flex
  lg:justify-between
  lg:items-center
  flex-wrap
  max-w-screen-lg
  mx-auto
`;

const HeadSection = tw.section`
  w-full
  h-100
`;
const ImageSection = tw.section`
  hidden
  lg:block
`;

const TitleContainer = tw.div``;
const TopSmallTitle = tw.div`
text-white
  font-bold
  pb-4
  h1{
    text-lg
  }
`;
const BigTitle = tw.div`
text-white
  text-4xl
  font-bold
  break-words
`;
const SubText = tw.div`
  pt-7
  text-white
  font-medium
  text-xl
  pb-7
`;
const ButotnContainer = tw.div``;
const ContactBtn = tw.button`
  bg-[#FF3E53]
  w-full
  rounded-md
  py-3
  mb-10
  text-white
  font-bold
  cursor-pointer
hover:bg-red-500
  transition-all
  duration-300
  active:bg-emerald-900
`;

const ImageContainer = tw.div`
  relative
  `;

const BodySection = tw.section`
  mt-20
  space-y-24
`;

const MessageSection = tw.section`
  bg-red-50
  mt-20
  flex
  justify-between
  flex-wrap
`;

const MessageContentContainer = tw.div`
  max-w-7xl
  pl-10
  lg:pl-40
  pt-10
  pb-10

`;

const MessageTitle = tw.h1`
  font-normal
  text-2xl
  mb-7
`;

const MessageSubtitle = tw.div`
  text-slate-500
  font-normal
`;

const MessageSubtitleHead = tw.h3`
  pb-1 font-medium text-slate-900`;
const MessaegSubtitleContent = tw.p`
`;

const MessageImgContainer = tw.div`
  w-full
  md:w-96
  h-60
  relative
`;

const Home: NextPage = () => {
  return (
    <>
      <TopSection>
        <TopContentContainer>
          <HeadSection>
            <TitleContainer>
              <TopSmallTitle>
                <h3>
                  카이스트, 부산대 공학도들이 만들어내는
                  <br />
                  신개념 코딩 학습법!
                </h3>
              </TopSmallTitle>
              <BigTitle>
                <h1>우리 아이를 코딩 키드로 만들어 드리겠습니다.</h1>
              </BigTitle>
              <SubText>
                - 가장 빠른 시간 내에 코딩 영재로 되는 길로 안내해드립니다. -
                <br />
                불만족스럽다면, 100% 환불 도와드립니다.
              </SubText>
              {/* <ButotnContainer>
                <ContactBtn>신청하기</ContactBtn>
              </ButotnContainer> */}
            </TitleContainer>
          </HeadSection>
        </TopContentContainer>
      </TopSection>
      {/* <BodySection>
        <BodyItem
          imageSrc={'/single.jpg'}
          imageAlt={'web_consulting'}
          titleDescription={'현재 솔로이신가요?'}
          subtitleDescription={'변화를 시도해보세요'}
          smallDescriptionTitle={'그냥 신청만 해주세요.'}
          smallSubDescriptionContents={[
            '매일 마주하는 일상의 틀을 벗어나 새로운 사람을 만날 수 있게 해드릴게요.',
            '새로운 연인을 만날 설레임에 두근거리지 않나요?',
          ]}
        />
        <BodyItem
          imageSrc={'/wait.jpg'}
          imageAlt={'what are you waiting for'}
          titleDescription={'무엇을 기다리고 계신가요?'}
          subtitleDescription={'먼저 움직이세요!'}
          smallDescriptionTitle={'저희가 도와드릴게요.'}
          smallSubDescriptionContents={[
            '마음이 가는대로, 심장이 시키는대로 하세요',
            '그리 어려울건 없습니다.',
            '단, 가벼운 마음은 안됩니다.',
          ]}
        />
        <BodyItem
          imageSrc={'/marry.jpg'}
          imageAlt={'pls only seriously people'}
          titleDescription={'결혼을 간절히 원하시는 분만 지원해주세요!'}
          subtitleDescription={'정말 간절한 분들에게만 기회를 드리고 싶습니다.'}
          smallDescriptionTitle={'가벼운 마음으로 오는 곳이 아닙니다.'}
          smallSubDescriptionContents={[
            '진정한 사랑을 찾기 위한 사람들을 위한 시간입니다.',
            '어설픈 마음은 정중히 거절하겠습니다.',
          ]}
        />
      </BodySection>
      <MessageSection>
        <MessageContentContainer>
          <MessageTitle>솔로가 커플이 되는 곳, 솔로기장</MessageTitle>
          <MessageSubtitle>
            <MessageSubtitleHead>
              솔로기장, 그곳에서 만들어지는 무궁무진한 이야기
            </MessageSubtitleHead>
            <MessaegSubtitleContent>
              생각은 누구나 할 수 있습니다.
              <br />
              하지만 행동은 아무나 할 수 없습니다.
              <br />
              지금 바로 여러분의 사랑을 찾아보세요.
            </MessaegSubtitleContent>
          </MessageSubtitle>
        </MessageContentContainer>
        <MessageImgContainer>
          <Image
            src='/couple.jpg'
            alt='move yourself'
            layout='fill'
            objectFit='cover'
            // width={800}
            // height={600}
          />
        </MessageImgContainer>
      </MessageSection> */}
    </>
  );
};

export default Home;