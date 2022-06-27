import "./App.scss";
import BannerSection from "./components/banner/BannerSection";
import Blog from "./components/Blog";
import FilterCarousel from "./components/FilterCarousel";
import FilterSection from "./components/FilterSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MenSection from "./components/MenSection";
import WomenSection from "./components/WomenSection";

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
