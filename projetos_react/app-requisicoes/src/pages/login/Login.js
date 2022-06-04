import React, { Component } from 'react';

export class Login extends Component {

constructor(props){
	super(props);
	this.state = {
		errorMsg:''
	}

	this.sigin = this.sigin.bind(this);
}

sigin() {
	let email = document.getElementById('email').value;
	let senha = document.getElementById('senha').value;

	fetch('http://localhost:3000/api/usuarios', {
		method:'POST',
		body:JSON.stringify({email, senha})
	})
	.then(r=>r.json())
	.then(json=>{
		this.setState({errorMsg:json.error});

		if(json.error == '' && json.jwt != ''){
			localStorage.setItem('jwt', json.jwt);
			this.props.history.push('/');
			}

		});

}


	render() {
		return (
				<div class="areaGeral">
					<div class="form-area">
						<div class="form-title">
							<h3>Login</h3>
						</div>
			
						<div class="form-inputs">
							<p class="error">{this.state.errorMsg}</p>			
							<label>
								<input type="email" id="email" placeholder="Username"/>
							</label>
							<label>
								<input type="password" id="senha" placeholder="Senha" />
							</label>
							<button onClick={this.sigin}>Sign In</button>
						</div>
					</div>
			</div>

		);
	}

}