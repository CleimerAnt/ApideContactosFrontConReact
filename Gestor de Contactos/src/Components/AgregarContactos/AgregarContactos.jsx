import { json, useParams } from 'react-router'
import styles from './AgregarContactos.module.css'
import {useForm} from 'react-hook-form'
import PostContacto from '../../Datos/PostContacto'
import GetById from '../../Datos/GetById'
import { useEffect } from 'react'
import updateResource from '../../Datos/PutContacto'


export default function AgregarContacto({isEditing}){
    const url =  'https://localhost:7076/api/v1/Contactos';

    const {id} = useParams();

    if(id !== null && id !== undefined){
        isEditing = true;
    }

    const {register, handleSubmit, formState:{errors}, watch, reset} = useForm()
    
    if(isEditing === true)
    {
        const {datos} = GetById(url,id)
        useEffect(() => {
            if (datos) {
                reset({
                    nombre: datos.nombre,
                    apellido: datos.apellido,
                    telefono: datos.telefono,
                    direccion: datos.direccion,
                    descripcion: datos.descripcion,
                    imgUrl: datos.imgUrl
                });
            }
        }, [datos, reset]);
    }

    const onSubmit = handleSubmit((data) => {
        if(isEditing == true)
        {
        updateResource(id,data)
        isEditing == false
        reset()
        }
        else{
        PostContacto(url, data);
        reset()
        }
    })

    return <>
    <form onSubmit={onSubmit} className={styles.formulario}>
        <input type="text" placeholder='Nombre'
        {...register('nombre', {required:
            {
                value: true,
                message: 'El Campo Nombre es Requerido'
            },
            minLength : {
                value: 3,
                message: "Debe Ingresar mas de 3 Caracteres"
            },
            maxLength : {
                value: 20,
                message: "Debe Ingresar menos de 15 Caracteres"
            }
        })}
        
        />
        {
            errors.nombre && <span className={styles.validacion}>{errors.nombre.message}</span>
        }

<input type="text" placeholder='Apellido'
        {...register('apellido', {required:
            {
                value: true,
                message: 'El Campo Apellido es Requerido'
            },
            minLength : {
                value: 3,
                message: "Debe Ingresar mas de 3 Caracteres"
            },
            maxLength : {
                value: 20,
                message: "Debe Ingresar menos de 15 Caracteres"
            }
        })}
        
        />
        {
            errors.apellido && <span className={styles.validacion}>{errors.apellido.message}</span>
        }

<input type="text" placeholder='Telefono'
        {...register('telefono', {required:
            {
                value: true,
                message: 'El Campo Telefono es Requerido'
            },
            minLength : {
                value: 12,
                message: "Debe Ingresar 12 Caracteres"
            }
        })}
        
        />
        {
            errors.telefono && <span className={styles.validacion}>{errors.telefono.message}</span>
        }

        
<input type="text" placeholder='Direccion'
        {...register('direccion', {required:
            {
                value: true,
                message: 'El Campo Direccion es Requerido'
            },
            minLength : {
                value: 10,
                message: "Debe Ingresar al Menos 10 Caracteres"
            }
        })}
        
        />
        {
            errors.direccion && <span className={styles.validacion}>{errors.direccion.message}</span>
        }

<input type="text" placeholder='Descripcion'
        {...register('descripcion', {required:
            {
                value: true,
                message: 'El Campo Descripcion es Requerido'
            },
            minLength : {
                value: 10,
                message: "Debe Ingresar al Menos 10 Caracteres"
            }
        })}
        
        />
        {
            errors.descripcion && <span className={styles.validacion}>{errors.descripcion.message}</span>
        }

<input type="text" placeholder='ImgUrl'
        {...register('imgUrl', {required:
            {
                value: true,
                message: 'El Campo Imagen es Requerido'
            }
        })}
        
        />
        {
            errors.imgUrl && <span className={styles.validacion}>{errors.imgUrl.message}</span>
        }

        <div className={styles.boton}>
            <button type='submit'>Enviar</button>
        </div>
    
    </form>
    </>
}