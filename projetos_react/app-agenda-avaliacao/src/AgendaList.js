const AgendaList = (props) => (

    
    <div>
        <h4>Lista de Agendamentos</h4>
        <button onClick={props.onClickAtualizar} className="btn btn-primary btn-sm" type="button">Atualizar Lista</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr> <th>Index</th><th>Usuario</th><th>Status</th><th>Quadra</th><th>Data</th><th>Tempo</th><th>Local</th>
                </tr>
            </thead>
            <tbody>
                {props.agenda.length > 0 ? (props.agenda.map((o, index) => (
                    <tr key={index}>
                        <td>{o._id}</td> <td>{o.usuario}</td> <td>{o.status}</td> <td>{o.quadra}</td> <td>{o.data}</td> <td>{o.tempo}</td> <td>{o.local}</td>
                        <td>
                        <button onClick={() => props.editar(o._id)} className="btn btn-primary btn-sm">Editar</button>
                        <button onClick={() => props.excluir(o._id)} className="btn btn-danger btn-sm">Excluir</button>
                        </td>         
                    </tr>
                ))) : (
                    <tr> <td colSpan={3}>Nenhum Agendamento.</td> </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default AgendaList