import React from 'react';
// import styles from './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Header } from './shared/Header';

function AppComponent() {
  return (
    <Header/>
  )
};

export const App = hot(AppComponent);