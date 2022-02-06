import Zoom from 'react-img-zoom'
import { TopPanel } from "./components/topbar/TopPanel";

function App() {
  return (
    <>
  <TopPanel />
    <div style={{width: "100%", height: "100%", background: "black"}}>
  <div><img src={process.env.PUBLIC_URL + '/guitar2.jpg'} alt="guitar banner" /></div>
  <Zoom
  img={process.env.PUBLIC_URL + '/guitar2.jpg'} 
  zoomScale={3}
  width={1120}
  height={396}
/>
  </div>

  </>
  );
}

export default App;
