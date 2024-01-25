import Login from './Componentes/Login'
import Home from './Componentes/Home';
import { useState } from 'react';
function App() {
  
  const [user, setUser] = useState([])
  
  return (
    <div className="App">
      
      <Login setUser={setUser}/>
      
      
    </div>
  );
}

export default App;
