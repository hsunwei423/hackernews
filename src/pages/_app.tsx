import { AppProps } from 'next/app';
import 'styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  // common css
  return <Component {...pageProps} />;
}
