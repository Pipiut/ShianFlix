import React from 'react'
import loading from "./loading.gif"

const Loading = () => {
    return (
        <div style={{ display: 'flex', flexDirection: `column`,justifyContent: 'center', alignItems: `center` }}>
            
            <img src={loading} style={{ width: '30vw' }} alt='Cargando...'/>
            <h1 style={{color: `var(--blue)`, fontSize: `25px`, textAlign: `center`}}>NO HAY VIDEOS EN ESTA CATEGORÍA :( <br /><span>AGREGA UNO!</span></h1>
        </div>
    )
}

export default Loading