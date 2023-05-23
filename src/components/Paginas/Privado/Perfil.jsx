
import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBListGroup,
  MDBListGroupItem,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function ProfilePage({ cliente }) {

  const [basicActive, setActive] = useState('rPerfil');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) return;
    window.scrollTo(0, 0)
    setActive(value);
  }

  console.log('name' + cookies.get('correo'));

  // console.log(cookies);


  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>

          {/* opciones */}

          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <br></br>
                <MDBCardImage
                  src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p></p>
                <p className="text-muted mb-1">Correo</p>
                <p className="text-muted mb-4"></p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">

                <MDBListGroup style={{ minWidth: '22rem' }} light>

                  {/* opcion de perfil */}
                  <MDBTabs>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBCardText>Perfil</MDBCardText>
                    </MDBListGroupItem>

                    <MDBListGroupItem action active={basicActive === 'rPerfil'} noBorders className='px-3'>
                      <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('rPerfil')}>Revisar Perfil</MDBTabsLink>
                      </MDBTabsItem>
                    </MDBListGroupItem>

                    <MDBListGroupItem action active={basicActive === 'ePerfil'} noBorders className='px-3'>
                      <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('ePerfil')}>Editar Perfil</MDBTabsLink>
                      </MDBTabsItem>
                    </MDBListGroupItem>

                    <MDBListGroupItem action active={basicActive === 'eCuenta'} noBorders className='px-3'>
                      <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('eCuenta')}>Editar Cuenta</MDBTabsLink>
                      </MDBTabsItem>
                    </MDBListGroupItem>
                  </MDBTabs>

                  {/* opcion de cuenta */}
                  <MDBTabs>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBCardText>Cuenta</MDBCardText>
                    </MDBListGroupItem>

                    <MDBListGroupItem action active={basicActive === 'pActivos'} noBorders className='px-3'>
                      <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('pActivos')}>Prestamos Activos</MDBTabsLink>
                      </MDBTabsItem>
                    </MDBListGroupItem>

                    <MDBListGroupItem action active={basicActive === 'eBuro'} noBorders className='px-3'>
                      <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('eBuro')}>Estatus de Buro</MDBTabsLink>
                      </MDBTabsItem>
                    </MDBListGroupItem>

                    <MDBListGroupItem action active={basicActive === 'sPrestamo'} noBorders className='px-3'>
                      <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('sPrestamo')}>Situacion de Prestamos</MDBTabsLink>
                      </MDBTabsItem>
                    </MDBListGroupItem>

                  </MDBTabs>

                </MDBListGroup>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

          {/* contenido */}
          <MDBCol lg="8">
            {/* contenido perfil */}
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === 'rPerfil'}>
                <MDBCard className="mb-4">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText>Perfil</MDBCardText>
                  </MDBListGroupItem>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Nombre</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{cookies.get('name')}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Apellidos</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{cookies.get('apellidos')}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Fecha de Nacimiento</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{cookies.get('fechaNacimiento')}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>RFC</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{cookies.get('rfc')}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Correo</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{cookies.get('correo')}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Telefono</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{cookies.get('fechaNacimiento')}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText>Cuenta</MDBCardText>
                  </MDBListGroupItem>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Nombre</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">************</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Apellidos</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">*********</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Fecha de Nacimiento</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">*********</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>RFC</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">*************</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

              </MDBTabsPane>

              <MDBTabsPane show={basicActive === 'ePerfil'}>
                <MDBCard className="mb-4">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText>Perfil</MDBCardText>
                  </MDBListGroupItem>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Nombre</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Apellidos</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Fecha de Nacimiento</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>RFC</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Correo</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Telefono</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Contraseña</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" class="btn btn-outline-primary ms-1">Guardar</button>
                  <button type="button" class="btn btn-outline-primary ms-1">Cancelar</button>
                </div>
              </MDBTabsPane>

              <MDBTabsPane show={basicActive === 'eCuenta'}>
                <MDBCard className="mb-4">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText>Cuenta</MDBCardText>
                  </MDBListGroupItem>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Nombre</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Apellidos</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Fecha de Nacimiento</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>RFC</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <input type="text-muted" />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" class="btn btn-outline-primary ms-1">Guardar</button>
                  <button type="button" class="btn btn-outline-primary ms-1">Cancelar</button>
                </div>
              </MDBTabsPane>

            </MDBTabsContent>

            {/* Contenido cuenta */}
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === 'pActivos'}>
              </MDBTabsPane>

              <MDBTabsPane show={basicActive === 'eBuro'}>

              </MDBTabsPane>

              <MDBTabsPane show={basicActive === 'sPrestamos'}>

              </MDBTabsPane>
            </MDBTabsContent>



            {/* <MDBRow>
  //             <MDBCol md="6">
  //               <MDBCard className="mb-4 mb-md-0">
  //                 <MDBCardBody>
  //                   <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
  //                   <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={80} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={72} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={89} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={55} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={66} valuemin={0} valuemax={100} />
  //                   </MDBProgress>
  //                 </MDBCardBody>
  //               </MDBCard>
  //             </MDBCol>

  //             <MDBCol md="6">
  //               <MDBCard className="mb-4 mb-md-0">
  //                 <MDBCardBody>
  //                   <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
  //                   <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={80} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={72} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={89} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={55} valuemin={0} valuemax={100} />
  //                   </MDBProgress>

  //                   <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
  //                   <MDBProgress className="rounded">
  //                     <MDBProgressBar width={66} valuemin={0} valuemax={100} />
  //                   </MDBProgress>
  //                 </MDBCardBody>
  //               </MDBCard>
  //             </MDBCol>
  //           </MDBRow> */}

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}