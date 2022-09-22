import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './template/Navbar';
import Header from './template/Header';
import PageContent from './template/PageContent';
import Footer from './template/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar />
        <Header />
        <PageContent />
        <Footer />
    </>
);
