import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot, addDoc, doc, deleteDoc} from 'firebase/firestore';


const Formulario = () => {
    const[usuario, setUsuario] = useState('');
    const[nombre, setNombre] = useState('');
    const[telefono, setTelefono] = useState('');
    const[direccion, setDireccion] = useState('');
    const[email, setEmail] = useState('');
    const[listaUsuario, setListaUsuarios] = useState([])

    useEffect(()=>{

        const obtenerDatos = async() => {

        try {
            await onSnapshot(collection(db,'usuarios'),(snapshot)=>{
                setListaUsuarios(snapshot.docs.map((doc) =>({... doc.data(), id:doc.id})))
            });  
        } catch (error){
            console.log(error);
        }

    };
    obtenerDatos();
    }, []);

    const eliminar = async id => {
        try {
          await deleteDoc(doc(db,'usuarios',id))
        } catch (error) {
            console.log(error)
        }
    }

    const guardarUsuario = async(e) =>{
        e.preventDefault()

        try {

           
            const data = await addDoc(collection(db, 'usuarios'),{
                dataUsuario: usuario,
                dataNombre: nombre,
                dataTelefono: telefono,
                dataDireccion: direccion,
                dataEmail: email
            })

            setListaUsuarios([
                ...listaUsuario,
                {dataUsuario:usuario, dataNombre: nombre, dataTelefono: telefono, dataDireccion: direccion, dataEmail: email}
            ])

            setUsuario('')
            setNombre('')
            setTelefono('')
            setDireccion('')
            setEmail('')
            e.target.reset()
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
   <div className='container mt-5'>
        <h1 className='text-center'>CRUD BASICO</h1>
        <hr/>
        <div className='row'>
            <div className='col-8'>
                <h4 className='text-center'>Listado de Usuarios</h4>
                <ul className='list-group'>
                    {
                        listaUsuario.map(item =>(
                            <li className='list-group-item' key={item.id}>
                                <span className='lead'>{item.dataUsuario} - {item.dataNombre} - {item.dataTelefono} - {item.dataDireccion} - {item.dataEmail}</span>
                                <button className='btn btn-danger btn-sm float-end mx-2' onClick={()=>eliminar(item.id)}>Eliminar</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        <div className='col-4'>
        <h4 className='text-center'>
            Agregar Usuarios
        </h4>
        
        <form onSubmit={guardarUsuario}>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Usuario' 
          value={usuario} onChange={(e)=>setUsuario(e.target.value)} required></input>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Nombre' 
          value={nombre} onChange={(e)=>setNombre(e.target.value)} required></input>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Telefono' 
          value={telefono} onChange={(e)=>setTelefono(e.target.value)} required></input>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Direccion' 
          value={direccion} onChange={(e)=>setDireccion(e.target.value)} required></input>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Email' 
          value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
          <button className='btn btn-primary btn-block' type='submit'>Agregar</button>
        </form>
        </div>
    </div>
</div>
  )
}

export default Formulario