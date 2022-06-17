import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title='부산코딩스쿨 - 부산코딩교육'
        description='초중고 대상의 부산코딩교육을 진행합니다. 현직 프로그래머들이 빠르게 변화하는 트렌드를 전하며, 미래를 선도하는 인재를 양성합니다. 사직동, 서면, 센텀, 화명동에서 교육을 진행하고 있습니다. '
        canonical='https://busancodingschool.vercel.app'
        openGraph={{
          url: 'https://busancodingschool.vercel.app',
          title: '부산코딩스쿨 - 부산코딩교육',
          description:
            '초중고 대상의 부산코딩교육을 진행합니다. 현직 프로그래머들이 빠르게 변화하는 트렌드를 전하며, 미래를 선도하는 인재를 양성합니다. 사직동, 서면, 센텀, 화명동에서 교육을 진행하고 있습니다. ',
          images: [
            {
              url: 'https://busancodingschool.vercel.app/coding_kids_background.jpg',
              width: 800,
              height: 600,
              alt: '부산코딩스쿨',
              type: 'image/jpeg',
            },
          ],
          site_name: '부산코딩스쿨',
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
