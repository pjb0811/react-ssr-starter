import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import Loadable from 'react-loadable';
import cookieParser from 'cookie-parser';
import proxyMiddleware from 'http-proxy-middleware';
import loader from './loader';
import proxies from '../src/lib/proxies';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../build')));

Object.keys(proxies).map(context => {
  app.use(context, proxyMiddleware(proxies[context]));
});

app.use(express.Router().get('*', loader));
app.use(loader);

Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});
