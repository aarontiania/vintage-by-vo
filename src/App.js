import './css/App.css';
import Sale from './sections/sale';
import Footer from './sections/footer';
import Banner from './sections/banner';
import Header from './sections/header-nav';
import Collection from './sections/collection';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Image, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Collection />
      <Sale />
      <Footer />
    </div>
  );
}

export default App;
