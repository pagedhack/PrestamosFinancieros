import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

// Componentes
import Navbar from './components/Paginas/Navbar/Navbar';
import Footer from './components/Paginas/Publico/Footer';
import Error from './components/Paginas/Publico/Error';


//publicas
import Landing from './components/Paginas/Publico/index'
import Prestamos from './components/Paginas/Publico/Prestamos';
import SimulacionPrestamo from './components/Paginas/Publico/SimulacionPrestamo';
import Contacto from './components/Paginas/Publico/Contacto';
import Registro from './components/Paginas/Publico/Registro';
import Login from './components/Paginas/Publico/Login';

//privadas
import perfil from './components/Paginas/Privado/Perfil';

//protegidas
import ClienteList from './components/Paginas/Servidor/Cliente/ClienteList';
import ClienteForm from './components/Paginas/Servidor/Cliente/ClienteForm';


function App() {


    return (
        <React.StrictMode>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    {/* publicas */}
                    <Route exact path="/" component={Landing} />
                    <Route exact path='/home' component={Landing} />
                    <Route exact path='/prestamos' component={Prestamos} />
                    <Route exact path='/simulacion' component={SimulacionPrestamo} />
                    <Route exact path='/contacto' component={Contacto} />
                    <Route path='/registro' component={Registro} />
                    <Route path='/login' component={Login} />

                    {/* privadas-cliente */}
                    <Route path='/perfil' component={perfil} />

                    {/* protegida-empleado */}
                    <Route path='*' component={Error} />

                </Switch>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>

    );
}


export default App;