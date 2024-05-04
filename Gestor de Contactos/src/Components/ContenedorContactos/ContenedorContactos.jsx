import UseFetch from '../../Datos/Datos'
import Card from '../Card/Card';
import styles from './ContenedorContactos.module.css';
import eliminarContacto from '../../Datos/EliminarContacto';


export default function ContenedorContactos(){
    const {data, setData} = UseFetch('https://localhost:7076/api/v1/Contactos');

        const handleEliminar = async (id) => {
        try {
            await eliminarContacto(id);
            const newData = data.filter(contacto => contacto.id !== id);
            setData(newData); 
        } catch (error) {
            console.error('Error al eliminar contacto', error);
        }
    };

    return (
        
        <div className={styles.contenedor__contactos} >
            {data?.map((contacto) => (
                <Card key={contacto.id} {...contacto} onEliminar={handleEliminar}/>
            ))}
        </div>
    
        
        )
}

