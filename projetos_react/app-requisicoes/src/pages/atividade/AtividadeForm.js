import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
const AtividadeForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setAtividade({ ...props.atividade, [name]: value });
  };
  const statusSelectItems = [
    {label: 'Aberto', value: 'Aberto'},
    {label: 'Em Andamento', value: 'Andamento'},
    {label: 'Concluido', value: 'Concluido'},
    {label: 'Cancelado', value: 'Cancelado'}
];
  return (
    <form>
      <div class="form-group">
        <label>Titulo</label>
        <input
          class="form-control"
          type="text"
          name="titulo"
          value={props.atividade.titulo}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>Descrição</label>
        <input
          class="form-control"
          type="text"
          name="descricao"
          value={props.atividade.descricao}
          onChange={handleInputChange}
        />
      </div>
  <div class="form-group">
        <label>Status</label>
 <br></br>
<Dropdown name="status" value={props.atividade.status} options={statusSelectItems} onChange={handleInputChange} placeholder="Selecionar Status"/>
 
      </div>
      <div class="form-group">
        <label>Prazo</label>
        <br></br>
        <Calendar name="prazo" value={props.atividade.prazo} onChange={handleInputChange}></Calendar>
      </div> 
      <div class="form-group">
        <label>Agenda Inicio</label>
        <br></br>
        <Calendar name="agendaInicio" value={props.atividade.agendaInicio} onChange={handleInputChange}></Calendar>
      </div>
      <div class="form-group">
        <label>Data Hora Termino</label>
        <br></br>
        <Calendar name="dataHoraTermino" value={props.atividade.dataHoraTermino} onChange={handleInputChange}></Calendar>
      </div>
      <br></br>
      <div class="form-group">
        <button
          type="button"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default AtividadeForm;
