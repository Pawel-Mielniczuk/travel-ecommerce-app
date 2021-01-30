import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

const App = () => (
    <Router>
        <Header/>
        <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductDetails} />
        </Container>
        </main>
      <Footer/>
    </Router>
)

export default App;
