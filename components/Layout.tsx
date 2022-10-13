import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="h-full bg-blue bg-stars flex-row justify-center py-10 ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
