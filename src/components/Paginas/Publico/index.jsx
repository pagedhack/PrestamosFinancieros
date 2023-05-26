
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";



export default function Landing() {

    async function ValorMxn(event) {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "MFa0fqbUfAs1bcMUsd3CsjsnbPklRdf2");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR,JPY,RUB&base=MXN", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (!data.rates) {
                    Swal.fire('503', 'Service Unavailable', 'error');
                } else {
                    var dolar = event.target.value * data.rates.USD;
                    var euro = event.target.value * data.rates.EUR;
                    var yen = event.target.value * data.rates.JPY;
                    var rub = event.target.value * data.rates.RUB;
                    document.getElementById('USD0').value = dolar.toFixed(3);
                    document.getElementById('EUR0').value = euro.toFixed(3);
                    document.getElementById('YEN0').value = yen.toFixed(3);
                    document.getElementById('RUB0').value = rub.toFixed(3);
                }
            })
            .catch(error => Swal.fire('502', 'Bad Gateway', 'error'));
    }

    async function ValorUsd(event) {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "MFa0fqbUfAs1bcMUsd3CsjsnbPklRdf2");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=MXN,EUR,JPY,RUB&base=USD", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (!data.rates) {
                    Swal.fire('503', 'Service Unavailable', 'error');
                } else {
                    var peso = event.target.value * data.rates.MXN;
                    var euro = event.target.value * data.rates.EUR;
                    var yen = event.target.value * data.rates.JPY;
                    var rub = event.target.value * data.rates.RUB;
                    document.getElementById('MXN1').value = peso.toFixed(3);
                    document.getElementById('EUR1').value = euro.toFixed(3);
                    document.getElementById('YEN1').value = yen.toFixed(3);
                    document.getElementById('RUB1').value = rub.toFixed(3);
                }
            })
            .catch(error => Swal.fire('502', 'Bad Gateway', 'error'));
    }


    return (
        <Estilob>
            <div id='todo'>

                <div className='contenedor'>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={1}
                            src='https://mdbootstrap.com/img/Photos/Slides/img%20(28).jpg'
                            alt='...'
                        >
                            <div id='visual'>
                                <h2><b><span>¿Tienes sueños de viajar a otro pais?</span></b></h2>
                                <p id='texto'>pero no tienes el capital necesario para hacerlo realidad?</p>
                                <p id='texto'>Cumpla sus sueños con nosotros. . .</p>
                                <Link to={"/Registro"}><button id='b' type="button" class="btn btn-primary">Registrese</button></Link>
                            </div>
                        </MDBCarouselItem>

                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={2}
                            src='https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg'
                            alt='...'
                        >
                            <div id='visual'>
                                <h2><b><span>Vivir experiencias extremas con tus amigos</span></b></h2>
                                <p id='texto'>pero ninguno puede sacar prestamos disponibles</p>
                                <Link to={"/Registro"}><button id='b' type="button" class="btn btn-primary">Registrese</button></Link>

                            </div>
                        </MDBCarouselItem>

                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={3}
                            src='https://mdbootstrap.com/img/Photos/Slides/img%20(29).jpg'
                            alt='...'
                        >
                            <div id='visual'>
                                <h2 id='blanco'><b><span>Tener la casa de tus sueños</span></b></h2>
                                <p id='texto'>aunque sabes que estaria en problemas con los bancos por disponibilidad</p>
                                <Link to={"/Registro"}><button id='b' type="button" class="btn btn-primary">Registrese</button></Link>

                            </div>
                        </MDBCarouselItem>

                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={4}
                            src='https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg'
                            alt='...'
                        >
                            <div id='visual'>
                                <h2><b><span>O simplemente realizar un momento especial con alguna persona</span></b></h2>
                                <p id='texto'>No importa lo que te propongas, nosotros te ayudamos a cumplirlo. . .</p>
                                <Link to={"/Registro"}><button id='b' type="button" class="btn btn-primary">Registrese</button></Link>
                            </div>
                        </MDBCarouselItem>
                    </MDBCarousel>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>


                </div>


                <div id='conversores'>

                    <div id='ConversorPeso'>
                        <h1 id='titulo'>Conversor de Divisas <h2 id='moneda'>MXN</h2></h1>
                        <div id="divisa">
                            <div id="nombre">Valor en MXN</div>
                            <input className="valor" type="number" defaultValue={1} step="0.50" onChange={ValorMxn} />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Dólares</div>
                            <input className="valor" id='USD0' type="number" defaultValue={1} disabled />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Euros</div>
                            <input className="valor" id='EUR0' type="number" defaultValue={1} disabled />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Yenes</div>
                            <input className="valor" id='YEN0' type="number" defaultValue={1} disabled />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Rublo</div>
                            <input className="valor" id='RUB0' type="number" defaultValue={1} disabled />
                        </div>

                    </div>

                    <div id='ConversorDolar'>
                        <h1 id='titulo'>Conversor de Divisas <h2 id='moneda'>USD</h2></h1>
                        <div id="divisa">
                            <div id="nombre">Valor en USD</div>
                            <input className="valor" type="number" defaultValue={1} step="0.50" onChange={ValorUsd} />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Peso Mexicano</div>
                            <input className="valor" id='MXN1' type="number" defaultValue={1} onChange={ValorUsd} disabled />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Euros</div>
                            <input className="valor" id='EUR1' type="number" defaultValue={1} onChange={ValorUsd} disabled />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Yenes</div>
                            <input className="valor" id='YEN1' type="number" defaultValue={1} onChange={ValorUsd} disabled />
                        </div>

                        <div id="divisa">
                            <div id="nombre">Rublo</div>
                            <input className="valor" id='RUB1' type="number" defaultValue={1} onChange={ValorUsd} disabled />
                        </div>

                    </div>

                </div>

            </div>

        </Estilob>

    );
}


const Estilob = styled.body`

#visual{
    background: rgb(238,174,202);
    background: linear-gradient(190deg, rgba(238,174,202,1) 0%, rgba(0,0,0,0.654499299719888) 7%);
    border-radius: 50px;
    width: 500px;
    border: 1px solid #000;
}

#b{
    border-radius: 30px;
    height: 15 px;
}

#botones{
    background-color: blue;
    color: #FFF;
    border-radius: 20px;
    overflow: hidden;
}

#contenedor {
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 2px 7px #b70c0c;
    overflow: hidden;
    width: 500px;
    height: 300px;
    max-width: 100%;
    margin-left: 80PX;
    margin-top: 3rem;
    text-align: center;
    display: flex;
    vertical-align: top;
    float: left;
    flex-wrap: wrap;
    margin-bottom: 60px;
    flex-direction: row;
    p{
        margin: 1rem;
        margin-top: 2rem;
    }
}

#texto{
    margin: 1rem;
}


#conversores{
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 2px 5px black;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 95%;
    display: flex;
    vertical-align: top;
    flex-wrap: wrap;
    margin-bottom: 60px;
    flex-direction: row;
}

#ConversorPeso{
    background: #FFF;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    overflow: hidden;
    box-shadow: 0 5px 5px #980000;
    box-sizing: auto;
    width: 400px;
}

#ConversorDolar{
    background: #FFF;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    overflow: hidden;
    box-shadow: 0 5px 5px #980000;
    box-sizing: auto;
    width: 400px;
}

#divisa {
    margin-top: 1rem;
    margin: 2rem;
    display: grid;                    /* cuadrícula */
    grid-template-columns: 50% 50%;   /* 2 columnas iguales */
    margin-bottom: 15px;
    background: rgb(37, 169, 209); 
    color: white;
    margin-bottom: 3rem;
}

#titulo{
    margin: 1rem;
    h2{
        text-align: center;
    }
}

#nombre{
    padding: 5px;
    font-size: 16px;
    align-self: center;  /* alinear elemento al centro en altura */
    text-align: center;  /* alinear texto al centro en ancho */
}

.valor{
    padding: 5px;
    font-size: 16px;
    align-self: center;  /* alinear elemento al centro en altura */
    text-align: center;  /* alinear texto al centro en ancho */
}

input:disabled{
    color: black;
    background-color: white !important;
}

`