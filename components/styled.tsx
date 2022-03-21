import tw from 'tailwind-styled-components';

export const TopSection = tw.div`
  pt-40
  px-10
  pb-40
  bg-main-background
  bg-cover
  after:content-[''] inset-0 bg-black
  text-right
`;

export const TopContentContainer = tw.div`
  flex
  lg:justify-between
  lg:items-center
  flex-wrap
  max-w-screen-lg
  mx-auto
`;

export const HeadSection = tw.section`
  w-full
  h-3/5
`;

export const TitleContainer = tw.div``;

export const BigTitle = tw.div`
text-white
  text-3xl
  font-bold
  break-words
  text-center
`;
export const SubText = tw.div`
  pt-12
  text-white
  font-normal
  text-xl
  pb-7
  text-center
`;

export const ButtonContainer = tw.div`
pt-3
text-center`;
export const ContactBtn = tw.button`
  bg-slate-50
  py-3
  text-sm
  font-bold
  rounded-md
  mx-2
  my-2
  w-36
`;

export const RecordingSection = tw.section`
  pt-9
  pb-20
`;
export const RecordingTitleContainer = tw.div``;
export const RecordingTitle = tw.h1`
  text-yellow-300
  font-bold
  text-xl
  text-center
`;
export const RecordingSubtitle = tw.h2`
  text-center
  text-xs
  text-slate-50
`;
export const RecordingListContainer = tw.ul`
  mt-16
  text-center
  text-slate-50
  text-sm
  font-bold
  sm:text-md
`;
export const RecordingList = tw.li`
  py-1.5
`;

export const CeoContainer = tw.div`
  mt-10
  relative
`;

export const CeoImageContainer = tw.div`
text-center
  -z-10
`;
export const CeoImageTitle = tw.h3`
  text-orange-400
  text-shadow-2xl
  text-4xl
  font-bold
  text-right
  relative
  z-500
  -top-28
  pr-10
`;

export const SeoMessageContainer = tw.div`
  mt-10
`;
export const SeoMessageWrapper = tw.div``;
export const SeoMessage = tw.p`
text-center
font-bold
text-3xl
leading-10
odd:mb-5
`;

export const IntroducingCeo = tw.div`
ml-4
mr-4
grid
mt-16
`;

export const IntroducingCeoItem = tw.div`
bg-orange-400
drop-shadow-2xl
w-4/5
max-w-xl
mx-auto

`;
export const IntroducingCeoTitle = tw.div`
  text-slate-50
  text-2xl
  text-center
  py-2
`;
export const IntroducingCeoContent = tw.div`
  bg-slate-50
  mr-1
  ml-1
  text-sm
  px-2
  py-2
  mb-1
  m-h-30
  text-center
`;

export const WhySection = tw.section`
bg-sky-400
`;
export const WhyTitleContainer = tw.div`
  bg-[#010336]
  py-14
`;
export const WhyTitle = tw.h3`
  text-white
  text-3xl
  font-bold
  text-center
`;
export const AnswerContainer = tw.div`
  text-slate-50
  px-8
  pt-16
`;
export const AnswerItem = tw.div`
  pb-10
  md:flex
  md:even:flex-row-reverse
  md:even:space-x-reverse
  md:space-x-5
  justify-center
  max-w-6xl
  mx-auto
`;
export const AnswerTitleContainer = tw.div``;
export const AnswerTitle = tw.h4`
  text-2xl
  font-bold
  pb-2
`;
export const AnswerImageContainer = tw.div``;
export const AnswerContentContainer = tw.div`
`;
export const AnswerContent = tw.p``;
export const IntroducingSystemContainer = tw.div`
  px-8
`;
export const IntroducingSystemTitleContainer = tw.div``;
export const IntroducingSystemTitle = tw.h3`
text-3xl
text-white
font-bold
text-center
py-8
`;
export const IntroducingSystemItem = tw.div`
  pb-10
  md:flex
  md:odd:flex-row-reverse
  md:space-x-5
  md:odd:space-x-reverse
  justify-center
`;
export const IntroducingSystemImgContainer = tw.div`
  mb-2
`;
export const IntroducingSystemItemTitleContainer = tw.div``;
export const IntroducingSystemItemTitle = tw.h4`
  text-white
  text-2xl
  font-bold
  pb-2
`;
export const IntroducingSystemItemDescriptionContainer = tw.div``;
export const IntroducingSystemItemDescription = tw.p`
  text-white
`;

export const CourseWorkSection = tw.section`
bg-[#5853E6]
pb-10
`;

export const CourseWorkTitleContainer = tw.div`
  py-12
`;

export const CourseTitle = tw.h3`
  text-white
  text-3xl
  font-bold
  text-center
`;
export const CourseContentContainer = tw.div`
  text-slate-50
  px-8
  pt-10
`;
export const CourseItem = tw.div`
  pb-10
  bg-white
  mx-7
  px-10
  border-t-4
  mb-5
  max-w-xl
  md:mx-auto

`;
export const CourseItemImgContainer = tw.div`
  mt-5
  text-center
`;
export const CourseItemTitleContainer = tw.div`
  mb-6
`;
export const CourseItemTitle = tw.h3`
  text-center
  text-xl
  font-bold
`;
export const CourseItemContentContainer = tw.div``;
export const CourseItemCotent = tw.p`
  text-center
  text-lg
  text-zinc-500
`;

export const GallerySection = tw.section`
  pb-40
`;
export const GalleryTitleContainer = tw.div`
  py-12
`;
export const GalleryTitle = tw.h3`
  text-3xl
  font-bold
  text-center
`;
export const GalleryContentContainer = tw.div`
  text-slate-50
  px-8
  pt-1
`;

export const GalleryContents = tw.div`
  grid
  grid-cols-2
  gap-2
`;

export const GalleyItem = tw.div``;
