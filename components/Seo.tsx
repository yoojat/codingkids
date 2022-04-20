import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 부산코딩스쿨</title>
      ) : (
        <title>부산코딩스쿨 - 부산코딩학원</title>
      )}
    </Head>
  );
}
