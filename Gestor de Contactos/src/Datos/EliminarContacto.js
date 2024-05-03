export default function eliminarContacto(id) {
    const url = `https://localhost:7076/api/v1/Contactos?id=${id}`;

    return fetch(url, {
        method: 'DELETE'
    }).then(res => {
        if (!res.ok) {
            throw new Error('Error al Eliminar Contacto');
        }
        console.log('Contacto Eliminado');
        return res.text(); // Asumiendo que no hay cuerpo en la respuesta
    }).catch(err => {
        console.error('Error al eliminar:', err);
        throw err; // Mantener el error propagado
    });
}