import { AppProps } from 'next/app';
import './global.scss';


const CustomApp = ({Component, pageProps}: AppProps) => {
   return <Component  { ...pageProps } />
}

export default CustomApp;