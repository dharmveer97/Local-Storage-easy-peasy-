import './globals.css';
import { Suspense } from 'react';
import { Jost } from 'next/font/google';
import config from '../lib/config';
import Loading from '../components/elements/Loading';
import StoreContext from '../components/global/StoreContext';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME ?? config.siteName,
    template: `%s | ${config.siteName}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: {
      url: 'http://www.canvasprintscanada.com/wp-content/uploads/2022/04/fav-icn.png',
      type: 'image/png',
    },
    shortcut: {
      url: 'http://www.canvasprintscanada.com/wp-content/uploads/2022/04/fav-icn.png',
      type: 'image/png',
    },
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE,
      },
    }),
};

const inter = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StoreContext>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </StoreContext>
      </body>
    </html>
  );
}
