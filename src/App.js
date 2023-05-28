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
import Prestamos from './components/Paginas/Privado/Prestamos';
import Referencias from './components/Paginas/Privado/Referencias';

//protegidas


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
                    <Route exact path='/prestamos' component={Prestamos} />
                    <Route exact path='/Referencias' component={Referencias} />
                    {/* protegida-empleado */}


                    {/* default */}
                    <Route exact path='*' component={Error} />

                </Switch>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>

    );
}


export default App;