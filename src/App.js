import { TopPanel } from "./components/topbar/TopPanel";
import { LandingPage } from "./components/content/LandingPage";
import { CarouselComponent } from './components/carousel/Carousel';
import { Route, Routes, useLocation } from 'react-router';
import { DisplayGuitar } from './components/guitars/displayguitars/DisplayGuitar';
import { guitars } from './objects/guitars'
import { ShowGuitar } from "./components/guitars/displayguitars/showguitar/ShowGuitar";

function App() {
  let location = useLocation();
  return (
    <div className="wrapper">
  <TopPanel />
  <CarouselComponent />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    {guitars.map(el => {
      let goToPath = `guitar/${el.type}/${el.short}`;
      console.log(19, goToPath);
      return <Route path={goToPath} element={<ShowGuitar guitar={el.short} />} />
    })}
    <Route path="guitar/acoustic" element={<DisplayGuitar chosenType="acoustic" />} />
    <Route path="guitar/hollow" element={<DisplayGuitar chosenType="hollow" />} />
    <Route path="guitar/solid" element={<DisplayGuitar chosenType="solid" />} />
    <Route path="guitar" element={<DisplayGuitar chosenType="all" />} />
    <Route path="bass/acoustic" element={<LandingPage />} />
    <Route path="bass/hollow" element={<LandingPage />} />
    <Route path="bass/solid" element={<LandingPage />} />
    <Route path="bass" element={<LandingPage />} />
    <Route path="amplifiers/strong" element={<LandingPage />} />
    <Route path="amplifiers/medium" element={<LandingPage />} />
    <Route path="amplifiers/weak" element={<LandingPage />} />
    <Route path="amplifiers" element={<LandingPage />} />
  </Routes>
  </div>
  );
}

export default App;
