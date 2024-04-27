import eliminarContacto from '../../Datos/EliminarContacto'
import TabButton from '../TabButton/TabButton'

export default function EliminarContactoButton({id}){

    return <>
            <TabButton classNameAction={'Eliminar'} setAction={() => eliminarContacto(`${id}`)}>Eliminar</TabButton>
    </>
}