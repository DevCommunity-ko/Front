// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_ADDR,
});

export default client;
