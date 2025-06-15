import Navbar from "../components/navbar";
import Footer from "../components/footer";


function layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}

export default layout;
