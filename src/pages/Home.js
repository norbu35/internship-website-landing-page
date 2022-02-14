import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import SelectionProcess from "../components/SelectionProcess/SelectionProcess";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SelectionProcess />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
