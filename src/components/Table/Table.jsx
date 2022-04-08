import { useState, useEffect } from 'react'
import * as C from './TableStyled'

export const Table = () => {

  const [input, setInput] = useState('')
  const [deposito, setDeposito] = useState(0)
  const [guardar, setGuardar] = useState([])

  let guardado = 0
  let guardadoArr = []
  let daysWeek = []
  for (let i = 1; i <= 52; i++) {
    daysWeek.push(i)
  }

  const valorGuardado = () => {
    daysWeek.forEach(item => {
      let deposito = input * item
      let guardar = guardado += deposito
      guardadoArr.push(guardar)
    })
  }

  // const handleInput = event => {
  //   setInput(event.target.value)
  // }

  const calculo = (e) => {
    e.preventDefault()
    if (input) {
      setDeposito(input)
      valorGuardado()
      setGuardar(guardadoArr)
      
    }
    setInput('')
  }
  
  return (
    <div>
      <form onSubmit={calculo}>
        <input type="number" name="valor" id="valor" value={input} onChange={e => setInput(e.target.value)} autoFocus='on' />
        <button type="submit" >Calcular</button>
      </form>
        <C.Table>
          <thead>
            <tr>
              <td>Semana</td>
              <td>Depositar</td>
              <td>Guardado</td>
            </tr>
          </thead>
          <tbody>
            {daysWeek.map((day, index) => (
              <tr key={index}>
                <td>{day}</td>
                <td>{(day * deposito)}</td>
                <td>{guardar[index]}</td>
              </tr>
            ))}
          </tbody>
        </C.Table>
    </div>
  )
}