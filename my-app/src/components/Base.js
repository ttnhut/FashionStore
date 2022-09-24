import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Base;
