import './global.css'
import React from 'react';
import AppNavigation from './src/navigation';
import 'fast-text-encoding';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {Buffer} from 'buffer';
import { PrivyProvider } from '@privy-io/expo';

global.Buffer = Buffer;

function App(): React.JSX.Element {

  return (
    <PrivyProvider appId='cm83cua1o00jz7u2d8tkzmsqu' clientId='client-WY5hqT4XnBnZmk5uZzMDAv7VjLDac9sJLFPDDU74ryka2'>
      <AppNavigation />
    </PrivyProvider>
  );
}

export default App;
