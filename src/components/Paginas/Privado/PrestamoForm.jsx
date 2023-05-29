import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
//import swal from "sweetalert";

import * as PrestamoServer from "./PrestamoServer";
import PrestamoItem2 from "./PrestamoItem2";

const PrestamoForm = () => {
  // const history = useHistory();
  const params = useParams();

  const initialState = { id: 0, status: "", monto: "", cliente_id: "" };

  const [prestamo, setPrestamo] = useState(initialState);

  const getPrestamo = async (prestamoId) => {
    try {
      const res = await PrestamoServer.getPrestamo(prestamoId);
      const data = await res.json();
      console.log(data);
      const { status, monto, cliente_id } = data.prestamos;
      setPrestamo({ status, monto, cliente_id });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getPrestamo(params.id);
    }
    // eslint-disable-next-line
  }, []);

  const [prestamos, setPrestamos] = useState([]);

  const listPrestamos = async () => {
    try {
      const res = await PrestamoServer.listPrestamos();
      const data = await res.json();
      setPrestamos(data.prestamos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listPrestamos();
  }, []);



  return (
    <div className="row">

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#CECECE',
        zIndex: -1,
      }}></div>



      {prestamos.map((prestamo) => (
        <PrestamoItem2 key={prestamo.id} prestamo={prestamo} listPrestamos={listPrestamos} />
      ))}

    </div>

  );

};


export default PrestamoForm;

/* <maiu>
        <div className="col-md-3 mx-auto">
          <h2 className="mb-3 text-center">Prestamo</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <input type="text" name="status" value={prestamo.status} onChange={handleInputChange} className="form-control" minLength="5" maxLength="15" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Monto</label>
              <input type="text" name="monto" value={prestamo.monto} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Id Cliente</label>
              <input type="text" name="cliente_id" value={prestamo.cliente_id} onChange={handleInputChange} className="form-control" maxLength="100" required />
            </div>
            <div className="d-grid gap-2">
              {params.id ? (
                <button type="submit" className="btn btn-block btn-primary">
                  Modificar
                </button>
              ) : (
                <button type="submit" className="btn btn-block btn-success">
                  Registrar
                </button>
              )}

            </div>
            <script type="text/javascript">
            </script>
          </form>
        </div>
      </maiu> */



        // const handleInputChange = (e) => {
  //   setPrestamo({ ...prestamo, [e.target.name]: e.target.value });
  // };

  // const mostrarAlerta = () => {
  //   swal("Error", "Error en la conexión con la base de datos");
  // }
  // const mostrarAlerta2 = () => {
  //   swal("Error", "Cliente con préstamo activo!");
  // }




       // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res;
  //     if (!params.id) {
  //       res = await PrestamoServer.registerPrestamo(prestamo);
  //       const data = await res.json();
  //       if (data.message === "Success") {
  //         setPrestamo(initialState);
  //         swal("Seccess", "Prestamo registrado!");
  //       } else {
  //         mostrarAlerta2();
  //         history.push("/");
  //       }
  //     } else {
  //       await PrestamoServer.updatePrestamo(params.id, prestamo);
  //       swal("Seccess", "Préstamo actualizado!");
  //     }
  //     history.push("/prestamoList2");
  //   } catch (error) {
  //     //console.log(error);
  //     mostrarAlerta();
  //     history.push("/prestamoList2");
  //   }
  // };