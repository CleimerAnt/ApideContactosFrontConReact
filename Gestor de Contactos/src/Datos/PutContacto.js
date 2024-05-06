function updateResource(id, data) {
    const apiUrl = `https://localhost:7076/api/v1/Contactos?id=${id}`

    fetch(apiUrl, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data) 
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        }
        throw new Error('Error al Hacer la Solicitud');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export default updateResource;