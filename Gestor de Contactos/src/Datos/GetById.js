import { useState, useEffect } from "react";

function GetById(apiUrl, id) {
    const urlWithId = `${apiUrl}/${id}`;
    // Añadir estado de carga y de error
    const [datos, setDatos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);  // Inicia la carga
        const fetchData = async () => {
            try {
                const res = await fetch(urlWithId);
                const json = await res.json();
                setDatos(json);
                setIsLoading(false);  // Finaliza la carga
                setError(null);       // Resetea cualquier error previo
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError("Error fetching data");  // Configura el mensaje de error
                setIsLoading(false);  // Finaliza la carga incluso si hay error
                setDatos(null);        // Puedes elegir limpiar los datos aquí
            }
        };

        fetchData();
    }, [apiUrl, id]); // Agregar apiUrl e id como dependencias para refrescar la llamada cuando cambien

    return { datos, isLoading, error, setDatos };
}

export default GetById;
