import React, { useState } from "react";
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import { useForm, Controller } from 'react-hook-form';
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
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => {
    props.salvar();  
  
}

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <div className="card">
        <h5>Cadastro de atividades</h5>
        <div className="p-fluid grid formgrid">

        <div className="field col-12 md:col-4">
              <label htmlFor="titulo">Titulo</label>
              <InputText id="titulo" defaultValue={props.atividade.titulo}
              {...register("titulo", { 
                required: {value:true, message:"O titulo é obrigatório."},
                minLength:{value:2, message:"O titulo deve ter pelo menos 2 caractres"},
                 maxLength:{value:50, message:"O titulo de ter no máximo 50 caracteres"}})}
                onChange={handleInputChange} />
                {errors.titulo && <span style={{color:'red'}}>{errors.titulo.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.atividade.descricao}
               {...register("descricao", { 
                required: {value:false, message:"A descricao é obrigatória."}})}
                onChange={handleInputChange} />
                   {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
            <label htmlFor="status">Status</label>
            <Dropdown name="status" value={props.atividade.status} options={statusSelectItems}  placeholder="Selecionar Status"
             {...register("status", { 
              required: {value:false, message:"O status é obrigatória."}})}
            onChange={handleInputChange} />
                 {errors.status && <span style={{color:'red'}}>{errors.status.message}</span>}
          </div>

          <div className="field col-6 md:col-4">
            <label htmlFor="prazo">Prazo</label>
            <Calendar name="prazo"value={props.atividade.prazo}  placeholder="Informe o Prazo"
             {...register("prazo", { 
              required: {value:false, message:"A Data é obrigatória."}})}
              onChange={handleInputChange}></Calendar>
                 {errors.prazo && <span style={{color:'red'}}>{errors.prazo.message}</span>}
          </div>

          <div className="field col-6 md:col-4">
            <label htmlFor="agendaInicio">Data</label>
            <Calendar name="agendaInicio"value={props.atividade.agendaInicio}  placeholder="Informe o Inicio"
             {...register("agendaInicio", { 
              required: {value:false, message:"A Data é obrigatória."}})}
              onChange={handleInputChange}></Calendar>
                 {errors.agendaInicio && <span style={{color:'red'}}>{errors.dataagendaInicioora.message}</span>}
          </div>

            <div className="field col-6 md:col-4">
            <label htmlFor="dataHoraTermino">Data</label>
            <Calendar name="dataHoraTermino"value={props.atividade.dataHoraTermino}  placeholder="Informe o Termino"
             {...register("dataHoraTermino", { 
              required: {value:false, message:"A Data é obrigatória."}})}
              onChange={handleInputChange}></Calendar>
                 {errors.dataHoraTermino && <span style={{color:'red'}}>{errors.dataHoraTermino.message}</span>}
          </div>

        </div>
        <p></p>
      </div>    

      <div className="container d-flex justify-content-center">
          <Button label="Salvar" className="p-button-raised p-button-success p-button-text" type="submit"/>
         <Button label="Cancelar" className="p-button-raised p-button-danger p-button-text"  onClick={props.cancelar} />
</div>
    </div>

  </form>
);
};
export default AtividadeForm;
