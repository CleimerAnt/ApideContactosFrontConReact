export default function eliminarContacto(Id){

    const url = `https://localhost:7076/api/v1/Contactos?id=${Id}`
    
    fetch(url, {
        method: 'DELETE'
    })
    .then((res) => {
        if(res.ok)
        {
            console.log('Contacto Eliminado')
            return res.json()
        }
        throw new Error('Error al Eliminar Contacto')
    })
    .then(data => {
        console.log('Respuesta del Servidor', data) 
    })
    .then(err => {console.log('Error', err)})
    
    }