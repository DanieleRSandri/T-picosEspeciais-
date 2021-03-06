import React, { useState } from "react";
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm, Controller } from 'react-hook-form';

const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setColaborador({ ...props.colaborador, [id]: value });
  };

  const [contraSenha, setContraSenha] = useState();

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha. 
    //console.log("S: "+senha+" CS: "+contraSenha);
    if(props.colaborador.senha !== contraSenha){
      setError('senha', { type: 'custom', message: 'Senha e contra senha diferentes.' });
    } else {
      props.salvar(); 
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de colaboradores</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="nome">Nome</label>
              <InputText id="nome" defaultValue={props.colaborador.nome}
              {...register("nome", { 
                required: {value:true, message:"O nome é obrigatório."},
                minLength:{value:2, message:"O nome deve ter pelo menos 2 caractres"},
                 maxLength:{value:50, message:"O nome de ter no máximo 50 caracteres"}})}
                onChange={handleInputChange} />
                {errors.nome && <span style={{color:'red'}}>{errors.nome.message}</span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="email">Email</label>
              <InputText id="email" defaultValue={props.colaborador.email}
               {...register("email", { 
                required: {value:true, message:"O email é obrigatória."}})}
                onChange={handleInputChange} />
                   {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="senha">Senha</label>
              <InputText type={'password'}   id="senha" 
                {...register("senha", { 
                  required: {value:true, message:"A senha é obrigatório."},
                  minLength:{value:4, message:"A senha deve ter pelo menos 4 caractres"},
                   maxLength:{value:10, message:"A senha de ter no máximo 10 caracteres"}
                  })}                 
                onChange={handleInputChange} 
                defaultValue={props.colaborador.senha} 
                />
               {errors.senha && <span style={{color:'red'}}>{errors.senha.message}</span>}   
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="contraSenha">Contra Senha</label>
              <Password id="contraSenha" defaultValue={contraSenha}
                onChange={e => setContraSenha(e.target.value)} toggleMask />
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
export default ColaboradorForm;
