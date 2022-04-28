import logo from './logo.svg';
import './App.css';
import AgendaList from './AgendaList.js';
import AgendaForm from './AgendaForm.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AgendaSrv from './services/AgendaSrv.js';
import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
function App() {
  const toastRef = useRef();
  const [agendas, setAgendas] = useState([]);
  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);
  const onClickAtualizar = async () => {
    AgendaSrv.listar().then(resp => {
      setAgendas(resp.data);
      console.log(resp.data);
    }).catch(err => {
      console.log("erro: " + err.message);
    });
  };
  const initialState = { id: null, nome: '', data: '', status: '' }
  const [agenda, setAgenda] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setAgenda(initialState);
    setEditando(true);
  }
const salvar = () => {
    if (agenda._id == null) { // inclussão
      AgendaSrv.incluir(agenda).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    } else { // alteração
      AgendaSrv.alterar(agenda).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    }
 }
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }

  const editar = (id) => {
    setAgenda(agendas.filter((agenda) => agenda._id == id)[0]);
    setEditando(true);
    
  }
  const excluir = (_id) => {
    AgendaSrv.excluir(_id).then(response => {
      onClickAtualizar();
      toastRef.current.show({
        severity: 'success',
        summary: "Excluído", life: 2000
      });
    })
      .catch(e => {
        toastRef.current.show({
          severity: 'error',
          summary: e.message, life: 4000
        });
      });
  }

  if (!editando) {
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <AgendaList agendas={agendas} onClickAtualizar={onClickAtualizar}
          inserir={inserir} editar={editar} excluir={excluir} />
      </div>
    )
  } else {
    <Toast ref={toastRef} />
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <AgendaForm agenda={agenda} setAgenda={setAgenda} salvar={salvar} cancelar={cancelar} />
      </div>
    )
  }
}

export default App;