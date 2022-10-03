import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

// Amplify
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure({
  ...config,
  ssr: true
})

// Components
import AppBar from '../components/AppBar'

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AppBar/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;