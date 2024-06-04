import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ children, onSearch }) => {
  return (
    <>
    
      <main><div>
      <Header onSearch={onSearch} />
        {children}
      <Footer /></div></main>
    </>
  );
};

export default Layout;
