const API_URL = "http://127.0.0.1:8000/api/referencias";

export const listReferencias = async () => {
    return await fetch(API_URL);
};

export const getReferencia = async (referenciaId) => {
    return await fetch(`${API_URL}${referenciaId}`);
};


// export const registerReferencia= async (newReferencia) => {
//     return await fetch(API_URL,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/jason'
//         },
//         body:JSON.stringify({
//             "status":String(newReferencia.personales_exists).trim(),
//             "monto":String(newReferencia.monto).trim(),
//             "pagos":String(newReferencia.pagos).trim(),
//             "cliente_id":String(newReferencia.cliente_id).trim(),
//         })
//     });
// };

// export const updateReferencia = async (referenciaId, updatedReferencia) => {
//     return await fetch(`${API_URL}${referenciaId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "status": String(updatedReferencia.status).trim(),
//             "monto": String(updatedReferencia.monto).trim(),
//             "pagos": String(updatedReferencia.pagos).trim(),
//             "cliente_id": String(updatedReferencia.cliente_id).trim(),
//         })
//     });
// };

export const deleteReferencia = async (referenciaId) => {
    return await fetch (`${API_URL}${referenciaId}`, {
        method: 'DELETE'
    });
};

