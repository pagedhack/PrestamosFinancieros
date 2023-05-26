
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
            window.location.href = "../Perfil"
        }
    }

    render() {
        return (
            <>
                <EstiloLogin>
                    <div id='principal'>
                        <div className="col-md-3 mx-auto">
                            <h2 className="mb-3 text-center" id="textRegistro"><span>Login</span></h2>
                            <p className='text-center'>Despues de registrarte, inicia sesion para comprobar tus credenciales</p>
                            <div className="containerSecundario">
                                <div className="form-group">
                                    <label>Email: </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="correo"
                                        placeholder='Email'
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <label>Contraseña: </label>
                                    <br />
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder='password'
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>

                                    <div id='registro'>
                                        <div className='contenido'>
                                            <p>No cuenta con ninguna cuenta aun?</p>
                                            <Link to={"/Registro"}><button className="btn btn-block btn-primary">Registrarse</button></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

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

#principal{
    margin: 5rem;
    #registro{
        box-shadow: 0 2px 5px black;
        border-radius: 10px;
        margin-top: 2rem;
    }
    .contenido{
        top: 10px;
            margin-top: 1rem;
            padding: 15px;
        }
}

.containerPrincipal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid blue;
    padding: 40px;
    background-color: white;
  }
  
.containerSecundario{
    text-align: center;
  }
`