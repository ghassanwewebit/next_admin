// import '../styles/adminStyle/adminlte.min.css'
// import './../public/plugins/fontawesome-free/css/all.min.css'
// import '../styles/adminStyle/adminError.css'
// import "primereact/resources/primereact.min.css";                  //core css
// import "primeicons/primeicons.css"; 
// import dynamic from 'next/dynamic';
// dynamic(()=>import('../styles/adminStyle/adminlte.min.css'))
// dynamic(()=>import('./../public/plugins/fontawesome-free/css/all.min.css'))
// dynamic(()=>import('../styles/adminStyle/adminError.css'))
// dynamic(()=>import('primereact/resources/primereact.min.css'))
// dynamic(()=>import('primeicons/primeicons.css'))

import { Provider } from 'react-redux'
import store  from './../admin/store/index'

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>)
}

export default MyApp
