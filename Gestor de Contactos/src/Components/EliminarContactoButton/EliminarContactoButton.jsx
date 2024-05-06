import TabButton from '../TabButton/TabButton'
import { useParams } from 'react-router'
import eliminarContacto from '../../Datos/EliminarContacto';
import { NavLink } from 'react-router-dom';
import styles from './ElimincarContacto.module.css'

export default function EliminarContactoButton(){
    const {id} = useParams();
    return <div className={styles.contenedor}>
        <h1 className={styles.h1}>¿Desea eliminar este contacto?</h1>

            <TabButton setAction={() => eliminarContacto(id)} classNameAction={'Eliminar'}> <NavLink className={styles.NavLink} to={'/'}>Eliminar</NavLink> </TabButton>
        
    </div>
}