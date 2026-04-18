import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
