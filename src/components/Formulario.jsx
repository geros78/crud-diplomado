import React, { useState } from 'react'

const Formulario = () => {
    const[fruta, setFruta] = useState('');
    const[descripcion, setDescription] = ('');
    return (
    <div className='container mt-5'>
        <h1 className='text-center'>CRUD BASICO</h1>
        <hr/>
        <form>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Fruta'></input>
          <input className='form-control mb-2' type="text" placeholder='Ingrese Descripcion'></input>
          <button className='btn btn-primary btn-block'>Agregar</button>
        </form>
    </div>
  )
}

export default Formulario