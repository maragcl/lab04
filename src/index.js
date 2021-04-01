import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App = () => {
  
  const [ contador, setContador ] = useState({
    izquierda: 0,
    centro:0,
    derecha: 0,
  })

  const [ valores, setValores ] = useState([])
  
  const [total, setTotal ] = useState(0)
  const [promedio, setPromedio] = useState(0)
  const [positivo, setPositivo] = useState(0)

  const handleClickIzquierda = () => {
    setContador({
      ...contador,
      izquierda: contador.izquierda + 1,
    })
    setTotal(total+1)
    setPromedio(promedio+0.1)
    setPositivo(((setContador.izquierda + 1)*100)/(total+1))

  }
  const handleClickCentro = () => {
    setContador({
      ...contador,
      centro: contador.centro + 1,
    })
    setTotal(total+1)
    setPromedio(promedio+0.1)
    setPositivo(((setContador.centro + 1)*100)/(total+1))
  }

  const handleClickDer = () => {
    setContador({
      ...contador,
      derecha: contador.derecha + 1,
    })
    setTotal(total+1)
    setPromedio(promedio+0.1)
    setPositivo(((setContador.derecha + 1)*100)/(total+1))
  }

  return (
    <div>
      <p >Feedback</p>
      <button onClick={handleClickIzquierda} >Good</button>
      <button onClick={handleClickCentro} >Neutral</button>
      <button onClick={handleClickDer} >Bad</button>
      <p>Estadisticas</p>
      <p>Bueno {contador.izquierda}</p> 
      <p>Neutral {contador.centro}</p>
      <p>Malo {contador.derecha}</p>
      <p>Total = {total}</p>
      <p>Promedio = {promedio}</p>
      <p>Positivo = {positivo}</p>
      {/* {valores.map((e) => { */}
      {/*   return (<span style={{margin: 8}}>{e}</span>) */}
      {/* })} */}

      {valores.map((e) =>
        <span style={{margin: 8}}>{e}</span>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))