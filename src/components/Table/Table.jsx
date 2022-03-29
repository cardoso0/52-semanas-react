import { useState, useEffect } from 'react'
import * as C from './TableStyled'

export const Table = () => {

  const [deposito, setDeposito] = useState()
  const [guardar, setGuardar] = useState()
  const [guardado, setGuardado] = useState()

  useEffect(() => {
    setGuardado(guardar += deposito)
  }, [guardar, deposito])

  let daysWeek = []
  for(let i = 1; i <= 52; i++) {
    daysWeek.push(i)
  }

  const calculo = e => {
    e.preventDefault()
    setDeposito(e.target.valor.value)
    // setGuardar(guardado += deposito)
    console.log(e.target.valor.value)
  }

  return (
    <div>
      <form onSubmit={calculo}>
        <input type="text" name="valor" id="valor" />
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
              <td>{guardado}</td>
            </tr>
          ))}
        </tbody>
      </C.Table>
    </div>
  )
}