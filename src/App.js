import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import { MessageProvider } from './MessageContext';
import './App.css';

function App() {
  return (
    <MessageProvider>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Footer />
      </Router>
    </MessageProvider>
  );
}

export default App;
