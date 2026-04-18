import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useNavigation } from 'react-router';

function App() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <div>
      <Header />
      {isPageLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="text-xl font-semibold text-primary dark:text-light">
            Loading products...
          </span>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
}

export default App;
