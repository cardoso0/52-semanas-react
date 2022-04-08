import { Menu } from "../components/Menu/Menu"
import { Table } from "../components/Table/Table"
import * as C from './ChallengeStyled'

export const Challenge = () => {

  return (
    <C.Main>
      <Menu />
      <h1>Faça sua simulação</h1>
      <h3>Informe o valor inicial do desafio.</h3>
      <Table />
    </C.Main>
  )
}