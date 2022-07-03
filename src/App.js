import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from './Componentes/telaLogin/TelaLogin';
import TelaCadastro from './Componentes/telaCadastro/TelaCadastro.js'
import UserContext from './Componentes/contexts/UseContext';
import TelaInicial from './Componentes/telaInicial/TelaInicial';
import TelaMovimentacao from './Componentes/telaMovimentacao/TelaMovimentacao';

function App() {

  const [token, setToken] = useState(null);
  const [dadosUsuario, setDadosUsuario] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ token, setToken, dadosUsuario, setDadosUsuario }}>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path='/sign-up' element={<TelaCadastro />} />
            <Route path='/home' element={ <TelaInicial />} />
            <Route path='/movimentacao/entrada' element={<TelaMovimentacao type={"Entrada"} />} />
            <Route path='/movimentacao/saida' element={<TelaMovimentacao type={"Saida"} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
        
    </div>
  );
}

export default App;
