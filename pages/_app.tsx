import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title='코딩키드'
        description='부산 초등학생 코딩 교육'
        canonical='https://codingkids.vercel.app'
        openGraph={{
          url: 'https://codingkids.vercel.app',
          title: '코딩키드',
          description: '부산 초등학생 코딩 교육',
          images: [
            {
              url: 'https://codingkids.vercel.app/coding_kids_background.jpg',
              width: 800,
              height: 600,
              alt: '코딩키드',
              type: 'image/jpeg',
            },
          ],
          site_name: '코딩키드',
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
