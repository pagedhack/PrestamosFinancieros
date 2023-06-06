import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// Components:
import EmpleadoItem from "./EmpleadoItem";

import * as EmpleadoServer from "./EmpleadoServer";

const EmpleadoList = () => {
  const [empleados, setEmpleados] = useState([]);

  const listEmpleados = async () => {
    try {
      const res = await EmpleadoServer.listEmpleados();
      const data = await res.json();
      setEmpleados(data.empleados);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listEmpleados();
  }, []);

  return (
    <>
      <Link to={"/Prestamoformj"}><button className="btn btn-success my-2" >Registrar Prestamo Nuevo</button></Link>
      <Link to={"/prestamoListj"}><button className="btn btn-warning my-2" >Listar Prestamos Disponibles</button></Link>

      <div className="row">
        {empleados.map((empleado) => (
          <EmpleadoItem key={empleado.id} empleado={empleado} listEmpleados={listEmpleados} />
        ))}
      </div>
    </>
  );
};

export default EmpleadoList;