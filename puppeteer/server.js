import fs from 'fs';
import path from 'path';
import express from 'express';
import ssr from './ssr.js';

const app = express();
const PORT = process.env.PORT || 3000;
const devHost = 'localhost:9001';

const staticFiles = [
  '/static/*',
  '/asset-manifest.json',
  '/manifest.json',
  '/service-worker.js'
];

staticFiles.forEach(file => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../build', req.url);
    res.sendFile(filePath);
  });
});

app.get('*', async (req, res, next) => {
  const html = await ssr(`${req.protocol}://${devHost}${req.url}`);
  return res.status(200).send(html);
});

app.listen(PORT);
