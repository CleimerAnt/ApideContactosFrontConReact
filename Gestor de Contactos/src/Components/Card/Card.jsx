import styles from './Card.module.css'
import TabButton from '../TabButton/TabButton'


export default function Card({nombre,id,apellido,telefono,direccion,descripcion,imgUrl}){
function eliminarContacto(Id){
    let id = Id;
const url = `https://localhost:7076/api/v1/Contactos?id=${id}`

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
                    <TabButton classNameAction={'Eliminar'} setAction={() => eliminarContacto(`${id}`)}>Eliminar</TabButton>

                    <TabButton classNameAction={'Editar'}>Editar</TabButton>
                </div>
            </div>

        </div>
    
    )
}