import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from './Componentes/telaLogin/TelaLogin';
import TelaCadastro from './Componentes/telaCadastro/TelaCadastro.js'
import UserContext from './Componentes/contexts/UseContext';
import TelaInicial from './Componentes/telaInicial/TelaInicial';

function App() {

  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ token, setToken }}>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path='/sign-up' element={<TelaCadastro />} />
            <Route path='/home' element={ <TelaInicial />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
        
    </div>
  );
}

export default App;
