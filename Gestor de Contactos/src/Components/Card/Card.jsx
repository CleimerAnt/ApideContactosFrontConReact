import styles from './Card.module.css'
import TabButton from '../TabButton/TabButton'
import EliminarContactoButton from '../EliminarContactoButton/EliminarContactoButton'

export default function Card({nombre,id,apellido,telefono,direccion,descripcion,imgUrl}){

    return(
        <div className={styles.card}>
            <div className={styles.contenedorImg}>
                <img src={imgUrl}></img>
            </div>

            <div>
                <h2 className={`${styles.titulo} ${styles.bold}`}>{nombre}</h2>
                {apellido ? <p>  <span className={styles.bold}> Apellido: </span> {apellido}</p> : ''}
                <p> <span className={styles.bold}> Contacto: </span> {telefono}</p>
                <p> <span className={styles.bold}> Direccion: </span> {direccion}</p>
                <p> <span className={styles.bold}> Descripcion: </span> {descripcion}</p>

                <div className={styles.contenedorBotones}>

                    <EliminarContactoButton id={`${id}`}/>

                    <TabButton classNameAction={'Editar'}>Editar</TabButton>
                </div>
            </div>

        </div>
    
    )
}