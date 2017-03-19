import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import css from "./styles/index.scss";

render(routes, document.getElementById('app'));