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