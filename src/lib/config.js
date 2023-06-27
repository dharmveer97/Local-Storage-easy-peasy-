const config = {
  debug: process.env.NODE_ENV === 'development',
  siteName: 'Test',
  siteUrl: 'https://www.test.com',
  instagram: 'https://www.instagram.com/my-site',
  facebook: 'https://www.facebook.com/my-site',
  twitter: 'https://twitter.com/my-site',
  pinterest: 'https://pinterest.com/',
  themeColor: '#384aeb',
  address: '491 Brimley Rd #16',
  telephone: '+3131313123',
  email: 'test@hotmail.com',
  projectKey: 'test-test',
  telegramToken: process.env.TELEGRAM_TOKEN,
  telegramChatId: process.env.TELEGRAM_CHAT_ID,
  currency: '$',
  taxPercentage: 13,
  locationUrl: '',
};

export default config;
