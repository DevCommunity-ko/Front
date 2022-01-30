const path = require('path');
const { config } = require('dotenv');

config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'development'
      ? './env/.env.development'
      : './env/.env.production'
  ),
});

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_BACKEND_ADDR: process.env.NEXT_BACKEND_ADDR,
    NEXT_NAVER_TOKEN_CID: process.env.NEXT_NAVER_TOKEN_CID,
  },
  reactStrictMode: true,
};
