import UseFetch from '../../Datos/Datos'
import Card from '../Card/Card';
import styles from './ContenedorContactos.module.css';

export default function ContenedorContactos(){
    const {data, setData} = UseFetch('https://localhost:7076/api/v1/Contactos');


    return (
        
        <div className={styles.contenedor__contactos} >
            {data?.map((contacto) => (
                <Card key={contacto.id} {...contacto} />
            ))}
        </div>
    
        
        )
}

