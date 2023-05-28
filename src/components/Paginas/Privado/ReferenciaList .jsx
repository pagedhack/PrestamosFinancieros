import React, { useEffect, useState } from "react";

// Components:
import ReferenciaItem from "./Referencias";

import * as ReferenciaServer from "../Servidor/Cliente/ReferenciaServer";

const ReferenciaList = () => {
  const [referencias, setReferencias] = useState([]);

  const listReferencias = async () => {
    try {
      const res = await ReferenciaServer.listReferencias();
      const data = await res.json();
      setReferencias(data.referencias);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listReferencias();
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


      {referencias.map((referencia) => (
        <ReferenciaItem key={referencia.id} referencia={referencia} listReferencias={listReferencias} />
      ))}
    </div>
  );
};

export default ReferenciaList;