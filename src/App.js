import "./App.scss";
import BannerSection from "./components/banner/BannerSection";
import Blog from "./components/Blog";
import FilterCarousel from "./components/FilterCarousel";
import FilterSection from "./components/FilterSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MenSection from "./components/menSection/MenSection";
import WomenSection from "./components/WomenSection";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <FilterSection />
      <MenSection />
      <WomenSection />
      <FilterCarousel />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
