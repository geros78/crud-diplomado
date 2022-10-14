import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot, addDoc } from 'firebase/firestore';


const Formulario = () => {
    const[fruta, setFruta] = useState('');
    const[descripcion, setDescription] = useState('');
    const[listaFrutas, setListaFrutas] = useState([])

    const guardarFrutas = async(e) =>{
        e.preventDefault()

        try {

            const nuevaFruta ={
                nombreFruta: fruta,
                nombreDescripcion: descripcion
            }

            await addDoc(collection(db, 'frutas'),{
                frutas:nuevaFruta 
            })
            setListaFrutas([
                ...listaFrutas,
                {nombreFruta:fruta, nombreDescripcion:descripcion}
            ])
            
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
                <h4 className='text-center'>Listado de Frutas</h4>
                <ul className='list-group'>

                </ul>
            </div>
        <div className='col-4'>
        <h4 className='text-center'>
            Agregar Frutas
        </h4>
        
        <form onSubmit={guardarFrutas}>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Fruta' 
          value={fruta} onChange={(e)=>setFruta(e.target.value)}></input>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Descripcion' 
          value={descripcion} onChange={(e)=>setDescription(e.target.value)}></input>
          <button className='btn btn-primary btn-block' type='submit'>Agregar</button>
        </form>
        </div>
    </div>
</div>
  )
}

export default Formulario