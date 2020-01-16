import React from 'react';
import './App.scss';
import Header from './Header/header.jsx';
import Main from './Main/main.jsx';
import Nav from './Nav/nav.jsx';
import Footer from './Footer/footer.jsx';

const App = () => {
    return (
       
        <div className='App'>
            <Header />
            <Main />
            <Nav />
            <Footer />
        </div>
    )
}

export default App;