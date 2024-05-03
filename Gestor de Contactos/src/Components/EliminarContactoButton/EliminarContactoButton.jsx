import eliminarContacto from '../../Datos/EliminarContacto'
import TabButton from '../TabButton/TabButton'

export default function EliminarContactoButton({id, onEliminar}){

    return <>
            <TabButton classNameAction={'Eliminar'} setAction={onEliminar}>Eliminar</TabButton>
    </>
}