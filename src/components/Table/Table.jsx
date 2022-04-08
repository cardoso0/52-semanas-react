import { useState, useEffect } from 'react'
import * as S from './TableStyled'

export const Table = () => {

  const [show, setShow] = useState(false)
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

  const calculo = (e) => {
    e.preventDefault()
    if (input) {
      setDeposito(input)
      valorGuardado()
      setGuardar(guardadoArr)
    }
    setInput('')
    setShow(true)
  }

  return (
    <S.Main>
      <S.Form onSubmit={calculo}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value.replace(',', '.'))}
          autoFocus='on'
        />
        <button type="submit" >Calcular</button>
      </S.Form>
      {show &&
        <S.Table>
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
                <td>{(day * deposito).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{guardar[index].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      }
    </S.Main>
  )
}