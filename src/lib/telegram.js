import config from './config';

export const sendTelegram = (message) =>
  fetch(`https://api.telegram.org/bot${config.telegramToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
      chat_id: config.telegramChatId,
      text: message,
    }),
  });
