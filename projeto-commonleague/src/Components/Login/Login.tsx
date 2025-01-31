import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {

   // Estados para armazenar as entradas do usuário
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
 
   // Função que é chamada quando o formulário é enviado
   const handleSubmit = (event: { preventDefault: () => void; }) => {
     // Impede que a página seja recarregada
     event.preventDefault();
 
     // Faz o console log das credenciais do usuário
     console.log("Dados de Login:", { username, password });
   };

  return (
    <div>
      <div className="container"></div>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <div>
            <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          </div>
          
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Entrar</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registre-se</a>{" "}
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
