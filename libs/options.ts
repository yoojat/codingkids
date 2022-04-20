export const bgColor = 'bg-violet-500';
export const logo = '/busan_coding_school.png';
export const title = '부산코딩스쿨';
export const backgroundImage = '/coding_kids_background.jpg';

type Menu = {
  name: string;
  path: string;
};
export const menus = [
  { name: '학원소개', path: '#introduce' },
  { name: '커리큘럼', path: '#curriculum' },
  { name: '갤러리', path: '#gallery' },
];

export const CurriculumnContents = {
  junior: [
    {
      title: '우리 주변의 소프트웨어',
      week: '0',
      contentTitle: 'Chapter 1 | 우리 주변의 소프트웨어',
      contentLists: [
        '소프트웨어가 무엇인지 말할 수 있게 됩니다.',
        '자신이 좋아하는 소프트웨어를 소개할 수 있게 됩니다.',
        '우리 생활 주변의 소프트웨어를 말할 수 있게 됩니다. ',
      ],
      index: 1,
    },
    {
      title: '엔트리봇 카드게임으로 배우는 소프트웨어의 원리',
      week: '1',
      contentTitle:
        'Chapter 2 | 엔트리봇 카드게임으로 배우는 소프트웨어의 원리',
      contentLists: [
        '엔트리봇 카드게임을 통해 컴퓨터처럼 명령을 수행할 수 있게 됩니다.',
        '프로그래밍의 원리인 순차, 반복, 선택에 따라 명령을 수행할 수 있게 됩니다.',
      ],
      index: 2,
    },
    {
      title: '엔트리봇 보드게임으로 배우는 소프트웨어의 원리',
      week: '2',
      contentTitle:
        'Chapter 3 | 엔트리봇 보드게임으로 배우는 소프트웨어의 원리',
      contentLists: [
        '엔트리봇 보드게임을 통해 카드 명령어로 엔트리봇을 움직일 수 있게 됩니다.',
        '프로그래밍의 원리인 순차, 반복, 함수를 활용하여 효율적인 프로그램을 만들 수 있게 됩니다.',
      ],
      index: 3,
    },
    {
      title: '학교가기 미션으로 배우는 블록 프로그래밍',
      week: '3',
      contentTitle: 'Chapter 4 | 학교가기 미션으로 배우는 블록 프로그래밍',
      contentLists: [
        '블록 명령어를 순서대로 사용하여 학교가기 미션을 해결할 수 있게 됩니다.',
        '‘~번 반복하기’ 명령을 통해 미션을 효율적으로 해결할 수 있게 됩니다.',
      ],
      index: 4,
    },
    {
      title: '로봇공장 미션으로 배우는 블록 프로그래밍',
      week: '4',
      contentTitle: 'Chapter 5 | 로봇공장 미션으로 배우는 블록 프로그래밍',
      contentLists: [
        '블록 명령어를 순서대로 사용하여 로봇공장 미션을 해결할 수 있게 됩니다.',
        '‘~번 반복하기’ 명령을 통해 미션을 효율적으로 해결할 수 있게 됩니다.',
      ],
      index: 5,
    },
    {
      title: '안녕, 엔트리!',
      week: '5',
      contentTitle: 'Chapter 6 | 안녕, 엔트리!',
      contentLists: [
        '엔트리에 접속하고 회원 가입할 수 있게 됩니다.',
        '엔트리 ‘만들기’ 화면 구성과 주요 용어를 알 수 있게 됩니다.',
        '오브젝트가 말풍선으로 자기소개를 하도록 만들 수 있게 됩니다.',
      ],
      index: 6,
    },
    {
      title: '멍멍이와 야옹이의 대화',
      week: '6',
      contentTitle: 'Chapter 7 | 멍멍이와 야옹이의 대화',
      contentLists: [
        '각각의 오브젝트에 조립한 블록이 각각 동시에 실행됨을 알고 ‘기다리기’ 블록을 이용하여 대화를  구현할 수 있게 됩니다.',
        '시간의 순서를 고려하여 여러 오브젝트의 대화 애니메이션을 만들 수 있게 됩니다.',
      ],
      index: 7,
    },
    {
      title: '전자 피아노',
      week: '7',
      contentTitle: 'Chapter 8 | 전자 피아노',
      contentLists: [
        '각각의 오브젝트에 소리를 추가하여 재생할 수 있게 됩니다.',
        '키보드의 키를 눌러 피아노 연주를 할 수 있는 작품을 만들 수 있게 됩니다.',
      ],
      index: 8,
    },
    {
      title: '방향키로 강아지 산책시키기',
      week: '8',
      contentTitle: 'Chapter 9 | 방향키로 강아지 산책시키기',
      contentLists: [
        '키보드 방향키로 오브젝트를 움직이는 코드를 만들 수 있게 됩니다.',
        '[모양]탭의 여러가지 모양을 활용하여 강아지가 걷는 모습을 표현할 수 있게 됩니다.',
      ],
      index: 9,
    },
    {
      title: '스탬프 아트',
      week: '9',
      contentTitle: 'Chapter 10 | 스탬프 아트',
      contentLists: [
        '마우스로 오브젝트를 움직일 수 있게 됩니다.',
        '오브젝트에 여러 가지 모양을 추가하여 활용할 수 있게 됩니다.',
      ],
      index: 10,
    },
    {
      title: '나만의 작품을 만들어요(1)',
      week: '10',
      contentTitle: 'Chapter 15 | 나만의 작품을 만들어요(1)',
      contentLists: [
        '만들고 싶은 작품을 구상하고 그 내용을 그림과 글로 표현할 수 있게 됩니다.',
        '배운 개념들을 적용하여 구상한 작품을 만들 방법을 찾을 수 있게 됩니다.',
      ],
      index: 15,
    },
    {
      title: '나만의 작품을 만들어요(2)',
      week: '11',
      contentTitle: 'Chapter 16 | 나만의 작품을 만들어요(2)',
      contentLists: [
        '구상한 내용으로 작품을 만들 수 있게 됩니다.',
        '생각한대로 잘 작동하지 않는 이유를 찾아 고칠 수 있게 됩니다.',
      ],
      index: 16,
    },
    {
      title: '나만의 작품을 만들어요(3)',
      week: '12',
      contentTitle: 'Chapter 17 | 나만의 작품을 만들어요(3)',
      contentLists: [
        '만든 작품을 공유하고 친구들의 작품에 좋은 의견을 줄 수 있게 됩니다.',
        '친구들의 의견을 반영하여 따라 작품을 개선할 수 있게 됩니다.',
      ],
      index: 17,
      isLast: true,
    },
  ],
  intermediate: [
    {
      title: '사전 준비',
      week: '0',
      contentTitle: 'Chapter 1 | 사전 준비',
      contentLists: [
        '어떤 작품을 만들게 될지 알게 됩니다.',
        '교육 방법에 대해서 알게 됩니다.',
      ],
      index: 18,
    },
    {
      title: '개발 환경 구성하기',
      week: '1',
      contentTitle: 'Chapter 2 | 개발 환경 구성하기',
      contentLists: [
        'Python을 설치하는 방법에 대해서 알고, Python 개발 환경을 구성하게 됩니다.',
        '가상환경을 설정하고 사용하는 방법에 대해서 알게 됩니다.',
        '코드 에디터를 설치하고 사용하는 방법에 대해서 알게 됩니다.',
        '버전관리 시스템에 대해 배우고 사용하는 방법에 대해서 알게 됩니다.',
        '버전관리 시스템인 Git을 설치하게 됩니다',
        '인터넷 작동 시스템에 대해서 알게 됩니다.',
      ],
      index: 19,
    },
    {
      title: 'Command Line 시작하기',
      week: '2',
      contentTitle: 'Chapter 3 | Command Line 시작하기',
      contentLists: [
        'Command Line에 대해서 알아봅니다.',
        '자주 사용하는 Command Line 명령을 알게됩니다.',
      ],
      index: 20,
    },
    {
      title: '파이썬 시작하기',
      week: '3',
      contentTitle: 'Chapter 4 | 파이썬 시작하기',
      contentLists: [
        '파이썬에서 사용되는 연산, 자료형, 변수, 함수를 알아봅니다.',
      ],
      index: 21,
    },
    {
      title: '파이썬 더 나아가기',
      week: '4',
      contentTitle: 'Chapter 5 | 파이썬 더 나아가기',
      contentLists: [
        '파이썬에서 사용되는 조건문에 대해서 알아봅니다.',
        '파이썬에서 주석을 다는 법을 알아봅니다.',
        '파이썬에서 사용되는 반복문에 대해서 알아봅니다.',
      ],
      index: 22,
    },
    {
      title: '파이썬에 익숙해지기',
      week: '5',
      contentTitle: 'Chapter 6 | 파이썬에 익숙해지기',
      contentLists: [
        '배운 내용에 익숙해지기 위해서 연습문제를 풀어봅니다.',
        '문제를 해결함으로써 파이썬에 익숙해지게 됩니다.',
        '정보 올림피아드 문제를 풀어보기 시작합니다.',
      ],
      index: 23,
    },
    {
      title: '파이썬을 통한 문제 해결',
      week: '6',
      contentTitle: 'Chapter 7 | 파이썬을 통한 문제 해결',
      contentLists: [
        '파이썬을 통해 알고리즘을 작성하는 방법에 대해 알게 됩니다.',
        '파이썬을 통해 문제 해결하는 방법에 대해 알게 됩니다.',
        '정보 올림피아드 문제을 본격적으로 풀어봅니다.',
      ],
      index: 24,
    },

    {
      title: '파이썬 스크롤링',
      week: '7-8',
      contentTitle: 'Chapter 9 | 파이썬 스크롤',
      contentLists: [
        '웹상에 있는 정보를 실시간으로 가지고 올 수 있는 파이썬 스크롤 기능을 살펴봅니다.',
        '자동화 개념에 대해서 익히고 자동화 프로그램을 만들 수 있는 역량을 기르게 됩니다.',
      ],
      index: 26,
      isLast: true,
    },
    {
      title: '파이썬을 통해 웹페이지 만들기(dJango)',
      week: '9-12',
      contentTitle: 'Chapter 8 | 파이썬을 통해 웹페이지 만들기',
      contentLists: [
        '파이썬 웹 제작 프레임 워크인 Django에 대해서 알아봅니다.',
        'Django설치를 하고 웹페이지를 제작합니다.',
      ],
      index: 25,
    },
  ],
  web: [
    {
      title: '사전 준비',
      week: '0',
      contentTitle: 'Chapter 1 | 사전 준비',
      contentLists: [
        '브라우저에서 페이지가 뜨는 과정에 대해서 알게 됩니다.',
        '웹페이지를 만들기 위한 기술들에 대해서 알게 됩니다.',
      ],
      index: 27,
    },
    {
      title: 'html 배우기',
      week: '1',
      contentTitle: 'Chapter 2 | html 배우기',
      contentLists: [
        '브라우저에서 페이지가 뜨는 과정에 대해서 알게 됩니다.',
        'html의 기본 문법에 대해서 알게 됩니다.',
        'html로 구성된 웹사이트를 만들고 배포까지 해보게 됩니다.',
      ],
      index: 28,
    },
    {
      title: 'css 배우기',
      week: '2',
      contentTitle: 'Chapter 3 | css 배우기',
      contentLists: [
        'css의 기본 문법에 대해서 알게 됩니다.',
        'html과 css를 이용하여 웹사이트를 만들어보고 css의 강력함에 대해 알게 됩니다.',
      ],
      index: 29,
    },
    {
      title: 'javascript 기초',
      week: '3-4',
      contentTitle: 'Chapter 4 | javascript 입문',
      contentLists: ['javascript의 기본 문법에 대해서 알게 됩니다.'],
      index: 30,
    },
    {
      title: 'javascript 고급',
      week: '5-8',
      contentTitle: 'Chapter 5 | javascript 고급',
      contentLists: ['javascript의 고급 문법에 대해서 알게 됩니다.'],
      index: 31,
    },
    {
      title: '웹피이지 제작',
      week: '9-12',
      contentTitle: 'Chapter 6 | 웹페이지 제작',
      contentLists: [
        'Django프레임 워크를 살펴봅니다.',
        'Django, html, css, javascript를 활용하여 유려한 웹앱을 제작합니다.',
      ],
      index: 32,
      isLast: true,
    },
  ],
  interactive: [
    {
      title: '사전 준비',
      week: '0',
      contentTitle: 'Chapter 1 | 사전 준비',
      contentLists: ['자바스크립트의 전반적인 내용에 대해 다룹니다.'],
      index: 33,
    },
    {
      title: '드럼키트만들기 & 시계 만들기',
      week: '1',
      contentTitle: 'Chapter 2 | 드럼 키트 만들기 & 시계 만들기',
      contentLists: [
        'html의 돔 구조에 대해서 익숙해지게 됩니다.',
        '이벤트를 등록하는 방법에 대해서 알게 됩니다.',
        '자바스크립트에서 함수를 정의하고 사용하는 방법에 대해서 이숙해지게 됩니다.',
        '반복문에 대해서 익숙해집니다.',
      ],
      index: 34,
    },
    {
      title: 'CSS변수와 자바스크립트 응용 & 배열 활용',
      week: '2',
      contentTitle: 'Chapter 3 | CSS변수와 자바스크립트 응용',
      contentLists: [
        '돔객체에 속성을 설정하는 방법에 대해서 알아봅니다.',
        '반복문을 통해 쉽게 이벤트를 등록하는 방법에 대해서 알아봅니다.',
        '배열을 다루는 함수에 대해서 알아보고 응용해봅니다.',
      ],
      index: 35,
    },
    {
      title: '갤러리 만들기 & Ajax 응용하기',
      week: '3',
      contentTitle: 'Chapter 4 | 갤러리 만들기 & Ajax 응용하기',
      contentLists: [
        '클래스를 제어하는 것에 대해서 알아봅니다.',
        'Ajax 사용법에 익숙해집니다.',
        '정규표현식을 사용할줄 알게 됩니다.',
      ],
      index: 36,
    },
    {
      title: '개발자 도구 활용 & Shift키를 활용한 다중 선택',
      week: '4',
      contentTitle: 'Chapter 5 | 개발자 도구 활용 & Shift키를 활용한 다중 선택',
      contentLists: [
        '효과적으로 개발자 도구스를 사용하는 방법에 대해서 알게 됩니다.',
        '자바스립트에서 키를 인식하는 방법을 알게 됩니다.',
        '체크 박스를 활용하는 방법에 대해서 알게 됩니다.',
      ],
      index: 37,
    },
    {
      title: '비디오 플레이어 커스텀하기 & 키 입력 감지하기',
      week: '5',
      contentTitle: 'Chapter 6 | 비디오 플레이어 커스텀하기 & 키 입력 감지하기',
      contentLists: [
        'html문서 내에서 영상을 제어하는 방법에 대해서 알게 됩니다.',
        '키 입력을 감지하는 이벤트를 제어할 수 있게 됩니다.',
      ],
      index: 38,
    },
    {
      title: '비디오 플레이어 커스텀하기 & 키 입력 감지하기',
      week: '6',
      contentTitle: 'Chapter 7 | 비디오 플레이어 커스텀하기 & 키 입력 감지하기',
      contentLists: [
        'html문서 내에서 영상을 제어하는 방법에 대해서 알게 됩니다.',
        '키 입력을 감지하는 이벤트를 제어할 수 있게 됩니다.',
      ],
      index: 39,
    },
    {
      title: '스크롤 응용 & 객체와 배열의 차이점 파악하기',
      week: '7',
      contentTitle: 'Chapter 8 | 스크롤 응용 & 객체와 배열의 차이점 파악하기',
      contentLists: [
        '자바스크립트로 스크롤을 제어하는 방법을 알게 됩니다.',
        '객체와 배열의 성격을 파악하고 적재적소에 사용하는 방법을 알게 됩니다.',
      ],
      index: 40,
    },
    {
      title:
        '로컬스토리지와 이벤트 감지 & 마우스 이동에 따른 텍스트 그림자 효과',
      week: '8',
      contentTitle:
        'Chapter 9 | 로컬스토리지와 이벤트 감지 & 마우스 이동에 따른 텍스트 그림자 효과',
      contentLists: [
        '브라우저의 로컬스토리지에 대해서 배우고, 로컬스토리지를 활용할 수 있게 됩니다.',
        '자바스크립트와 CSS를 조합해서 새로운 효과를 만들어 낼 수 있게 됩니다.',
      ],
      index: 41,
    },
    {
      title: '밴드 이름 정렬하기 & reducer함수 활용하기',
      week: '9',
      contentTitle: 'Chapter 10 | 밴드 이름 정렬하기 & redcuer함수 활용하기',
      contentLists: [
        '배열의 정렬 함수인 sort에 대해서 알아보고 활용할 수 있도록 합니다.',
        '배열을 하나로 모아주는 함수인 redcuer에 대해서 알아보고 활용할 수 있도록 합니다.',
      ],
      index: 42,
    },
    {
      title: '가짜 웹캠 만들기 & 원어민 발음으로 글 읽어주도록 하기',
      week: '10',
      contentTitle:
        'Chapter 11 |  가짜 웹캠 만들기 & 원어민 발음으로 글 읽어주도록 하기',
      contentLists: [
        '하드웨어 기기(캠 등)에 접근하는 방법을 알고 제어할 수 있게 됩니다.',
        '브라우저내의 글 읽어 주기 기능을 통해서 원어민 발음으로 글을 들을 수 있게 됩니다.',
      ],
      index: 43,
    },
    {
      title: '비디오 플레이어 커스텀하기',
      week: '11',
      contentTitle: 'Chapter 12 |  비디오 플레이어 커스텀하기',
      contentLists: [
        '웹페이지에 비디오플레이어를 삽입하는 방법을 알게 됩니다.',
        '웹페이지에 삽입 된 비디오 플레이어를 커스텀하는 방법을 알게 됩니다.',
      ],
      index: 44,
    },
    {
      title: '키 시퀀스 디텍션',
      week: '12',
      contentTitle: 'Chapter 13 |  키 시퀀스 디텍션',
      contentLists: [
        '자바스크립트에서 문자열을 다루는 방법을 알게 됩니다.',
        '문자열 찾기를 통해 할 수 있는 기능들을 알아보고 코딩해봅니다.',
      ],
      index: 45,
      isLast: true,
    },
  ],
};
