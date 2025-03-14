// Import required polyfills first
import 'fast-text-encoding';
import 'react-native-get-random-values';
import '@ethersproject/shims';
// Then import the expo router
import 'expo-router/entry';
import {Buffer} from 'buffer';
global.Buffer = Buffer;
import "./global.css";