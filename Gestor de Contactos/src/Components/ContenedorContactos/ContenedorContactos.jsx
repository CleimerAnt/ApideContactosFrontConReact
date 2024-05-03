import UseFetch from '../../Datos/Datos'
import Card from '../Card/Card';
import styles from './ContenedorContactos.module.css';
import eliminarContacto from '../../Datos/EliminarContacto';

export default function ContenedorContactos(){
    const {data, setData} = UseFetch('https://localhost:7076/api/v1/Contactos');

      // Función para manejar la eliminación
        const handleEliminar = async (id) => {
        try {
            await eliminarContacto(id);
            const newData = data.filter(contacto => contacto.id !== id);
            setData(newData); // Actualiza el estado sin recargar la página
        } catch (error) {
            console.error('Error al eliminar contacto', error);
        }
    };


    return (
        <div className={styles.contenedor__contactos}>
            {data?.map((contacto) => (<>
                <Card {...contacto} onEliminar={handleEliminar}/>
            </>))}
        </div>
        )
}

