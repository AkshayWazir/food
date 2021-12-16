import react from "react";
import Top from "./Page1/top";
import Header from "./Page1/Header";
import Modal from "./Page1/Modal";
import Footer from "./Page1/Footer";
import Copyright from "./Page1/Copyright";
import Bookshelve from "./Page1/content/Bookshelve";
import Gap from "./Page1/gap";
import Carousel from "./Page1/carousel";
import Clients from "./Page1/Clients";


function App() {
return (
    <div className="site">
      <Modal/>
      <Header />
      <Gap/>
      <Top />
      <Carousel />
      <Bookshelve />
      <Clients/>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
