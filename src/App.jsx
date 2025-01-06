import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
// import Washes2025 from './pages/WASHES/Washes2025';
// import Washes2026 from './pages/WASHES/Washes2026';
import EdicoesAnteriores from './pages/EdicoesAnteriores';
import DataWashes from './pages/DataWashes';
// import Washes2024 from './pages/WASHES/Washes2024';
import {Washes2024, Washes2025, Washes2026} from "../src/pages/WASHES/index"

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-14">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/washes-2016" element={<Washes2024/>} />
          <Route path="/washes-2017" element={<Washes2024/>} />
          <Route path="/washes-2018" element={<Washes2024/>} />
          <Route path="/washes-2019" element={<Washes2024/>} />
          <Route path="/washes-2020" element={<Washes2024/>} />
          <Route path="/washes-2021" element={<Washes2024/>} />
          <Route path="/washes-2022" element={<Washes2024/>} />
          <Route path="/washes-2023" element={<Washes2024/>} />
          <Route path="/washes-2024" element={<Washes2024/>} />
          <Route path="/washes-2025" element={<Washes2025/>} />
          <Route path="/washes-2026" element={<Washes2026/>} />
          <Route path="/edicoes-anteriores" element={<EdicoesAnteriores />} />
          <Route path="/datawashes" element={<DataWashes />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
