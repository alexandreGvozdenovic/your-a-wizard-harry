import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-blue bg-stars flex flex-col py-10 min-h-screen relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
