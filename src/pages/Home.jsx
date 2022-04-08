import { Link } from "react-router-dom"
import { Menu } from "../components/Menu/Menu"
import tabelaImg from '../img/tabela52semanas.png'
import * as C from './HomeStyled'

export const Home = () => {

  return (
    <C.Main>
      <Menu />
      <h1>Desafio 52 Semanas</h1>
      <C.Section>
        <div className="imgBlock">
          <C.Image src={tabelaImg} alt="Tabela do desafio 52 semanas" />
        </div>
        <C.Article>
          <div className="content">
            <h3>O que é o desafio 52 semanas para poupar dinheiro?</h3>
            <p>Como o próprio nome já diz, o desafio estimula a economia semanal
              de certa quantia, durante um ano.<br/><br/>
              A proposta original é começar a
              primeira semana guardando R$1, na segunda semana R$ 2, na terceira
              semana R$ 3 e assim por diante, até chegar à semana 52 poupando R$ 52.<br/><br/>
              No final do período, caso o plano seja seguido corretamente, você terá
              guardado a quantia de R$1.378!
            </p>
          </div>
          <div className="card">
            <p>Faça sua simulação em nossa calculadora.</p>
            <button><Link to="/desafio">Clique Aqui!</Link></button>
          </div>
        </C.Article>
      </C.Section>
    </C.Main>
  )
}