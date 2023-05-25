
import { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import styled from "styled-components";
import * as ClienteServer from '../Servidor/Cliente/ClienteServer';
// import * as ClienteServer from '../Servidor/Cliente/EmpleadoServer';

const cookies = new Cookies();

class Login extends Component {

    state = {
        form: {
            correo: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    iniciarSesion = async () => {
        const respuesta = await ClienteServer.getClienteByCorreo(this.state.form.correo);
        const data = await respuesta.json();
        console.log(data);
        if (data.message === "Seccess") {
            if (data.clientes.password === this.state.form.password) {
                cookies.set('id', data.clientes.id, { path: "/" })
                cookies.set('name', data.clientes.name, { path: "/" })
                cookies.set('apellidos', data.clientes.apellidos, { path: "/" })
                cookies.set('fechaNacimiento', data.clientes.fechaNacimiento, { path: "/" })
                cookies.set('correo', data.clientes.correo, { path: "/" })
                cookies.set('rfc', data.clientes.rfc, { path: "/" })
                cookies.set('telefono', data.clientes.telefono, { path: "/" })
                window.location.href = "../Perfil"
            }
            else {
                Swal.fire("Error", "Contraseña invalida", 'error');
            }
        }
        else {
            Swal.fire("Error", "Correo invalido", 'error');

        }

    }

    componentDidMount() {
        if (cookies.get('name')) {
            window.location.href = "../Navbar";
        }
    }

    render() {
        return (
            <>
            <EstiloLogin>
                <div class="container">

                    <form class="form-signin">
                        <h2 class="form-signin-heading">Login</h2>

                        <input
                            type="text"
                            className="input-block-level"
                            name='correo'
                            placeholder="Correo Electronico"
                            onChange={this.handleChange}
                        />

                        <input
                            type="password"
                            className="input-block-level"
                            name='password'
                            placeholder="Password"
                            onChange={this.handleChange}
                        />

                        <button className="btn btn-large btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                        <Link to={"/Registro"}><button className="btn btn-large btn-primary">Registro</button></Link>

                    </form>

                </div >
                </EstiloLogin>
            </>

        );
    }
}

export default Login;

const EstiloLogin = styled.body`
body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
      }

      .form-signin {
        max-width: 300px;
        padding: 19px 29px 29px;
        margin: 0 auto 20px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
                box-shadow: 0 1px 2px rgba(0,0,0,.05);
      }
      .form-signin .form-signin-heading,
      .form-signin .checkbox {
        margin-bottom: 10px;
      }
      .form-signin input[type="text"],
      .form-signin input[type="password"] {
        font-size: 16px;
        height: auto;
        margin-bottom: 15px;
        padding: 7px 9px;
      }
`