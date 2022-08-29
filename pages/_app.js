import '../styles/adminStyle/adminError.css'
import './../styles/adminStyle/primeReact.css'
import './../public/fontawesome/css/all.min.css'

import './../styles/adminStyle/adminlte.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    
// import dynamic from 'next/dynamic';
// dynamic(()=>import('../styles/adminStyle/adminlte.min.css'))
// dynamic(()=>import('./../public/plugins/fontawesome-free/css/all.min.css'))
// dynamic(()=>import('../styles/adminStyle/adminError.css'))
// dynamic(()=>import('primereact/resources/primereact.min.css'))
// dynamic(()=>import('primeicons/primeicons.css'))

import { Provider } from 'react-redux'
import store  from './../admin/store/index'
import AdminPage from '../admin/layout/adminPage';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <AdminPage>
    <Component {...pageProps} />
    </AdminPage>
    </Provider>)
}

export default MyApp
