import react from "react";
import Top from "./top";
import Header from "./Header";
import Modal from "./Modal";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Bookshelve from "./content/Bookshelve";
import Gap from "./gap";
import Carousel from "./carousel";
import Clients from "./Clients";


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
