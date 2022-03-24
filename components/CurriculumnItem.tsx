import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Dispatch, SetStateAction, useState } from 'react';

const CurriculumItem = tw.div`
  xl:relative
`;
const CurriculumItemTitleContainer = styled.div<{ isShow: boolean }>`
  ${(props) => (props.isShow ? 'color:red;' : 'color:black;')}
`;
const CurriculumItemTitlePeriodColumn = tw.div`
  basis-2/12
  xl:text-center
  xl:text-md
  xl:basis-1/12
`;
const CurriculumItemTitleMainColumn = tw.div`
xl:text-lg
basis-9/12
font-bold
`;
const CurriculumItemTitleArrowColumn = tw.div`
basis-1/12
flex
justify-center
items-center
xl:hidden
`;
const CurriculumnTitleBorder = tw.div`
border-b-2
`;

const CirriculumnItemCotentTitle = tw.div`
  pb-5
  font-bold
  xl:text-xl
  xl:text-red-500
  `;

const CurriculumnItemContent = tw.div`
  text-xs
  font-light
  pb-10
  xl:bg-white
  xl:absolute
  xl:right-0
  xl:top-0
  xl:p-16
  xl:rounded-lg
  xl:drop-shadow-xl
  xl:z-40

`;
const CurriculumnItemContentUl = tw.ul`
  list-disc
  px-3
  leading-6
  xl:text-lg
  xl:leading-8
`;
const CurriculumnItemContentLi = tw.li``;

interface IProps {
  isLast?: boolean;
  title: string;
  week: string;
  contentTitle: string;
  contentLists: string[];
  index: number;
  nowIndex: number;
  setNowIndex: Dispatch<SetStateAction<number>>;
}

export default function CurriculumnItem({
  isLast,
  title,
  week,
  contentTitle,
  contentLists,
  index,
  nowIndex,
  setNowIndex,
}: IProps) {
  return (
    <CurriculumItem>
      <CurriculumItemTitleContainer
        onClick={() => {
          if (nowIndex === index) {
            setNowIndex(0);
          } else {
            setNowIndex(index);
          }
        }}
        isShow={nowIndex === index}
        className={'flex cursor-pointer py-4 text-sm xl:flex xl:items-center'}
      >
        <CurriculumItemTitlePeriodColumn>
          {week}주차
        </CurriculumItemTitlePeriodColumn>
        <CurriculumItemTitleMainColumn>{title}</CurriculumItemTitleMainColumn>
        <CurriculumItemTitleArrowColumn>
          {nowIndex === index ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='-12 -12 48 48'
            >
              <path
                fill='red'
                d='M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='-12 -12 48 48'
            >
              <path
                fill='#aaa'
                d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z'
              />
            </svg>
          )}
        </CurriculumItemTitleArrowColumn>
      </CurriculumItemTitleContainer>
      {!(nowIndex === index) && !isLast && <CurriculumnTitleBorder />}
      {nowIndex === index && (
        <CurriculumnItemContent>
          <CirriculumnItemCotentTitle>
            {contentTitle}
          </CirriculumnItemCotentTitle>
          <CurriculumnItemContentUl>
            {contentLists.map((content, index) => (
              <CurriculumnItemContentLi key={index}>
                {content}
              </CurriculumnItemContentLi>
            ))}
          </CurriculumnItemContentUl>
        </CurriculumnItemContent>
      )}
    </CurriculumItem>
  );
}
