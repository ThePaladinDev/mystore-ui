import { Link, useRouteError } from 'react-router';
import notFoundImg from '../assets/status-images/not-found.png';
import errorImg from '../assets/status-images/error.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
  const error = useRouteError();

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  const contentStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const imgStyle = {
    width: '90vw',
    height: 'auto', // Make height scale naturally with width
    maxWidth: '600px',
    maxHeight: '400px',
    objectFit: 'contain', // Don't distort the image if the box ratio changes
    display: 'block',
    marginBottom: '2rem',
    marginTop: '-3rem',
  };
  const h3Style = {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  };
  const textStyleClass = `text-base text-gray-600 dark:text-lighter mb-4`;
  const linkStyleClass = `text-primary dark:text-light`;

  if (error.status === 404)
    return (
      <div style={containerStyle}>
        <Header />
        <div style={contentStyle}>
          <img src={notFoundImg} alt="Not Found" style={imgStyle} />
          <h3 className={textStyleClass} style={h3Style}>
            Aww...
          </h3>
          <p className={textStyleClass}>
            We can't seem to find the page you are looking for
          </p>
          <Link to="/" className={linkStyleClass}>
            Back Home
          </Link>
        </div>
        <Footer />
      </div>
    );

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <img src={errorImg} alt="Error" style={imgStyle} />
        <h3 className={textStyleClass} style={h3Style}>
          Oops...
        </h3>
        <p className={textStyleClass}>Something went wrong</p>
        <Link to="/" className={linkStyleClass}>
          Back Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
