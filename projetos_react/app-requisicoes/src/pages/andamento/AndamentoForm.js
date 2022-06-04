import React from "react";
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
const AndamentoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setAndamento({ ...props.andamento, [name]: value });
  };
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
 
      props.salvar();     
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Andamentos</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">Titulo</label>
              <InputText id="titulo" defaultValue={props.andamento.titulo}
              {...register("titulo", { 
                required: {value:true, message:"O titulo é obrigatório."},
                minLength:{value:2, message:"O titulo deve ter pelo menos 2 caractres"},
                 maxLength:{value:50, message:"O titulo de ter no máximo 50 caracteres"}})}
                onChange={handleInputChange} />
                {errors.titulo && <span style={{color:'red'}}>{errors.titulo.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.andamento.descricao}
               {...register("descricao", { 
                required: {value:false, message:"A descricao é obrigatória."}})}
                onChange={handleInputChange} />
                   {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}
            </div>


            <div className="field col-6 md:col-4">
            <label htmlFor="dataHora">Data</label>
            <Calendar name="dataHora"value={props.andamento.dataHora}  placeholder="Informe a Data"
             {...register("dataHora", { 
              required: {value:false, message:"A Data é obrigatória."}})}
              onChange={handleInputChange}></Calendar>
                 {errors.dataHora && <span style={{color:'red'}}>{errors.dataHora.message}</span>}
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
export default AndamentoForm;
