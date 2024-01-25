import React from 'react'
import "./Login.css"
import { useState } from 'react'
const Login = ({setUser}) => {
  
  const [usuario,setUsuario] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(usuario === "" || password === "" ){
        setError(true)
        return
    }
    setError(false)
    setUser([usuario])
  }
    return (
    <section>
        <h1>Fitnet Force</h1>
        <div className='conteiner'>
            <form className='login-form'
            onSubmit={handleSubmit}>
                <h2>Iniciar Sesion</h2>
                <label>Usuario:</label>
                <input type="text" 
                value={usuario}
                onChange={e =>setUsuario(e.target.value)} />
                <label>Contrasena:</label>
                <input type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
                <button type='submit'>Iniciar Sesion</button>
            </form>
            {error && <p className='p'>Todos los campos son obligatorios</p>}
        </div>
            

        
    </section>
  )
}

export default Login