import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/scss/index.scss'
import FormNhanVien from './ReactFormRedux/FormNhanVien';
//redux
import { Provider } from 'react-redux';
import { stote } from './redux/configStote';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={stote} >

        <FormNhanVien />
      
    </Provider>

);
// npx i @reduxjs/toolkit
// npx i react-redux
// npx create-react-app