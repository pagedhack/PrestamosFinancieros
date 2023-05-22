
import { Component } from 'react';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
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
                console.log(data.clientes.password);
                cookies.set('id', data.clientes.id, {path: "/"})
                cookies.set('name', data.clientes.name, { path: "/" })
                cookies.set('apellidos', data.clientes.apellidos, { path: "/" })
                cookies.set('fechaNacimiento', data.clientes.fechaNacimiento, { path: "/" })
                cookies.set('name', data.clientes.name, { path: "/" })

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
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="correo"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;