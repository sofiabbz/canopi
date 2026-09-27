import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Atlas from './pages/Atlas';
import About from './pages/About';
import Biome from './pages/Biome';
import Fauna from './pages/Fauna';
import Flora from './pages/Flora';
import Ecosystems from './pages/Ecosystems';
import SpeciesDetail from './pages/SpeciesDetail';
import EcosystemDetail from './pages/EcosystemDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/:biome" element={<Biome />} />
          <Route path="/:biome/fauna" element={<Fauna />} />
          <Route path="/:biome/fauna/:id" element={<SpeciesDetail />} />
          <Route path="/:biome/flora" element={<Flora />} />
          <Route path="/:biome/flora/:id" element={<SpeciesDetail />} />
          <Route path="/:biome/ecossistemas" element={<Ecosystems />} />
          <Route path="/:biome/ecossistemas/:id" element={<EcosystemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
