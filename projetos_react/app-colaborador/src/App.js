import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 let usuariosList = [
 { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
 { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
 ]
 const [usuarios, setUsuarios] = useState(usuariosList)
 return (
 <div className="App">

<h4>Listagem de usuários</h4>
<table className='table'>
 <thead>
 <tr>
 <th>Index</th><th>Nome</th><th>Email</th><th>Celular</th>
 </tr>
 </thead>
 <tbody>
 {usuarios.length > 0 ? (usuarios.map((o, index) => (
 <tr key={index}>
 <td>{index}</td>
 <td>{o.nome}</td>
 <td>{o.email}</td>
 <td>{o.celular}</td>
 </tr>
 ))) : (
 <tr>
 <td colSpan={3}>Nenhum usuário.</td>
 </tr>
 )}
 </tbody>
</table>
 </div>
 );
}
export default App;