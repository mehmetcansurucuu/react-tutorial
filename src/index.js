import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <Content />
        <Footer />
    </>
);
