import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Base = ({ children }) => {
  return (
    <div>
    
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
