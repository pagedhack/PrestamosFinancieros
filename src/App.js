import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Cookies from 'universal-cookie';

// Componentes
import Navbar from './components/Paginas/Navbar/Navbar';
import NavbarCliente from './components/Paginas/Navbar/NavbarCliente';
// import NavbarEmpleado from './components/Paginas/Navbar/NavbarEmpleado';
import Footer from './components/Paginas/Publico/Footer';
import Error from './components/Paginas/Publico/Error';


//publicas
import Landing from './components/Paginas/Publico/index'
import SimulacionPrestamo from './components/Paginas/Publico/SimulacionPrestamo';
import Contacto from './components/Paginas/Publico/Contacto';
import Registro from './components/Paginas/Publico/Registro';
import Login from './components/Paginas/Publico/Login';

//privadas
import perfil from './components/Paginas/Privado/Perfil';


//prestamo
import PrestamoList from './components/Paginas/Servidor/Prestamos/PrestamoList';
import PrestamoForm from './components/Paginas/Servidor/Prestamos/PrestamoForm';
import RenobarForm from './components/Paginas/Servidor/Prestamos/RenobarForm';

//referencias
import ReferenciaList from './components/Paginas/Servidor/Prestamos/ReferenciaList ';

//pagos


// import Pago from './components/Paginas/Privado/Pago'
import ClienteForm from './components/Paginas/Servidor/Cliente/ClienteForm';
import ClienteList from './components/Paginas/Servidor/Cliente/ClienteList';

//protegidas
import EmpleadoList from './components/Paginas/Servidor/Empleado/EmpleadoList';
import EmpleadoForm from './components/Paginas/Servidor/Empleado/EmpleadoForm';

// Prestamos
import PrestamoListJ from './components/Paginas/Servidor/PrestamoJ/PrestamoList';
import PrestamoFormJ from './components/Paginas/Servidor/PrestamoJ/PrestamoForm';



function App() {


    const cookies = new Cookies();

    return (
        <React.StrictMode>
            <BrowserRouter>
                {
                    !cookies.get('name') ? (
                        <Navbar />
                    ) : (
                        <NavbarCliente />
                    )
                }
                <Switch>
                    {/* publicas */}
                    <Route exact path="/" component={Landing} />
                    <Route exact path='/home' component={Landing} />
                    <Route exact path='/simulacion' component={SimulacionPrestamo} />
                    <Route exact path='/contacto' component={Contacto} />
                    <Route exact path='/registro' component={Registro} />
                    <Route exact path='/login' component={Login} />
                    |
                    {/* privadas-cliente */}
                    <Route exact path='/perfil' component={perfil} />

                    {/* <Route exact path='/prestamos' component={Prestamos} />
                    <Route exact path='/referencias' component={Referencia} />  */}
                     {/* <Route exact path='/Pago' component={Pago} /> */}

                    {/* pablo */}
                    <Route exact path='/prestamoList' component={PrestamoList} />
                    <Route path='/Prestamoform' component={PrestamoForm} />
                    <Route path='/RenobarForm' component={RenobarForm} />
                    <Route exact path='/referenciaList' component={ReferenciaList} />


                    {/* jorge */}
                    <Route exact path='/cliente' component={ClienteForm} />
                    <Route exact path='/listaclientes' component={ClienteList} />
                    <Route path='/updateCliente/:id' component={ClienteForm} />

                    {/* protegida-empleado */}
                    <Route exact path='/empleadoList' component={EmpleadoList} />
                    <Route path='/EmpleadoForm' component={EmpleadoForm} />
                    <Route path='/updateEmpleado/:id' component={EmpleadoForm} />

                    <Route exact path='/prestamoListj' component={PrestamoListJ} />
                    <Route path='/Prestamoformj' component={PrestamoFormJ} />
                    <Route path='/updatePrestamo/:id' component={PrestamoFormJ} />


                    {/* default */}
                    <Route exact path='*' component={Error} />

                </Switch>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>

    );
}


export default App;