import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 코딩키드</title>
      ) : (
        <title>코드키드 - 부산 초등학생 코딩 수업</title>
      )}
    </Head>
  );
}
