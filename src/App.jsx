import HeroSection from "./components/HeroSection";
import RecomendedCourse from "./components/Courses";
import WorkSection from "./components/WorkSection";
import Topbar from "./components/topbar/Topbar";
import Internship from "./components/Internship";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <main>
      <Topbar />
      <HeroSection />
      <WorkSection />
      <RecomendedCourse />
      <Internship />
      <Footer />
      <WhatsappButton />
    </main>
  );
}

export default App;
