import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Washes2024 from './pages/Washes2024';
import EdicoesAnteriores from './pages/EdicoesAnteriores';
import DataWashes from './pages/DataWashes';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/washes-2024" element={<Washes2024 />} />
          <Route path="/edicoes-anteriores" element={<EdicoesAnteriores />} />
          <Route path="/datawashes" element={<DataWashes />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
