import React from 'react'
const AgendaForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setAgenda({ ...props.agenda, [name]: value })
    }
    return (
        <form>
            <div class="form-group">
                <label>Id</label>
                <input class="form-control" type="text" name="_id" readOnly
                    value={props.agenda._id} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Usuario</label>
                <input class="form-control" type="text" name="usuario"
                    value={props.agenda.usuario} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Status</label>
                <select class="form-control" type="text" name="status"
                    value={props.agenda.status} onChange={handleInputChange}>
                    <option value="Pendente">Selecione um...</option>
                    <option value="Agendado">Agendado</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Disponivel">Disponivel</option>
                </select>
            </div>
            <div class="form-group">
                <label>Quadra</label>
                <input class="form-control" type="text" name="quadra"
                    value={props.agenda.quadra} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Data</label>
                <input class="form-control" type="datetime-local" name="data"
                    value={props.agenda.data} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Tempo</label>
                <input class="form-control" type="text" name="tempo"
                    value={props.agenda.tempo} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Local</label>
                <input class="form-control" type="text" name="local"
                    value={props.agenda.local} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <button type="button" onClick={props.salvar}
                    className="btn btn-primary btn-sm">Salvar</button>
                <button type="button" onClick={props.cancelar}
                    className="btn btn-primary btn-sm">Cancelar</button>
            </div>
        </form>
    )
}
export default AgendaForm