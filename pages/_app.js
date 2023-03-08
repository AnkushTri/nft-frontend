import '@/styles/globals.css';

// Internal import
import { Footer, NavBar } from '@/components/componentsindex';


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
  
 

}

export default MyApp;


