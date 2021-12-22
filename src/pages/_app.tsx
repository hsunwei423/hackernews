import { AppProps } from 'next/app';
import { store } from 'store';
import { Provider } from 'react-redux';
import 'styles/global.css';
import 'styles/customize.scss';

export default function App({ Component, pageProps }: AppProps) {
  // common css
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
